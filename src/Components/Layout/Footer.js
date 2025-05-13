import React, { useState } from "react";
import { Twitter, Facebook, Youtube, Mail } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
    alert("Thank you for subscribing to our newsletter!");
  };

  return (
    <footer className="bg-white text-gray-700">
      {/* Top Newsletter and Social Section */}
   
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Information</h4>
            <ul className="space-y-2">
              <li><a href="/search" className="hover:text-teal-500 transition duration-300">Search</a></li>
              <li><a href="/" className="text-teal-500 font-semibold">Home page</a></li>
              <li><a href="/collections/all" className="hover:text-teal-500 transition duration-300">All Products</a></li>
              <li><a href="/collections/frontpage" className="hover:text-teal-500 transition duration-300">Durable Medical Equipment</a></li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-teal-500 font-semibold">Home</a></li>
              <li><a href="/collections/all" className="hover:text-teal-500 transition duration-300">Catalog</a></li>
              <li><a href="/collections/patient-care" className="hover:text-teal-500 transition duration-300">Patient Care</a></li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4">My Account</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-teal-500 font-semibold">Home</a></li>
              <li><a href="/collections/all" className="hover:text-teal-500 transition duration-300">Catalog</a></li>
              <li><a href="/collections/frontpage" className="hover:text-teal-500 transition duration-300">Medical Equipment</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center py-6 text-sm border-t border-gray-200 mt-8">
        <p>
          © 2025 Medical Equipment. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
