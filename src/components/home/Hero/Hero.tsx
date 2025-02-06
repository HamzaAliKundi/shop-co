import image from '/home/hero.png'

const Hero = () => {
    return (
      <section 
        className="relative px-4 lg:px-6 pt-8 pb-12 min-h-[660px]"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-[1440px] mx-auto h-full">
          <div className="flex flex-col lg:flex-row items-center justify-between h-full">
            <div className="lg:max-w-[600px] z-10">
              <h1 className="text-4xl lg:text-[64px] font-bold leading-tight mb-4 font-['Integral_CF']">
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </h1>
              <p className="text-gray-600 mb-8 font-['Satoshi'] text-base leading-[22px]">
                Browse through our diverse range of meticulously crafted garments, designed  
                to bring out your individuality and cater to your sense of style.
              </p>
              <button className="bg-black text-white px-8 py-3 rounded-full font-['Satoshi']">
                Shop Now
              </button>
              
              <div className="flex flex-wrap gap-8 mt-12">
                <div>
                  <h3 className="text-2xl font-bold mb-1">200+</h3>
                  <p className="text-gray-600">International Brands</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">2,000+</h3>
                  <p className="text-gray-600">High-Quality Products</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">30,000+</h3>
                  <p className="text-gray-600">Happy Customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;