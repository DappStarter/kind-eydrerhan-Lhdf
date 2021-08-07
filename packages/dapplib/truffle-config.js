require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hidden enter october food fiscal rate sister purity half arena metal gauge'; 
let testAccounts = [
"0xdc408816d4a66386deb0b9fcc47eec1ab9abe09cb93b449ddbe8c85cc190ff7b",
"0x0c290905fd5e2422cd6943ad77e68b32f327954d7ef5370d7ce7cdbef4ff6729",
"0x82b37c494e33993610da2f03626447c550ce13563a790c323da4dbb0811d7c39",
"0xbe74c75fd94c1b8db2b0ad5307ba411d22b643fe3fcb91543b94f67690a1075c",
"0xd3a5c69099e2abd5d0d5232a5e50e1fb8d7a60852df2ccec1c040a58b7a4e4c8",
"0x8cae6edbb22ff0e651c0c71fbb95797b338285dc2024f22c366224ea8d13a214",
"0x6989bfdde9c9d66f3c67d9cff6571d753460f69f449580359d8fd9464eeb3d95",
"0x74ce9eba68d5295a136f50581e544ae237019aa1f7fa45759c103485686f6646",
"0x21c6c3db57d0b9a43c00b99571fac0ec1fc0308675990b2ca8a385561077dece",
"0x9ed8030ae7a7bf76c1657f0135c78b65d6e02af6d8df11121df29fd1ac31b711"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

