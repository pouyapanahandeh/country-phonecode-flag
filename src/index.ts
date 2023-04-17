import { countries, Country } from "./data";

export function getCountryFlag(code: string): string | undefined {
  const country = countries[code];
  return country ? country.flag : undefined;
}

export function getCountryPhoneCode(code: string): string | undefined {
  const country = countries[code];
  return country ? country.phoneCode : undefined;
}

export function getCountryByName(name: string): Country | undefined {
  return Object.values(countries).find((c) => c.name === name);
}

export function getCountryByFlag(flag: string): Country | undefined {
  return Object.values(countries).find((c) => c.flag === flag);
}

export function getAllCountries(): Country[] {
  return Object.values(countries);
}