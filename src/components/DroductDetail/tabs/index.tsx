import React, { useState } from 'react';
import ProductDetails from './ProductDetails';
import RatingReviews from './RatingReviews';
import FAQs from './FAQs';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('rating');

  const tabs = [
    { id: 'details', label: 'Product Details' },
    { id: 'rating', label: 'Rating & Reviews' },
    { id: 'faqs', label: 'FAQs' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      {/* Tab Headers */}
      <div className="relative">
        <div className="flex justify-between border-b">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-4 py-3 text-base transition-colors relative
                ${activeTab === tab.id 
                  ? 'text-black font-medium' 
                  : 'text-gray-500 hover:text-gray-700'
                }
              `}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        
        {/* Active tab indicator - divided into three equal sections */}
        <div className="absolute bottom-0 w-full flex">
          <div className={`w-1/3 h-0.5 transition-colors ${activeTab === 'details' ? 'bg-black' : 'bg-transparent'}`} />
          <div className={`w-1/3 h-0.5 transition-colors ${activeTab === 'rating' ? 'bg-black' : 'bg-transparent'}`} />
          <div className={`w-1/3 h-0.5 transition-colors ${activeTab === 'faqs' ? 'bg-black' : 'bg-transparent'}`} />
        </div>
      </div>

      {/* Tab Content */}
      <div className="py-8">
        {activeTab === 'details' && <ProductDetails />}
        {activeTab === 'rating' && <RatingReviews />}
        {activeTab === 'faqs' && <FAQs />}
      </div>
    </div>
  );
};

export default Tabs;