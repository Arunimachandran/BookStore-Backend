const mongoose=require("mongoose")

const bookinfo=mongoose.Schema({
    BookName:{type:String},
    Author:{type:String},
    Publication:{type:String},
    Year:{type:Number},
    Availability:{type:String},
    Price:{type:Number},
    Image:{type:String}
})
const book=mongoose.model("book",bookinfo)
module.exports=book