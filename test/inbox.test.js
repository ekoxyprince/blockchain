const assert = require('assert')
const ganache = require('ganache-cli')
const Web3 = require('web3')
const web3 = new Web3(ganache.provider())
const {abi} = require("../compile")
const bytecode = require("../compile").evm.bytecode.object



let accounts;
let inbox;
beforeEach(async ()=>{
    // fetch all accounts 
 accounts = await web3.eth.getAccounts()
//deploy the contract
inbox = await new web3.eth.Contract(abi)
.deploy({data:bytecode,arguments:['Hello There']})
.send({from:accounts[0],gas:'1000000'})
})


describe('Inbox',()=>{
    it('deploys a contract',()=>{
        console.log(inbox)
    })
})