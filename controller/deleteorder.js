const mongoose=require("mongoose")
const order = require("../model/orderschema")

const deleteorder=async(req,res)=>{
    const _id=req.params.id
    const getdata=await order.findByIdAndRemove(_id)
    res.json("deleted")

}
module.exports=deleteorder