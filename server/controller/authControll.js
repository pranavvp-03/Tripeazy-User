const User = require("../models/user/User")
const Otp = require("../models/user/otpModel")
const bcrypt = require("bcrypt")
const sendMail = require("../utils/mailer");
const agency = require("../models/agency/agency");

const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

exports.registerUser = async (req, res) => {
  const { name, phone, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    // Generate and hash OTP
    const otp = generateOTP();
    console.log(otp,"otp")
    const hashedOtp = await bcrypt.hash(otp, 10);
    await Otp.create({ email, otp: hashedOtp });

    // Send email
    const subject = "Tripeazy - Complete Your Registration";
    const text = `Hello ${name},\n\nYour OTP for registration is: ${otp}\nIt is valid for 5 minutes.\n\nThank you for choosing Tripeazy!`;

    await sendMail(email, subject, text);
    res.status(200).json({ message: "OTP sent. Please verify to complete registration." });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong. Please try again later." });
  }
};


exports.verifyOtp = async (req, res) => {
    const { name, phone, email, password, otp } = req.body;
    console.log(req.body,"req body")
  
    try {
      const storedOtp = await Otp.findOne({ email });
      if (!storedOtp) return res.status(400).json({ message: "Invalid or expired OTP" });
  
      const isOtpValid = await bcrypt.compare(otp, storedOtp.otp);
      if (!isOtpValid) return res.status(400).json({ message: "Invalid OTP" });
  
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ name, phone, email, password: hashedPassword });
  
      await newUser.save();
      await Otp.deleteOne({ email });
  
      res.status(201).json({ message: "Registration successful. Welcome to Tripeazy!" });
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error verifying OTP. Please try again." });
    }
  };


exports.fetchAgencies = async (req, res) =>{
    try {
      console.log("agency fetching function is working")
      const agencies = await agency.find({status:"Accepted"});
      res.status(200).json(agencies);
      console.log("agencies data sented successfully");
    } catch (error) {
      res.status(500).json({ message: 'Error fetching agencies', error });
    }
}
  