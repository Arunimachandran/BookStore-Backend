const mongoose=require("mongoose")
// const { default: mongoose } = require("mongoose")

const connectDB=async()=>{
    try{
    const conn=await mongoose.connect("mongodb+srv://arunimachandran:arunima123@arunima.4d0bxtu.mongodb.net/?retryWrites=true&w=majority"
    ,{
        useNewUrlParser:true,
        useUnifiedTopology:true,

    })

console.log("Database connected");
    }catch(error){
        console.log(`error:${error}`);
        process.exit();
    }
}
module.exports=connectDB;