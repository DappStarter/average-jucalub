require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture rebel frame security iron note prefer property gesture glove flat genre'; 
let testAccounts = [
"0x5be21b9894141e3afaa094ef2e7da36ae999cd7fc32138a11b4e27696ee75940",
"0xf5146f2f0a9eaff725ba7b98a9c8e750f531eced0f1738b5c05178f53de056e5",
"0x35e0a382f532ff8b390135ff4c2505459068aa7bd3066a2cace39e542f675265",
"0x67a0d59868d597d4af2b00103c463415c08d50e4c67ff4dfb3e4b49f389f6b8b",
"0x7e4c470155887b473b8f7c96e5a9228c064f7ae1c2a841e810d5fb53cefb5e9b",
"0x5341f03d6cdf7ad7e70363ef252e310316881736f2a77505f178c8eafb2ba720",
"0xf324f42b54cf905f8e311a03459a3ebd927b3cb58eee4e5cde902e952493e061",
"0xb2c068b2ae22daf36933d4ee4bd976d3d03d92f265b6743e10f48da41bdcb98b",
"0x9b8e845448f1c509cc3eb3102d1568f1629c658a8473917a7d0231ee5e37c3a3",
"0x368742010ec9a749f31e9c9dfce0869eef4c9eeb1a5d11357e0f18934ad27253"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
