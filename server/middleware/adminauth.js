const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const user = require('../models/schema')
const config = process.env;


// Verify's Admin
const verifyToken = async (req, res, next) => {
  const token =
    req.cookies.admin_key;
  const so = req.cookies.user;
  const users = await user.findOne({ _id: so })
  if (bcrypt.compareSync(config.PASSWORD, users.password)) {
    if (!token) {
      return res.send('You are trying to hack me right,you are 50 years to young to try that ');
    }
    try {
      const decoded = jwt.verify(token, config.ADMIN_KEY);
      req.user = decoded;
    } catch (err) {
      console.log(err)
      res.redirect('/login');
    }
    return next();
  }
  else {
    // res.status(401).send("Invalid Password");
    res.redirect('/login');
  }


};

module.exports = verifyToken;