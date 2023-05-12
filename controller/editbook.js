const mongoose=require("mongoose")
const book = require("../model/bookschema")

const updatebook=async(req,res)=>{
        const{BookName,Author,Publication,Year,Availability,Price,Image}=req.body
        const _id=req.params.id
        const getdata=await book.findByIdAndUpdate(_id,{BookName,Author,Publication,Year,Availability,Price,Image})
        res.json({
            BookName:getdata.BookName,
            Author:getdata.Author,
            Publication:getdata.Publication,
            Year:getdata.Year,
            Availability:getdata.Availability,
            Price:getdata.Price,
            Image:getdata.Image
            
        })
    }
    module.exports=updatebook