import { ethers, hardhatArguments } from 'hardhat';
import * as Config from './config';

async function main() {
    await Config.initConfig();
    const network = hardhatArguments.network ? hardhatArguments.network : 'dev';
    const [deployer] = await ethers.getSigners();
    console.log('deploy from address: ', deployer.address);

    // const Floppy = await ethers.getContractFactory("Floppy");
    // const floppy = await Floppy.deploy();
    // console.log('Floppy address: ', floppy.address);
    // Config.setConfig(network + '.Floppy', floppy.address);

    // const Vault = await ethers.getContractFactory("Vault");
    // const vault = await Vault.deploy();
    // console.log('Floppy address: ', vault.address);
    // Config.setConfig(network + '.Vault', vault.address);
    
    // const USDT = await ethers.getContractFactory("USDT");
    // const usdt = await USDT.deploy();
    // console.log('USDT address: ', usdt.address);
    // Config.setConfig(network + '.USDT', usdt.address);

    // const Ico = await ethers.getContractFactory("FLPCrowdSale");
    // const ico = await Ico.deploy(1000,100,'0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC', '0xD503e6dE924B2F52ABB82bF0DD8EcDCB029d67F6');
    // console.log('ICO address: ', ico.address);
    // Config.setConfig(network + '.ico', ico.address);

    
    // const Hero = await ethers.getContractFactory("Hero");
    // const hero = await Hero.deploy();
    // console.log('stman hero address: ', hero.address);
    // Config.setConfig(network + '.Hero', hero.address);


    const MKP = await ethers.getContractFactory("HeroMarketplace");
    const heroMarketplace = await MKP.deploy("0xD503e6dE924B2F52ABB82bF0DD8EcDCB029d67F6", "0x4485c1Be2996a0af9d03d42ad0971C0915341D42");
    console.log('Market deployed at: ', heroMarketplace.address);
    
    // const Auction = await ethers.getContractFactory("Auction");
    // const auction = await Auction.deploy("0xd54D6d5BD983a6cA18F8820f80E0A970FE4A9a8c", "0x65f00a282A58B30f8376D41832d76CeCB7b6186C");
    // console.log('Market deployed at: ', auction.address);
    // Config.setConfig(network + '.Auction', auction.address);

    await Config.updateConfig();
    
}

main().then(() => process.exit(0))
    .catch(err => {
        console.error(err);
        process.exit(1);
});
