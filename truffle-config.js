const HDWalletProvider = require('@truffle/hdwallet-provider');
const infuraURL = 'https://rinkeby.infura.io/v3/d3fd0cb2da674dfeb8bcddf227ce26ef';
const mnemonic= 'van gauge heavy liar sell solution upper puzzle reflect pride edit cluster'


// const HDWalletProvider = require('@truffle/hdwallet-provider');
// const infuraKey = "fj4jll3k.....";
//
// const fs = require('fs');
// const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {

  networks: {
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, infuraURL),
      network_id: 4,       
      gas: 5500000,        
    },
  },


  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.10",    // Fetch exact version from solc-bin (default: truffle's version)
    }
  }
}
