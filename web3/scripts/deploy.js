const { ethers } = require("hardhat");

async function main() {
  const NAME = "AI Generated NFT";
  const SYMBOL = "AINFT";
  const COST = ethers.parseUnits("1", "ether"); // 1 ETH

  const NFT = await ethers.getContractFactory("NFT");
  const nft = await NFT.deploy(NAME, SYMBOL, COST);
  await nft.waitForDeployment();

  console.log(`Deployed NFT Contract at: ${nft.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
