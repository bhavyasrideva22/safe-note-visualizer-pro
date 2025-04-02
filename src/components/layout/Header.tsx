
import React from "react";
import Logo from "../../assets/logo";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto py-4 px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Logo />
          <nav className="hidden md:flex space-x-6">
            <a 
              href="#calculator" 
              className="text-charcoal hover:text-primary font-medium transition-colors duration-200"
            >
              Calculator
            </a>
            <a 
              href="#about" 
              className="text-charcoal hover:text-primary font-medium transition-colors duration-200"
            >
              About SAFE Notes
            </a>
            <a 
              href="#faq" 
              className="text-charcoal hover:text-primary font-medium transition-colors duration-200"
            >
              FAQ
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
