import { Country } from "./data";
export declare function getCountryFlag(code: string): string | undefined;
export declare function getCountryPhoneCode(code: string): string | undefined;
export declare function getCountryByName(name: string): Country | undefined;
export declare function getCountryByFlag(flag: string): Country | undefined;
export declare function getAllCountries(): Country[];
