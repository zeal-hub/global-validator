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
export default function reformat_country_method(countryMethod: string): string;
