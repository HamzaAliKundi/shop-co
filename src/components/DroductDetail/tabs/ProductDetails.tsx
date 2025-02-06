import React from 'react';

const ProductDetails = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h3 className="text-xl font-medium mb-4">Product Details</h3>
      <div className="space-y-4">
        <p>
          The One Life Graphic T-Shirt is crafted with premium quality materials, 
          ensuring both comfort and durability. Here are the key features:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>100% Premium Cotton</li>
          <li>Regular fit</li>
          <li>Crew neck</li>
          <li>Short sleeves</li>
          <li>Machine washable</li>
          <li>Printed graphic design</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductDetails;