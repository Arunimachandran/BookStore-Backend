const mongoose=require("mongoose")
const customer = require("../model/customerschema")

const deletecustomer=async(req,res)=>{
    const _id=req.params.id
    const getdata=await customer.findByIdAndRemove(_id)
    res.json("deleted")

}
module.exports=deletecustomer