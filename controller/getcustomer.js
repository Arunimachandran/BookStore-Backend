const mongoose=require("mongoose")
const customer = require("../model/customerschema")

const getcustomer=async(req,res)=>{
    const getitem=await customer.find()
    res.json(getitem)
}
module.exports=getcustomer