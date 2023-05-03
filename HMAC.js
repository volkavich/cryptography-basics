//Hash Based Message Authentication Code

const { createHmac } = require("crypto");

const key = "super-key-dude";
const message = "Hi there!";

const hmac = createHmac("sha256", key).update(message).digest("hex");

const key1 = "not-super-key";

const hmac2 = createHmac("sha256", key1).update(message).digest("hex");

console.log(hmac);
console.log(hmac2);
