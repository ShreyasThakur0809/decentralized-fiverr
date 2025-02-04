const jwt = require("jsonwebtoken");

const payload = { userId: "12345" }; // Replace with your test data
const secret = "shreyas123"; // Your JWT_SECRET
const token = jwt.sign(payload, secret, { expiresIn: "1h" }); // Token valid for 1 hour

console.log("Generated JWT Token:", token);
