const mongoose=require("mongoose")
const customer = require("../model/customerschema")

const createcustomer=async(req,res)=>{
    const{Name,Email,AddressLine1,City,State,PinCode,Country}=req.body
    if (!Name || !Email || !AddressLine1 || !City || !State || !PinCode || !Country) {
        return res.status(400).json({ message: "Please fill all fields" })
    }
    const customerdata=await customer.create({
        Name,
        Email,
        AddressLine1,
     
        City,
        State,
        PinCode,
        Country
    })
    res.json({
        Name:customerdata.Name,
        Email:customerdata.Email,
        AddressLine1:customerdata.AddressLine1,
        
        City:customerdata.City,
        State:customerdata.State,
        PinCode:customerdata.PinCode,
        Country:customerdata.Country
    })

}
module.exports=createcustomer