import React from 'react';
import CheckoutForm from './CheckoutForm';
import OrderSummary from './OrderSummary';

const CheckoutPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2">
            <CheckoutForm />
          </div>
          <div className="md:col-span-1 sticky top-8">
            <OrderSummary />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;