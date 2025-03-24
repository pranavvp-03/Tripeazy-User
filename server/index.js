const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/authRoutes")
const packageRoute = require("./Routes/packageRoute")
const uploadRoute = require("./Routes/uploadRoute")
const app = express();
dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use("/api/auth",authRoute)
app.use("/api/packages",packageRoute)
app.use("/api/upload",uploadRoute );



mongoose.connect(process.env.MONGO_URI)
    .then(()=>console.log(`MongoDB Connected Successfully...😎`))
    .catch((error)=>console.log(error,"Error occured while connectiong to mongoDB...😡"));

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`Server is running on Port ${PORT}...👩‍💻🤸‍♂️`))    

