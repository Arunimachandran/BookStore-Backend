const order = require("../model/orderschema")

const Eachorder=async(req,res)=>{
    const _id=req.params.id
    const getdata=await order.findById(_id)
    res.json(getdata)
}
module.exports=Eachorder