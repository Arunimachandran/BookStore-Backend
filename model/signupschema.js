const mongoose=require("mongoose")

const signup=mongoose.Schema({
    FirstName:{type:String},
    LastName:{type:String},
    Email:{type:String},
    Password:{type:String}
})
const projectsignup=mongoose.model("projectsignup",signup)
module.exports=projectsignup