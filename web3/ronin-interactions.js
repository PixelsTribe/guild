const Web3 = require('web3');

// Replace 'https://api.roninchain.com/rpc' with the RPC endpoint you want to use
const rpcEndpoint = 'https://api.roninchain.com/rpc';

// Create a web3 instance and connect to the Ronin Network
const web3 = new Web3(new Web3.providers.HttpProvider(rpcEndpoint));

// Example: Print the current block number
web3.eth.getBlockNumber()
  .then((blockNumber) => {
    console.log(`Current Block Number: ${blockNumber}`);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
