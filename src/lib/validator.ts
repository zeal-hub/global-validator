import error_generator from "../helpers/error_generator";
import reformat_country_method from "../helpers/reformat_country_method";
import { countries } from "./countries";
import {
  Country,
  GlobalValidatorError,
  Validations,
  validationErrors,
} from "./types";

type ValidationConfig = {
  value: string;
  validations: Validations;
  all?: boolean;
};

type methods = keyof GlobalValidator;

export default class GlobalValidator {
  methodName: string | undefined;
  phone_number: string | undefined;

  constructor() {
    const handler = {
      get: (target: GlobalValidator, prop: methods) => {
        target.methodName = prop;
        if (prop in target) {
          return target[prop];
        } else {
          return target.#validatePhoneNumber.bind(target);
        }
      },
    };
    return new Proxy(this, handler);
  }

  static get config() {
    return Object(this);
  }

  // bulk(tests: ValidationConfig[]) {}

  validate(config: ValidationConfig): void | boolean | GlobalValidatorError[] {
    if (!Boolean(config))
      return console.error("GlobalValidator: configuration not provided");

    let { value, validations } = config;

    let validationsKeys = Object.keys(
      validations ?? {}
    ) as (keyof Validations)[];

    if (!value) return console.error("Value must be provided");

    if (!validationsKeys?.length) {
      return console.error("validation must not be empty");
    }

    let errors: GlobalValidatorError[] = [];

    validationsKeys.forEach((action) => {
      let regex, actionValue, condition, error: keyof typeof validationErrors;
      switch (action) {
        case "allowedCharacters":
          let allowedCharacters = validations.allowedCharacters?.join("/");

          if (!allowedCharacters)
            return console.error(
              "GlobalValidator_Validate: invalid allowedCharacters"
            );

          // Logic used here.
          // highest allowed character is 3, where w = alphabets, d - digits, s = whitespace,
          // if 2 fields is provided, the totalFields - provided allowed fields.
          // Then we match the value with the fields that is not provided,
          // so we are only matching with fields that is not included in the allowedCharacters

          let totalAllowedCharacters = ["w", "s", "d", "y"];

          let nonIncludedCharacters = totalAllowedCharacters.filter(
            (t) => !allowedCharacters?.includes(t)
          );

          if (nonIncludedCharacters?.length) {
            const regexMap: { [key: string]: RegExp } = {
              w: /[a-zA-Z]/,
              d: /[0-9]/,
              s: /\W/,
              y: /\s/,
            };

            regex = new RegExp(
              `[^${nonIncludedCharacters
                .map((field) => regexMap[field].source)
                .join("")}]`
            );

            if (regex.test(value))
              errors.push(
                error_generator(validationErrors.HasInvalidCharacter)
              );
          }

          break;
        case "length":
          // trim the value to remove invalid characters
          let rangeValue = validations.length?.trim() ?? "";
          let isValid = new RegExp(/^(\d*:|:\d*|\d:\d)$/).test(rangeValue);

          // checking if input_value length is at least greater 1
          // check of the format of the range value, if it has a colon, number and not alphabet
          if (!rangeValue || rangeValue?.length! < 2 || !isValid) {
            console.error(
              "GlobalValidatorError -> length: Invalid range input"
            );
          }

          // ----------------------------
          else {
            let lowest: number = Number.MIN_SAFE_INTEGER,
              highest: number = Number.MAX_SAFE_INTEGER,
              colonIndex = rangeValue.indexOf(":");

            if (colonIndex >= 1) {
              // means there is lowest
              // get the digits before colon
              lowest = parseInt(rangeValue.substring(0, colonIndex));
            }

            if (rangeValue.length > colonIndex + 1) {
              // means that there is highest value
              // get the digits after colon
              highest = parseInt(rangeValue.substring(colonIndex + 1));
            }

            // lowest can't be higher than highest
            if (lowest > highest) {
              console.error(
                `GlobalValidatorError -> length: Invalid range input - lowest length can't be higher that highest length [${highest}]. `
              );
            }

            // ---------------------
            else {
              if (value.length < lowest) {
                errors.push(error_generator(validationErrors.TooShort));
              }

              if (value.length > highest) {
                errors.push(error_generator(validationErrors.TooLong));
              }
            }
          }

          break;

        // check if the value doesn't contain the provided value
        case "notInclude":
          let notIncludeValue = validations.notInclude;

          if (!notIncludeValue) {
            console.error(
              "GlobalValidationError -> notInclude: - field can't be null or undefined"
            );
          }
          // --------------------
          else {
            if (value.includes(notIncludeValue)) {
              errors.push(
                error_generator(validationErrors.IncludeNotAllowedWord)
              );
            }
          }

          break;

        case "uppercase":
          regex = new RegExp("[A-Z]");

          if (!regex.test(value)) {
            errors.push(error_generator(validationErrors.HasNoUpperCase));
          }

          break;
        case "lowercase":
          regex = new RegExp("[a-z]");

          if (!regex.test(value)) {
            errors.push(error_generator(validationErrors.HasNoLowerCase));
          }

          break;
        case "notEndWith":
        case "endsWith":
          // the implementation here is dynamic based on validation action ["endsWith" | "notEndWith"]
          actionValue = validations[action];

          // get the last characters based on the length of the value provided to the validation action
          // let last = actionValue
          //   ? value.split("").slice(-actionValue.length).join()
          //   : "";

          // dynamically provide condition for the if statement
          condition =
            actionValue &&
            (action == "endsWith"
              ? !value.endsWith(actionValue)
              : value.endsWith(actionValue));

          if (condition) {
            error =
              action == "endsWith"
                ? "NotEndWithRightCharacter"
                : "EndsWithWrongCharacter";

            errors.push(error_generator(validationErrors[error]));
          }

          break;
        case "notStartWith":
        case "startsWith":
          // the implementation here is dynamic based on validation action ["startsWith" | "notStartWith"]
          actionValue = validations[action];

          // get the
          // let first = actionValue
          //   ? value.split("").slice(0, actionValue.length).join()
          //   : "";

          // dynamically provide condition for the if statement
          condition =
            actionValue &&
            (action == "startsWith"
              ? !value.startsWith(actionValue)
              : value.startsWith(actionValue));

          if (condition) {
            error =
              action == "startsWith"
                ? "NotStartWithRightCharacter"
                : "StartsWithWrongCharacter";

            errors.push(error_generator(validationErrors[error]));
          }
          break;

        default:
          break;
      }
    });

    return errors.length ? errors : true;
  }

