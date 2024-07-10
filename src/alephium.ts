const axios = require('axios');
require('dotenv').config({ path: './cfg/.env' })

// Function to retrieve balances from an alephium public endpoint
export const getAlephiumAddressBalance = async(address: string) : Promise<any> => {
    let response = null;

    return new Promise(async (resolve, reject) => {
        try {
            let alephiumUrl = `${process.env.ALEPHIUM_MAINNET_URL}/addresses/${address}/balance`;
            let response = await axios.get(alephiumUrl);
            resolve(response.data);
        } catch (error) {
            console.error(error);
            reject(error);
        }
    });
}

module.exports = { getAlephiumAddressBalance };

