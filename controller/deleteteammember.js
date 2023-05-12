const teammember = require("../model/teammembersschema")


const deleteteammember=async(req,res)=>{
    const _id=req.params.id
    const getdata=await teammember.findByIdAndRemove(_id)
    res.json("deleted")

}
module.exports=deleteteammember
