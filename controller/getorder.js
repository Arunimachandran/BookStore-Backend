const order = require("../model/orderschema")

const getorder=async(req,res)=>{
    const getitem=await order.find()
    res.json(getitem)
}
module.exports=getorder