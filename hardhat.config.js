require('dotenv').config();
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      chainId: 1,
      forking: {
        url: process.env.RPC_URL_MAINNET,
        blockNumber: 15341762,
      }
    },
    goerli: {
      url: process.env.RPC_URL_GOERLI,
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY, 
  }
};
