const {registerUser, verifyOtp, fetchAgencies} = require("../controller/authControll")

const express = require("express");
const router = express.Router();


router.post("/register",registerUser)
router.post("/verify-otp",verifyOtp)
router.get("/agencies",fetchAgencies)

module.exports = router