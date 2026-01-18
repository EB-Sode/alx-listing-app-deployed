import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8 px-6 mt-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* About */}
        <div>
          <h3 className="font-bold text-lg mb-2">MyStay</h3>
          <p className="text-gray-400 text-sm">
            Find your perfect stay anywhere in the world. Discover hotels, villas, mansions, and more.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/users" className="hover:text-white">Users</Link></li>
            <li><Link href="/properties" className="hover:text-white">Properties</Link></li>
            <li><Link href="/about" className="hover:text-white">About</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-lg mb-2">Contact</h3>
          <p className="text-gray-400 text-sm">Email: support@mystay.com</p>
          <p className="text-gray-400 text-sm">Phone: +1 234 567 890</p>
          <p className="text-gray-400 text-sm">Address: 123 Main Street, USA</p>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-6 text-sm">
        &copy; {new Date().getFullYear()} MyStay. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
