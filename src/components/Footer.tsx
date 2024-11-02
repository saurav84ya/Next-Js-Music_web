import React from 'react';

export default function Footer() {
  return (
    <div className="bg-[#010000] text-white py-10 px-5">
      <div className="grid  pl-16 grid-cols-1 md:grid-cols-2  justify-center lg:grid-cols-4 gap-8">
        <div>
          <h1 className="text-2xl font-semibold mb-4">About Us</h1>
          <p className="text-gray-400">
            We are committed to providing the best educational resources and support for our community.
          </p>
        </div>
        <div>
          <h1 className="text-2xl font-semibold mb-4">Quick Links</h1>
          <p className="hover:text-gray-300 cursor-pointer">Home</p>
          <p className="hover:text-gray-300 cursor-pointer">About</p>
          <p className="hover:text-gray-300 cursor-pointer">Courses</p>
          <p className="hover:text-gray-300 cursor-pointer">Contact</p>
        </div>
        <div>
          <h1 className="text-2xl font-semibold mb-4">Follow Us</h1>
          <p className="hover:text-gray-300 cursor-pointer">Facebook</p>
          <p className="hover:text-gray-300 cursor-pointer">Twitter</p>
          <p className="hover:text-gray-300 cursor-pointer">Instagram</p>
        </div>
        <div>
          <h1 className="text-2xl font-semibold mb-4">Contact Us</h1>
          <p className="text-gray-400">Phone: 1234567890</p>
          <p className="text-gray-400">Email: <a href="mailto:info@website.com" className="hover:text-gray-300">info@website.com</a></p>
        </div>
      </div>
    </div>
  );
}
