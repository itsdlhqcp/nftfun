const HDWalletProvider = require("@truffle/hdwallet-provider");
const keys = require("./keys.json");

module.exports = {
  contracts_build_directory: "./public/contracts",
  networks: {
   
    development: {
     host: "127.0.0.1",     // Localhost (default: none)
     port: 7545,            // Standard Ethereum port (default: none)
     network_id: "*",       // Any network (default: none)
    },
    sepolia: {
      provider: () => new HDWalletProvider(
        keys.DEPLOYER_KEY,
        keys.INFURA_SEPOLIA_URL
      ),
      network_id: "11155111",
      gasPrice: 2500000000,
      networkCheckoutTimeout: 10000,
    }
  },
  compilers: {
    solc: {
      version: "0.8.18",      // Fetch exact version from solc-bin (default: truffle's version)
     
    }
  },

};
