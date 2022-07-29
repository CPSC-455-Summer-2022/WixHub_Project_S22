const jwt = require("jsonwebtoken");


function generateAccessToken(username) {
  return jwt.sign({ username }, "thisIsAuthorized", { expiresIn: "1800s", });
}

module.exports = {
    generateAccessToken,
  };