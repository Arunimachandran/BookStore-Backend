const teammember = require("../model/teammembersschema")

const Eachteammember=async(req,res)=>{
    const _id=req.params.id
    const getdata=await teammember.findById(_id)
    res.json(getdata)
}
module.exports=Eachteammember