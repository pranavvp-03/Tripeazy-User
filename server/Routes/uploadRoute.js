const express = require("express");
const { uploadImage } = require("../controller/uploadController");
const upload = require("../utils/upload");
const { verifyToken } = require("../middlewares/verifyToken");
const router = express.Router();

// Image upload route
router.post("/upload-image",verifyToken, upload.single("file"), uploadImage);

module.exports = router;
