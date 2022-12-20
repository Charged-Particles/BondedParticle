const hre = require("hardhat");

async function main() {
  const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL_GOERLI);
  const signer = hre.ethers.Wallet.fromMnemonic(process.env.MNENOMIC);

  const myWallet = signer.connect(provider)

  const Soul = await hre.ethers.getContractFactory("Soul", myWallet);
  const soul = await Soul.deploy();

  await soul.deployed();

  console.log(
    `Deployed to ${soul.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});