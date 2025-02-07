import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface CheckoutFormData {
  // Personal Information
  fullName: string;
  email: string;
  phone: string;

  // Shipping Address
  shippingAddress: string;
  shippingCity: string;
  shippingState: string;
  shippingZip: string;
  shippingCountry: string;

  // Billing Address
  sameAsShipping: boolean;
  billingAddress?: string;
  billingCity?: string;
  billingState?: string;
  billingZip?: string;
  billingCountry?: string;

  // Additional Information
  orderNotes?: string;
}

const CheckoutForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<CheckoutFormData>();
  const sameAsShipping = watch('sameAsShipping', true);

  const onSubmit = (data: CheckoutFormData) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div className="max-w-3xl mx-auto px-4 pb-8">
      <h1 className="text-2xl font-medium mb-8">Checkout</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Personal Information */}
        <section className="bg-white p-6 rounded-2xl shadow-sm border">
          <h2 className="text-lg font-medium mb-4">Personal Information</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                {...register('fullName', { required: 'Full name is required' })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="John Doe"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="john@example.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">Phone Number</label>
              <input
                type="tel"
                {...register('phone', { required: 'Phone number is required' })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="+1 (555) 000-0000"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>
          </div>
        </section>

        {/* Shipping Address */}
        <section className="bg-white p-6 rounded-2xl shadow-sm border">
          <h2 className="text-lg font-medium mb-4">Shipping Address</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-700 mb-1">Street Address</label>
              <input
                type="text"
                {...register('shippingAddress', { required: 'Street address is required' })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="123 Main St"
              />
              {errors.shippingAddress && (
                <p className="text-red-500 text-sm mt-1">{errors.shippingAddress.message}</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-700 mb-1">City</label>
                <input
                  type="text"
                  {...register('shippingCity', { required: 'City is required' })}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="New York"
                />
                {errors.shippingCity && (
                  <p className="text-red-500 text-sm mt-1">{errors.shippingCity.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-1">State/Province</label>
                <input
                  type="text"
                  {...register('shippingState', { required: 'State is required' })}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="NY"
                />
                {errors.shippingState && (
                  <p className="text-red-500 text-sm mt-1">{errors.shippingState.message}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-700 mb-1">ZIP/Postal Code</label>
                <input
                  type="text"
                  {...register('shippingZip', { required: 'ZIP code is required' })}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="10001"
                />
                {errors.shippingZip && (
                  <p className="text-red-500 text-sm mt-1">{errors.shippingZip.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-1">Country</label>
                <select
                  {...register('shippingCountry', { required: 'Country is required' })}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                >
                  <option value="">Select Country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  {/* Add more countries */}
                </select>
                {errors.shippingCountry && (
                  <p className="text-red-500 text-sm mt-1">{errors.shippingCountry.message}</p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Billing Address */}
        <section className="bg-white p-6 rounded-2xl shadow-sm border">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium">Billing Address</h2>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                {...register('sameAsShipping')}
                className="rounded border-gray-300 text-black focus:ring-black"
              />
              <span className="text-sm text-gray-700">Same as shipping address</span>
            </label>
          </div>

          {!sameAsShipping && (
            <div className="space-y-4">
              {/* Billing address fields - similar to shipping address fields */}
              {/* Add the same fields as shipping address */}
            </div>
          )}
        </section>

        {/* Payment Method */}
        <section className="bg-white p-6 rounded-2xl shadow-sm border">
          <h2 className="text-lg font-medium mb-4">Payment Method</h2>
          <div className="flex items-center space-x-3 p-4 border rounded-lg bg-gray-50">
            <input
              type="radio"
              id="cod"
              name="paymentMethod"
              checked
              readOnly
              className="text-black focus:ring-black"
            />
            <label htmlFor="cod" className="flex-grow">
              <span className="font-medium">Cash on Delivery</span>
              <p className="text-sm text-gray-500">Pay when you receive your order</p>
            </label>
          </div>
        </section>

        {/* Additional Information */}
        <section className="bg-white p-6 rounded-2xl shadow-sm border">
          <h2 className="text-lg font-medium mb-4">Additional Information</h2>
          <div>
            <label className="block text-sm text-gray-700 mb-1">Order Notes (Optional)</label>
            <textarea
              {...register('orderNotes')}
              rows={4}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
              placeholder="Special notes for delivery"
            />
          </div>
        </section>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-black text-white py-4 rounded-full hover:bg-gray-800 transition-colors"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;