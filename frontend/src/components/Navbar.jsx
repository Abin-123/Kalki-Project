import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Blog Name and Posts */}
        <div className="flex items-center space-x-4">
          <a href="/" className="text-xl font-semibold text-gray-800 hover:text-blue-600">
            MyBlog
          </a>
          <a href="/posts" className="text-gray-600 hover:text-blue-500 font-medium">
            Posts
          </a>
        </div>

        {/* Right: Profile */}
        <div className="flex items-center space-x-3">
          <span className="text-gray-700 font-medium">John Doe</span>
          <img
            src="https://i.pravatar.cc/40?img=3"
            alt="Profile"
            className="w-9 h-9 rounded-full border border-gray-300 shadow-sm"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
