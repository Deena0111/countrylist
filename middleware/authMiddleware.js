const jwt = require("jsonwebtoken");

const authcheck = (req, res, next) => {
  try {
    if (req?.headers?.authorization?.startsWith("Bearer")) {
      const headertoken = req.headers.authorization.split(" ")[1];
      try {
        const generatetoken = jwt.verify(headertoken, process.env.SECRET);
        req.admin = generatetoken;
        next();
      } catch (err) {
        res.status(401).json({
          error: err.message,
        });
      }
    } else {
      throw new Error("There is no attched to header");
    }
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};
module.exports = { authcheck };
