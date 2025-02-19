import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4 ">
        <div className="flex flex-wrap justify-between">
          {/* Company Info */}
          <div className="w-full sm:w-1/2 lg:w-1/3 mb-6">
            <h2 className="text-2xl font-bold text-white mb-4">CrowdFund</h2>
            <p className="mb-4">
              Empowering creators worldwide. Join our community to launch and support innovative projects.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                {/* Replace with Facebook icon */}
                Facebook
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                {/* Replace with Twitter icon */}
                Twitter
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                {/* Replace with LinkedIn icon */}
                LinkedIn
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="w-full sm:w-1/2 lg:w-1/3 mb-6">
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/explore" className="hover:text-white transition">
                  Explore
                </a>
              </li>
              <li>
                <a href="/dashboard" className="hover:text-white transition">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-white transition">
                  Terms & Privacy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="w-full lg:w-1/3 mb-6">
            <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
            <p className="mb-2">
              Phone:{" "}
              <a href="tel:+1234567890" className="hover:text-white transition">
                +1 (234) 567-890
              </a>
            </p>
            <p className="mb-2">
              Email:{" "}
              <a href="mailto:support@crowdfund.com" className="hover:text-white transition">
                support@crowdfund.com
              </a>
            </p>
            <p className="mb-2">
              WhatsApp:{" "}
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                Chat with us
              </a>
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-4 mt-4 text-center">
          <p className="text-sm">&copy; 2025 CrowdFund. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
