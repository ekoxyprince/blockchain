const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3")
const assert = require('assert')
const abi = require("./compile").abi
const bytecode = require("./compile").evm.bytecode.object
const mnemonicPhrase = // account mnemonics
const provider = new HDWalletProvider({
 mnemonic:{
    phrase:mnemonicPhrase
 },
 providerOrUrl://infura endpoint
})
const web3 = new Web3(provider)
const deploy = async ()=>{
 const accounts = await web3.eth.getAccounts()
 console.log('attempting to deploy from',accounts[0])
const inbox = await new web3.eth.Contract(abi)
.deploy({data:bytecode,arguments:['Hello There']})
 .send({from:accounts[0],gas:'1000000'})
 console.log("contract was deployed to "+inbox.options.address)
}
deploy()
