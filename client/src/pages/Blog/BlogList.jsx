
import React, { useEffect, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import BlogCard from "./BlogCard";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axiosInstance.get("/blogs/fetch-blogs", { withCredentials: true });
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error.response?.data || error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);
  console.log(blogs,"blogs response")

  if (loading) {
    return <p className="text-center text-gray-500">Loading blogs...</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {blogs.length > 0 ? (
        blogs.map((blog) => <BlogCard key={blog._id} blog={blog} />)
      ) : (
        <p className="col-span-full text-center text-gray-500">No blogs found.</p>
      )}
    </div>
  );
};

export default BlogList;
