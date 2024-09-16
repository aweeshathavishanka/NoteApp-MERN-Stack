const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.sendStatus(403); // Return 403 Forbidden if no token is provided
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(401); // Return 401 Unauthorized if token verification fails
    req.user = user;
    next();
  });
}

module.exports = authenticateToken;
