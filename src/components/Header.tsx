import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center py-6 px-8 sticky top-0 bg-dark/80 backdrop-blur-md z-50">
      <h1 className="text-2xl font-bold text-accent">Jane Doe</h1>
      <nav className="space-x-6">
        <a href="#about" className="hover:text-accent transition">About</a>
        <a href="#projects" className="hover:text-accent transition">Projects</a>
        <a href="#contact" className="hover:text-accent transition">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
