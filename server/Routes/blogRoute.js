const express = require("express");
const { fetchBlogs, SaveItem, Like } = require("../controller/blogController");
const { verifyToken } = require("../middlewares/verifyToken");
const router = express.Router();


router.get("/fetch-blogs",verifyToken,fetchBlogs)
router.post("/:id/like",verifyToken,Like)
router.post("/save/:id",verifyToken,SaveItem)

module.exports = router