import "./style.css";
import GlobalValidator from "../dist";
import { Validations, Validator } from "./lib/types";

let validations: Validations = {
  allowedCharacters: ["d", "w"],
  endsWith: "y",
  notEndWith: "e",
  length: "14:",
};

const validator = new GlobalValidator();

console.log(validator.validate({ value: "hello12", validations }));

console.log(
  (
    validator.phoneNumber("+234 901 724 1037") as unknown as Validator
  ).IsNigeria()
);

window["validator"] = validator;
window["GlobalValidator"] = GlobalValidator;
