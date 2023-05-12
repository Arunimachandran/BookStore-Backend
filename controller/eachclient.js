const mongoose=require("mongoose")
const client = require("../model/clientschema")

const Eachclient=async(req,res)=>{
    const{Name,UserName,Email,SignedStatus,Role,PhoneNumber}=req.body
    const _id=req.params.id
    const eachclient=await client.findById(_id)
    res.json(eachclient)
}
module.exports=Eachclient