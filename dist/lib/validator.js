var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _GlobalValidator_instances, _GlobalValidator_validatePhoneNumber;
import error_generator from "../helpers/error_generator";
import get_min_max from "../helpers/get_min_max";
import reformat_country_method from "../helpers/reformat_country_method";
import { countriesDetail } from "./countries";
import { validationErrors, } from "./types";
export default class GlobalValidator {
    constructor() {
        _GlobalValidator_instances.add(this);
        // tell if user class method is called internally
        // then save error instead of return boolean
        Object.defineProperty(this, "internal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(this, "methodName", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "phone_number", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "errors", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        const handler = {
            get: (target, prop) => {
                target.methodName = prop;
                if (prop in target) {
                    return target[prop];
                }
                else {
                    return __classPrivateFieldGet(target, _GlobalValidator_instances, "m", _GlobalValidator_validatePhoneNumber).bind(target);
                }
            },
        };
        return new Proxy(this, handler);
    }
    static get config() {
        return Object(this);
    }
    // bulk(tests: ValidationConfig[]) {}
    checkCharacters(value, characters) {
        let allowedCharacters = characters?.join("/");
        if (!allowedCharacters)
            return console.error("GlobalValidator_Validate: invalid allowedCharacters");
        // Logic used here.
        // highest allowed character is 3, where w = alphabets, d - digits, s = whitespace,
        // if 2 fields is provided, the totalFields - provided allowed fields.
        // Then we match the value with the fields that is not provided,
        // so we are only matching with fields that is not included in the allowedCharacters
        let totalAllowedCharacters = ["w", "s", "d", "y"];
        let nonIncludedCharacters = totalAllowedCharacters.filter((t) => !allowedCharacters?.includes(t));
        if (nonIncludedCharacters?.length) {
            const regexMap = {
                w: /[a-zA-Z]/,
                d: /[0-9]/,
                s: /\W/,
                y: /\s/,
            };
            let regex = new RegExp(`[^${nonIncludedCharacters
                .map((field) => regexMap[field].source)
                .join("")}]`);
            if (regex.test(value))
                this.errors.push(error_generator(validationErrors.HasInvalidCharacter));
        }
    }
    has_length(value, len) {
        const [lowest, highest] = get_min_max(len);
        if (value.length < lowest) {
            this.errors.push(error_generator(validationErrors.TooShort));
            return false;
        }
        if (value.length > highest) {
            this.errors.push(error_generator(validationErrors.TooLong));
            return false;
        }
        else
            return true;
    }
    not_include(value, not_include) {
        let notIncludeValue = not_include;
        if (!notIncludeValue) {
            console.error("GlobalValidationError -> notInclude: - field can't be null or undefined");
        }
        // --------------------
        else {
            if (value.includes(notIncludeValue)) {
                this.errors.push(error_generator(validationErrors.IncludeNotAllowedWord));
            }
        }
    }
    has_uppercase(value, minLen) {
        let regex = new RegExp("[A-Z]", "g");
        let upperLetters = value.match(regex)?.length ?? 0;
        if (minLen && typeof minLen === "number") {
            if (minLen > upperLetters) {
                if (!this.internal)
                    return false;
                this.errors.push(error_generator(validationErrors.UpperCaseLettersTooShort));
                return;
            }
        }
        if (this.internal) {
            return upperLetters
                ? true
                : this.errors.push(error_generator(validationErrors.HasNoUpperCase));
        }
        return upperLetters ? true : false;
    }
    has_lowercase(value, minLen) {
        let regex = new RegExp("[a-z]", "g");
        let lowerLetters = value.match(regex)?.length ?? 0;
        if (minLen && typeof minLen === "number") {
            if (minLen > lowerLetters) {
                if (!this.internal)
                    return false;
                this.errors.push(error_generator(validationErrors.LowerCaseLettersTooShort));
                return;
            }
        }
        if (this.internal) {
            return lowerLetters
                ? true
                : this.errors.push(error_generator(validationErrors.HasNoLowerCase));
        }
        return lowerLetters ? true : false;
    }
    has_letter(value, minLen) {
        let error;
        let letters = value.match(/[a-zA-Z]/g)?.length ?? 0;
        if (minLen && typeof minLen === "number") {
            if (minLen > letters) {
                if (!this.internal)
                    return false;
                this.errors.push(error_generator(validationErrors.LettersLengthTooShort));
                return;
            }
        }
        error = error_generator(validationErrors.HasNoLetter);
        if (this.internal) {
            return letters ? true : this.errors.push(error);
        }
        return letters ? true : false;
    }
    has_digit(value, minLen) {
        let error;
        let digits = value.match(/[0-9]/g)?.length ?? 0;
        if (minLen && typeof minLen === "number") {
            if (minLen > digits) {
                if (!this.internal)
                    return false;
                this.errors.push(error_generator(validationErrors.DigitsLengthTooShort));
                return;
            }
        }
        error = error_generator(validationErrors.HasNoDigit);
        if (this.internal) {
            return digits ? true : this.errors.push(error);
        }
        return digits ? true : false;
    }
    has_symbol(value, minLen) {
        let error;
        let symbols = value.match(/[!@#$%^&*()_+\.';:{}]/g)?.length ?? 0;
        if (minLen && typeof minLen === "number") {
            if (minLen > symbols) {
                if (!this.internal)
                    return false;
                this.errors.push(error_generator(validationErrors.SymbolsLengthTooShort));
                return;
            }
        }
        error = error_generator(validationErrors.HasNoSymbol);
        if (this.internal) {
            return symbols ? true : this.errors.push(error);
        }
        return symbols ? true : false;
    }
    checkEnd(value, check, action) {
        // the implementation here is dynamic based on validation action ["endsWith" | "notEndWith"]
        let actionValue = check;
        // get the last characters based on the length of the value provided to the validation action
        // let last = actionValue
        //   ? value.split("").slice(-actionValue.length).join()
        //   : "";
        // dynamically provide condition for the if statement
        let condition = actionValue &&
            (action == "endsWith"
                ? !value.endsWith(actionValue)
                : value.endsWith(actionValue));
        if (condition) {
            let error = action == "endsWith"
                ? "NotEndWithRightCharacter"
                : "EndsWithWrongCharacter";
            this.errors.push(error_generator(validationErrors[error]));
        }
    }
    checkStart(value, check, action) {
        // the implementation here is dynamic based on validation action ["startsWith" | "notStartWith"]
        let actionValue = check;
        // get the
        // let first = actionValue
        //   ? value.split("").slice(0, actionValue.length).join()
        //   : "";
        // dynamically provide condition for the if statement
        let condition = actionValue &&
            (action == "startsWith"
                ? !value.startsWith(actionValue)
                : value.startsWith(actionValue));
        if (condition) {
            let error = action == "startsWith"
                ? "NotStartWithRightCharacter"
                : "StartsWithWrongCharacter";
            this.errors.push(error_generator(validationErrors[error]));
        }
    }
    validate(config) {
        try {
            // let set method to be called internally to save errors
            this.internal = true;
            if (!Boolean(config))
                throw new Error("GlobalValidator: configuration not provided");
            let { value, validations } = config;
            let validationsKeys = Object.keys(validations ?? {});
            if (!value)
                throw new Error("Value must be provided");
            if (!validationsKeys?.length) {
                throw new Error("validation must not be empty");
            }
            validationsKeys.forEach((action) => {
                let actionValue;
                switch (action) {
                    case "allowedCharacters":
                        if (!validations.allowedCharacters?.length)
                            throw new Error("GlobalValidator_Validate: invalid allowedCharacters");
                        this.checkCharacters(value, validations.allowedCharacters);
                        break;
                    case "length":
                        // trim the value to remove invalid characters
                        let rangeValue = validations.length?.trim() ?? "";
                        let isValid = new RegExp(/^(\d*:|:\d*|\d:\d)$/).test(rangeValue);
                        // checking if input_value length is at least greater 1
                        // check of the format of the range value, if it has a colon, number and not alphabet
                        if (!rangeValue || rangeValue.length < 2 || !isValid) {
                            throw new Error("GlobalValidatorError -> length: Invalid range input");
                        }
                        // ----------------------------
                        else
                            this.has_length(value, rangeValue);
                        break;
                    // check if the value doesn't contain the provided value
                    case "notInclude":
                        let notIncludeValue = validations.notInclude;
                        if (!notIncludeValue) {
                            throw new Error("GlobalValidationError -> notInclude: - field can't be null or undefined");
                        }
                        // --------------------
                        else
                            this.not_include(value, notIncludeValue);
                        break;
                    case "uppercase":
                        this.has_uppercase(value);
                        break;
                    case "lowercase":
                        this.has_lowercase(value);
                        break;
                    case "notEndWith":
                    case "endsWith":
                        // the implementation here is dynamic based on validation action ["startsWith" | "notStartWith"]
                        actionValue = validations[action];
                        if (!actionValue) {
                            throw new Error("GlobalValidatorError -> checkEnd: value can't be undefined.");
                        }
                        this.checkEnd(value, validations[action], action);
                        break;
                    case "notStartWith":
                    case "startsWith":
                        // the implementation here is dynamic based on validation action ["startsWith" | "notStartWith"]
                        actionValue = validations[action];
                        if (!actionValue) {
                            throw new Error("GlobalValidatorError -> checkStart: value can't be undefined.");
                        }
                        this.checkStart(value, actionValue, action);
                        break;
                    case "digit":
                        break;
                    case "letter":
                        break;
                    default:
                        break;
                }
            });
            return this.errors.length ? this.errors : true;
        }
        catch (error) {
            console.error(error.message);
            return false;
        }
        finally {
            this.errors = [];
            this.internal = false;
            console.log("Done.");
        }
    }
    // text(
    //   text: string,
    //   config: ValidationConfig["validations"]
    // ): void | boolean | GlobalValidatorError[] {
    //   if (!text)
    //     return console.error(
    //       "GlobalValidatorError -> text: first parameter is required"
    //     );
    //   // if no config is provided, pass the validation
    //   if (!Boolean(config)) return true;
    //   let errors: GlobalValidatorError[] = [];
    //   return errors;
    // }
    password(password, validations) {
        try {
            // tell class that methods will be called internally to store errors to error state
            this.internal = true;
            if (!password) {
                console.error("GlobalValidationError -> Password: password string can't be empty.");
                return;
            }
            if (!Boolean(validations))
                return true;
            let validationKeys = Object.keys(validations);
            validationKeys.forEach((key, index) => {
                let field = validations[key];
                switch (key) {
                    case "lowercase":
                        this.has_lowercase(password, field);
                        break;
                    case "uppercase":
                        this.has_uppercase(password, field);
                        break;
                    case "digit":
                        this.has_digit(password, field);
                        break;
                    case "letter":
                        this.has_letter(password, field);
                        break;
                    case "symbol":
                        this.has_symbol(password, field);
                        break;
                    case "length":
                        // @ts-ignore
                        this.has_length(password, field);
                    default:
                        break;
                }
            });
            if (!validations.whitespace) {
                // check if value doesn't have a whitespace
                let regex = /\s/;
                if (regex.test(password)) {
                    this.errors.push(error_generator(validationErrors.HasInvalidCharacter));
                }
            }
            // let strength = 0;
            // if (validations.length) {
            //   strength =
            //     ((validationKeys.length - this.errors.length) /
            //       (this.has_length(password, validations.length) ? 6 : 5)) *
            //     100;
            // }
            return {
                isValid: this.errors.length ? false : true,
                strength: validationKeys.length
                    ? ((validationKeys.length - this.errors.length) / 6) * 100
                    : 0,
                errors: this.errors,
            };
        }
        catch (error) {
            console.error("GlobalValidatorError -> password: " + error.message);
            return false;
        }
        finally {
            this.internal = false;
            this.errors = [];
        }
    }
    // integer() {}
    phoneNumber(num) {
        if (!num) {
            return console.error("GlobalValidatorError_PhoneNumber: phone number is not provided");
        }
        this.phone_number = num;
        return this;
    }
}
_GlobalValidator_instances = new WeakSet(), _GlobalValidator_validatePhoneNumber = function _GlobalValidator_validatePhoneNumber() {
    if (!this.phone_number)
        return console.error(Error("No phone number is provided"));
    // remove non-digit from country phone number format
    const phone_number = this.phone_number.replace(/\D/g, "");
    // remove Is from method and add space if it is required like IsSouthAfrica after formatting = South Africa
    const countryName = reformat_country_method(this.methodName);
    // get country detail
    let country = countriesDetail[countryName];
    // check if country is found in the available list of countries we have
    if (!country) {
        throw new Error(`method or country validation ${this.methodName} does not exist`);
    }
    let countryDialCode = country.dialCode.substring(1);
    let phone_number_country_code = phone_number.substring(0, 
    // extract to the length of the country code + 1
    countryDialCode.length);
    // Checking the country code if matched, to save further processing...
    if (countryDialCode !== phone_number_country_code) {
        return false;
    }
    let regex = new RegExp(`^${countryDialCode}[0-9]{${country.phoneNumberLength}}$`);
    if (!regex.test(phone_number))
        return false;
    // user might only want to check if the phone_number is equal to
    // length of the targeted country phone numbers length.
    // in this case, the phone number is valid
    // if (onlyLength) return true;
    // continuing to the next phase: means that the user want the number to in the country phone format. e.g +2349045567832 -> +234 904 556 7832
    return true;
};
