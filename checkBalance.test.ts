import chalk from "chalk";
import { checkBalance } from './src/checkBalance';  // Adjust the import path as needed
import { getAlephiumAddressBalance } from './src/alephium';

// Mock the getAlephiumAddressBalance function
jest.mock('./src/alephium', () => ({
    getAlephiumAddressBalance: jest.fn(),
}));

const mockedGetAlephiumAddressBalance = getAlephiumAddressBalance as jest.MockedFunction<typeof getAlephiumAddressBalance>;

describe('checkBalance', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        console.log = jest.fn();
    });

    it('should print balance for alephium chain', async () => {
        const address = '19WzSnmNC1SQ6v7RpFFXhpcMcFSiwM4nKTSdbwgSJfSHy';
        const chain = 'alephium';
        const balanceData = { balance: 2000000000000000000, lockedBalance: 1000000000000000000 };

        mockedGetAlephiumAddressBalance.mockResolvedValue(balanceData);

        await checkBalance(address, chain);

        expect(console.log).toHaveBeenCalledWith(chalk.green(`Balance of ${address} on ${chain} chain: 2`));
    });

    it('should print error message for unsupported chain', async () => {
        const address = '19WzSnmNC1SQ6v7RpFFXhpcMcFSiwM4nKTSdbwgSJfSHy';
        const chain = 'unsupportedChain';

        await checkBalance(address, chain);

        expect(console.log).toHaveBeenCalledWith(chalk.red(`Chain ${chain} is not supported`));
    });

    it('should handle error from getAlephiumAddressBalance', async () => {
        const address = '19WzSnmNC1SQ6v7RpFFXhpcMcFSiwM4nKTSdbwgSJfSHy';
        const chain = 'alephium';

        mockedGetAlephiumAddressBalance.mockRejectedValue(new Error('Some error'));

        await expect(checkBalance(address, chain)).rejects.toThrow('Some error');
    });
});
