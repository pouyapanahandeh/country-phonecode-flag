"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllCountries = exports.getCountryByFlag = exports.getCountryByName = exports.getCountryPhoneCode = exports.getCountryFlag = void 0;
const data_1 = require("./data");
function getCountryFlag(code) {
    const country = data_1.countries[code];
    return country ? country.flag : undefined;
}
exports.getCountryFlag = getCountryFlag;
function getCountryPhoneCode(code) {
    const country = data_1.countries[code];
    return country ? country.phoneCode : undefined;
}
exports.getCountryPhoneCode = getCountryPhoneCode;
function getCountryByName(name) {
    return Object.values(data_1.countries).find((c) => c.name === name);
}
exports.getCountryByName = getCountryByName;
function getCountryByFlag(flag) {
    return Object.values(data_1.countries).find((c) => c.flag === flag);
}
exports.getCountryByFlag = getCountryByFlag;
function getAllCountries() {
    return Object.values(data_1.countries);
}
exports.getAllCountries = getAllCountries;
