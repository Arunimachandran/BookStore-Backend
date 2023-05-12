const mongoose=require("mongoose")
const projectsignup = require("../model/signupschema")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")


const sign=async(req,res)=>{
    const{FirstName,LastName,Email,Password}=req.body
    if (!FirstName || !LastName || !Email || !Password) {
        return res.status(400).json({ message: "Please fill all fields" })
    }
    if (Password.length < 6) {
        return res.status(400).json({ message: "Password must be at least 6 characters long" })
    }
    const details=await projectsignup.findOne({Email})
    if(details){
        res.json("user already exist")
    }
    else{

    const salt=await bcrypt.genSalt(10)
    const hashedpswd=await bcrypt.hash(Password,salt)
    const sign=await projectsignup.create({
        FirstName,
        LastName,
        Email,
        Password:hashedpswd
    })
    res.json({
     
        FirstName:sign.FirstName,
        LastName:sign.LastName,
        Email:sign.Email,
        Password:sign.Password,
        Token:tokengenerate(sign._id)
    })

    }
   
}
const tokengenerate=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:'1d',
    })
}
module.exports=sign