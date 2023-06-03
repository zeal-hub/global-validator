# Global Validator

The GlobalValidator package provides a set of validation methods for various purposes such as validating text, passwords, integers, and phone numbers. It also allows configuring custom validation rules.

## ✨Features

- Validate text based on configurable validation rules.
- Validate passwords based on complexity requirements.
- Validate integers for numerical constraints.
- Validate phone numbers based on country-specific formats and rules.

## 𖣠 Installation

Install the GlobalValidator package using npm:


## 😎 Usage

Import the GlobalValidator class and instantiate it in your code. Here's an example of how to use the package:

```javascript
import GlobalValidator from 'global_validator';

const validator = new GlobalValidator();


// ================== Text Validation ==================
// Validate text
const textValidationConfig = {
  value: 'sample text',
  validations: {
    // minLength -> 3 and maxLength -> 10
    length: '3:10',
    // if value contain whitespace, it will fail validation.
    allowedCharacters: ['w', 'd', 's'],
    // value must not include password
    notInclude: 'password',
  },
};

const textErrors = validator.validate(textValidationConfig);
if (Array.isArray(textErrors)) {
  console.log('Validation errors:', textErrors);
} else {
  console.log('Validation successful');
}
// ===================== End of test validation ===================


// =================== Phone Number Validation ====================

// Validate phone number
const phoneNumber = '+1234567890';
const phoneValidationResult = validator.phoneNumber(phoneNumber).isUnitedStates();

if (phoneValidationResult === true) {
  console.log('Phone number is valid');
} else {
  console.log('Phone number validation failed');
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

// log
{
  "result": {
    "isValid": false,
    "strength": 66.66666666666666,
    "errors": [
      {
        "validationErrorMessage": "Uppercase letters in the password is too short, include more uppercase letters",
        "errorCode": "upper_case_letters_too_short"
      }
    ]
  }
}


```


The **validate** method accepts a configuration object with a value to be validated and a validations object defining the validation rules. The method returns true if the value passes all **validations**, or an array of **"GlobalValidatorError"** objects if there are validation errors.

The phoneNumber method allows you to validate phone numbers. Simply provide a phone number as a parameter and chain the validate method to perform the validation.

Here is a description of the class methods in tabular form:

| Method                  |Description                                                                                                                                         |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `checkCharacters`       | Checks if the `value` contains characters specified in the `allowedCharacters` array and adds an error if invalid characters are present.         |
| `has_length`            | Checks if the `value` has a length within the specified range and adds an error if the length is too short or too long.                              |
| `not_include`           | Checks if the `value` contains a specific substring specified by `not_include` and adds an error if the substring is present.                         |
| `has_uppercase`         | Checks if the `value` contains uppercase letters and adds an error if no uppercase letters are found.                                               |
| `has_lowercase`         | Checks if the `value` contains lowercase letters and adds an error if no lowercase letters are found.                                               |
| `has_letter`            | Checks if the `value` contains any letters and adds an error if no letters are found.                                                               |
| `has_digit`             | Checks if the `value` contains any digits and adds an error if no digits are found.                                                                 |
| `has_symbol`            | Checks if the `value` contains any symbols and adds an error if no symbols are found.                                                               
| `validate`              | Performs multiple validations based on the provided configuration and returns `true` if all validations pass, `false` if any validation fails, or an array of `GlobalValidatorError` objects if errors occur during validation. |
| `password`              | Validates a password based on the provided configuration and returns an object with information about the password's validity and strength.            |
| `phoneNumber`           | Sets the phone number to be validated and then call target country i.e <b>`validator.phoneNumber("+234 811 176 4056").isNigeria()</b>` .                                                                                                               

Please refer to the package documentation for detailed usage instructions and available validation methods.

## 🦮 Dependencies
The GlobalValidator package has no external dependencies.

## 🎗️Typescript Support
The GlobalValidator package includes TypeScript type declarations for enhanced development experience. The type declarations provide autocompletion and type checking support when using the package in TypeScript projects.

## 🪪 License
This package is released under the MIT License.

## ❃ Contributing
Contributions are welcome! If you encounter any issues or have suggestions for improvements, please create an issue on the package's GitHub repository.



