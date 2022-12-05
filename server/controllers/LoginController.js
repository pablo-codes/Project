const bcrypt = require("bcrypt");
const user = require('../models/schema')
const path = require('path')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv').config({ path: path.join(__dirname, '../config.env') })
const cookie = require('cookie-parser');
const { nextTick } = require("process");
const register = (req, res) => {
  res.render("register", { alert: "ensure email is unique" });
}

const login = async (req, res) => {
  try {

    res.render("login");
  } catch (error) {
    console.log(error)
  }

}


const registerUser = async (req, res) => {



  // Our register logic starts here
  try {
    // Get user input
    const body = req.body;

    // Validate user input


    // check if user already exist
    // Validate if user exist in our database
    const oldEmail = await user.findOne({ email: body.email });
    const oldUser = await user.findOne({ username: body.username });
    if (oldEmail) {
      return res.status(409).send(` ${body.email} Already Exists`)
    }
    else if (oldUser) {
      return res.status(409).send(` ${body.username} Already Exists`);
    } else {
      if (body.email == process.env.EMAIL && body.password == process.env.PASSWORD) {
        const saltround = 10
        //Encrypt user password
        const encryptedUserPassword = await bcrypt.hash(body.password, saltround);

        // Create user in our database
        await user.create({
          name: body.name,
          username: body.username,
          password: encryptedUserPassword,
          gender: body.gender,
          role: "admin",
          email: body.email
        });

        // Create token
        const token = jwt.sign(
          { user_id: user._id, email: body.email },
          process.env.ADMIN_KEY,
          {
            expiresIn: 36e5,
          }
        );
        // save user token

        const tokenname = await user.findOneAndUpdate({ email: req.body.email }, { $push: { token: token } }, { upsert: true })
        const Get = await user.findOne({ email: req.body.email })

        res.cookie("user", Get._id, { maxAge: 36e5 })
        res.cookie('admin_key', token)
        // return new user
        res.redirect("/admin")
      }

      else {
        const saltround = 10
        //Encrypt user password
        const encryptedUserPassword = await bcrypt.hash(body.password, saltround);

        // Create user in our database
        await user.create({
          name: body.name,
          username: body.username,
          password: encryptedUserPassword,
          role: "user",
          gender: body.gender,
          email: body.email
        });

        // Create token
        const token = jwt.sign(
          { user_id: user._id, email: body.email },
          process.env.TOKEN_KEY,
          {
            expiresIn: 36e5,
          }
        );
        // save user token

        const tokenname = await user.findOneAndUpdate({ email: req.body.email }, { $push: { token: token } }, { upsert: true })
        const Get = await user.findOne({ email: req.body.email })

        res.cookie("user", Get._id, { maxAge: 36e5 })

        res.cookie('token_key', token)
        // return new user
        res.redirect("/")
      }
    }


  } catch (err) {
    console.log(err)
  }

}
const loginUser = async (req, res, next) => {



  const body = req.body


  const users = await user.findOne({ email: body.email });

  if (users) {


    if (body.email == process.env.EMAIL && body.password == process.env.PASSWORD) {
      if (bcrypt.compareSync(body.password, users.password)) {
        //Create token



        const token = jwt.sign(
          { users_id: users._id, email: req.body.email },
          process.env.ADMIN_KEY,
          {
            expiresIn: 36e5,
          }
        );

        // save user token
        const tokenname = await user.findOneAndUpdate({ email: req.body.email }, { token: token })
        const Get = await user.findOne({ email: req.body.email })

        res.cookie("user", Get._id, { maxAge: 36e5 })
        res.cookie("admin_key", token)
        // user
        res.redirect('/admin');
      } else {

        res.status(400).send("Invalid Password");

      }
    } else if (body.email !== process.env.EMAIL && body.password !== process.env.PASSWORD) {
      if (bcrypt.compareSync(body.password, users.password)) {
        // Create token

        const token = jwt.sign(
          { users_id: users._id, email: req.body.email },
          process.env.TOKEN_KEY,
          {
            expiresIn: 36e5,
          }
        );

        // save user token
        const tokenname = await user.findOneAndUpdate({ email: req.body.email }, { $push: { token: token } }, { upsert: true })
        const Get = await user.findOne({ email: req.body.email })

        res.cookie("user", Get._id, { maxAge: 36e5 })
        res.cookie("token_key", token)
        // user
        res.redirect('/');

      }
      else {
        res.status(400).send("Invalid Password");
      }
    } else {
      res.status(400).send("Invalid Password");
    }








    // Our login logic ends here
  } else {
    res.send("user not found")
  }
}





module.exports = { register, login, registerUser, loginUser };