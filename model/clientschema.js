const mongoose=require("mongoose")

const clientschema=mongoose.Schema({
    Name:{type:String},
    UserName:{type:String},
    Email:{type:String},
    SignedStatus:{type:Boolean},
    Role:{type:String},
    PhoneNumber:{type:Number}
})
const client=mongoose.model("clent",clientschema,)
module.exports=client