const order = require("../model/orderschema")

const updateorder=async(req,res)=>{
    const{FirstName,LastName,OrderId,ProductNumber,Date}=req.body
    const _id=req.params.id
    const getdata=await order.findByIdAndUpdate(_id,{FirstName,LastName,OrderId,ProductNumber,Date})
    res.json({
        FirstName:getdata.FirstName,
       LastName:getdata.LastName,
       OrderId:getdata.OrderId,
       ProductNumber:getdata.ProductNumber,
       Date:getdata.Date
    })
}
module.exports=updateorder
