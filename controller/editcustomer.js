const mongoose=require("mongoose")
const customer = require("../model/customerschema")

const updatecustomer=async(req,res)=>{
    const{Name,Email,AddressLine1,City,State,PinCode,Country}=req.body
    const _id=req.params.id
    const getdata=await customer.findByIdAndUpdate(_id,{Name,Email,AddressLine1,City,State,PinCode,Country})
    res.json({
        Name:getdata.Name,
        Email:getdata.Email,
        AddressLine1:getdata.AddressLine1,
    
        City:getdata.City,
        State:getdata.State,
        PinCode:getdata.PinCode,
        Country:getdata.Country
    })
}
module.exports=updatecustomer
