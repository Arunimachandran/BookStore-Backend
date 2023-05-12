const express=require("express")
const books = require("../controller/book")
const deletebook = require("../controller/deletebook")
const updatebook = require("../controller/editbook")
const viewbook = require("../controller/getbook")
const getbooks = require("../controller/getbook")
const loginn = require("../controller/login")
const sign = require("../controller/signup")
const protect = require("../middleware/token")
const Eachbook = require("../controller/editeachbook")
const clients = require("../controller/createclient")
const getclients = require("../controller/getclient")
const deleteclient = require("../controller/deleteclient")
const Eachclient = require("../controller/eachclient")
const updateclient = require("../controller/editclient")
const createcustomer = require("../controller/createcustomer")
const getcustomer = require("../controller/getcustomer")
const deletecustomer = require("../controller/deletecustomer")
const updatecustomer = require("../controller/editcustomer")
const Eachcustomer = require("../controller/eachcutomer")
const createteammember = require("../controller/createteammember")
const deleteteammember = require("../controller/deleteteammember")
const getteammember = require("../controller/getteammember")
const updateteammember = require("../controller/editteammember")
const Eachteammember = require("../controller/eachteammember")
const createorder = require("../controller/createorder")
const deleteorder = require("../controller/deleteorder")
const getorder = require("../controller/getorder")
const updateorder = require("../controller/editorder")
const Eachorder = require("../controller/eachorder")

const getcart = require("../controller/viewcart")
const UserReg = require("../controller/Usrreg")
const userLogin = require("../controller/userLogin")
const removefromcart = require("../controller/deletecart")
const addtocart = require("../controller/addtocart")






const router=express.Router()
const middleware=[protect]
// router.route("/token").get(middleware,loginn)

router.route("/signup").post(sign)
router.route("/login").post(loginn,middleware)


router.route("/books").post(books)
router.route("/book").get(getbooks)
router.route("/viewbook/:id").get(viewbook)
router.route("/deletebook/:id").delete(deletebook)
router.route("/updatebook/:id").put(updatebook)
router.route("/eachbook/:id").get(Eachbook)


router.route("/clients").post(clients)
router.route("/getclient").get(getclients)
router.route("/deleteclient/:id").delete(deleteclient)
router.route("/updateclient/:id").put(updateclient)
router.route("/eachclient/:id").get(Eachclient)


router.route("/customer").post(createcustomer)
router.route("/getcustomer").get(getcustomer)
router.route("/deletecustomer/:id").delete(deletecustomer)
router.route("/updatecustomer/:id").put(updatecustomer)
router.route("/eachcustomer/:id").get(Eachcustomer)


router.route("/teammember").post(createteammember)
router.route("/getteammember").get(getteammember)
router.route("/deleteteammember/:id").delete(deleteteammember)
router.route("/updateteammember/:id").put(updateteammember)
router.route("/eachteammember/:id").get(Eachteammember)


router.route("/order").post(createorder)
router.route("/getorder").get(getorder)
router.route("/deleteorder/:id").delete(deleteorder)
router.route("/updateorder/:id").put(updateorder)
router.route("/eachorder/:id").get(Eachorder)

router.route('/userregistration').post(UserReg,middleware)
router.route('/userlogin').post(userLogin,middleware)
router.route('/addtocart').post(addtocart)
router.route('/getcart').post(getcart)
router.route('/deletecart').put(removefromcart)



module.exports=router