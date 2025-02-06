import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const FAQs = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      id: 1,
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for all unworn items in their original packaging. Simply contact our customer service team to initiate a return."
    },
    {
      id: 2,
      question: "How do I care for this t-shirt?",
      answer: "Machine wash cold with similar colors. Tumble dry low. Do not bleach. Iron on low heat if needed. We recommend washing inside out to preserve the print quality."
    },
    {
      id: 3,
      question: "What sizes are available?",
      answer: "Our t-shirts are available in sizes XS through 2XL. Please refer to our size guide for detailed measurements to ensure the perfect fit."
    },
    {
      id: 4,
      question: "Do you ship internationally?",
      answer: "Yes, we ship worldwide! Shipping times and costs vary by location. You can calculate shipping costs at checkout."
    },
    {
      id: 5,
      question: "Is the fabric sustainable?",
      answer: "Yes, our t-shirts are made from 100% organic cotton, sourced from sustainable suppliers. We're committed to ethical and environmentally friendly production."
    },
    {
      id: 6,
      question: "Can I track my order?",
      answer: "Yes, once your order ships, you'll receive a tracking number via email to monitor your delivery status."
    },
    {
      id: 7,
      question: "Do you offer bulk orders?",
      answer: "Yes, we offer special pricing for bulk orders of 10 or more items. Please contact our sales team for a custom quote."
    },
    {
      id: 8,
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, Apple Pay, and Google Pay for your convenience and security."
    },
    {
      id: 9,
      question: "How long will shipping take?",
      answer: "Standard shipping typically takes 3-5 business days within the US. Express shipping options are available at checkout."
    },
    {
      id: 10,
      question: "Are your t-shirts true to size?",
      answer: "Yes, our t-shirts are true to size. If you're between sizes, we recommend sizing up for a more relaxed fit."
    },
    {
      id: 11,
      question: "Do you offer gift wrapping?",
      answer: "Yes, we offer gift wrapping services for an additional $5. You can select this option during checkout."
    },
    {
      id: 12,
      question: "What is the fabric composition?",
      answer: "Our t-shirts are made from 100% premium cotton, weighing 180 GSM for the perfect balance of comfort and durability."
    }
  ];

  return (
    <div className="w-full mx-auto px-4">
      <div className="space-y-4">
        {faqs.map((faq) => (
          <div 
            key={faq.id}
            className="border border-gray-200 rounded-xl overflow-hidden"
          >
            <button
              className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50"
              onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
            >
              <span className="font-medium text-gray-900">{faq.question}</span>
              <ChevronDownIcon 
                className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                  openId === faq.id ? 'transform rotate-180' : ''
                }`}
              />
            </button>
            
            {/* Answer section with smooth height transition */}
            <div 
              className={`transition-all duration-200 ease-in-out ${
                openId === faq.id ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="p-4 pt-0 text-gray-600">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;