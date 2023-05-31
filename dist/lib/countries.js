// export const countries = [
//   {
//     name: "Argentina",
//     code: "AR",
//     phoneFormat: "+54 NNNN NNNN NNNN",
//     phoneRegExp: "^\\+54 [0-9]{4} [0-9]{4} [0-9]{4}$",
//   },
//   {
//     name: "Australia",
//     code: "AU",
//     phoneFormat: "+61 NNN NNN NNN",
//     phoneRegExp: "^\\+61 [0-9]{3} [0-9]{3} [0-9]{3}$",
//   },
//   {
//     name: "Austria",
//     code: "AT",
//     phoneFormat: "+43 NNNN NNNNNN",
//     phoneRegExp: "^\\+43 [0-9]{4} [0-9]{6}$",
//   },
//   {
//     name: "Azerbaijan",
//     code: "AZ",
//     phoneFormat: "+994 NNN NNN NN NN",
//     phoneRegExp: "^\\+994 [0-9]{3} [0-9]{2} [0-9]{2} [0-9]{2}$",
//   },
//   {
//     name: "Bahamas",
//     code: "BS",
//     phoneFormat: "+1 (NNN) NNN-NNNN",
//     phoneRegExp: "^\\+1 ([0-9]{3}) [0-9]{3}-[0-9]{4}$",
//   },
//   {
//     name: "Belgium",
//     code: "BE",
//     phoneFormat: "+32 NNNN NNN NNN",
//     phoneRegExp: "^\\+32 [0-9]{4} [0-9]{3} [0-9]{3}$",
//   },
//   {
//     name: "Brazil",
//     code: "BR",
//     phoneFormat: "+55 NNNNN-NNNN",
//     phoneRegExp: "^\\+55 [0-9]{5}-[0-9]{4}$",
//   },
//   {
//     name: "Canada",
//     code: "CA",
//     phoneFormat: "+1 (NNN) NNN-NNNN",
//     phoneRegExp: "^\\+1 ([0-9]{3}) [0-9]{3}-[0-9]{4}$",
//   },
//   {
//     name: "Chile",
//     code: "CL",
//     phoneFormat: "+56 NNNN NNNN NNNN",
//     phoneRegExp: "^\\+56 [0-9]{4} [0-9]{4} [0-9]{4}$",
//   },
//   {
//     name: "China",
//     code: "CN",
//     phoneFormat: "+86 NNN-NNNN-NNNN",
//     phoneRegExp: "^\\+86 [0-9]{3}-[0-9]{4}-[0-9]{4}$",
//   },
//   {
//     name: "Colombia",
//     code: "CO",
//     phoneFormat: "+57 NNN NNNNNNN",
//     phoneRegExp: "^\\+57 [0-9]{3} [0-9]{6,7}$",
//   },
//   {
//     name: "Croatia",
//     code: "HR",
//     phoneFormat: "+385 NNN NNN NNN",
//     phoneRegExp: "^\\+385 [0-9]{3} [0-9]{3} [0-9]{3}$",
//   },
//   {
//     name: "Czech Republic",
//     code: "CZ",
//     phoneFormat: "+420 NNN NNN NNN",
//     phoneRegExp: "^\\+420 [0-9]{3} [0-9]{3} [0-9]{3}$",
//   },
//   {
//     name: "Denmark",
//     code: "DK",
//     phoneFormat: "+45 NNNN NNNN",
//     phoneRegExp: "^\\+45 [0-9]{4} [0-9]{4}$",
//   },
//   {
//     name: "Ecuador",
//     code: "EC",
//     phoneFormat: "+593 NNN NNN NNNN",
//     phoneRegExp: "^\\+593 [0-9]{3} [0-9]{3} [0-9]{4}$",
//   },
//   {
//     name: "Egypt",
//     code: "EG",
//     phoneFormat: "+20 NNNN NNN NNNN",
//     phoneRegExp: "^\\+20 [0-9]{4} [0-9]{3} [0-9]{4}$",
//   },
//   {
//     name: "Finland",
//     code: "FI",
//     phoneFormat: "+358 NNNNNNNN",
//     phoneRegExp: "^\\+358 [0-9]{8}$",
//   },
//   {
//     name: "France",
//     code: "FR",
//     phoneFormat: "+33 N NNNN-NNNN",
//     phoneRegExp: "^\\+33 d [0-9]{4}-[0-9]{4}$",
//   },
//   {
//     name: "Germany",
//     code: "DE",
//     phoneFormat: "+49 NNNN NNNN NNNN",
//     phoneRegExp: "^\\+49 [0-9]{4} [0-9]{4} [0-9]{4}$",
//   },
//   {
//     name: "Greece",
//     code: "GR",
//     phoneFormat: "+30 NNNN NNNNNN",
//     phoneRegExp: "^\\+30 [0-9]{4} [0-9]{6}$",
//   },
//   {
//     name: "Hong Kong",
//     code: "HK",
//     phoneFormat: "+852 NNNN NNNN",
//     phoneRegExp: "^\\+852 [0-9]{4} [0-9]{4}$",
//   },
//   {
//     name: "Iceland",
//     code: "IS",
//     phoneFormat: "+354 NNN NNNN",
//     phoneRegExp: "^\\+354 [0-9]{3} [0-9]{4}$",
//   },
//   {
//     name: "India",
//     code: "IN",
//     phoneFormat: "+91 NNNNN NNNNN",
//     phoneRegExp: "^\\+91 [0-9]{5} [0-9]{5}$",
//   },
//   {
//     name: "Indonesia",
//     code: "ID",
//     phoneFormat: "+62 NNNN NNNN NNNN",
//     phoneRegExp: "^\\+62 [0-9]{4} [0-9]{4} [0-9]{4}$",
//   },
//   {
//     name: "Iran",
//     code: "IR",
//     phoneFormat: "+98 NNNN NNN NNNN",
//     phoneRegExp: "^\\+98 [0-9]{4} [0-9]{3} [0-9]{4}$",
//   },
//   {
//     name: "Ireland",
//     code: "IE",
//     phoneFormat: "+353 NNN NNN NNNN",
//     phoneRegExp: "^\\+353 [0-9]{3} [0-9]{3} [0-9]{4}$",
//   },
//   {
//     name: "Israel",
//     code: "IL",
//     phoneFormat: "+972 NN-NNN-NNNN",
//     phoneRegExp: "^\\+972 [0-9]{2}-[0-9]{3}-[0-9]{4}$",
//   },
//   {
//     name: "Italy",
//     code: "IT",
//     phoneFormat: "+39 NNN NNN NNNN",
//     phoneRegExp: "^\\+39 [0-9]{3} [0-9]{3} [0-9]{4}$",
//   },
//   {
//     name: "Jamaica",
//     code: "JM",
//     phoneFormat: "+1 (NNN) NNN-NNNN",
//     phoneRegExp: "^\\+1 ([0-9]{3}) [0-9]{3}-[0-9]{4}$",
//   },
//   {
//     name: "Japan",
//     code: "JP",
//     phoneFormat: "+81 NNN-NNNN-NNNN",
//     phoneRegExp: "^\\+81 [0-9]{3}-[0-9]{4}-[0-9]{4}$",
//   },
//   {
//     name: "Kenya",
//     code: "KE",
//     phoneFormat: "+254 NNN NNN NNNN",
//     phoneRegExp: "^\\+254 [0-9]{3} [0-9]{3} [0-9]{4}$",
//   },
//   {
//     name: "Malaysia",
//     code: "MY",
//     phoneFormat: "+60 NN-NNNN NNNN",
//     phoneRegExp: "^\\+60 [0-9]{2}-[0-9]{4} [0-9]{4}$",
//   },
//   {
//     name: "Mexico",
//     code: "MX",
//     phoneFormat: "+52 NNN NNNN-NNNN",
//     phoneRegExp: "^\\+52 [0-9]{3} [0-9]{4}-[0-9]{4}$",
//   },
//   {
//     name: "Morocco",
//     code: "MA",
//     phoneFormat: "+212 NNN NN NN NN",
//     phoneRegExp: "^\\+212 [0-9]{3} [0-9]{2} [0-9]{2} [0-9]{2}$",
//   },
//   {
//     name: "Netherlands",
//     code: "NL",
//     phoneFormat: "+31 NNN NNN NNNN",
//     phoneRegExp: "^\\+31 [0-9]{3} [0-9]{3} [0-9]{4}$",
//   },
//   {
//     name: "New Zealand",
//     code: "NZ",
//     phoneFormat: "+64 NNN NNN NNNN",
//     phoneRegExp: "^\\+64 [0-9]{3} [0-9]{3} [0-9]{4}$",
//   },
//   {
//     name: "Nigeria",
//     code: "NG",
//     phoneFormat: "+234 NNN NNN NNNN",
//     phoneRegExp: "^\\+234 [0-9]{3} [0-9]{7}$",
//   },
//   {
//     name: "Norway",
//     code: "NO",
//     phoneFormat: "+47 NNN NN NNN",
//     phoneRegExp: "^\\+47 [0-9]{3} [0-9]{2} [0-9]{3}$",
//   },
//   {
//     name: "Pakistan",
//     code: "PK",
//     phoneFormat: "+92 NNN NNN NNNN",
//     phoneRegExp: "^\\+92 [0-9]{3} [0-9]{3} [0-9]{4}$",
//   },
//   {
//     name: "Philippines",
//     code: "PH",
//     phoneFormat: "+63 NNN NNN NNNN",
//     phoneRegExp: "^\\+63 [0-9]{3} [0-9]{3} [0-9]{4}$",
//   },
//   {
//     name: "Poland",
//     code: "PL",
//     phoneFormat: "+48 NNN NNN NN NN",
//     phoneRegExp: "^\\+48 [0-9]{3} [0-9]{3} [0-9]{2} [0-9]{2}$",
//   },
//   {
//     name: "Portugal",
//     code: "PT",
//     phoneFormat: "+351 NNN NNN NNN",
//     phoneRegExp: "^\\+351 [0-9]{3} [0-9]{3} [0-9]{3}$",
//   },
//   {
//     name: "Russia",
//     code: "RU",
//     phoneFormat: "+7 NNN NNN-NN-NN",
//     phoneRegExp: "^\\+7 [0-9]{3} [0-9]{3}-[0-9]{2}-[0-9]{2}$",
//   },
//   {
//     name: "Saudi Arabia",
//     code: "SA",
//     phoneFormat: "+966 NNN NNN NNNN",
//     phoneRegExp: "^\\+966 [0-9]{9}$",
//   },
//   {
//     name: "Serbia",
//     code: "RS",
//     phoneFormat: "+381 NNN NNNNNNN",
//     phoneRegExp: "^\\+381 [0-9]{3} [0-9]{6,7}$",
//   },
//   {
//     name: "Singapore",
//     code: "SG",
//     phoneFormat: "+65 NNNN NNNN",
//     phoneRegExp: "^\\+65 [0-9]{4} [0-9]{4}$",
//   },
//   {
//     name: "South Africa",
//     code: "ZA",
//     phoneFormat: "+27 NNN NNN NNNN",
//     phoneRegExp: "^\\+27 [0-9]{3} [0-9]{3} [0-9]{4}$",
//   },
//   {
//     name: "South Korea",
//     code: "KR",
//     phoneFormat: "+82 NNN NNNN NNNN",
//     phoneRegExp: "^\\+82 [0-9]{3} [0-9]{4} [0-9]{4}$",
//   },
//   {
//     name: "Spain",
//     code: "ES",
//     phoneFormat: "+34 NNN NNN NNN",
//     phoneRegExp: "^\\+34 [0-9]{3} [0-9]{3} [0-9]{3}$",
//   },
//   {
//     name: "Sweden",
//     code: "SE",
//     phoneFormat: "+46 NNN-NNN NN NN",
//     phoneRegExp: "^\\+46 [0-9]{3}-[0-9]{3} [0-9]{2} [0-9]{2}$",
//   },
//   {
//     name: "Switzerland",
//     code: "CH",
//     phoneFormat: "+41 NNN NNN NN NN",
//     phoneRegExp: "^\\+41 [0-9]{3} [0-9]{3} [0-9]{2} [0-9]{2}$",
//   },
//   {
//     name: "Switzerland",
//     code: "CH",
//     phoneFormat: "+41 NNN NNN NN NN",
//     phoneRegExp: "^\\+41 [0-9]{3} [0-9]{3} [0-9]{2} [0-9]{2}$",
//   },
//   {
//     name: "Taiwan",
//     code: "TW",
//     phoneFormat: "+886 NNN NNN NNN",
//     phoneRegExp: "^\\+886 [0-9]{3} [0-9]{3} [0-9]{3}$",
//   },
//   {
//     name: "Thailand",
//     code: "TH",
//     phoneFormat: "+66 NNN NNN NNNN",
//     phoneRegExp: "^\\+66 [0-9]{3} [0-9]{3} [0-9]{4}$",
//   },
//   {
//     name: "Tunisia",
//     code: "TN",
//     phoneFormat: "+216 NNN NNN NNN",
//     phoneRegExp: "^\\+216 [0-9]{3} [0-9]{3} [0-9]{3}$",
//   },
//   {
//     name: "Turkey",
//     code: "TR",
//     phoneFormat: "+90 NNN NNN NN NN",
//     phoneRegExp: "^\\+90 [0-9]{3} [0-9]{3} [0-9]{2} [0-9]{2}$",
//   },
//   {
//     name: "Ukraine",
//     code: "UA",
//     phoneFormat: "+380 NNN NNN NNNN",
//     phoneRegExp: "^\\+380 [0-9]{3} [0-9]{3} [0-9]{4}$",
//   },
//   {
//     name: "United Arab Emirates",
//     code: "AE",
//     phoneFormat: "+971 N NNN NNNNN",
//     phoneRegExp: "^\\+971 [0-9]{1} [0-9]{3} [0-9]{4}$",
//   },
//   {
//     name: "United Kingdom",
//     code: "GB",
//     phoneFormat: "+44 NNNN NNNNNN",
//     phoneRegExp: "^\\+44 [0-9]{4} [0-9]{6}$",
//   },
//   {
//     name: "United Kingdom",
//     code: "GB",
//     phoneFormat: "+44 NN NNNN NNNNN",
//     phoneRegExp: "^\\+44 [0-9]{2} [0-9]{4} [0-9]{4}$",
//   },
//   {
//     name: "United States",
//     code: "US",
//     phoneFormat: "+1 (NNN) NNN-NNNN",
//     phoneRegExp: "^\\+1 ([0-9]{3}) [0-9]{3}-[0-9]{4}$",
//   },
//   {
//     name: "Venezuela",
//     code: "VE",
//     phoneFormat: "+58 NNN NNNNNNN",
//     phoneRegExp: "^\\+58 [0-9]{3} [0-9]{7}$",
//   },
//   {
//     name: "Vietnam",
//     code: "VN",
//     phoneFormat: "+84 NNN NNNN NNN",
//     phoneRegExp: "^\\+84 [0-9]{3} [0-9]{4} [0-9]{3}$",
//   },
//   {
//     name: "Zimbabwe",
//     code: "ZW",
//     phoneFormat: "+263 NNN NNN NNNN",
//     phoneRegExp: "^\\+263 [0-9]{3} [0-9]{3} [0-9]{4}$",
//   },
// ] as const;
export const countriesNames = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo, Democratic Republic of the",
    "Congo, Republic of the",
    "Costa Rica",
    "Cote d'Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "East Timor",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea, North",
    "Korea, South",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
];
// console.log(countries);
export const countriesDetail = {
    Afghanistan: {
        dialCode: "+93",
        phoneNumberLength: 10,
    },
    Albania: {
        dialCode: "+355",
        phoneNumberLength: 9,
    },
    Algeria: {
        dialCode: "+213",
        phoneNumberLength: 9,
    },
    Andorra: {
        dialCode: "+376",
        phoneNumberLength: 6,
    },
    Angola: {
        dialCode: "+244",
        phoneNumberLength: 9,
    },
    "Antigua and Barbuda": {
        dialCode: "+1-268",
        phoneNumberLength: 7,
    },
    Argentina: {
        dialCode: "+54",
        phoneNumberLength: 10,
    },
    Armenia: {
        dialCode: "+374",
        phoneNumberLength: 8,
    },
    Australia: {
        dialCode: "+61",
        phoneNumberLength: 9,
    },
    Austria: {
        dialCode: "+43",
        phoneNumberLength: 10,
    },
    Azerbaijan: {
        dialCode: "+994",
        phoneNumberLength: 9,
    },
    Bahamas: {
        dialCode: "+1-242",
        phoneNumberLength: 7,
    },
    Bahrain: {
        dialCode: "+973",
        phoneNumberLength: 8,
    },
    Bangladesh: {
        dialCode: "+880",
        phoneNumberLength: 10,
    },
    Barbados: {
        dialCode: "+1-246",
        phoneNumberLength: 7,
    },
    Belarus: {
        dialCode: "+375",
        phoneNumberLength: 9,
    },
    Belgium: {
        dialCode: "+32",
        phoneNumberLength: 9,
    },
    Belize: {
        dialCode: "+501",
        phoneNumberLength: 7,
    },
    Benin: {
        dialCode: "+229",
        phoneNumberLength: 8,
    },
    Bhutan: {
        dialCode: "+975",
        phoneNumberLength: 8,
    },
    Bolivia: {
        dialCode: "+591",
        phoneNumberLength: 8,
    },
    "Bosnia and Herzegovina": {
        dialCode: "+387",
        phoneNumberLength: 8,
    },
    Botswana: {
        dialCode: "+267",
        phoneNumberLength: 8,
    },
    Brazil: {
        dialCode: "+55",
        phoneNumberLength: 10,
    },
    Brunei: {
        dialCode: "+673",
        phoneNumberLength: 7,
    },
    Bulgaria: {
        dialCode: "+359",
        phoneNumberLength: 9,
    },
    "Burkina Faso": {
        dialCode: "+226",
        phoneNumberLength: 8,
    },
    Burundi: {
        dialCode: "+257",
        phoneNumberLength: 8,
    },
    "Cabo Verde": {
        dialCode: "+238",
        phoneNumberLength: 7,
    },
    Cambodia: {
        dialCode: "+855",
        phoneNumberLength: 8,
    },
    Cameroon: {
        dialCode: "+237",
        phoneNumberLength: 9,
    },
    Canada: {
        dialCode: "+1",
        phoneNumberLength: 10,
    },
    "Central African Republic": {
        dialCode: "+236",
        phoneNumberLength: 8,
    },
    Chad: {
        dialCode: "+235",
        phoneNumberLength: 8,
    },
    Chile: {
        dialCode: "+56",
        phoneNumberLength: 9,
    },
    China: {
        dialCode: "+86",
        phoneNumberLength: 11,
    },
    Colombia: {
        dialCode: "+57",
        phoneNumberLength: 10,
    },
    Comoros: {
        dialCode: "+269",
        phoneNumberLength: 7,
    },
    "Congo, Democratic Republic of the": {
        dialCode: "+243",
        phoneNumberLength: 9,
    },
    "Congo, Republic of the": {
        dialCode: "+242",
        phoneNumberLength: 9,
    },
    "Costa Rica": {
        dialCode: "+506",
        phoneNumberLength: 8,
    },
    "Cote d'Ivoire": {
        dialCode: "+225",
        phoneNumberLength: 10,
    },
    Croatia: {
        dialCode: "+385",
        phoneNumberLength: 9,
    },
    Cuba: {
        dialCode: "+53",
        phoneNumberLength: 8,
    },
    Cyprus: {
        dialCode: "+357",
        phoneNumberLength: 8,
    },
    "Czech Republic": {
        dialCode: "+420",
        phoneNumberLength: 9,
    },
    Denmark: {
        dialCode: "+45",
        phoneNumberLength: 8,
    },
    Djibouti: {
        dialCode: "+253",
        phoneNumberLength: 8,
    },
    Dominica: {
        dialCode: "+1",
        phoneNumberLength: 10,
    },
    "Dominican Republic": {
        dialCode: "+1",
        phoneNumberLength: 10,
    },
    "East Timor": {
        dialCode: "+670",
        phoneNumberLength: 8,
    },
    Ecuador: {
        dialCode: "+593",
        phoneNumberLength: 9,
    },
    Egypt: {
        dialCode: "+20",
        phoneNumberLength: 10,
    },
    "El Salvador": {
        dialCode: "+503",
        phoneNumberLength: 8,
    },
    "Equatorial Guinea": {
        dialCode: "+240",
        phoneNumberLength: 9,
    },
    Eritrea: {
        dialCode: "+291",
        phoneNumberLength: 7,
    },
    Estonia: {
        dialCode: "+372",
        phoneNumberLength: 7,
    },
    Eswatini: {
        dialCode: "+268",
        phoneNumberLength: 8,
    },
    Ethiopia: {
        dialCode: "+251",
        phoneNumberLength: 9,
    },
    Fiji: {
        dialCode: "+679",
        phoneNumberLength: 7,
    },
    Finland: {
        dialCode: "+358",
        phoneNumberLength: 9,
    },
    France: {
        dialCode: "+33",
        phoneNumberLength: 9,
    },
    Gabon: {
        dialCode: "+241",
        phoneNumberLength: 8,
    },
    Gambia: {
        dialCode: "+220",
        phoneNumberLength: 7,
    },
    Georgia: {
        dialCode: "+995",
        phoneNumberLength: 9,
    },
    Germany: {
        dialCode: "+49",
        phoneNumberLength: 10,
    },
    Ghana: {
        dialCode: "+233",
        phoneNumberLength: 9,
    },
    Greece: {
        dialCode: "+30",
        phoneNumberLength: 10,
    },
    Grenada: {
        dialCode: "+1",
        phoneNumberLength: 10,
    },
    Guatemala: {
        dialCode: "+502",
        phoneNumberLength: 8,
    },
    Guinea: {
        dialCode: "+224",
        phoneNumberLength: 8,
    },
    "Guinea-Bissau": {
        dialCode: "+245",
        phoneNumberLength: 7,
    },
    Guyana: {
        dialCode: "+592",
        phoneNumberLength: 7,
    },
    Haiti: {
        dialCode: "+509",
        phoneNumberLength: 8,
    },
    Honduras: {
        dialCode: "+504",
        phoneNumberLength: 8,
    },
    Hungary: {
        dialCode: "+36",
        phoneNumberLength: 9,
    },
    Iceland: {
        dialCode: "+354",
        phoneNumberLength: 7,
    },
    India: {
        dialCode: "+91",
        phoneNumberLength: 10,
    },
    Indonesia: {
        dialCode: "+62",
        phoneNumberLength: 10,
    },
    Iran: {
        dialCode: "+98",
        phoneNumberLength: 10,
    },
    Iraq: {
        dialCode: "+964",
        phoneNumberLength: 10,
    },
    Ireland: {
        dialCode: "+353",
        phoneNumberLength: 9,
    },
    Israel: {
        dialCode: "+972",
        phoneNumberLength: 9,
    },
    Italy: {
        dialCode: "+39",
        phoneNumberLength: 10,
    },
    Jamaica: {
        dialCode: "+1",
        phoneNumberLength: 10,
    },
    Japan: {
        dialCode: "+81",
        phoneNumberLength: 10,
    },
    Jordan: {
        dialCode: "+962",
        phoneNumberLength: 9,
    },
    Kazakhstan: {
        dialCode: "+7",
        phoneNumberLength: 10,
    },
    Kenya: {
        dialCode: "+254",
        phoneNumberLength: 9,
    },
    Kiribati: {
        dialCode: "+686",
        phoneNumberLength: 5,
    },
    "Korea, North": {
        dialCode: "+850",
        phoneNumberLength: 9,
    },
    "Korea, South": {
        dialCode: "+82",
        phoneNumberLength: 9,
    },
    Kosovo: {
        dialCode: "+383",
        phoneNumberLength: 8,
    },
    Kuwait: {
        dialCode: "+965",
        phoneNumberLength: 8,
    },
    Kyrgyzstan: {
        dialCode: "+996",
        phoneNumberLength: 9,
    },
    Laos: {
        dialCode: "+856",
        phoneNumberLength: 8,
    },
    Latvia: {
        dialCode: "+371",
        phoneNumberLength: 8,
    },
    Lebanon: {
        dialCode: "+961",
        phoneNumberLength: 8,
    },
    Lesotho: {
        dialCode: "+266",
        phoneNumberLength: 8,
    },
    Liberia: {
        dialCode: "+231",
        phoneNumberLength: 7,
    },
    Libya: {
        dialCode: "+218",
        phoneNumberLength: 10,
    },
    Liechtenstein: {
        dialCode: "+423",
        phoneNumberLength: 7,
    },
    Lithuania: {
        dialCode: "+370",
        phoneNumberLength: 8,
    },
    Luxembourg: {
        dialCode: "+352",
        phoneNumberLength: 9,
    },
    Madagascar: {
        dialCode: "+261",
        phoneNumberLength: 9,
    },
    Malawi: {
        dialCode: "+265",
        phoneNumberLength: 9,
    },
    Malaysia: {
        dialCode: "+60",
        phoneNumberLength: 9,
    },
    Maldives: {
        dialCode: "+960",
        phoneNumberLength: 7,
    },
    Mali: {
        dialCode: "+223",
        phoneNumberLength: 8,
    },
    Malta: {
        dialCode: "+356",
        phoneNumberLength: 8,
    },
    "Marshall Islands": {
        dialCode: "+692",
        phoneNumberLength: 7,
    },
    Mauritania: {
        dialCode: "+222",
        phoneNumberLength: 8,
    },
    Mauritius: {
        dialCode: "+230",
        phoneNumberLength: 7,
    },
    Mexico: {
        dialCode: "+52",
        phoneNumberLength: 10,
    },
    Micronesia: {
        dialCode: "+691",
        phoneNumberLength: 7,
    },
    Moldova: {
        dialCode: "+373",
        phoneNumberLength: 8,
    },
    Monaco: {
        dialCode: "+377",
        phoneNumberLength: 8,
    },
    Mongolia: {
        dialCode: "+976",
        phoneNumberLength: 8,
    },
    Montenegro: {
        dialCode: "+382",
        phoneNumberLength: 8,
    },
    Morocco: {
        dialCode: "+212",
        phoneNumberLength: 9,
    },
    Mozambique: {
        dialCode: "+258",
        phoneNumberLength: 9,
    },
    Myanmar: {
        dialCode: "+95",
        phoneNumberLength: 9,
    },
    Namibia: {
        dialCode: "+264",
        phoneNumberLength: 9,
    },
    Nauru: {
        dialCode: "+674",
        phoneNumberLength: 7,
    },
    Nepal: {
        dialCode: "+977",
        phoneNumberLength: 10,
    },
    Netherlands: {
        dialCode: "+31",
        phoneNumberLength: 9,
    },
    "New Zealand": {
        dialCode: "+64",
        phoneNumberLength: 8,
    },
    Nicaragua: {
        dialCode: "+505",
        phoneNumberLength: 8,
    },
    Niger: {
        dialCode: "+227",
        phoneNumberLength: 8,
    },
    Nigeria: {
        dialCode: "+234",
        phoneNumberLength: 10,
    },
    "North Macedonia": {
        dialCode: "+389",
        phoneNumberLength: 8,
    },
    Norway: {
        dialCode: "+47",
        phoneNumberLength: 8,
    },
    Oman: {
        dialCode: "+968",
        phoneNumberLength: 8,
    },
    Pakistan: {
        dialCode: "+92",
        phoneNumberLength: 10,
    },
    Palau: {
        dialCode: "+680",
        phoneNumberLength: 7,
    },
    Panama: {
        dialCode: "+507",
        phoneNumberLength: 8,
    },
    "Papua New Guinea": {
        dialCode: "+675",
        phoneNumberLength: 7,
    },
    Paraguay: {
        dialCode: "+595",
        phoneNumberLength: 9,
    },
    Peru: {
        dialCode: "+51",
        phoneNumberLength: 9,
    },
    Philippines: {
        dialCode: "+63",
        phoneNumberLength: 10,
    },
    Poland: {
        dialCode: "+48",
        phoneNumberLength: 9,
    },
    Portugal: {
        dialCode: "+351",
        phoneNumberLength: 9,
    },
    Qatar: {
        dialCode: "+974",
        phoneNumberLength: 8,
    },
    Romania: {
        dialCode: "+40",
        phoneNumberLength: 10,
    },
    Russia: {
        dialCode: "+7",
        phoneNumberLength: 10,
    },
    Rwanda: {
        dialCode: "+250",
        phoneNumberLength: 9,
    },
    "Saint Kitts and Nevis": {
        dialCode: "+1-869",
        phoneNumberLength: 7,
    },
    "Saint Lucia": {
        dialCode: "+1-758",
        phoneNumberLength: 7,
    },
    "Saint Vincent and the Grenadines": {
        dialCode: "+1-784",
        phoneNumberLength: 7,
    },
    Samoa: {
        dialCode: "+685",
        phoneNumberLength: 7,
    },
    "San Marino": {
        dialCode: "+378",
        phoneNumberLength: 10,
    },
    "Sao Tome and Principe": {
        dialCode: "+239",
        phoneNumberLength: 7,
    },
    "Saudi Arabia": {
        dialCode: "+966",
        phoneNumberLength: 9,
    },
    Senegal: {
        dialCode: "+221",
        phoneNumberLength: 9,
    },
    Serbia: {
        dialCode: "+381",
        phoneNumberLength: 9,
    },
    Seychelles: {
        dialCode: "+248",
        phoneNumberLength: 7,
    },
    "Sierra Leone": {
        dialCode: "+232",
        phoneNumberLength: 8,
    },
    Singapore: {
        dialCode: "+65",
        phoneNumberLength: 8,
    },
    Slovakia: {
        dialCode: "+421",
        phoneNumberLength: 9,
    },
    Slovenia: {
        dialCode: "+386",
        phoneNumberLength: 8,
    },
    "Solomon Islands": {
        dialCode: "+677",
        phoneNumberLength: 7,
    },
    Somalia: {
        dialCode: "+252",
        phoneNumberLength: 8,
    },
    "South Africa": {
        dialCode: "+27",
        phoneNumberLength: 9,
    },
    "South Sudan": {
        dialCode: "+211",
        phoneNumberLength: 9,
    },
    Spain: {
        dialCode: "+34",
        phoneNumberLength: 9,
    },
    "Sri Lanka": {
        dialCode: "+94",
        phoneNumberLength: 9,
    },
    Sudan: {
        dialCode: "+249",
        phoneNumberLength: 9,
    },
    Suriname: {
        dialCode: "+597",
        phoneNumberLength: 7,
    },
    Sweden: {
        dialCode: "+46",
        phoneNumberLength: 9,
    },
    Switzerland: {
        dialCode: "+41",
        phoneNumberLength: 9,
    },
    Syria: {
        dialCode: "+963",
        phoneNumberLength: 9,
    },
    Taiwan: {
        dialCode: "+886",
        phoneNumberLength: 9,
    },
    Tajikistan: {
        dialCode: "+992",
        phoneNumberLength: 9,
    },
    Tanzania: {
        dialCode: "+255",
        phoneNumberLength: 9,
    },
    Thailand: {
        dialCode: "+66",
        phoneNumberLength: 9,
    },
    Togo: {
        dialCode: "+228",
        phoneNumberLength: 8,
    },
    Tonga: {
        dialCode: "+676",
        phoneNumberLength: 7,
    },
    "Trinidad and Tobago": {
        dialCode: "+1-868",
        phoneNumberLength: 7,
    },
    Tunisia: {
        dialCode: "+216",
        phoneNumberLength: 8,
    },
    Turkey: {
        dialCode: "+90",
        phoneNumberLength: 10,
    },
    Turkmenistan: {
        dialCode: "+993",
        phoneNumberLength: 8,
    },
    Tuvalu: {
        dialCode: "+688",
        phoneNumberLength: 5,
    },
    Uganda: {
        dialCode: "+256",
        phoneNumberLength: 9,
    },
    Ukraine: {
        dialCode: "+380",
        phoneNumberLength: 9,
    },
    "United Arab Emirates": {
        dialCode: "+971",
        phoneNumberLength: 9,
    },
    "United Kingdom": {
        dialCode: "+44",
        phoneNumberLength: 10,
    },
    "United States": {
        dialCode: "+1",
        phoneNumberLength: 10,
    },
    Uruguay: {
        dialCode: "+598",
        phoneNumberLength: 8,
    },
    Uzbekistan: {
        dialCode: "+998",
        phoneNumberLength: 9,
    },
    Vanuatu: {
        dialCode: "+678",
        phoneNumberLength: 7,
    },
    "Vatican City": {
        dialCode: "+379",
        phoneNumberLength: 10,
    },
    Venezuela: {
        dialCode: "+58",
        phoneNumberLength: 10,
    },
    Vietnam: {
        dialCode: "+84",
        phoneNumberLength: 10,
    },
    Yemen: {
        dialCode: "+967",
        phoneNumberLength: 9,
    },
    Zambia: {
        dialCode: "+260",
        phoneNumberLength: 9,
    },
    Zimbabwe: {
        dialCode: "+263",
        phoneNumberLength: 9,
    },
};
