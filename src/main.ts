import "./style.css";
import GlobalValidator from "./lib/validator";
import { PasswordValidationType, Validations, Validator } from "./lib/types";

let validations: Validations = {
  allowedCharacters: ["d", "w"],
  endsWith: "y",
  notEndWith: "e",
  length: "14:",
};

const validator = new GlobalValidator();

// Validate phone number
const phoneNumber = "+1234567890";
const phoneValidationResult = (
  validator.phoneNumber(phoneNumber) as unknown as Validator
).isUnitedStates();

if (phoneValidationResult === true) {
  console.log("Phone number is valid");
} else {
  console.log("Phone number validation failed");
}

// ================ End of phone number validation =============

// ================== Password Validation =================

// Define the validation criteria for the password
const password_validations: PasswordValidationType = {
  lowercase: 1, // password must contain lowercase
  uppercase: 3, // Requires at least 3 uppercase letter
  digit: 1, // Requires at least 1 digit
  letter: true, // password must contain letter (uppercase | lowercase)
  length: "8:", // Requires a minimum length of 8 characters
};

// Example password to validate
const passwordToValidate = "Password123";

// Create an instance of the class or object that contains the 'password' function
const passwordValidator = new GlobalValidator();

// Call the 'password' function with the password and validation criteria
const result = passwordValidator.password(
  passwordToValidate,
  password_validations
);

// Check the result
console.log({ result });

window["validator"] = validator;
window["GlobalValidator"] = GlobalValidator;
