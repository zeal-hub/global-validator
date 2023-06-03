import { countriesNames } from "./countries";
import GlobalValidator from "./validator";
export declare enum validationErrorMessages {
    ContainsTextPassword = "The provided value cannot contain letter",
    HasInvalidCharacter = "The provided value has invalid characters",
    HasNoLetter = "The provided value has no letter",
    HasNoDigit = "The provided value has no digit",
    ValueLengthMax = "The provided value length is too long",
    HasNoNumber = "The provided value has no number",
    ValueLengthMin = "The provided value length is too short.",
    HasNoLowerCase = "The provided value has no lowercase. e.g abcdef",
    HasNoUpperCase = "The Provided value has no uppercase. e.g ABCDEF",
    HasNoSymbol = "The provided value has no symbol. e.g #$&@*%!^",
    StartsWithWrongCharacter = "The provided value starts with a wrong character",
    EndsWithWrongCharacter = "The provided value ends with wrong character",
    NotStartWithRightCharacter = "The provided value do not start with the right character",
    NotEndWithRightCharacter = "The provided value do not end with the right character",
    IncludeNotAllowedWord = "The provided value includes not allowed word (set of character e.g. password, surname, name)",
    UpperCaseLettersTooShort = "Uppercase letters in the password is too short, include more uppercase letters",
    LowerCaseLettersTooShort = "Lowercase letters in the password is too short, include more lowercase letters",
    DigitsLengthTooShort = "Length of digits is too short",
    LettersLengthTooShort = "Length of letters in the provided value is too short",
    SymbolsLengthTooShort = "Length of symbols in the provided value is too short. add more symbols"
}
export declare enum validationErrors {
    ContainsTextPassword = "ContainsTextPassword",
    HasInvalidCharacter = "HasInvalidCharacter",
    HasNoLetter = "HasNoLetter",
    HasNoDigit = "HasNoDigit",
    TooLong = "ValueLengthMax",
    HasNoNumber = "HasNoNumber",
    TooShort = "ValueLengthMin",
    HasNoLowerCase = "HasNoLowerCase",
    HasNoUpperCase = "HasNoUpperCase",
    UpperCaseLettersTooShort = "UpperCaseLettersTooShort",
    LowerCaseLettersTooShort = "LowerCaseLettersTooShort",
    HasNoSymbol = "HasNoSymbol",
    StartsWithWrongCharacter = "StartsWithWrongCharacter",
    EndsWithWrongCharacter = "EndsWithWrongCharacter",
    NotStartWithRightCharacter = "NotStartWithRightCharacter",
    NotEndWithRightCharacter = "NotEndWithRightCharacter",
    IncludeNotAllowedWord = "IncludeNotAllowedWord",
    DigitsLengthTooShort = "DigitsLengthTooShort",
    LettersLengthTooShort = "LettersLengthTooShort",
    SymbolsLengthTooShort = "SymbolsLengthTooShort"
}
export declare enum rangeValidationsErrors {
    notInRange = "The provided value is out of range",
    lessThan = "The provided value is less than the lowest allowed number",
    greaterThan = "The provided value is higher than the highest allowed number"
}
export declare enum GlobalValidatorErrorType {
    INVALID_CHARACTER = 0
}
export interface Country {
    name: string;
    code: string;
    phoneFormat: string;
    phoneRegExp: string;
}
type RemoveSpaces<S extends string> = S extends `${infer L} ${infer R}` ? `${RemoveSpaces<`${L}${R}`>}` : S;
/** only check if the provided number length is the country number length */
export type CountryNames = Extract<(typeof countriesNames)[number], string> extends infer Name ? Name extends `${infer First}${infer Rest}` ? RemoveSpaces<`is${First}${Rest}`> : never : never;
export type CountriesMethod = {
    [key in CountryNames]: (
    /**
     * only check if the provided number length is the country number length
     */ onlyLength?: boolean) => boolean | undefined;
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
    letter: boolean;
    digit: boolean;
}>;
export type PasswordValidationType = {
    /**
     * Take in boolean or number.
     * - **Boolean:** means that the password must contain digit
     * - **Number:** means that the password must contain at least [number] digits
     */
    digit?: boolean | number;
    /**
     * Take in boolean or number.
     * - **Boolean:** means that the password must contain letter
     * - **Number:** means that the password must contain at least [number] letters
     */
    letter?: boolean | number;
    /**
     * Take in boolean or number.
     * - **Boolean:** means that the password must contain uppercase
     * - **Number:** means that the password must contain at least [number] uppercase
     */
    uppercase?: boolean | number;
    /**
     * Take in boolean or number.
     * - **Boolean:** means that the password must contain lowercase
     * - **Number:** means that the password must contain at least [number] lowercase
     */
    lowercase?: boolean | number;
    /**
     * Take in boolean or number.
     * - **Boolean:** means that the password must contain symbol
     * - **Number:** means that the password must contain at least [number] symbols
     */
    symbol?: boolean | number;
    /**
     * tell if the password can contain whitespace or not.
     * default: false
     */
    whitespace?: boolean;
    /**
       * the format of length option is to separated with : - ([min]:[max])
       - colon must be included or you get error
       -  both min or max can't be empty.
      */
    length?: Validations["length"];
};
export type PasswordReturnType = {
    strength: number;
    isValid: boolean;
    errors: GlobalValidatorError[];
};
export declare const message: {
    validationErrors: typeof validationErrorMessages;
    rangeValidatorErrors: typeof rangeValidationsErrors;
};
export type GlobalValidatorError = {
    validationErrorMessage: string;
    errorCode: string;
};
export type ValidationConfig = {
    value: string;
    validations: Validations;
    all?: boolean;
};
export type methods = keyof GlobalValidator;
export {};
