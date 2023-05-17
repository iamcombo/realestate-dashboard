import { ethers } from 'ethers';

const connectContract = (contractAddress: string, contractABI: object[]) => {
  let Contract;
  let Provider;
  try {
    const { ethereum } = window;
    //= checking for eth object in the window
    if (ethereum) {
      Provider = new ethers.providers.Web3Provider(ethereum as object);
      const signer = Provider.getSigner();
      // instantiating new connection to the contract
      Contract = new ethers.Contract(contractAddress, contractABI, signer);
    } else {
      console.log("Ethereum object doesn't exist!");
    }
  } catch (error) {
    console.log('ERROR:', error);
  }
  return { Contract, Provider };
};

export default connectContract;
