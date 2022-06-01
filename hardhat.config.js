require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require('./tasks/block_number');
require('hardhat-gas-reporter');
require('solidity-coverage');   
require("dotenv").config(); 
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html

//solidity coverage to check for which lines test not written

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL; 
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;  

module.exports = {
  defaultNetwork: "hardhat", 
  networks: {
    hardhat:{},
    rinkeby: {
      url: RINKEBY_RPC_URL, 
      accounts: [PRIVATE_KEY],
      chainId: 4
    },
    localhost: {
      url: "http://127.0.0.1:8545/",
      chainId: 31337, 
    }
  },
  solidity: "0.8.8",
  etherscan: {
    apiKey: ETHERSCAN_API_KEY, 
  },
  gasReporter: {
    enabled: true,
    outputFile: 'gas_report.txt',
    noColors: true,
    currency: "INR", 
    token: "MATIC", 
  }
};
