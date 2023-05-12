const mongoose=require("mongoose")

const orderschema=mongoose.Schema({
    FirstName:{type:String},
    LastName:{type:String},
    OrderId:{type:String},
    ProductNumber:{type:Number},
    Date:{type:String}

})
const order=mongoose.model("order",orderschema)
module.exports=order