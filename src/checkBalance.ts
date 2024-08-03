import chalk from "chalk";
import { getAlephiumAddressBalance } from './alephium';
import { BalanceData } from './BalanceData';

export const checkBalance = async (address: string, chain: string) => {                
    // Add logic to check balance - Could be extended to other chains in future
    if (chain === 'alephium') {
        let balanceData: BalanceData = await getAlephiumAddressBalance(address);
        let balance = balanceData.balance / 1e18;
        console.log(chalk.green(`Balance of ${address} on ${chain} chain: ${balance}`));
    } else {
        console.log(chalk.red(`Chain ${chain} is not supported`));
    }
}

