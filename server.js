const express=require("express")
const app=express()

const connectdb=require("./config/db")
const dotenv=require("dotenv")
const router=require("./Router/testrouter")
const cors=require("cors")



connectdb()
dotenv.config()
app.use(cors())
app.use(express.json())
app.use("/",router)

app.get("/",(req,res)=>{
    res.send("api is running")
})






const PORT=process.env.PORT||3001
app.listen(PORT,()=>console.log(`server is running on ${PORT}`));