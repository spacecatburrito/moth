const { task } = require("hardhat/config");
const { readFileSync, readdirSync, rmSync } = require("fs");
// const privateKey = fs.readFileSync(".secret").toString().trim()

require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-web3");
require("@alch/alchemy-web3");

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: "./artifacts",
  },
  defaultNetwork: "matic_testnet",
  networks: {
    hardhat: {},
    matic_testnet: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [
        YOUR_PRIVATE_KEY =
          "0xf214f2b2cd398c806f84e317254e0f0b801d0643303237d97a22a48e01628897",
      ],
      gasPrice: 8000000000,
    },
  },
};
