import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">CrowdFund</h1>
        <div className="space-x-10">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/explore" className="hover:underline">Explore</Link>
          <Link to="/dashboard" className="hover:underline">Dashboard</Link>
          <Link to="/about" className="hover:underline">About Us</Link>
          <Link to="/contact" className="hover:underline">Contact Us</Link>
          <Link to="/signup" className="hover:underline">Signup</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
