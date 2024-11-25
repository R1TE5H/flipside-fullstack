const jwt = require("jsonwebtoken");

// ! For Authorization

module.exports = function (req, res, next) {
  // Get the JSON Web Token from the request header
  const token = req.header("x-auth-token");

  // If no token is provided:
  if (!token) return res.status(401).send("Access Denied. No Token Provided");

  // If a token is provided:
  try {
    // Decode to see if they are authorized
    const decoded = jwt.verify(token, JWT_PROTECTED_TOKEN);
    req.user = decoded;
    next();
  } catch (ex) {
    // If not return a 400 error
    res.status(400).send("Invalid Token");
  }
};
