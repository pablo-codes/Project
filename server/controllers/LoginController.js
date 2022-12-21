const bcrypt = require("bcrypt");
const user = require('../models/schema')
const path = require('path')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv').config({ path: path.join(__dirname, '../config.env') })




// Get's register page
const register = (req, res) => {
  res.render("register");
}


// Get's login page
const login = async (req, res) => {
  try {

    res.render("login");
  } catch (error) {
    console.log(error)
  }

}

// Creates a user
const registerUser = async (req, res) => {
  try {

    const body = req.body;

    const oldEmail = await user.findOne({ email: body.email });
    const oldUser = await user.findOne({ username: body.username });

    if (oldEmail) {
      const email = body.email
      res.render("register", { email })
    }

    else if (oldUser) {
      const username = body.username
      return res.render("register", { username });
    }

    else {
      if (body.email == process.env.EMAIL && body.password == process.env.PASSWORD) {
        const saltround = 10


        const encryptedUserPassword = await bcrypt.hash(body.password, saltround);

        await user.create({
          name: body.name,
          username: body.username,
          password: encryptedUserPassword,
          gender: body.gender,
          role: "admin",
          email: body.email
        });


        const token = jwt.sign(
          { user_id: user._id, email: body.email },
          process.env.ADMIN_KEY,
          {
            expiresIn: "5h"
          }
        );


        const tokenname = await user.findOneAndUpdate({ email: req.body.email }, { token: token })
        const Get = await user.findOne({ email: req.body.email })

        res.cookie("user", Get._id, { maxAge: 36e5 * 5 })
        res.cookie('admin_key', token, { maxAge: 36e5 * 5 })

        res.redirect("/admin")
      }

      else {
        const saltround = 10

        const encryptedUserPassword = await bcrypt.hash(body.password, saltround);


        await user.create({
          name: body.name,
          username: body.username,
          password: encryptedUserPassword,
          role: "user",
          gender: body.gender,
          email: body.email
        });


        const token = jwt.sign(
          { user_id: user._id, email: body.email },
          process.env.TOKEN_KEY,
          {
            expiresIn: "5h"
          }
        );


        const tokenname = await user.findOneAndUpdate({ email: req.body.email }, { token: token })
        const Get = await user.findOne({ email: req.body.email })

        res.cookie("user", Get._id, { maxAge: 36e5 * 5 }), { maxAge: 36e5 * 5 }

        res.cookie('token_key', token)

        res.redirect("/")
      }
    }


  } catch (err) {
    console.log(err)
  }

}

// Sign in to a user
const loginUser = async (req, res, next) => {


  try {
    const body = req.body

    const users = await user.findOne({ email: body.email });

    if (users) {

      if (body.email == process.env.EMAIL && body.password == process.env.PASSWORD) {
        if (bcrypt.compareSync(body.password, users.password)) {


          const token = jwt.sign(
            { users_id: users._id, email: req.body.email },
            process.env.ADMIN_KEY,
            {
              expiresIn: "5h"
            }
          );

          const tokenname = await user.findOneAndUpdate({ email: req.body.email }, { token: token })
          const Get = await user.findOne({ email: req.body.email })

          res.cookie("user", Get._id, { maxAge: 36e5 * 5 })
          res.cookie("admin_key", token, { maxAge: 36e5 * 5 })

          res.redirect('/admin');
        }

        else {

          let check = "invalid Password"
          res.render("login", { check });
        }
      }

      else if (body.email !== process.env.EMAIL && body.password !== process.env.PASSWORD) {
        if (bcrypt.compareSync(body.password, users.password)) {


          const token = jwt.sign(
            { users_id: users._id, email: req.body.email },
            process.env.TOKEN_KEY,
            {
              expiresIn: "5h"
            }
          );


          const tokenname = await user.findOneAndUpdate({ email: req.body.email }, { token: token })
          const Get = await user.findOne({ email: req.body.email })

          res.cookie("user", Get._id, { maxAge: 36e5 * 5 })
          res.cookie("token_key", token, { maxAge: 36e5 * 5 })

          res.redirect('/');

        }
        else {
          let check = "Email exists but invalid Password"
          res.render("login", { check });
        }
      } else {
        console.log("error")
      }

    }
    else {
      let check2 = "invalid user"
      res.render("login", { check2 });
    }
  } catch (error) {
    console.log(error)
    res.redirect("/login")
  }

}





module.exports = { register, login, registerUser, loginUser };