  text(
    text: string,
    config: ValidationConfig["validations"]
  ): void | boolean | GlobalValidatorError[] {
    if (!text)
      return console.error(
        "GlobalValidatorError -> text: first parameter is required"
      );

    // if no config is provided, pass the validation
    if (!Boolean(config)) return true;

    let errors: GlobalValidatorError[] = [];

    return errors;
  }

  password(): void | boolean | GlobalValidatorError[] {}

  integer() {}

  phoneNumber(num: string) {
    if (!num) {
      return console.error(
        "GlobalValidatorError_PhoneNumber: phone number is not provided"
      );
    }

    this.phone_number = num;
    return this;
  }

  #validatePhoneNumber(onlyLength: boolean) {
    if (!this.phone_number)
      return console.error(Error("No phone number is provided"));

    const phone_number = this.phone_number;
    const startsWithPlusSign = phone_number.startsWith("+");

    // remove Is from method and add space if it is required like IsSouthAfrica after formatting = South Africa
    const countryName = reformat_country_method(this.methodName as string);

    let country = countries.find(
      (country) => country.name == countryName
    ) as Country;

    if (!country) {
      throw new Error(
        `method ${this.methodName} does not exist on class GlobalValidator`
      );
    }

    let countryCode = country.phoneFormat.split(" ")[0];
    let phone_number_country_code = phone_number.substring(
      0,
      countryCode.length
    );

    if (startsWithPlusSign) {
      // the both country code must to pass validation

      if (countryCode !== phone_number_country_code) {
        return false;
      }
    }

    if (onlyLength) {
      // removing space from country phone number format
      let phone_number_format_plain = country.phoneFormat.replace(" ", "");
      if (phone_number_format_plain !== phone_number) {
        return false;
      }
    }

    return true;
  }
}
