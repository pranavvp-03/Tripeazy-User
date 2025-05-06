const Agency = require("../../models/agency/agency");
const Blog = require("../../models/agency/Blog");
const Packages = require("../../models/agency/packageModel");
const organaisedPackages = require("../../models/agency/organaisedPackage");

const fetchSingleAgency = async (req, res) => {
  try {
    const agencyId = req.params.id;
    console.log(agencyId, "its req.params.id");

    const agency = await Agency.findById(agencyId).lean();

    if (!agency) {
      return res.status(404).json({ message: "agency not found" });
    }

    const blogs = await Blog.find({ author: agencyId}).lean();

    const packages = await Packages.find({ author: agencyId }).lean();

    const organizedPackages = await organaisedPackages.find({ author: agencyId }).lean();

    res.status(200).json({
        ...agency,
        blogs,
        packages,
        organizedPackages,
    });

  } catch (error) {
    console.log("error fetching in single agency details",error);
    res.status(500).json({ message: "server error"});
  }
};



module.exports = {
    fetchSingleAgency
}
