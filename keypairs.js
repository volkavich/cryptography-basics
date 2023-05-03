const { generateKeyPairSync } = require("crypto");

//rsa --> rivest-shamir-adleman

const { privateKey, publicKey} = generateKeyPairSync("rsa",{
    modulusLength: 2048, //lenght of key in bits
    publicKeyEncoding:{
        type:"spki",  //recommended to be spki
        format:"pem"
    },
    privateKeyEncoding:{
        type:"pkcs8", //recommened to be pkcs8
        format:"pem"
    },
});



// console.log(publicKey);
// console.log(privateKey);

module.exports = {
    privateKey, publicKey
}