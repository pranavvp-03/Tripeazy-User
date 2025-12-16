const User = require("../models/user/User")
const Otp = require("../models/user/otpModel")
const bcrypt = require("bcrypt")
const cookieParser = require("cookie-parser")
const jwt =  require("jsonwebtoken")
const dotenv = require("dotenv")
dotenv.config();
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
    console.log(otp,"otp");
    const hashedOtp = await bcrypt.hash(otp, 10);
    await Otp.create({ email, otp: hashedOtp });

    // Send email
    const subject = "Tripeazy - Complete Your Registration";
    const text = `Hello ${name},\n\nYour OTP for registration is: ${otp}\nIt is valid for 5 minutes.\n\nThank you for choosing Tripeazy!`;
    console.log(email,subject,text,"this dats is sending to send mail function")
    await sendMail(email, subject, text);
    // console.log(email,subject,text,"its datas")
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


  exports.login = async (req, res) =>{
    const {email,password} = req.body;
    try {
      const user = await User.findOne({email});
      if(!user){
        return res.status(400).json({message: "user  does not found"});
      }
      const isMatch = await bcrypt.compare(password,user.password);
      if(!isMatch){
        return res.status(400).json({message:"password does not match"});
      }
      
      const token = jwt.sign({
        userId: user._id, email: user.email},
        process.env.JWT_SECRET,
        {expiresIn:"30d"})

        res.cookie("token",token,
          {httpOnly:true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 30 * 24 * 60 * 60 * 1000,
            sameSite: "strict",
          }
        )
        
        res.status(200).json({ message: `Login successfull. Welcome to Tripeazy ${user.name}`, user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          profilePhoto: user.profilePhoto,
        }});
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }


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
  