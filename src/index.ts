#! /usr/bin/env node

// Import the necessary modules
import { Command } from "commander";
import figlet from "figlet";
import chalk from "chalk";
import { getAlephiumAddressBalance } from './alephium';


// Define the structure of balance data returned by getAlephiumAddressBalance
interface BalanceData {
    balance: number;
    lockedBalance: number;
}

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
            
            // Add logic to check balance - Could be extended to other chains in future
            if (chain === 'alephium') {
                let balanceData: BalanceData = await getAlephiumAddressBalance(address);
                let rawBalance = balanceData.balance / 1e18;
                let rawLockedBalance = balanceData.lockedBalance / 1e18;
                console.log(chalk.green(`Balance: ${rawBalance}, Locked Balance: ${rawLockedBalance}`));
            } else {
                console.log(chalk.red(`Chain ${chain} is not supported`));
            }
        } catch (error) {
            console.error("Error occurred!", error);
        }    
    });

program.parse();

// Display help if no arguments are provided
if (!process.argv.slice(2).length) {
    program.outputHelp();
}
    