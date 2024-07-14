#! /usr/bin/env node

// Import the necessary modules
import { Command } from "commander";
import figlet from "figlet";
import { checkBalance } from "./checkBalance.js";

const program = new Command();

console.log(figlet.textSync("Uphold CLI Tool"));
console.log();

// Set up the command line interface
program
    .name("uphold")
    .description("A CLI for interacting with the Uphold API")
    .version("0.0.1")

// Details of the check command for the CLI
program
    .command('check-balance <chain> <address>')
    .description('Check the balance of an address from a specified chain')
    .action(async (chain: string, address: string) => {
        try {
            let balanceResult = await checkBalance(address, chain);
            console.log(`Balance of ${address} on ${chain} chain: ${balanceResult}`);
        } catch (error) {
            console.error("Error occurred!", error);
        }    
    });

program.parse();

// Display help if no arguments are provided
if (!process.argv.slice(2).length) {
    program.outputHelp();
}
    