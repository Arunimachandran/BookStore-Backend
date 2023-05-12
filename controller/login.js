const mongoose=require("mongoose")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const projectsignup = require("../model/signupschema")

const loginn=async (req,res)=>{
    const{Email,Password}=req.body
    if (!Email || !Password) {
        return res.status(400).json({ message: "Please provide email and password" })
    }
    if (Password.length < 6) {
        return res.status(400).json({ message: "Password must be at least 6 characters long" })
    }
    const details=await projectsignup.findOne({Email})
    if(Email&&(bcrypt.compare(Password,details.Password)))
    {
        res.json({Message:"login success",Token:tokengenerate(details._id)})
    }
    else{
        res.json("login failed")
    }
}
const tokengenerate=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:'1d',
    })
}
module.exports=loginn