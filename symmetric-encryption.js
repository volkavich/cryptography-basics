// encrypt --> cipher --> decrypt

//symmetric --> only one secret key

const { createCipheriv, randomBytes, createDecipheriv } = require("crypto");

//Setup
const message = "I'm Rahman";
const key = randomBytes(32);
const iv = randomBytes(16);

//Encrypt Setup
const cipher = createCipheriv("aes256", key, iv);

//Encrypt
const encryptMessage =
  cipher.update(message, "utf8", "hex") + cipher.final("hex");

//Decrypt setup
const decipher = createDecipheriv("aes256", key, iv);

//Decrypt
const decryptMessage =
  decipher.update(encryptMessage, "hex", "utf-8") + decipher.final("utf8");

console.log(`ciphered: ${encryptMessage.toString("utf-8")}`);
console.log(`Deciphered: ${decryptMessage.toString("utf-8")}`);
