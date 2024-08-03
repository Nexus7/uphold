import chalk from "chalk";
import { getAlephiumAddressBalance } from './alephium';
import { BalanceData } from './BalanceData';

export const checkBalance = async (address: string, chain: string) => {                
    // Add logic to check balance - Could be extended to other chains in future
    if (chain === 'alephium') {
        console.log(chalk.yellow(`Checking balance of ${address} on ${chain} chain`));
        let balanceData: BalanceData = await getAlephiumAddressBalance(address);
        let rawBalance = balanceData.balance / 1e18;
        let rawLockedBalance = balanceData.lockedBalance / 1e18;
        console.log(`Balance of ${address} on ${chain} chain: ${rawBalance}`);
    } else {
        console.log(chalk.red(`Chain ${chain} is not supported`));
    }
}

