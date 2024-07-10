interface BalanceData {
    balance: number;
    lockedBalance: number;
}
export declare const getAlephiumAddressBalance: (address: string) => Promise<BalanceData>;
export {};
