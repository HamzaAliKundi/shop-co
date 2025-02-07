import React, { useState } from 'react';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';

interface Review {
  id: number;
  author: string;
  rating: number;
  content: string;
  date: string;
  verified: boolean;
}

const RatingReviews = () => {
  const [sortBy, setSortBy] = useState('latest');
  
  const reviews: Review[] = [
    {
      id: 1,
      author: "Samantha D.",
      rating: 4.5,
      content: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt!",
      date: "August 14, 2023",
      verified: true
    },
    {
      id: 2,
      author: "Alex M.",
      rating: 4,
      content: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
      date: "August 15, 2023",
      verified: true
    },
    {
      id: 3,
      author: "Ethan R.",
      rating: 3.5,
      content: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
      date: "August 16, 2023",
      verified: true
    },
    {
      id: 4,
      author: "Olivia P.",
      rating: 4,
      content: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
      date: "August 17, 2023",
      verified: true
    },
    {
      id: 5,
      author: "Liam K.",
      rating: 4,
      content: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
      date: "August 18, 2023",
      verified: true
    },
    {
      id: 6,
      author: "Ava H.",
      rating: 4.5,
      content: "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
      date: "August 19, 2023",
      verified: true
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <h2 className="text-xl font-medium">
          All Reviews <span className="text-gray-500 ml-2">(451)</span>
        </h2>
        <div className="flex items-center gap-4">
          {/* Filter Button */}
          <button className="p-2 rounded-full hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M5 4a1 1 0 0 0-2 0v7.268a2 2 0 0 0 0 3.464V16a1 1 0 1 0 2 0v-1.268a2 2 0 0 0 0-3.464V4zm6 0a1 1 0 0 0-2 0v1.268a2 2 0 0 0 0 3.464V16a1 1 0 1 0 2 0V8.732a2 2 0 0 0 0-3.464V4zm6 0a1 1 0 1 0-2 0v7.268a2 2 0 0 0 0 3.464V16a1 1 0 1 0 2 0v-1.268a2 2 0 0 0 0-3.464V4z" />
            </svg>
          </button>

          {/* Sort Dropdown */}
          <div className="relative">
            <select 
              className="bg-gray-100 px-4 py-2 rounded-full text-sm appearance-none pr-8"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="latest">Latest</option>
              <option value="highest">Highest Rating</option>
              <option value="lowest">Lowest Rating</option>
            </select>
          </div>

          {/* Write Review Button */}
          <button className="bg-black text-white px-6 py-2 rounded-full text-sm hover:bg-gray-800 transition-colors">
            Write a Review
          </button>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
            {/* Stars and Options Row */}
            <div className="flex justify-between items-start mb-4">
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    className={`text-2xl ${
                      index < Math.floor(review.rating)
                        ? 'text-yellow-400'
                        : 'text-gray-200'
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              
              {/* Three Dots Menu */}
              <button className="text-gray-400 hover:text-gray-600">
                •••
              </button>
            </div>

            {/* Author Info */}
            <div className="flex items-center gap-2 mb-3">
              <h3 className="text-lg font-semibold">{review.author}</h3>
              {review.verified && (
                <svg className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              )}
            </div>

            {/* Review Content */}
            <p className="text-gray-600 mb-4 leading-relaxed">
              {review.content}
            </p>

            {/* Posted Date */}
            <p className="text-gray-500 text-sm">
              Posted on {review.date}
            </p>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="flex justify-center mt-8">
        <button className="px-8 py-2.5 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors text-sm">
          Load More Reviews
        </button>
      </div>
    </div>
  );
};

export default RatingReviews;