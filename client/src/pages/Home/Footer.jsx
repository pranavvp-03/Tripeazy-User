import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-20">
          {/* Contact Section */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Call Us</h4>
            <p>+91 9526788628</p>
            <p>
              Email Us:{' '}
              <a href="mailto:tripeazy777@gmail.com" className="text-indigo-400">
                Tripeazy
              </a>
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" aria-label="Facebook" className="hover:text-indigo-400">
                <FaFacebook />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-indigo-400">
                <FaTwitter />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-indigo-400">
                <FaLinkedin />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-indigo-400">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Links</h4>
            <ul>
              <li><a href="#" className="hover:text-indigo-400">Home</a></li>
              <li><a href="/contact" className="hover:text-indigo-400">ContactUs</a></li>
              <li><a href="/about" className="hover:text-indigo-400">About us</a></li>
            </ul>
          </div>

          {/* Popular Destinations Section */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Popular Destinations</h4>
            <ul>
              <li>Emirates, United Arab</li>
              <li>New York City, USA</li>
              <li>One Bridge, Belgium</li>
              <li>Golden Frame, Dubai</li>
            </ul>
          </div>
        </div>

        {/* Divider Line */}
        <hr className="my-8 border-gray-700" />

        {/* Copyright Section */}
        <p className="text-center">&copy; 2025 Tripeazy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
