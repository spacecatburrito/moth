const hre = require("hardhat")

async function main() {
  const SloMoths = await hre.ethers.getContractFactory("SloMoths")
  const slomoths = await SloMoths.deploy()
  await slomoths.deployed()
  console.log("SloMoths deployed to:", slomoths.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })