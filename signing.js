const { createSign, createVerify } = require("crypto");
const { publicKey, privateKey } = require("./keypairs");

const message = "This is the Message!";

//SIGNing

const signer = createSign("rsa-sha256");

signer.update(message);

const signature = signer.sign(privateKey, "hex");

//VERIFYing

const verifier = createVerify("rsa-sha256");

verifier.update(message);

const isVerified = verifier.verify(publicKey, signature, "hex");

console.log(`signature: ${signature.toString("hex")}`);