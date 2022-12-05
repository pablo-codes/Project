const product = require('../models/productSchema')
const gridFile = require('../models/GridFile')
const user = require('../models/schema')

const admin =async(req,res)=>{
  try {
    
    const alltotal = await product.count({});
    const sec = await user.count({});
    const admintotal= await user.count({role:"admin"})
    const userstotal= await user.count({role:"user"})
    

    res.render('admin',{alltotal,admintotal,userstotal,sec,layout:"adminlay"})
} catch (error) {
    
}
    
  }

const users = async(req,res)=>{
  const reg = await user.find({role:"user"});

  res.render("users",{reg,layout:"adminlay"})
}

const admins = async(req,res)=>{
  const prem = await user.find({role:"admin"});
  const getDate =  new Date(prem.createdAt).toLocaleString()


  res.render("admins",{prem,getDate,layout:"adminlay"})
}
const allAdminTopics = async (req, res, next) => {
  try {
      

    
      const all = await product.find({  })

         
         
      res.render("all-writers", { all,layout:"adminlay" });
  } catch (error) {
    
          res.render("login")

  }



}
const allAdminImages = async (req, res) => {
  try {
      

   

      const all = await gridFile.find({  })
      

      res.render("all-images", { all,layout:"adminlay"  });
  } catch (error) {
          res.render("login")
      
  }

}
const deleteUserTopicAndImages = async (req, res, nxt) => {

  try {
      const find = req.params.id

      const newfind = find.split(":")

      const found = await product.findOne({ _id: newfind[1] })

     
      if (found) {
          await found.gridfileid.map((el) => {
              gridFile.findByIdAndDelete(el)
          })

          const del = await product.findOneAndDelete({ _id: found })
          res.redirect('/all-writers')
      }
  } catch (err) {
      console.log(err)
  }
}
  module.exports = {admin,users,admins,allAdminImages,allAdminTopics}