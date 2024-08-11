import React from 'react';

function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-gray-900">MyPortfolio</a>
        <div className="flex space-x-6">
          <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
          <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
          <a href="#recent-works" className="text-gray-600 hover:text-gray-900">Recent Works</a> {/* Add this link */}
          <a href="#cv" className="text-gray-600 hover:text-gray-900">CV</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
