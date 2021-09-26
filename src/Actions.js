import Web3 from 'web3';
import { Abi } from './Abi';
const contractAddr = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
let address="";
async function GetContract() {
    await window.ethereum.enable();
    const web3 = new Web3(Web3.givenProvider);
    const accounts = await window.ethereum.request({ method: 'eth_accounts' });
    address = accounts[0];
    const Contract = new web3.eth.Contract(Abi, contractAddr);
    return Contract;
}


export const Mint = async (amount) => {
    let Contract = await GetContract();
    const res = await Contract.methods.mint(address,amount).send({from:address});
    return true
}

export const TotalSupply = async () => {
    let Contract = await GetContract();
    const res = await Contract.methods.totalSupply().call();
    return res;
}

export const Burn = async (amount) => {
    let Contract = await GetContract();
    await Contract.methods.burn(amount).send({from:address});
    alert("burned");
}

export const Freeze = async () => {
    let Contract = await GetContract();
    await Contract.methods.freeze().call();
    alert("freezed");
    
}

export const UnFreeze = async () => {
    let Contract = await GetContract();
    await Contract.methods.unfreeze().call();
    alert("unfreezed");
    
}