export default function get_min_max(len) {
    if (typeof len !== "string") {
        throw new Error("GlobalValidatorError -> Invalid Length Field: length field must be string,i.e '3:'");
    }
    // trim the value to remove invalid characters
    let rangeValue = len?.trim() ?? "";
    let isValid = new RegExp(/^(\d*:|:\d*|\d:\d)$/).test(rangeValue);
    // checking if input_value length is at least greater 1
    // check of the format of the range value, if it has a colon, number and not alphabet
    if (!rangeValue || rangeValue.length < 2 || !isValid) {
        throw new Error("GlobalValidatorError -> length: Invalid range input");
    }
    // ----------------------------
    let lowest = Number.MIN_SAFE_INTEGER, highest = Number.MAX_SAFE_INTEGER, colonIndex = rangeValue.indexOf(":");
    if (colonIndex >= 1) {
        // means there is lowest
        // get the digits before colon
        lowest = parseInt(rangeValue.substring(0, colonIndex));
    }
    if (rangeValue.length > colonIndex + 1) {
        // means that there is highest value
        // get the digits after colon
        highest = parseInt(rangeValue.substring(colonIndex + 1));
    }
    // lowest can't be higher than highest
    if (lowest > highest) {
        throw new Error(`GlobalValidatorError -> length: Invalid range input - lowest length can't be higher that highest length [${highest}]. `);
    }
    return [lowest, highest];
}
