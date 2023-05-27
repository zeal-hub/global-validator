export var validationErrorMessages;
(function (validationErrorMessages) {
    validationErrorMessages["ContainsTextPassword"] = "The provided value cannot contain letter";
    validationErrorMessages["HasInvalidCharacter"] = "The provided value has invalid characters";
    validationErrorMessages["HasNoLetter"] = "The provided value has no letter";
    validationErrorMessages["TooLong"] = "The provided value length is too long";
    validationErrorMessages["HasNoNumber"] = "The provided value has no number";
    validationErrorMessages["TooShort"] = "The provided value length is too short.";
    validationErrorMessages["HasNoLowerCase"] = "The provided value has no lowercase. e.g abcdef";
    validationErrorMessages["HasNoUpperCase"] = "The Provided value has no uppercase. e.g ABCDEF";
    validationErrorMessages["HasNoSymbol"] = "The provided value has no symbol. e.g #$&@*%!^";
    validationErrorMessages["StartsWithWrongCharacter"] = "The provided value starts with a wrong character";
    validationErrorMessages["EndsWithWrongCharacter"] = "The provided value ends with wrong character";
    validationErrorMessages["NotStartWithRightCharacter"] = "The provided value do not start with the right character";
    validationErrorMessages["NotEndWithRightCharacter"] = "The provided value do not end with the right character";
    validationErrorMessages["IncludeNotAllowedWord"] = "The provided value includes not allowed word (set of character e.g. password, surname, name)";
})(validationErrorMessages || (validationErrorMessages = {}));
export var validationErrors;
(function (validationErrors) {
    validationErrors["ContainsTextPassword"] = "ContainsTextPassword";
    validationErrors["HasInvalidCharacter"] = "HasInvalidCharacter";
    validationErrors["HasNoLetter"] = "HasNoLetter";
    validationErrors["TooLong"] = "TooLong";
    validationErrors["HasNoNumber"] = "HasNoNumber";
    validationErrors["TooShort"] = "TooShort";
    validationErrors["HasNoLowerCase"] = "HasNoLowerCase";
    validationErrors["HasNoUpperCase"] = "HasNoUpperCase";
    validationErrors["HasNoSymbol"] = "HasNoSymbol";
    validationErrors["StartsWithWrongCharacter"] = "StartsWithWrongCharacter";
    validationErrors["EndsWithWrongCharacter"] = "EndsWithWrongCharacter";
    validationErrors["NotStartWithRightCharacter"] = "NotStartWithRightCharacter";
    validationErrors["NotEndWithRightCharacter"] = "NotEndWithRightCharacter";
    validationErrors["IncludeNotAllowedWord"] = "IncludeNotAllowedWord";
})(validationErrors || (validationErrors = {}));
export var rangeValidationsErrors;
(function (rangeValidationsErrors) {
    rangeValidationsErrors["notInRange"] = "The provided value is out of range";
    rangeValidationsErrors["lessThan"] = "The provided value is less than the lowest allowed number";
    rangeValidationsErrors["greaterThan"] = "The provided value is higher than the highest allowed number";
})(rangeValidationsErrors || (rangeValidationsErrors = {}));
export var GlobalValidatorErrorType;
(function (GlobalValidatorErrorType) {
    GlobalValidatorErrorType[GlobalValidatorErrorType["INVALID_CHARACTER"] = 0] = "INVALID_CHARACTER";
})(GlobalValidatorErrorType || (GlobalValidatorErrorType = {}));
export const message = {
    validationErrors: validationErrorMessages,
    rangeValidatorErrors: rangeValidationsErrors,
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
