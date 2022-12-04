const mongoose = require("mongoose");

const user = new mongoose.Schema({
        name : String,
        email : String,
        role: String,
        password:String,
        username:String,
        gender : String,
        token:String
        
        
},{timestamps:true})
module.exports = new mongoose.model('user',user)