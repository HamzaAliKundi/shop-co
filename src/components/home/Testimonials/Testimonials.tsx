import { useState, useEffect } from 'react'
import { CheckCircle2 } from 'lucide-react'
import leftArrow from "/arrows/left-arrow.png"
import rightArrow from "/arrows/right-arrow.png"

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah M.',
      rating: 5,
      text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
      verified: true,
    },
    {
      name: 'Alex K.',
      rating: 5,
      text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
      verified: true,
    },
    {
      name: 'James L.',
      rating: 5,
      text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
      verified: true,
    },
    {
      name: 'Moon K.',
      rating: 5,
      text: "The shopping experience at Shop.co is exceptional. The website is user-friendly, and the delivery was faster than expected. Highly recommend!",
      verified: true,
    },
    {
      name: 'Sarah M.',
      rating: 5,
      text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
      verified: true,
    },
    {
      name: 'Alex K.',
      rating: 5,
      text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
      verified: true,
    },
    {
      name: 'James L.',
      rating: 5,
      text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
      verified: true,
    },
    {
      name: 'Moon K.',
      rating: 5,
      text: "The shopping experience at Shop.co is exceptional. The website is user-friendly, and the delivery was faster than expected. Highly recommend!",
      verified: true,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(Math.floor(testimonials.length / 2)) // Start from middle
  const [cardWidth, setCardWidth] = useState(400)
  const [cardGap, setCardGap] = useState(24)
  const [visibleCards, setVisibleCards] = useState(2) // Number of visible cards

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardWidth(280)
        setCardGap(16)
        setVisibleCards(1)
      } else if (window.innerWidth < 1024) {
        setCardWidth(320)
        setCardGap(20)
        setVisibleCards(2)
      } else {
        setCardWidth(400)
        setCardGap(24)
        setVisibleCards(3)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-16">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
          <h2 className="text-2xl sm:text-[32px] lg:text-[40px] font-bold font-['Integral_CF'] mb-4 sm:mb-0 text-black">
            OUR HAPPY CUSTOMERS
          </h2>
          <div className="flex gap-6">
            <button onClick={handlePrev}>
              <img src={leftArrow} alt="Previous" className="w-[24px] h-[24px] rotate-180" />
            </button>
            <button onClick={handleNext}>
              <img src={leftArrow} alt="Next" className="w-[24px] h-[24px]" />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div 
            className="flex gap-6 transition-transform duration-300"
            style={{ 
              transform: `translateX(-${currentIndex * (cardWidth + cardGap)}px)`,
              marginLeft: `calc(50% - ${(cardWidth * visibleCards + cardGap * (visibleCards - 1)) / 2}px)`
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`
                  flex-shrink-0 bg-white p-8 rounded-[20px] border border-[#F0F0F0] shadow-sm transition-all duration-300
                  ${Math.abs(((currentIndex - index + testimonials.length) % testimonials.length)) < visibleCards ? 'opacity-100' : 'opacity-40 blur-sm'}
                `}
                style={{ width: `${cardWidth}px` }}
              >
                <div className="flex gap-1.5 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg 
                      key={i}
                      className="w-5 h-5 sm:w-6 sm:h-6 text-[#FFC633]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-base sm:text-lg font-bold font-['Satoshi'] text-black">{testimonial.name}</span>
                  {testimonial.verified && (
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#01AB31]" />
                  )}
                </div>
                <p className="text-[#666666] font-['Satoshi'] text-sm sm:text-base leading-[24px]">
                  {testimonial.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
