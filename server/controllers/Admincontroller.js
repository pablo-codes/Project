const product = require('../models/productSchema')
const gridFile = require('../models/GridFile')
const user = require('../models/schema')


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

  }

}

const users = async (req, res) => {
  const reg = await user.find({ role: "user" });

  res.render("users", { reg, layout: "adminlay" })
}

const admins = async (req, res) => {
  const prem = await user.find({ role: "admin" });
  const getDate = new Date(prem.createdAt).toLocaleString()


  res.render("admins", { prem, getDate, layout: "adminlay" })
}
const allAdminTopics = async (req, res, next) => {
  try {



    const all = await product.find({})



    res.render("all-writers", { all, layout: "adminlay" });
  } catch (error) {

    res.render("login")

  }



}
const allAdminImages = async (req, res) => {
  try {




    const all = await gridFile.find({})


    res.render("all-images", { all, layout: "adminlay" });
  } catch (error) {
    res.render("login")

  }

}
const deleteUserTopicAndImages = async (req, res, nxt) => {

  try {
    const find = req.params.id

    const newfind = find.split(":")

    const founduser = await user.findOne({ _id: newfind[1] })
    const found = await product.find({ author: founduser.username })
    console.log(newfind, founduser, found)

    if (founduser && found) {


      const first = await gridFile.deleteMany({ aliases: founduser._id })
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
    res.redirect("/users")
  }
}
module.exports = { admin, users, admins, allAdminImages, allAdminTopics, deleteUserTopicAndImages }