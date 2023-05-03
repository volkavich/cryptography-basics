const { createHash } = require("crypto"); //importing crypto module

//Hash function from crypto module
function hash(input) {
  return createHash("sha256").update(input).digest("hex"); //using sha256 and returning digest
}

//Hashing first password
let password = "rahman";
const hash1 = hash(password);

//Hashing second password
let password2 = "rahman1";
const hash2 = hash(password2);

//compairing hash digest
if (hash1 == hash2) {
  console.log("Match");
} else {
  console.log("Not Match");
}
