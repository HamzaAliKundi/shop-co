import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItemCount = 3;
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const linkClasses = (path: string) => {
    return `font-['Satoshi'] text-base font-normal decoration-skip-ink-none underline-offset-from-font ${
      isActive(path) ? 'text-black font-medium' : 'text-gray-600 hover:text-black'
    }`;
  };

  return (
    <nav className="w-full bg-white shadow-sm">
      {/* Desktop Navbar */}
      <div className="hidden lg:flex items-center justify-between px-6 py-4 max-w-[1440px] mx-auto">
        {/* Logo */}
        <Link to="/" className="text-[32px] font-bold text-black font-['Integral_CF'] decoration-skip-ink-none underline-offset-from-font">
          SHOP.CO
        </Link>
        
        {/* Navigation Links */}
        <div className="flex items-center space-x-8">
          <div className="relative group">
            <Link to="/products" className={`flex items-center space-x-1 ${linkClasses('/products')}`}>
              <span>Shop</span>
              {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg> */}
            </Link>
          </div>
          <Link to="/on-sale" className={linkClasses('/on-sale')}>
            On Sale
          </Link>
          <Link to="/new-arrivals" className={linkClasses('/new-arrivals')}>
            New Arrivals
          </Link>
          <Link to="/brands" className={linkClasses('/brands')}>
            Brands
          </Link>
        </div>

        {/* Search and Actions */}
        <div className="flex items-center gap-14">
          {/* Search Input */}
          {/* <div className="relative items-center hidden lg:flex">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full lg:w-[577px] h-[48px] px-4 py-3 bg-[#F0F0F0] rounded-[62px] focus:outline-none font-['Satoshi'] text-base font-normal decoration-skip-ink-none underline-offset-from-font"
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute right-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div> */}
          {/* Action Icons */}
          <div className="flex items-center gap-4">
            <Link to="/cart" className={`relative ${isActive('/cart') ? 'text-black' : 'text-gray-600 hover:text-black'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="lg:w-[24px] lg:h-[24px] w-[22.13px] h-[20.25px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItemCount}
                </span>
              )}
            </Link>
            <Link to="/profile" className={isActive('/profile') ? 'text-black' : 'text-gray-600 hover:text-black'}>
              <svg xmlns="http://www.w3.org/2000/svg" className="lg:w-[24px] lg:h-[24px] w-[22.13px] h-[20.25px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="lg:hidden px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-[22.13px] h-[20.25px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Logo */}
            <Link to="/" className="text-[32px] font-bold text-black font-['Integral_CF'] decoration-skip-ink-none underline-offset-from-font">
              SHOP.CO
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-4">
            {/* <Link to="/search">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-[22.13px] h-[20.25px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </Link> */}
            <Link to="/cart" className={`relative ${isActive('/cart') ? 'text-black' : 'text-gray-600 hover:text-black'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-[22.13px] h-[20.25px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItemCount}
                </span>
              )}
            </Link>
            <Link to="/profile" className={isActive('/profile') ? 'text-black' : 'text-gray-600 hover:text-black'}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-[22.13px] h-[20.25px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mt-4 space-y-4">
            <div className="relative group">
              <Link to="/products" className={`flex items-center space-x-1 ${linkClasses('/products')}`}>
                <span>Shop</span>
                {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg> */}
              </Link>
            </div>
            <Link to="/on-sale" className={`block ${linkClasses('/on-sale')}`}>
              On Sale
            </Link>
            <Link to="/new-arrivals" className={`block ${linkClasses('/new-arrivals')}`}>
              New Arrivals
            </Link>
            <Link to="/brands" className={`block ${linkClasses('/brands')}`}>
              Brands
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;