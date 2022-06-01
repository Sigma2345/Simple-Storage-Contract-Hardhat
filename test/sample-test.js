const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Simple Storage Contract", function () {
  let ownerAccounts, simpleStorageFactory, SimpleStorage; 
  beforeEach(async function () {
    // ownerAccounts = await ethers.getSigners(); 
    simpleStorageFactory = await ethers.getContractFactory('SimpleStorage');
    SimpleStorage = await simpleStorageFactory.deploy(); 
    await SimpleStorage.deployed(); 
  })

  it("should start with favorite number 0", async function () {
    const favoriteNumber = await SimpleStorage.retrieve(); 
    // console.log(favoriteNumber.toString());
    expect(favoriteNumber.toString()).to.equal('0'); 
  })

  it("Should change Number to 82", async function () {
    await SimpleStorage.store(82); 
    const favoriteNumber = await SimpleStorage.retrieve(); 
    const expectedNumber = 82; 
    expect(favoriteNumber.toString()).to.equal(expectedNumber.toString()); 
  })

});
