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
import { GlobalValidator } from 'global_validator';

const validator = new GlobalValidator();

// Validate text
const textValidationConfig = {
  value: 'sample text',
  validations: {
    length: '3:10',
    allowedCharacters: ['w', 'd', ' '],
    notInclude: 'password',
  },
};

const textErrors = validator.validate(textValidationConfig);
if (Array.isArray(textErrors)) {
  console.log('Validation errors:', textErrors);
} else {
  console.log('Validation successful');
}

// Validate phone number
const phoneNumber = '+1234567890';
const phoneValidationResult = validator.phoneNumber(phoneNumber).validate();

if (phoneValidationResult === true) {
  console.log('Phone number is valid');
} else {
  console.log('Phone number validation failed');
}

```


The **validate** method accepts a configuration object with a value to be validated and a validations object defining the validation rules. The method returns true if the value passes all **validations**, or an array of **"GlobalValidatorError"** objects if there are validation errors.

The phoneNumber method allows you to validate phone numbers. Simply provide a phone number as a parameter and chain the validate method to perform the validation.

Please refer to the package documentation for detailed usage instructions and available validation methods.

## 🦮 Dependencies
The GlobalValidator package has no external dependencies.

## 🎗️Typescript Support
The GlobalValidator package includes TypeScript type declarations for enhanced development experience. The type declarations provide autocompletion and type checking support when using the package in TypeScript projects.

## 🪪 License
This package is released under the MIT License.

## ❃ Contributing
Contributions are welcome! If you encounter any issues or have suggestions for improvements, please create an issue on the package's GitHub repository.

