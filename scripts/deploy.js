// imports
const {ethers, run, network} = require("hardhat")

// async main
async function main() {
  const simpleStorageFactory = await ethers.getContractFactory(
    "SimpleStorage"
  )
  console.log("Deploying contract ...")
  const SimpleStorage = await simpleStorageFactory.deploy(); 
  await SimpleStorage.deployed(); 
  console.log(`contract deployed to : ${SimpleStorage.address}`); 
  if (network.config.chainId === 3 && process.env.ETHERSCAN_API_KEY) {
    await SimpleStorage.deployTransaction.wait(6);// wait 6 blocks for verification to happen
    await verify(SimpleStorage.address, []); 
  }

  let currentVal = await SimpleStorage.retrieve(); 
  console.log(`current Value is ${currentVal.toString()}`); 
  await SimpleStorage.store(10); 
  currentVal = await SimpleStorage.retrieve(); 
  console.log(`current Value is ${currentVal.toString()}`); 
}

async function verify(contractAddress, args) {
  console.log("Verifiying Contracts...."); 

  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    });     
  } catch (err) {
    if (err.message.toLowerCase().includes("already verified")) {
      console.log("Already verified"); 
    } 
    else {
      console.log(err);
    }
  }
}


// main
main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  })
