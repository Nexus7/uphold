"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAlephiumAddressBalance = void 0;
const axios = require('axios');
require('dotenv').config({ path: './cfg/.env' });
// Function to retrieve balances from an alephium public endpoint
const getAlephiumAddressBalance = (address) => __awaiter(void 0, void 0, void 0, function* () {
    let response = null;
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let alephiumUrl = `${process.env.ALEPHIUM_MAINNET_URL}/addresses/${address}/balance`;
            let response = yield axios.get(alephiumUrl);
            resolve(response.data);
        }
        catch (error) {
            console.error(error);
            reject(error);
        }
    }));
});
exports.getAlephiumAddressBalance = getAlephiumAddressBalance;
module.exports = { getAlephiumAddressBalance: exports.getAlephiumAddressBalance };
//# sourceMappingURL=alephium.js.map