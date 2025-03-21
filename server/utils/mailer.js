const nodemailer = require('nodemailer');
const dotenv = require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER , // Use your email
    pass: process.env.EMAIL_PASS // Use your app password
  }
});

const sendMail = async (to, subject, text) => {
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
