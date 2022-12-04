const jwt = require("jsonwebtoken");

const config = process.env;

const verifyToken = (req, res, next) => {
  const token =
    req.cookies.token_key  ;
    
 const user = req.cookies.user;
 
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
};

module.exports = verifyToken;