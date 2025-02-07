import React, { useState } from 'react';

import { MinusIcon, PlusIcon, TagIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

interface CartItem {
  id: number;
  name: string;
  price: number;
  size: string;
  color: string;
  quantity: number;
  image: string;
}

const CartPage = () => {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Gradient Graphic T-shirt",
      price: 145,
      size: "Large",
      color: "White",
      quantity: 1,
      image: "/home/shirt.png"
    },
    {
      id: 2,
      name: "Checkered Shirt",
      price: 180,
      size: "Medium",
      color: "Red",
      quantity: 1,
      image: "/home/shirt2.png"
    },
    {
      id: 3,
      name: "Skinny Fit Jeans",
      price: 240,
      size: "Large",
      color: "Blue",
      quantity: 1,
      image: "/home/image4.png"
    }
  ]);

  const [promoCode, setPromoCode] = useState('');

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = subtotal * 0.2;
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  const updateQuantity = (id: number, change: 'increment' | 'decrement') => {
    setCartItems(items =>
      items.map(item => {
        if (item.id === id) {
          const newQuantity = change === 'increment' ? item.quantity + 1 : item.quantity - 1;
          return { ...item, quantity: Math.max(1, newQuantity) };
        }
        return item;
      })
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:px-8">
      <h1 className="text-3xl font-bold mb-8">YOUR CART</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="flex-grow">
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-6 p-4 bg-white rounded-2xl border border-gray-100">
                {/* Product Image */}
                <div className="w-24 h-24 bg-gray-100 rounded-xl overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-lg">{item.name}</h3>
                      <p className="text-gray-500 text-sm mt-1">Size: {item.size}</p>
                      <p className="text-gray-500 text-sm">Color: {item.color}</p>
                    </div>
                    <button className="text-red-500 hover:text-red-600">
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="flex justify-between items-center mt-4">
                    <div className="font-medium">${item.price}</div>
                    <div className="flex items-center bg-gray-100 rounded-full">
                      <button 
                        className="p-2"
                        onClick={() => updateQuantity(item.id, 'decrement')}
                      >
                        <MinusIcon className="h-4 w-4" />
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button 
                        className="p-2"
                        onClick={() => updateQuantity(item.id, 'increment')}
                      >
                        <PlusIcon className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:w-[400px]">
          <div className="bg-white p-6 rounded-2xl border border-gray-100">
            <h2 className="text-xl font-medium mb-6">Order Summary</h2>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">${subtotal}</span>
              </div>
              <div className="flex justify-between text-red-500">
                <span>Discount (-20%)</span>
                <span>-${discount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Delivery Fee</span>
                <span className="font-medium">${deliveryFee}</span>
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between">
                  <span className="font-medium">Total</span>
                  <span className="font-medium">${total}</span>
                </div>
              </div>

              {/* Promo Code Input */}
              <div className="flex gap-2 mt-6">
                <div className="relative flex-grow">
                  <input
                    type="text"
                    placeholder="Add promo code"
                    className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-full"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                  />
                  <TagIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
                <button className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800">
                  Apply
                </button>
              </div>

              {/* Checkout Button */}
              <button onClick={() => navigate("/checkout")} className="w-full py-3 bg-black text-white rounded-full hover:bg-gray-800 mt-6">
                Go to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;