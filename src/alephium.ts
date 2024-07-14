// Import the necessary modules
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config({ path: './cfg/.env' });

// Define the structure of the balance data returned by the API
interface BalanceData {
    balance: number;
    lockedBalance: number;
}


// Function to retrieve balances from an alephium public endpoint
export const getAlephiumAddressBalance = async(address: string) : Promise<BalanceData> => {
    try {
        const alephiumUrl = `${process.env.ALEPHIUM_MAINNET_URL}/addresses/${address}/balance`;
        const response = await axios.get(alephiumUrl);
        return response.data as BalanceData;
    } catch (error) {
        console.error('Error fetching Alephium address balance:', error);
        throw error;
    }
}