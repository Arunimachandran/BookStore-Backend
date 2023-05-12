const mongoose=require("mongoose")
const book=require("../model/bookschema")

const getbooks=async(req,res)=>{
    const getitem=await book.find()
    res.json(getitem)
}    
    module.exports=getbooks


   