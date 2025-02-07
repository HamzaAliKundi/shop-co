import React, { useState } from 'react';
import { ChevronDownIcon, ChevronRightIcon, AdjustmentsHorizontalIcon, XMarkIcon, Squares2X2Icon } from '@heroicons/react/24/outline';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  discount?: number;
  image: string;
}

const ProductsPage = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([50, 200]);
  const [selectedSize, setSelectedSize] = useState('Large');

  const products: Product[] = [
    {
      id: 1,
      name: "Gradient Graphic T-shirt",
      price: 145,
      originalPrice: 242,
      rating: 3.5,
      discount: 20,
      image: "/images/gradient-tee.jpg"
    },
    {
      id: 2,
      name: "Polo with Tipping Details",
      price: 180,
      originalPrice: 242,
      rating: 4.5,
      discount: 20,
      image: "/images/polo.jpg"
    },
    {
      id: 3,
      name: "Black Striped T-shirt",
      price: 120,
      originalPrice: 150,
      rating: 4.0,
      discount: 30,
      image: "/images/striped-tee.jpg"
    },
    {
      id: 4,
      name: "Skinny Fit Jeans",
      price: 240,
      originalPrice: 260,
      rating: 3.5,
      discount: 20,
      image: "/images/jeans.jpg"
    },
    {
      id: 5,
      name: "Checkered Shirt",
      price: 180,
      rating: 4.5,
      image: "/images/checkered-shirt.jpg"
    },
    {
      id: 6,
      name: "Sleeve Striped T-shirt",
      price: 130,
      originalPrice: 160,
      rating: 4.5,
      discount: 30,
      image: "/images/sleeve-striped.jpg"
    }
  ];

  // Mobile Filters Component
  const MobileFilters = () => {
    if (!isFilterOpen) return null;

    return (
      <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-medium">Filters</h2>
          <button onClick={() => setIsFilterOpen(false)} className="p-2">
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        <div className="p-4 space-y-6">
          {/* Categories */}
          <div className="space-y-4">
            {['T-shirts', 'Shorts', 'Shirts', 'Hoodie', 'Jeans'].map((category) => (
              <div key={category} className="flex items-center justify-between py-2">
                <span className="text-gray-600">{category}</span>
                <ChevronRightIcon className="h-5 w-5 text-gray-400" />
              </div>
            ))}
          </div>

          <div className="h-px bg-gray-200" />

          {/* Price Range */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium">Price</h3>
              <ChevronDownIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="range"
              min="50"
              max="200"
              className="w-full"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([50, parseInt(e.target.value)])}
            />
            <div className="flex justify-between text-sm text-gray-500 mt-2">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>

          <div className="h-px bg-gray-200" />

          {/* Colors */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium">Colors</h3>
              <ChevronDownIcon className="h-5 w-5 text-gray-400" />
            </div>
            <div className="grid grid-cols-5 gap-4">
              {['green', 'red', 'yellow', 'orange', 'blue', 'indigo', 'purple', 'pink', 'white', 'black'].map((color) => (
                <button
                  key={color}
                  className={`w-10 h-10 rounded-full border-2 ${color === 'white' ? 'border-gray-200' : ''}`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          <div className="h-px bg-gray-200" />

          {/* Sizes */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium">Size</h3>
              <ChevronDownIcon className="h-5 w-5 text-gray-400" />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {['XX-Small', 'X-Small', 'Small', 'Medium', 'Large', 'X-Large', 'XX-Large', '3X-Large', '4X-Large'].map((size) => (
                <button
                  key={size}
                  className={`py-2 px-3 rounded-full text-sm ${
                    selectedSize === size ? 'bg-black text-white' : 'bg-gray-100 text-gray-600'
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="h-px bg-gray-200" />

         
        </div>

        {/* Apply Filter Button */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
          <button 
            className="w-full py-3 bg-black text-white rounded-full font-medium"
            onClick={() => setIsFilterOpen(false)}
          >
            Apply Filter
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Mobile Header */}
      <div className="md:hidden flex justify-between items-center py-4">
        <div>
          <h1 className="text-xl font-medium">Casual</h1>
          <p className="text-sm text-gray-500">Showing 1-10 of 100 Products</p>
        </div>
        <div className="flex gap-4">
          <button onClick={() => setIsFilterOpen(true)}>
            <AdjustmentsHorizontalIcon className="h-6 w-6" />
          </button>
          <button>
          </button>
        </div>
      </div>

      {/* Mobile Products Grid */}
      <div className="md:hidden grid grid-cols-2 gap-4">
        {products.map((product) => (
          <div key={product.id} className="group">
            <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden mb-3">
              <img
                src={product.image}
                alt={product.name}
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-medium text-sm truncate">{product.name}</h3>
              <div className="flex items-center gap-0.5 my-1">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-xs ${
                      i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-200'
                    }`}
                  >
                    ★
                  </span>
                ))}
                <span className="text-xs text-gray-500">{product.rating}/5</span>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-medium text-sm">${product.price}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-gray-400 text-xs line-through">
                      ${product.originalPrice}
                    </span>
                    <span className="text-red-500 text-xs">-{product.discount}%</span>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Pagination */}
      <div className="md:hidden flex justify-between items-center py-6">
        <button className="text-sm text-gray-500">
          ← Previous
        </button>
        <div className="flex gap-1">
          {[1, 2, '...', 9, 10].map((page, index) => (
            <button
              key={index}
              className={`w-7 h-7 text-xs rounded-full ${
                page === 1 ? 'bg-black text-white' : 'text-gray-500'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
        <button className="text-sm text-gray-500">
          Next →
        </button>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex gap-8">
        {/* Filters Sidebar */}
        <div className="w-64 flex-shrink-0">
          <div className="sticky top-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-medium">Filters</h2>
              <AdjustmentsHorizontalIcon className="h-5 w-5" />
            </div>

            {/* Categories */}
            <div className="space-y-4 mb-6">
              {['T-shirts', 'Shorts', 'Shirts', 'Hoodie', 'Jeans'].map((category) => (
                <div key={category} className="flex items-center justify-between">
                  <span className="text-gray-600">{category}</span>
                  <ChevronRightIcon className="h-4 w-4 text-gray-400" />
                </div>
              ))}
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <h3 className="font-medium mb-4">Price</h3>
              <input
                type="range"
                min="50"
                max="200"
                className="w-full"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([50, parseInt(e.target.value)])}
              />
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>

            {/* Colors */}
            <div className="mb-6">
              <h3 className="font-medium mb-4">Colors</h3>
              <div className="grid grid-cols-5 gap-2">
                {['green', 'red', 'yellow', 'orange', 'blue', 'indigo', 'purple', 'pink', 'white', 'black'].map((color) => (
                  <button
                    key={color}
                    className={`w-8 h-8 rounded-full border-2 ${color === 'white' ? 'border-gray-200' : ''}`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="mb-6">
              <h3 className="font-medium mb-4">Size</h3>
              <div className="grid grid-cols-2 gap-2">
                {['XX-Small', 'X-Small', 'Small', 'Medium', 'Large', 'X-Large', 'XX-Large', '3X-Large', '4X-Large'].map((size) => (
                  <button
                    key={size}
                    className={`px-4 py-2 rounded-full text-sm ${
                      selectedSize === size ? 'bg-black text-white' : 'bg-gray-100 text-gray-600'
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

        

            <button className="w-full py-3 bg-black text-white rounded-full hover:bg-gray-800">
              Apply Filter
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-grow">
          {/* Desktop Header */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-medium">Casual</h1>
            <div className="flex items-center gap-4">
              <span className="text-gray-500">Showing 1-10 of 100 Products</span>
              <select className="bg-transparent border-none text-sm">
                <option>Most Popular</option>
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="group">
                <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden mb-4">
                <img
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div>
                  <h3 className="font-medium">{product.name}</h3>
                  <div className="flex items-center gap-1 my-2">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-sm ${
                          i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-200'
                        }`}
                      >
                        ★
                      </span>
                    ))}
                    <span className="text-sm text-gray-500">{product.rating}/5</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">${product.price}</span>
                    {product.originalPrice && (
                      <>
                        <span className="text-gray-400 line-through">${product.originalPrice}</span>
                        <span className="text-red-500">-{product.discount}%</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Pagination */}
          <div className="flex justify-between items-center mt-8">
            <button className="text-sm text-gray-500">
              ← Previous
            </button>
            <div className="flex gap-2">
              {[1, 2, '...', 9, 10].map((page, index) => (
                <button
                  key={index}
                  className={`w-8 h-8 text-sm rounded-full ${
                    page === 1 ? 'bg-black text-white' : 'text-gray-500'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
            <button className="text-sm text-gray-500">
              Next →
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Filters Modal */}
      <MobileFilters />
    </div>
  );
};

export default ProductsPage;