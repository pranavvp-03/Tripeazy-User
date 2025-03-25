import { useState } from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import axios from "axios";
import { logout } from "../../redux/authSlice";
import { PencilIcon } from "@heroicons/react/24/solid";
import  updateProfilePhoto  from "../../redux/authSlice"

const ProfilePopup = ({ user, blogs, onClose }) => {
  const dispatch = useDispatch();
  const [bio, setBio] = useState(user?.bio || "Hey, I'm using Tripeazy!");
  const [isEditing, setIsEditing] = useState(false);
  const [newBio, setNewBio] = useState(bio);
  const [imageFile, setImageFile] = useState(null);

  const handleLogout = () => {
    dispatch(logout());
    window.location.href = "/login";
  };

  const handleBioChange = (e) => {
    setNewBio(e.target.value);
  };

  const saveBio = () => {
    setBio(newBio);
    setIsEditing(false);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      uploadProfilePhoto(file);
    }
  };

  const uploadProfilePhoto = async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("type", "profile");
      formData.append("userId", user._id);
      
      const response = await axios.post("http://localhost:5000/api/upload/upload-image",formData, {
        headers: { "Content-Type": "multipart/form-data" },withCredentials:true,
      });
      console.log(response.data.profilePhoto || response.data.data?.profilePhoto,"its photo url")
      const newPhotoUrl = response.data.profilePhoto || response.data.data?.profilePhoto; // Assuming this returns the photo URL
      dispatch(updateProfilePhoto(newPhotoUrl)); // Update Redux state with new photo
      alert("Profile photo updated successfully!");
      console.log(response.data);
    } catch (error) {
      console.error("Upload failed:", error.response?.data?.error || error.message);
      alert("Failed to upload profile photo");
    }
  };

  const handleOutsideClick = (e) => {
    if (e.target.id === "popup-overlay") {
      onClose();
    }
  };

  return (
    <div
      id="popup-overlay"
      className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50"
      onClick={handleOutsideClick}
    >
      <motion.div
        className="bg-white p-6 rounded-lg shadow-lg relative w-full max-w-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
      >
        {/* Profile Section */}
        <div className="flex items-center mb-4">
          <div className="relative w-20 h-20">
            {user?.profilePhoto ? (
              <img
                src={user.profilePhoto}
                alt="Profile"
                className="w-20 h-20 rounded-full object-cover"
              />
            ) : (
              <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center text-white text-2xl">
                {user?.name?.charAt(0).toUpperCase()}
              </div>
            )}
            <label htmlFor="profile-upload" className="absolute bottom-0 right-0 bg-purple-600 p-2 rounded-full cursor-pointer">
              <PencilIcon className="h-5 w-5 text-white" />
            </label>
            <input
              id="profile-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-semibold">{user?.name}</h2>
            <p className="text-gray-500">{user?.email}</p>
            <p className="text-gray-500">{user?.phone || "No phone number available"}</p>
          </div>
        </div>

        {/* Bio Section */}
        <div className="mb-4">
          {isEditing ? (
            <textarea
              className="w-full p-2 border rounded"
              value={newBio}
              onChange={handleBioChange}
            />
          ) : (
            <p className="text-gray-700">{bio}</p>
          )}
          <button
            className="text-purple-600 mt-2"
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? "Cancel" : "Edit Bio"}
          </button>
          {isEditing && bio !== newBio && (
            <button
              className="ml-4 text-green-600"
              onClick={saveBio}
            >
              Save
            </button>
          )}
        </div>

        {/* User Blogs Section */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Your Blogs</h3>
          {blogs?.length > 0 ? (
            <ul className="max-h-40 overflow-auto">
              {blogs.map((blog) => (
                <li key={blog.id} className="p-2 border-b">{blog.title}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">You haven't posted any blogs yet.</p>
          )}
        </div>

        {/* Logout Button */}
        <button
          className="absolute bottom-4 right-4 bg-red-500 text-white py-2 px-4 rounded-lg"
          onClick={handleLogout}
        >
          Logout
        </button>
      </motion.div>
    </div>
  );
};

export default ProfilePopup;
