const {publicEncrypt, privateDecrypt} = require("crypto");
const {publicKey, privateKey}= require("./keypairs");

const message = "Hi Guys! This feels Good. Maybe!";

const encryptMessage = publicEncrypt(
    publicKey,
    Buffer.from(message)
);

console.log(`EncryptedMessage: ${encryptMessage.toString("Hex")}`);

const decryptMessage = privateDecrypt(
    privateKey,
    Buffer.from(encryptMessage)
)


console.log(`DecryptedMessage: ${decryptMessage.toString("utf-8")}`);