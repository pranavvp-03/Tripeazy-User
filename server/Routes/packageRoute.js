const express = require("express");
const { 
  getAllPackages, 
  getPackageById, 
  getOrganizedPackages, 
  searchPackages 
} = require("../controller/packageController");

const router = express.Router();


router.get("/", getAllPackages);
router.get("/organized", getOrganizedPackages);
router.get("/search", searchPackages); // Place search before the :id
router.get("/:id", getPackageById);  

module.exports = router;
