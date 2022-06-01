const { task } = require("hardhat/config");

task(
    "block_Number",
    "Tells block Number of Blockchain",
).setAction(async (taskArgs, hre) => {
    const block_Number = await hre.ethers.provider.getBlockNumber(); 
    console.log(`current block Number is ${block_Number}`); 
})

module.exports = {}; 
