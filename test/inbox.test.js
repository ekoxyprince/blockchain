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
assert.ok(inbox.options.address)
    })
    it('has a default message',async ()=>{
        const message = await inbox.methods.message().call()
       assert.equal(message,'Hello There')
    })
    it('add new message',async ()=>{
 await inbox.methods.setMessage('New Message').send({from:accounts[0]})
 const message = await inbox.methods.message().call()
 assert.equal(message,'New Message')
    })
})