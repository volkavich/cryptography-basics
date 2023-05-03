const { scryptSync, randomBytes, timingSafeEqual } = require("crypto");
const users = [];

function signup(email, password) {
  const salt = randomBytes(16).toString("hex");
  const hashedPassword = scryptSync(password, salt, 64).toString("hex");

  const user = { email, password: `${salt}:${hashedPassword}` };

  users.push(user);

  return user;
}

function login(email, password) {
  const user = users.find((v) => v.email === email);

  const [salt, key] = user.password.split(":");
  const hashedBuffer = scryptSync(password, salt, 64);

  const KeyBuffer = Buffer.from(key, "hex");
  const match = timingSafeEqual(hashedBuffer, KeyBuffer);

  if (match) {
    return "Login Sucess!";
  } else {
    return "Login Failed";
  }
}

//user
let signUpEmail = "abdulrahman6093@gmail.com";
let singUpPassword = "12345678";

signup(signUpEmail, singUpPassword);

result = login(loginEmail, loginPassword);

console.log(result);
