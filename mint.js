import { ThirdwebSDK } from "@thirdweb-dev/sdk";

// You can switch out this provider with any wallet or provider setup you like.
const provider = ethers.Wallet.createRandom();
const sdk = new ThirdwebSDK(provider);
const contract = sdk.getToken("0xb89405C28E57566fE36507F0e3547299ee71A18e");

const toAddress = "0x798611431f0FDf2978E06E89949c5ae9Bcb7B2B8"; // Address of the wallet you want to mint the tokens to
const amount = "5"; // The amount of this token you want to mint

await contract.mintTo(toAddress, amount);