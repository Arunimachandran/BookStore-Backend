const teammember = require("../model/teammembersschema")

const createteammember=async(req,res)=>{
    const{Name,Email,DateOfBirth,Gender,Description,Role,PhoneNumber,ProfilePicture}=req.body
    if (!Name || !Email || !DateOfBirth || !Gender || !Description || !Role || !PhoneNumber|| !ProfilePicture) {
        return res.status(400).json({ message: "Please fill all fields" })
    }
    const teammembersdata=await teammember.create({
        Name,
        Email,
        DateOfBirth,
        Gender,
        Description,
        Role,
        PhoneNumber,
        ProfilePicture
    })
    res.json(teammembersdata)
}
module.exports=createteammember