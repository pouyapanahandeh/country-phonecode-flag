# country-phonecode-flag

`country-phonecode-flag` is a lightweight, easy-to-use npm package that provides utility functions for fetching country-related information, such as country flags, phone codes, and names. The package is framework-agnostic and can be used in any JavaScript or TypeScript project, including modern frameworks like React, Vue, and Angular.

## Installation
To install the `country-phonecode-flag` package, run the following command:
```
npm install country-phonecode-flag
```

## Usage

Import the utility functions and use them in your JavaScript or TypeScript project:

```javascript
import {
  getCountryFlag,
  getCountryPhoneCode,
  getCountryByName,
  getCountryByFlag,
  getAllCountries,
} from "country-phonecode-flag";
```

## API

getCountryFlag(code: string): string | undefined
Returns the flag emoji for a given country code (ISO 3166-1 alpha-2). Returns undefined if the country code is not found.

```javascript
const flag = getCountryFlag("US"); // 🇺🇸
```

getCountryPhoneCode(code: string): string | undefined
Returns the phone code for a given country code (ISO 3166-1 alpha-2). Returns undefined if the country code is not found.

```javascript
const phoneCode = getCountryPhoneCode("US"); // +1
```

getCountryByName(name: string): Country | undefined
Returns a Country object for a given country name. Returns undefined if the country name is not found.

```javascript
const country = getCountryByName("United States");
// {
//   name: "United States",
//   code: "US",
//   flag: "🇺🇸",
//   phoneCode: "+1",
// }
```

getCountryByFlag(flag: string): Country | undefined
Returns a Country object for a given flag emoji. Returns undefined if the flag is not found.

```javascript
const country = getCountryByFlag("🇺🇸");
// {
//   name: "United States",
//   code: "US",
//   flag: "🇺🇸",
//   phoneCode: "+1",
// }
```

### getAllCountries(): Country[]
Returns an array of all Country objects in the dataset.

```javascript
const countries = getAllCountries();
```

## example in react js
> Using the country-phonecode-flag package in a React component:
```javascript
import React from "react";
import {
  getCountryFlag,
  getCountryPhoneCode,
  getCountryByName,
  getCountryByFlag,
  getAllCountries,
} from "country-phonecode-flag";

function CountryInfo({ countryCode }) {
  const flag = getCountryFlag(countryCode);
  const phoneCode = getCountryPhoneCode(countryCode);

  return (
    <div>
      <h2>Country Information</h2>
      <p>Flag: {flag}</p>
      <p>Phone Code: {phoneCode}</p>
    </div>
  );
}

export default CountryInfo;
```

The package can be similarly used with other frameworks like Vue or Angular, or in plain JavaScript or TypeScript projects.