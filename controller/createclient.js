const mongoose=require("mongoose")
const client = require("../model/clientschema")

const clients=async(req,res)=>{
    const{Name,UserName,Email,SignedStatus,Role,PhoneNumber}=req.body
    if (!Name || !UserName || !Email || !SignedStatus || !Role || !PhoneNumber) {
        return res.status(400).json({ message: "Please fill all fields" })
    }
    const clientdata=await client.create({
        Name,
        UserName,
        Email,
        SignedStatus,
        Role,
        PhoneNumber

    })
    res.json({
        Name:clientdata.Name,
        UserName:clientdata.UserName,
        Email:clientdata.Email,
        SignedStatus:clientdata.SignedStatus,
        Role:clientdata.Role,
        PhoneNumber:clientdata.PhoneNumber
    })
}
module.exports=clients