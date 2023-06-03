import { GlobalValidatorError, PasswordReturnType, PasswordValidationType, ValidationConfig } from "./types";
export default class GlobalValidator {
    #private;
    internal: boolean;
    methodName: string | undefined;
    phone_number: string | undefined;
    errors: GlobalValidatorError[];
    constructor();
    static get config(): any;
    checkCharacters(value: string, characters: ValidationConfig["validations"]["allowedCharacters"]): void;
    has_length(value: string, len: string): boolean;
    not_include(value: string, not_include: string): boolean;
    has_uppercase(value: string, minLen?: number): boolean;
    has_lowercase(value: string, minLen?: number): boolean;
    has_letter(value: string, minLen?: number): boolean;
    has_digit(value: string, minLen?: number): boolean;
    has_symbol(value: string, minLen?: number): boolean;
    private checkEnd;
    private checkStart;
    validate(config: ValidationConfig): void | boolean | GlobalValidatorError[];
    password(password: string, validations: PasswordValidationType): boolean | PasswordReturnType;
    phoneNumber(num: string): void | this;
}
