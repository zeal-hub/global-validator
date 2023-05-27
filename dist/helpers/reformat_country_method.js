/**
 * turns typescript generated country method to plain country name
 *
 * ### Example
 * ```javascript
 *    let countryName = reformat_country_method("IsSouthAfrica") // South Africa
 *    countryName = reformat_country_method("IsNigeria") // Nigeria
 * ```
 *
 * @param countryMethod name of the country method
 * @returns {string}
 */
export default function reformat_country_method(countryMethod) {
    let formattedName;
    // remove Is from method name
    formattedName = countryMethod.substring(2);
    formattedName = formattedName.replace(/([A-Z])/g, " $1").trim();
    return formattedName.charAt(0).toUpperCase() + formattedName.slice(1);
}
