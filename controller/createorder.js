const order = require("../model/orderschema")

const createorder=async(req,res)=>{
    const{FirstName,LastName,OrderId,ProductNumber,Date}=req.body
    if (!FirstName || !LastName || !OrderId || !ProductNumber || !Date) {
        return res.status(400).json({ message: "Please fill all fields" })
    }
    const orderdata=await order.create({
        FirstName,
        LastName,
        OrderId,
        ProductNumber,
        Date
    })
    res.json(orderdata)

}
module.exports=createorder