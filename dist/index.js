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
const { Command } = require("commander");
const figlet = require("figlet");
const chalk = require("chalk");
const program = new Command();
console.log(figlet.textSync("Uphold CLI Tool"));
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
        console.log(chalk.yellow(`Checking balance of ${address} on ${chain} chain`));
        // Add logic to check balance
    }
    catch (error) {
        console.error("Error occurred!", error);
    }
}));
program.parse();
if (!process.argv.slice(2).length) {
    program.outputHelp();
}
//# sourceMappingURL=index.js.map