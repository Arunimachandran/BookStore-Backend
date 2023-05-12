const mongoose=require("mongoose")
const customer = require("../model/customerschema")

const Eachcustomer=async(req,res)=>{
    const _id=req.params.id
    const getdata=await customer.findById(_id)
    res.json(getdata)
}
module.exports=Eachcustomer