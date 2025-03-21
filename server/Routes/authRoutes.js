const {registerUser, verifyOtp} = require("../controller/authControll")

const express = require("express");
const router = express.Router();


router.post("/register",registerUser)
router.post("/verify-otp",verifyOtp)

module.exports = router