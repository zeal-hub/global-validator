import { GlobalValidatorError, Validations } from "./types";
type ValidationConfig = {
    value: string;
    validations: Validations;
    all?: boolean;
};
export default class GlobalValidator {
    #private;
    methodName: string | undefined;
    phone_number: string | undefined;
    constructor();
    static get config(): any;
    validate(config: ValidationConfig): void | boolean | GlobalValidatorError[];
    text(text: string, config: ValidationConfig["validations"]): void | boolean | GlobalValidatorError[];
    password(): void | boolean | GlobalValidatorError[];
    integer(): void;
    phoneNumber(num: string): void | this;
}
export {};
