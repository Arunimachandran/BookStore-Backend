const mongoose=require("mongoose")
const client = require("../model/clientschema")

const deleteclient=async(req,res)=>{
    const _id=req.params.id
    const getdata=await client.findByIdAndRemove(_id)
    res.json("deleted")
}
module.exports=deleteclient