import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm">
      {/* Desktop Navbar */}
      <div className="hidden lg:flex items-center justify-between px-6 py-4 max-w-[1440px] mx-auto">
        {/* Logo */}
        <Link to="/" className="text-[18px] font-bold text-black font-['Integral_CF'] leading-[38.4px]">
          SHOP.CO
        </Link>
        
        {/* Navigation Links */}
        <div className="flex items-center space-x-8">
          <div className="relative group">
            <button className="flex items-center space-x-1 font-['Satoshi'] text-base leading-[21.6px] text-black">
              <span>Shop</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          <Link to="/on-sale" className="font-['Satoshi'] text-base leading-[21.6px] text-black">
            On Sale
          </Link>
          <Link to="/new-arrivals" className="font-['Satoshi'] text-base leading-[21.6px] text-black">
            New Arrivals
          </Link>
          <Link to="/brands" className="font-['Satoshi'] text-base leading-[21.6px] text-black">
            Brands
          </Link>
        </div>

        {/* Search and Actions */}
        <div className="flex items-center gap-14">
          {/* Search Input */}
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-[577px] h-[48px] px-4 py-3 bg-[#F0F0F0] rounded-[62px] focus:outline-none font-['Satoshi'] text-base leading-[21.6px]"
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute right-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          {/* Action Icons */}
          <div className="flex items-center gap-4">
            <Link to="/cart" className="w-[24px] h-[24px]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </Link>
            <Link to="/profile" className="w-[24px] h-[24px]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="lg:hidden px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Logo */}
          <Link to="/" className="text-[18px] font-bold text-black font-['Integral_CF'] leading-[38.4px]">
            SHOP.CO
          </Link>

          {/* Mobile Actions */}
          <div className="flex items-center gap-4">
            <Link to="/search" className="w-[24px] h-[24px]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </Link>
            <Link to="/cart" className="w-[24px] h-[24px]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </Link>
            <Link to="/profile" className="w-[24px] h-[24px]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mt-4 space-y-4">
            <div className="relative group">
              <button className="flex items-center space-x-1 font-['Satoshi'] text-base leading-[21.6px] text-black">
                <span>Shop</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <Link to="/on-sale" className="block font-['Satoshi'] text-base leading-[21.6px] text-black">
              On Sale
            </Link>
            <Link to="/new-arrivals" className="block font-['Satoshi'] text-base leading-[21.6px] text-black">
              New Arrivals
            </Link>
            <Link to="/brands" className="block font-['Satoshi'] text-base leading-[21.6px] text-black">
              Brands
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;