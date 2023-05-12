const teammember = require("../model/teammembersschema")

const getteammember=async(req,res)=>{
    const getitem=await teammember.find()
    res.json(getitem)
}    
module.exports=getteammember
    