#! /usr/bin/env node

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
    .version("0.0.1")

// Details of the check command for the CLI
program
    .command('check-balance <chain> <address>')
    .description('Check the balance of an address from a specified chain')
    .action(async (chain: string, address: string) => {
        try {
            console.log(chalk.yellow(`Checking balance of ${address} on ${chain} chain`));
            // Add logic to check balance
        } catch (error) {
            console.error("Error occurred!", error);
        }    
    });

program.parse();

if (!process.argv.slice(2).length) {
    program.outputHelp();
}
    