
import React, { useState } from 'react';
import { Search, ShoppingCart, ChevronDown } from 'lucide-react';

const Header = () => {
  const [currency, setCurrency] = useState('USD');
  const currencies = ['USD', 'EUR', 'GBP'];

  return (
    <header className="w-full">

      
      {/* Navigation */}
      <div className="bg-teal-500 text-white">
        <div className="container mx-auto px-4">
          <nav className="flex">
            <a href="/" className="py-3 px-6 hover:bg-teal-600">HOME</a>
            <div className="relative group">
              <a href="#" className="py-3 px-6 hover:bg-teal-600 flex items-center">
                PRODUCTS <ChevronDown className="h-4 w-4 ml-1" />
              </a>
            </div>
            <div className="relative group">
              <a href="#" className="py-3 px-6 hover:bg-teal-600 flex items-center">
                SALE <ChevronDown className="h-4 w-4 ml-1" />
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;