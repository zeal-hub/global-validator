import { GlobalValidatorError, validationErrors } from "../lib/types";
export default function error_generator(type: keyof typeof validationErrors): GlobalValidatorError;
