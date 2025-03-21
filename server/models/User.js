const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true , unique: false},
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  otp: { type: String }, // Stores the OTP
  otpExpiry: { type: Date }, // Stores the OTP expiry time
});

module.exports = mongoose.model("User", userSchema);