const teammember = require("../model/teammembersschema")

const updateteammember=async(req,res)=>{
    const{Name,Email,DateOfBirth,Gender,Description,Role,PhoneNumber,ProfilePicture}=req.body
    const _id=req.params.id
    const getdata=await teammember.findByIdAndUpdate(_id,{Name,Email,DateOfBirth,Gender,Description,Role,PhoneNumber,ProfilePicture})
    res.json({
        Name:getdata.Name,
        Email:getdata.Email,
        DateOfBirth:getdata.DateOfBirth,
        Gender:getdata.Gender,
        Description:getdata.Description,
        Role:getdata.Role,
        PhoneNumber:getdata.PhoneNumber,
        ProfilePicture:getdata.ProfilePicture
    })
}
module.exports=updateteammember