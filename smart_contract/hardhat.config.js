//https://eth-rinkeby.alchemyapi.io/v2/n-xpIDkRMwFOKQyBXNnbEwub1y29z3V1

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/n-xpIDkRMwFOKQyBXNnbEwub1y29z3V1',
      accounts: [ 'b6da511432a1f8a252fa99a5a5d07beb56ac3226a4495b4e3ac10061da6fd766' ]
    }
  }
}