const mongoose=require("mongoose")
const client = require("../model/clientschema")


const getclients=async(req,res)=>{
    const getitem=await client.find()
    res.json(getitem)
}    
    module.exports=getclients