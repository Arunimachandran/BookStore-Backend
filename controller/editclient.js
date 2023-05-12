const mongoose=require("mongoose")
const client = require("../model/clientschema")

const updateclient=async(req,res)=>{
    const{Name,UserName,Email,SignedStatus,Role,PhoneNumber}=req.body
    const _id=req.params.id
    const getdata=await client.findByIdAndUpdate(_id,{Name,UserName,Email,SignedStatus,Role,PhoneNumber})
    res.json({
        Name:getdata.Name,
        UserName:getdata.UserName,
        Email:getdata.Email,
        SignedStatus:getdata.SignedStatus,
        Role:getdata.Role,
        PhoneNumber:getdata.PhoneNumber
    })
}
module.exports=updateclient