const jwt = require("jsonwebtoken");
const user = require('../models/schema')

const config = process.env;

const verifyToken = async (req, res, next) => {
  const token =
    req.cookies.token_key;

  const so = req.cookies.user;
  const users = await user.findOne({ _id: so })
  if (users) {
    if (!token) {
      return res.redirect('/register');
    }
    try {
      const decoded = jwt.verify(token, config.TOKEN_KEY);
      req.user = decoded;

    } catch (err) {
      console.log(err)
      res.redirect('/login');
    }
    return next();
  } else {
    return res.status(404).send("Invalid User")
  }


};

module.exports = verifyToken;