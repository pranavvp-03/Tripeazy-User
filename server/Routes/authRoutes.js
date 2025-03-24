const {registerUser, verifyOtp, fetchAgencies, login} = require("../controller/authControll")

const express = require("express");
const router = express.Router();


router.post("/register",registerUser)
router.post("/verify-otp",verifyOtp)
router.post("/login",login)
router.get("/agencies",fetchAgencies)

module.exports = router