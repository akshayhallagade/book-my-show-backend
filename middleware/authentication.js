const { getTokenData } = require("../lib/user.lib");

function AuthenticationMiddleware() {
  return async (req, res, next) => {
    const token = req.headers["authorization"];
    if (token) {
      const { id, role } = await getTokenData(token.split(" ")[1]);
      req.userId = id;
      req.userRole = role;
      console.log(req.userId, req.userRole);
    }
    next();
  };
}

function EnsureAuthenticated(role = []) {
  return function (req, res, next) {
    if (req.userId) {
      if (role.includes(req.userRole)) next();
      return res.status(403).json({ message: "Not Authorized" });
    }
    return res.status(401).json({ message: "Unauthorized ! Log in First" });
  };
}

module.exports = { AuthenticationMiddleware, EnsureAuthenticated };
