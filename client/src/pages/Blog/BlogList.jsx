// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { motion } from 'framer-motion';
// import { Heart, Bookmark, MapPin } from 'lucide-react';

// const BlogList = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [likedBlogs, setLikedBlogs] = useState(new Set());
//   const [savedBlogs, setSavedBlogs] = useState(new Set());

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/blogs/fetch-blogs')
//       .then(response => setBlogs(response.data))
//       .catch(error => console.error('Error fetching blogs:', error));
//   }, []);

//   const toggleLike = (id) => {
//     setLikedBlogs((prev) => {
//       const newLikes = new Set(prev);
//       newLikes.has(id) ? newLikes.delete(id) : newLikes.add(id);
//       return newLikes;
//     });
//   };

//   const toggleSave = (id) => {
//     setSavedBlogs((prev) => {
//       const newSaves = new Set(prev);
//       newSaves.has(id) ? newSaves.delete(id) : newSaves.add(id);
//       return newSaves;
//     });
//   };

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 mt-20">
//       {blogs.map((blog) => (
//         <motion.div 
//           key={blog._id}
//           className="bg-white rounded-2xl shadow-lg overflow-hidden"
//           whileHover={{ scale: 1.03 }}
//         >
//           <img src={blog.thumbnail} alt={blog.title} className="w-full h-56 object-cover" />
//           <div className="p-4">
//             <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
//             <p className="text-sm text-gray-600 flex items-center mb-4">
//               <MapPin className="w-4 h-4 mr-1" /> {blog.location}
//             </p>
//             <div className="flex items-center justify-between">
//               <button onClick={() => toggleLike(blog._id)} className="flex items-center">
//                 <Heart className={`w-5 h-5 ${likedBlogs.has(blog._id) ? 'text-red-500' : 'text-gray-400'}`} />
//               </button>
//               <button onClick={() => toggleSave(blog._id)} className="flex items-center">
//                 <Bookmark className={`w-5 h-5 ${savedBlogs.has(blog._id) ? 'text-blue-500' : 'text-gray-400'}`} />
//               </button>
//             </div>
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   );
// };

// export default BlogList;


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
