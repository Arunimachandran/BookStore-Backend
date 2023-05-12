const mongoose=require("mongoose")
const book = require("../model/bookschema")

const deletebook=async(req,res)=>{
    const _id=req.params.id
    const getdata=await book.findByIdAndRemove(_id)
    res.json("deleted")

}
module.exports=deletebook