import chalk from "chalk";
import { getAlephiumAddressBalance } from './alephium';

// Define the structure of balance data returned by getAlephiumAddressBalance
interface BalanceData {
    balance: number;
    lockedBalance: number;
}

export const checkBalance = async (address: string, chain: string) => {
    console.log(chalk.yellow(`Checking balance of ${address} on ${chain} chain`));
                
    // Add logic to check balance - Could be extended to other chains in future
    if (chain === 'alephium') {
        let balanceData: BalanceData = await getAlephiumAddressBalance(address);
        let rawBalance = balanceData.balance / 1e18;
        let rawLockedBalance = balanceData.lockedBalance / 1e18;
        return rawBalance;
    } else {
        console.log(chalk.red(`Chain ${chain} is not supported`));
    }
}