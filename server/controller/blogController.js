const Blog = require("../models/agency/Blog");

exports.fetchBlogs = async (req, res) => {
  const userId = req.user.userId;
  console.log(userId,"its user nes id")
  try {
    console.log("fetch blog is hitted");
    const blogs = await Blog.find()
      .sort({ createdAt: -1 })
      .select("id title thumbnail createdAt author location likes saves")
      .populate("author", "companyName image")
      .lean();

      const listing = blogs.map((blog) => {
        // Ensure likes and saves are arrays using fallback
        const validLikes = Array.isArray(blog.likes) ? blog.likes.filter(Boolean) : [];
        const validSaves = Array.isArray(blog.saves) ? blog.saves.filter(Boolean) : [];
      
        return {
          ...blog,
          isLiked: userId && validLikes.some((id) => id.toString() === userId),
          likeCount: validLikes.length,
          isSaved: userId ? validSaves.map((id) => id.toString()).includes(userId) : false,
        };
      });
      


    res.status(200).json(listing);
    console.log("blogs data sent successfully");
  } catch (error) {
    res.status(500).json({ message: "Error fetching blogs", error });
    console.log("error in fetch blog", error);
  }
};


exports.SaveItem = async (req, res) => {
    try {
      const { id } = req.params;
      const userId = req.user.userId;
 
       const  blog = await Blog.findById(id);
      
      if (!blog) {
        return res.status(404).json({ message: "blog not found" });
      }
  
      if (!blog.saves) {
        blog.saves = [];
      }
  
      const isSaved = blog.saves.includes(userId);
  
      if (isSaved) {
        blog.saves = blog.saves.filter(savedId => savedId.toString() !== userId);
      } else {
        blog.saves.push(userId);
      }
  
      await blog.save();
  
      res.json({ isSaved: !isSaved });
    } catch (error) {
      console.error("error toggling like:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };




  exports.Like = async (req, res) => {
    try {
      const { id } = req.params;
      const userId = req.user.userId;
      console.log(userId,"its user id")
      const blog = await Blog.findById(id);
      if (!blog) return res.status(404).json({ error: "Blog not found" });
  
      if (!blog.likes) {
        blog.likes = [];
      }
  
  
      const isLiked = blog.likes.includes(userId);
      if (isLiked) {
        blog.likes = blog.likes.filter(id => id.toString() !== userId);
      } else {
        blog.likes.push(userId);
      }
  
      await blog.save();
  
      res.json({ isLiked: !isLiked, likeCount: blog.likes.length });
    } catch (error) {
      console.error("Error toggling like:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };