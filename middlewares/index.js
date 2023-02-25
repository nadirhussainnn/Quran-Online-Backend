const jwt = require("jsonwebtoken");
const jwt_secret=process.env.JWT_SECRET;


const verifyToken = async (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["authorization"];

  if (!token) {
    res.status(200).send({ success: false, message: "A token is required." });
  }

  try {
    const decodedToken = jwt.verify(token, jwt_secret);
    req.user = decodedToken;
  } catch (error) {
    res.status(400).send({ msg: "Invalid Token" });
  }
  return next();
};

module.exports = verifyToken;