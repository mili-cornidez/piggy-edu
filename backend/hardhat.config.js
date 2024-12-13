require("@matterlabs/hardhat-zksync-deploy");
require("@matterlabs/hardhat-zksync-solc");

module.exports = {
    zksolc: {
        version: "1.3.13",
        compilerSource: "binary",
        settings: {},
    },
    defaultNetwork: "zkSyncTestnet",
    networks: {
        zkSyncTestnet: {
            url: "https://zksync2-testnet.zksync.dev",
            ethNetwork: "https://rpc.ankr.com/eth_goerli",
            zksync: true,
        },
    },
    solidity: {
        version: "0.8.17",
    },
    zksolc: {
      version: "1.5.8", 
      compilerSource: "binary", 
      settings: {
          optimizer: {
              enabled: true,
              runs: 200,
          },
      },
  },  
};
