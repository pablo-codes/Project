const product = require('../models/productSchema')
const gridFile = require('../models/GridFile')
const user = require('../models/schema')

// Dashboard
const admin = async (req, res) => {
  try {

    const alltotal = await product.count({});
    const sec = await user.count({});
    const admintotal = await user.count({ role: "admin" })
    const userstotal = await user.count({ role: "user" })
    const userid = req.cookies.user
    const client = await user.findOne({ _id: userid })
    const username = client.username.toUpperCase()

    res.render('admin', { alltotal, admintotal, userstotal, sec, username, layout: "adminlay" })
  } catch (error) {
    console.log(error)
    res.redirect("/login")
  }

}

// Gets all users which role is user
const users = async (req, res) => {



  try {
    const reg = await user.find({ role: "user" });


    res.render("users", { reg, layout: "adminlay" })
  } catch (error) {
    console.log(error)
    res.redirect("/admin")
  }
}

// Gets all users which role is admin
const admins = async (req, res) => {
  try {
    const prem = await user.find({ role: "admin" });
    const getDate = new Date(prem.createdAt).toLocaleString()


    res.render("admins", { prem, getDate, layout: "adminlay" })
  } catch (error) {
    console.log(error)
    res.redirect("/admin")
  }

}


// Get all topics in the database
const allAdminTopics = async (req, res) => {
  try {
    const all = await product.find({})

    res.render("all-topics", { all, layout: "adminlay" });
  } catch (error) {
    console.log(error)

    res.redirect("/admin")

  }
}

// Get's all images in the database
const allAdminImages = async (req, res) => {
  try {

    const all = await gridFile.find({})
    res.render("all-images", { all, layout: "adminlay" });
  } catch (error) {
    console.log(error)
    res.redirect("/admin")

  }

}

// Delete's user along with all related topics and images

const deleteUserTopicAndImages = async (req, res, nxt) => {

  try {
    const find = req.params.id

    const newfind = find.split(":")

    const founduser = await user.findOne({ _id: newfind[1] })
    const found = await product.find({ author: founduser.username })
    console.log(newfind, founduser, found)

    if (founduser && found) {


      const first = await gridFile.find({ aliases: founduser._id })
      first.map(async (el) => {
        await gridFile.findByIdAndDelete(el.id)

      })
      if (first) {
        const seco = await product.deleteMany({ author: founduser.username })
        if (seco) {
          const third = await user.findOneAndDelete({ _id: newfind[1] })
          if (third) {
            res.redirect("/users")
          }
        }
      }




    }
  } catch (err) {
    console.log(err)
    res.redirect("/admin")
  }
}

const searchUser = async (req, res) => {
  try {
    const users = req.cookies.user
    const search = req.body.search
    const find = await user.findOne({ _id: users })
    if (find.role == "admin") {
      const reg = await user.find({ username: { $regex: search, $options: "i" } })
      res.render("users", { reg, layout: "adminlay" });
    }


  } catch (error) {
    console.log(error)
  }
}

const searchAdmin = async (req, res) => {
  try {
    const users = req.cookies.user
    const search = req.body.search
    const find = await user.findOne({ _id: users })
    if (find.role == "admin") {
      const prem = await user.find({ $and: [{ role: "admin" }, { username: { $regex: search, $options: "i" } }] })
      res.render("admins", { prem, layout: "adminlay" });
    }


  } catch (error) {
    console.log(error)
  }
}

module.exports = { admin, users, admins, allAdminImages, allAdminTopics, deleteUserTopicAndImages, searchUser, searchAdmin }