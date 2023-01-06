const fs = require("fs");
const path = require("path");
const solc = require('solc')

//path to our contract
const inboxPath = path.join(__dirname,"contracts","inbox.sol");
//reading the contract using the fs module
const source = fs.readFileSync(inboxPath,'utf-8')
//setting solidity input for the solc
let input = {
    language:'Solidity',
    sources:{
        'inbox.sol':{
            content:source
        }
    },
    settings:{
        outputSelection:{
            '*':{
                '*':['*']
            }
        }
    }
};
//compiled output inn JSON format
let output = JSON.parse(solc.compile(JSON.stringify(input)))

//exporting our contract
module.exports = output.contracts['inbox.sol']['Inbox']



//Using a for in loop to loop through all contracts
// for (let contractName in output.contracts['inbox.sol']){
//     console.log(
//         contractName + ': ' + output.contracts['inbox.sol'][contractName].evm.bytecode.object
//     )
// }

//Resolving Asynchronously
// const source = (cb)=>{
//     fs.readFile(inboxPath,(err,data)=>{
//         if(err) throw err;
//        cb(data) 
//     })
// }
// source(data=>{
//    const output = data.toString()
//    console.log(output)
// })