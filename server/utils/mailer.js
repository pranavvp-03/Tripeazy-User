const nodemailer = require('nodemailer');
const dotenv = require("dotenv").config();
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER , 
    pass: process.env.EMAIL_PASS 
  }
});

const sendMail = async (to, subject, text) => {
  console.log(to,subject,text,"this data from mailer");
  try {
    await transporter.sendMail({
      from: `"Tripeazy Support" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text
    });
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

module.exports = sendMail;
