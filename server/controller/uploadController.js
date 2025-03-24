const User = require("../models/user/User");
const Blog = require("../models/agency/Blog");
const cloudinary = require('../config/cloudinary');

exports.uploadImage = async (req, res) => {
  try {
    const { userId, type, blogId } = req.body;
    console.log(userId,"its user id")
    if (!req.file) return res.status(400).json({ error: 'No file uploaded' });

    // Upload to Cloudinary
    const result = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream({ resource_type: 'image' }, (error, result) => {
        if (error) reject(error);
        else resolve(result);
      });

      uploadStream.end(req.file.buffer);
    });

    let updatedData;

    if (type === 'profile') {
      // Update Profile Photo in User Collection
      updatedData = await User.findByIdAndUpdate(userId, { profilePhoto: result.secure_url }, { new: true });
    } else if (type === 'blog') {
      if (!blogId) return res.status(400).json({ error: 'Blog ID is required for blog images' });

      // Update Blog Image in Blog Collection
      updatedData = await Blog.findByIdAndUpdate(blogId, { image: result.secure_url }, { new: true });
    } else {
      return res.status(400).json({ error: 'Invalid upload type' });
    }

    res.json({ message: 'Image uploaded successfully', data: updatedData });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
