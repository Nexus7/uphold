#! /usr/bin/env node
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import the necessary modules
const commander_1 = require("commander");
const figlet_1 = __importDefault(require("figlet"));
const chalk_1 = __importDefault(require("chalk"));
const alephium_1 = require("./alephium");
const program = new commander_1.Command();
console.log(figlet_1.default.textSync("Uphold CLI Tool"));
console.log();
// Set up the command line interface
program
    .name("uphold")
    .description("A CLI for interacting with the Uphold API")
    .version("0.0.1");
// Details of the check command for the CLI
program
    .command('check-balance <chain> <address>')
    .description('Check the balance of an address from a specified chain')
    .action((chain, address) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(chalk_1.default.yellow(`Checking balance of ${address} on ${chain} chain`));
        // Add logic to check balance - Could be extended to other chains in future
        if (chain === 'alephium') {
            let balanceData = yield (0, alephium_1.getAlephiumAddressBalance)(address);
            let rawBalance = balanceData.balance / 1e18;
            let rawLockedBalance = balanceData.lockedBalance / 1e18;
            console.log(chalk_1.default.green(`Balance: ${rawBalance}, Locked Balance: ${rawLockedBalance}`));
        }
        else {
            console.log(chalk_1.default.red(`Chain ${chain} is not supported`));
        }
    }
    catch (error) {
        console.error("Error occurred!", error);
    }
}));
program.parse();
// Display help if no arguments are provided
if (!process.argv.slice(2).length) {
    program.outputHelp();
}
//# sourceMappingURL=index.js.map