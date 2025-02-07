import React, { useState } from 'react';
import { XMarkIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface MobileFiltersProps {
  isOpen: boolean;
  onClose: () => void;
  priceRange: number[];
  setPriceRange: (range: number[]) => void;
  selectedSize: string;
  setSelectedSize: (size: string) => void;
}

const MobileFilters: React.FC<MobileFiltersProps> = ({
  isOpen,
  onClose,
  priceRange,
  setPriceRange,
  selectedSize,
  setSelectedSize,
}) => {
  if (!isOpen) return null;

  const categories = ['T-shirts', 'Shorts', 'Shirts', 'Hoodie', 'Jeans'];
  const colors = ['green', 'red', 'yellow', 'orange', 'blue', 'indigo', 'purple', 'pink', 'white', 'black'];
  const sizes = ['XX-Small', 'X-Small', 'Small', 'Medium', 'Large', 'X-Large', 'XX-Large', '3X-Large', '4X-Large'];
  const styles = ['Casual', 'Formal', 'Party', 'Gym'];

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-xl font-medium">Filters</h2>
        <button onClick={onClose} className="p-2">
          <XMarkIcon className="h-6 w-6" />
        </button>
      </div>

      <div className="p-4 space-y-6">
        {/* Categories */}
        <div className="space-y-4">
          {categories.map((category) => (
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
            <ChevronRightIcon className="h-5 w-5 text-gray-400 rotate-90" />
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
            <ChevronRightIcon className="h-5 w-5 text-gray-400 rotate-90" />
          </div>
          <div className="grid grid-cols-5 gap-4">
            {colors.map((color) => (
              <button
                key={color}
                className={`w-10 h-10 rounded-full border-2 ${
                  color === 'white' ? 'border-gray-200' : ''
                }`}
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
            <ChevronRightIcon className="h-5 w-5 text-gray-400 rotate-90" />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                className={`py-2 px-3 rounded-full text-sm ${
                  selectedSize === size
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-600'
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="h-px bg-gray-200" />

        {/* Dress Style */}
        <div className="space-y-4">
          {styles.map((style) => (
            <div key={style} className="flex items-center justify-between py-2">
              <span className="text-gray-600">{style}</span>
              <ChevronRightIcon className="h-5 w-5 text-gray-400" />
            </div>
          ))}
        </div>

        {/* Apply Filter Button */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
          <button 
            className="w-full py-3 bg-black text-white rounded-full font-medium"
            onClick={onClose}
          >
            Apply Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileFilters;