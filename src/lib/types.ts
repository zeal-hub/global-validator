import { countries } from "./countries";
import GlobalValidator from "./validator";

export enum validationErrorMessages {
  ContainsTextPassword = "The provided value cannot contain letter",
  HasInvalidCharacter = "The provided value has invalid characters",
  HasNoLetter = "The provided value has no letter",
  TooLong = "The provided value length is too long",
  HasNoNumber = "The provided value has no number",
  TooShort = "The provided value length is too short.",
  HasNoLowerCase = "The provided value has no lowercase. e.g abcdef",
  HasNoUpperCase = "The Provided value has no uppercase. e.g ABCDEF",
  HasNoSymbol = "The provided value has no symbol. e.g #$&@*%!^",
  StartsWithWrongCharacter = "The provided value starts with a wrong character",
  EndsWithWrongCharacter = "The provided value ends with wrong character",
  NotStartWithRightCharacter = "The provided value do not start with the right character",
  NotEndWithRightCharacter = "The provided value do not end with the right character",
  IncludeNotAllowedWord = "The provided value includes not allowed word (set of character e.g. password, surname, name)",
}

export enum validationErrors {
  ContainsTextPassword = "ContainsTextPassword",
  HasInvalidCharacter = "HasInvalidCharacter",
  HasNoLetter = "HasNoLetter",
  TooLong = "TooLong",
  HasNoNumber = "HasNoNumber",
  TooShort = "TooShort",
  HasNoLowerCase = "HasNoLowerCase",
  HasNoUpperCase = "HasNoUpperCase",
  HasNoSymbol = "HasNoSymbol",
  StartsWithWrongCharacter = "StartsWithWrongCharacter",
  EndsWithWrongCharacter = "EndsWithWrongCharacter",
  NotStartWithRightCharacter = "NotStartWithRightCharacter",
  NotEndWithRightCharacter = "NotEndWithRightCharacter",
  IncludeNotAllowedWord = "IncludeNotAllowedWord",
}

export enum rangeValidationsErrors {
  notInRange = "The provided value is out of range",
  lessThan = "The provided value is less than the lowest allowed number",
  greaterThan = "The provided value is higher than the highest allowed number",
}

export enum GlobalValidatorErrorType {
  INVALID_CHARACTER,
}

export interface Country {
  name: string;
  code: string;
  phoneFormat: string;
  phoneRegExp: string;
}

type RemoveSpaces<S extends string> = S extends `${infer L} ${infer R}`
  ? `${RemoveSpaces<`${L}${R}`>}`
  : S;

/** only check if the provided number length is the country number length */
export type CountryNames = Extract<
  (typeof countries)[number]["name"],
  string
> extends infer Name
  ? Name extends `${infer First}${infer Rest}`
    ? RemoveSpaces<`Is${First}${Rest}`>
    : never
  : never;

export type CountriesMethod = {
  [key in CountryNames]: (
    /**
     * only check if the provided number length is the country number length
     */ onlyLength?: boolean
  ) => boolean | undefined;
};

export type Validator = GlobalValidator & CountriesMethod;

/**
 * GlobalValidation.validate method validation options
 */
export type Validations = Partial<{
  /**
   * - d - to allow digits,
   * - w - to allow alphabets,
   * - s - to allow symbols,
   * - y - to allow whitespace
   *
   * Fields can't not be empty
   */
  allowedCharacters: ("d" | "w" | "s" | "y")[];
  /**
   * the format of length option is to separated with : - ([lowest]:[highest])
   - colon must be included or you get error
   -  both lowest or highest can't be empty.
   * 
   * ```javascript
   *
   * let value = "testing";
   * let validator = new GlobalValidator()
   *
   * // To make string length to be 7 - "7:7"
   * validator.validate(value, {length: "7:7"})
   *
   * // value length not less than 7 and not greater than 10 - "7:10"
   * validator.validate(value, {length: "7:7"})
   * 
   * // not greater than 10 - ":10"
   * validator.validate(value, {length: ":10"})
   * 
   * // not less than 10
   * validator.validate(value, {length: "10:"});
   * ```
   */
  length: string;
  /**
   * specify what you don't want to start the provided value
   * ```javascript
   *
   * let value = "testing";
   * let validator = new GlobalValidator()
   *
   * // not start with "come"
   *  validator.validate(value, {notStartWith: "come"})
   *
   * ```
   * if the value start with the provided string, validation will fail
   */
  notStartWith: string;
  /**
   *  value must not include provided characters for validation to pass
   *  - note: it is case sensitive
   */
  notInclude: string;
  /**
   * value must not end with the provided characters for validation to pass
   * - note: it is case sensitive
   */
  notEndWith: string;
  /**
   * value must not with the provided characters for validation to pass
   * - note: it is case sensitive
   */
  startsWith: string;
  /**
   * value must end with the provided characters for validation to pass
   *  - note: it is case sensitive
   */
  endsWith: string;
  /**
   * provided value must contain uppercase alphabet for validation to pass
   *  - note: it is case sensitive
   */
  uppercase: boolean;
  /**
   * provided value must contain lowercase alphabet for validation to pass
   *  - note: it is case sensitive
   */
  lowercase: boolean;
}>;

export const message = {
  validationErrors: validationErrorMessages,
  rangeValidatorErrors: rangeValidationsErrors,
};

export type GlobalValidatorError = {
  // value: string;
  validationErrorMessage: string;
  errorCode: string;
};

// export const testScenarios = [
//   {
//     title:
//       "Validation error is sent to the client if the password is less than 8 characters long",
//     password: "test123",
//     validationErrorMessage: message.validationErrors.TooShort,
//     errorCode: "input_length_min",
//   },
//   {
//     title:
//       "Validation error is sent to the client if the password is more than 32 characters long",
//     password: "test1234test1234test1234test12345",
//     validationErrorMessage: message.validationErrors.TooLong,
//     errorCode: "input_length_max",
//   },
//   {
//     title:
//       "Validation error is sent to the client if the password does not contain a letter",
//     password: "12345678",
//     validationErrorMessage: message.validationErrors.HasNoLetter,
//     errorCode: "letter_required",
//   },
//   {
//     title:
//       "Validation error is sent to the client if the password does not contain a number",
//     password: "abcdefgh",
//     validationErrorMessage: message.validationErrors.HasNoNumber,
//     errorCode: "number_required",
//   },
//   {
//     title:
//       "Validation error is sent to the client if the password contains the word password",
//     password: "!0948j098_pASsWOrD_098ccdfv",
//     validationErrorMessage: message.validationErrors.ContainsTextPassword,
//     errorCode: "contains_password",
//   },
//   {
//     title:
//       "Validation error is sent to the client if the password contains an ampersand",
//     password: "test&1234",
//     validationErrorMessage: message.validationErrors.HasInvalidCharacter,
//     errorCode: "invalid_character",
//   },
//   {
//     title:
//       "Validation error is sent to the client if the password contains a 'less than' symbol",
//     password: "test<1234",
//     validationErrorMessage: message.validationErrors.HasInvalidCharacter,
//     errorCode: "invalid_character",
//   },
//   {
//     title:
//       "Validation error is sent to the client if the password contains a 'greater than' symbol",
//     password: "test>1234",
//     validationErrorMessage: message.validationErrors.HasInvalidCharacter,
//     errorCode: "invalid_character",
//   },
//   {
//     title:
//       "Validation error is sent to the client if the password contains an illegal character",
//     password: "ヽ༼ຈل͜ຈ༽ﾉﾟ･✿ヾ╲(｡◕‿◕｡)╱✿･ﾟtest1",
//     validationErrorMessage: message.validationErrors.HasInvalidCharacter,
//     errorCode: "invalid_character",
//   },
//   {
//     title:
//       "Validation error is sent to the client if the password contains a space",
//     password: "test 1234",
//     validationErrorMessage: message.validationErrors.HasInvalidCharacter,
//     errorCode: "invalid_character",
//   },
//   {
//     title:
//       "Validation error is sent to the client if the password contains a tab",
//     password: "test\t1234",
//     validationErrorMessage: message.validationErrors.HasInvalidCharacter,
//     errorCode: "invalid_character",
//   },
//   {
//     title:
//       "Validation error is sent to the client if the password contains a newline",
//     password: "test\n1234",
//     validationErrorMessage: message.validationErrors.HasInvalidCharacter,
//     errorCode: "invalid_character",
//   },
// ];
