import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import feather from "./Images/feather.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const menuItems = ['Home', 'About', 'Services', 'Contact'];

  return (
    <nav className="bg-white shadow-lg w-full font-mono fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16 w-full">
          {/* Logo aligned to the leftmost side */}
          <div className="flex items-center flex-shrink-0">
            <img src={feather} className='h-10' alt="feather logo"/>
            <span className='ml-1'>DayOne</span>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center ml-auto">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-black hover:text-blue-600 focus:outline-none p-2"
            >
              {isOpen ? '✖' : '☰'}
            </button>
          </div>

          {/* Menu Items centered */}
          <div className="hidden md:flex-1 md:flex md:justify-center">
            <div className="flex flex-row space-x-8 items-center">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-black hover:text-blue-600 px-3 py-2 text-sm font-medium"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Items */}
          {isOpen && (
            <div className="md:hidden absolute left-0 right-0 top-16 bg-white border-b border-gray-200 shadow-lg">
              <div className="flex flex-col">
                {menuItems.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-black hover:text-blue-600 px-3 py-4 text-sm font-medium text-center border-b border-gray-100"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Sign Up Button aligned to the rightmost side */}
          <div className="hidden md:flex items-center ml-auto">
            <button 
              className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
              onClick={() => navigate("/journal")}
            >
              Create Journal
            </button>
          </div>
        </div>
        
        {/* Mobile Sign Up Button */}
        {isOpen && (
          <div className="md:hidden py-4 bg-white border-t border-gray-100">
            <button 
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
              onClick={() => navigate("/journal")}
            >
              Create Journal
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
