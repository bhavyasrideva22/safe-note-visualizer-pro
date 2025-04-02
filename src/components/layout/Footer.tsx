
import React from "react";
import Logo from "../../assets/logo";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Logo className="text-white mb-4" />
            <p className="text-sm text-gray-300 max-w-md">
              SAFECalc helps founders and investors understand the implications of SAFE notes on 
              company ownership and valuation. Our calculator provides accurate, transparent 
              insights for Y Combinator-style funding.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#calculator" className="text-sm text-gray-300 hover:text-white transition-colors duration-200">
                  Calculator
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm text-gray-300 hover:text-white transition-colors duration-200">
                  About SAFE Notes
                </a>
              </li>
              <li>
                <a href="#faq" className="text-sm text-gray-300 hover:text-white transition-colors duration-200">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors duration-200">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors duration-200">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} SAFECalc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
