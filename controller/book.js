const mongoose=require("mongoose")
const book = require("../model/bookschema")
const books=async(req,res)=>{
    const{BookName,Author,Publication,Year,Availability,Price,Image}=req.body
    if (!BookName || !Author || !Publication || !Year || !Availability || !Price || !Image) {
        return res.status(400).json({ message: "Please fill all fields" })
    }
    const bookinfo=await book.create({
        BookName,
        Author,
        Publication,
        Year,
        Availability,
        Price,
        Image

    })
    res.json({
        BookName:bookinfo.BookName,
        Author:bookinfo.Author,
        Publication:bookinfo.Publication,
        Year:bookinfo.Year,
        Availability:bookinfo.Availability,
        Price:bookinfo.Price,
        Image:bookinfo.Image
    })
}
module.exports=books