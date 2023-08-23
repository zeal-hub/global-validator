"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../lib/types");
function error_generator(type) {
    return {
        validationErrorMessage: types_1.message.validationErrors[type],
        errorCode: formatErrorType(type),
    };
}
exports.default = error_generator;
function formatErrorType(error_type) {
    let newString = toLowCase(error_type.charAt(0)) +
        error_type
            .substring(1)
            .replaceAll(/[A-Z]/g, (match) => "_" + toLowCase(match));
    // error_type.split("").forEach((character, index) => {
    //   if (index === 0) newString += toLowCase(character);
    //   else if (character === character.toUpperCase()) {
    //     newString += "_" + toLowCase(character);
    //   } else newString += character;
    // });
    return newString;
}
const toLowCase = (text) => text.toLowerCase();
