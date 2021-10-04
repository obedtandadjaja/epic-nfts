const main = async () => {
  // compiles contract and get necessary files
  // note that hre is built and included on the fly using hardhat.config.js.
  const nftContractFactory = await hre.ethers.getContractFactory('MyEpicNFT');

  // create local Eth network but just for this contract. When script ends it
  // will destroy the network
  const nftContract = await nftContractFactory.deploy();

  // wait for contract to mine and deployed to local blockchain
  await nftContract.deployed();

  // print the address of the deployed contract
  console.log('Contract deployed to:', nftContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
