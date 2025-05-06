import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from 'src/utils/axiosInstance';

const tabs = ['Packages', 'Blogs', 'Organized Packages'];

const AgencyDetailPage = () => {
  const { agencyId } = useParams();
  const [agency, setAgency] = useState(null);
  const [activeTab, setActiveTab] = useState('Packages');

  useEffect(() => {
    const fetchAgencyDetails = async () => {
      try {
        const response = await axiosInstance.get(`/auth/agencies/${agencyId}`);
        setAgency(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Failed to fetch agency details:', error);
      }
    };

    fetchAgencyDetails();
  }, [agencyId]);

  if (!agency) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6">
      {/* Agency header */}
      <div className="flex items-center gap-6 mb-6">
        <img src={agency.image} alt={agency.companyName} className="w-20 h-20 rounded-full" />
        <div>
          <h1 className="text-2xl font-bold">{agency.companyName}</h1>
          <p className="text-gray-600">{agency.city}, {agency.state}, {agency.country}</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-4">
        <nav className="flex gap-6">
          {tabs.map(tab => (
            <button
              key={tab}
              className={`py-2 px-4 border-b-2 text-sm font-medium ${
                activeTab === tab
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-blue-500'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === 'Packages' && (
          <div>
            {/* Replace this with actual packages content */}
            <p>Show all packages here...</p>
          </div>
        )}
        {activeTab === 'Blogs' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {agency.blogs?.map((blog) => (
              <div key={blog._id} className="border p-4 rounded-lg shadow-sm">
                <img src={blog.thumbnail} className="w-full h-40 object-cover rounded mb-3" alt="blog" />
                <h3 className="font-semibold text-lg">{blog.title}</h3>
                <p className="text-sm text-gray-500 mb-1">📍 {blog.location}</p>
                {blog.content?.[0]?.blocks?.map((block, index) =>
                  block.type === 'paragraph' ? (
                    <p key={index} className="text-sm">{block.data.text}</p>
                  ) : null
                )}
              </div>
            ))}
          </div>
        )}
        {activeTab === 'Organized Packages' && (
          <div>
            {/* Replace this with actual organized packages content */}
            <p>Show all organized packages here...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AgencyDetailPage;
