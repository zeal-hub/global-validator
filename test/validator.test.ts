import { ValidationConfig, validationErrorMessages } from "../src/lib/types";
import GlobalValidator from "../src/lib/validator";

describe("GlobalValidator", () => {
  let validator: GlobalValidator;

  beforeEach(() => {
    validator = new GlobalValidator();
  });

  describe("validate", () => {
    it("should return true for a valid value", () => {
      const config = {
        value: "TestValue",
        validations: {
          length: "3:10",
        },
      };

      const result = validator.validate(config);
      expect(result).toBe(true);
    });

    it("should return an array of errors for an invalid value", () => {
      const config = {
        value: "Invalid",
        validations: {
          length: "10:",
        },
      };

      const result = validator.validate(config);
      expect(result).toEqual([
        {
          errorCode: "too_short",
          validationErrorMessage: validationErrorMessages.TooShort,
        },
      ]);
    });

    it("should return an array of errors for multiple invalid validations", () => {
      const config: ValidationConfig = {
        value: "Invalid@Value",
        validations: {
          length: "3:10",
          allowedCharacters: ["d", "w", "s"],
        },
      };

      const result = validator.validate(config);
      expect(result).toEqual([
        {
          errorCode: "has_invalid_character",
          validationErrorMessage: validationErrorMessages.HasInvalidCharacter,
        },
      ]);
    });
  });

  describe("phoneNumber", () => {
    it("should set the phone number property", () => {
      const phoneNumber = "+123456789";
      const result = validator.phoneNumber(phoneNumber);

      expect(validator.phone_number).toBe(phoneNumber);
      expect(result).toBe(validator);
    });
  });
});
