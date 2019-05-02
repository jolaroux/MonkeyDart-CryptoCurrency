var abi = require('ethereumjs-abi')

// uint256 initialSupply,
        //string tokenName,
        //string tokenSymbol

var parameterTypes = ["uint256", "string", "string"];
var parameterValues = ["6897114116", "MonkeyDart", "MNKY"];

var encoded = abi.rawEncode(parameterTypes, parameterValues);

console.log(encoded.toString('hex'));

