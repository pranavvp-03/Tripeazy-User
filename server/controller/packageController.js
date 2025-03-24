const packageModel = require("../models/agency/packageModel"); 
const organizedPackage = require("../models/agency/organaisedPackage"); 

// Get All Packages with Infinite Scrolling
const getAllPackages = async (req, res) => {
  console.log("get packages is worked");

  try {
    const { page = 1, limit = 10, category } = req.query;

    // Create a query for category if provided
    const query = category && category !== 'All' 
      ? { destinationCategory: category }
      : {};

    const packages = await packageModel.find(query)
      .skip((page - 1) * parseInt(limit))
      .limit(parseInt(limit));
    
    console.log(packages, "packages");

    const totalPackages = await packageModel.countDocuments(query);
    const hasMore = (page * limit) < totalPackages;

    res.status(200).json({ packages, hasMore });
    console.log(packages, "packages data sent successfully");
  } catch (error) {
    console.error("Error fetching packages:", error);
    res.status(500).json({ message: "Error fetching packages", error });
  }
};

// Get Single Package by ID
const getPackageById = async (req, res) => {
  try {
    const { id } = req.params;
    const packageData = await packageModel.findById(id);

    if (!packageData) {
      return res.status(404).json({ message: "Package not found" });
    }
    res.status(200).json(packageData);
  } catch (error) {
    res.status(500).json({ message: "Error fetching package", error });
  }
};

// Get Organized Packages
const getOrganizedPackages = async (req, res) => {
  try {
    const { agencyId } = req.query;

    if (!agencyId) {
      return res.status(400).json({ message: "Agency ID is required" });
    }

    const organizedPackages = await organizedPackage.find({ agencyId });

    res.status(200).json(organizedPackages);
  } catch (error) {
    res.status(500).json({ message: "Error fetching organized packages", error });
  }
};

// Search Packages by Destination
const searchPackages = async (req, res) => {
  try {
    const { query } = req.query;

    if (!query) {
      return res.status(400).json({ message: "Search query is required" });
    }

    const packages = await packageModel.find({
      destination: { $regex: query, $options: "i" }
    });

    res.status(200).json(packages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error searching packages", error });
  }
};


module.exports = {
  getAllPackages,
  getPackageById,
  getOrganizedPackages,
  searchPackages
};
