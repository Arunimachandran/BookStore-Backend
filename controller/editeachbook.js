const mongoose=require("mongoose")
const book = require("../model/bookschema")

const Eachbook=async(req,res)=>{
    const{BookName,Author,Publication,Year,Availability,Price,Image}=req.body
    const _id=req.params.id
    const eachbook=await book.findById(_id)
    res.json(eachbook)
}
module.exports=Eachbook






