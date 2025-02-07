import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface OrderItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  size: string;
  color: string;
  image: string;
}

const OrderSummary = () => {
  // This would typically come from your cart state/context
  const orderItems: OrderItem[] = [
    {
      id: 1,
      name: "Gradient Graphic T-shirt",
      price: 145,
      quantity: 1,
      size: "Large",
      color: "White",
      image: "/images/gradient-tee.jpg"
    },
    {
      id: 2,
      name: "Black Striped T-shirt",
      price: 120,
      quantity: 2,
      size: "Medium",
      color: "Black",
      image: "/images/striped-tee.jpg"
    }
  ];

  const subtotal = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border sticky top-12 mt-16">
      <h2 className="text-lg font-medium mb-4">Order Summary</h2>

      {/* Order Items */}
      <div className="space-y-4 mb-6">
        {orderItems.map((item) => (
          <div key={item.id} className="flex gap-4">
            {/* Product Image */}
            <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="flex-grow">
              <h3 className="font-medium">{item.name}</h3>
              <div className="text-sm text-gray-500 space-y-1">
                <p>Size: {item.size}</p>
                <p>Color: {item.color}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
            </div>

            {/* Price */}
            <div className="text-right">
              <p className="font-medium">${item.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Promo Code */}
      {/* <div className="mb-6">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Promo code"
            className="flex-grow px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
          />
          <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
            Apply
          </button>
        </div>
      </div> */}

      {/* Order Totals */}
      <div className="space-y-3 border-t pt-4">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-medium">${subtotal}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Shipping</span>
          <span className="font-medium">Free</span>
        </div>
        {/* Add tax if applicable */}
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Tax</span>
          <span className="font-medium">Calculated at next step</span>
        </div>
        <div className="flex justify-between border-t pt-3">
          <span className="font-medium">Total</span>
          <span className="font-medium">${total}</span>
        </div>
      </div>

      {/* Order Policies
      <div className="mt-6 text-sm text-gray-500 space-y-2">
        <div className="flex items-center gap-2">
          <ChevronDownIcon className="h-4 w-4" />
          <span>Shipping & Returns</span>
        </div>
        <div className="flex items-center gap-2">
          <ChevronDownIcon className="h-4 w-4" />
          <span>Shipping Methods</span>
        </div>
      </div> */}
    </div>
  );
};

export default OrderSummary;