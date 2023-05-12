const mongoose=require("mongoose")

const team=mongoose.Schema({
    Name:{type:String},
    Email:{type:String},
    DateOfBirth:{type:String},
    Gender:{type:Boolean},
    Description:{type:String},
    Role:{type:String},
    PhoneNumber:{type:Number},
    ProfilePicture:{type:String}
})
const teammember=mongoose.model("teammember",team)
module.exports=teammember