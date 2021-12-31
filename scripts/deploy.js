const main = async () => {
    const [deployer] = await hre.ethers.getSigners();
    const accountBalance = await deployer.getBalance();
  
    console.log('Deploying contracts with account: ', deployer.address);
    console.log('Account balance: ', accountBalance.toString());
  
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
    const waveContract = await waveContractFactory.deploy({
        value: hre.ethers.utils.parseEther("1"),
    });

    await waveContract.deployed();

    console.log("WavePortal address: ", waveContract.address);
    };

    const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
  };
  
  runMain();

// WavePortal contract deployed at address: 0xad5532d6eB04e57302CC35dFA69F753387EfF08e