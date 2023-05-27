import "./style.css";
import GlobalValidator from "./lib/validator";
let validations = {
    allowedCharacters: ["d", "w"],
    endsWith: "y",
    notEndWith: "e",
    length: "14:",
};
const validator = new GlobalValidator();
console.log(validator.validate({ value: "hello12", validations }));
validator.phoneNumber("+234 901 724 1037").IsAustralia();
