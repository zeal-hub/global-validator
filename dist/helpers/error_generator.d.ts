import { GlobalValidatorError, validationErrorMessages } from "../lib/types";
export default function error_generator(type: keyof typeof validationErrorMessages): GlobalValidatorError;
