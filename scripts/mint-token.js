// 0xF34965E65C9A9c99CDc6bF9E5C0Ab9f2F1dC37c7
const hre = require("hardhat");

const WALLET_ADDRESS = "0xBcd4042DE499D14e55001CcbB24a551F3b954096";
const CONTRACT_ADDRESS = "0xe7f1725e7734ce288f8367e1bb143e90bb3f0512";

async function main(_URI) {
  const SloMoths = await hre.ethers.getContractFactory("SloMoths");

  const contract = SloMoths.attach(CONTRACT_ADDRESS);
  await contract._safeMint(WALLET_ADDRESS).then((txn) => {
    // Log Txn
    console.log(txn.hash);
    return txn;
  });
}