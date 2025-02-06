import banner from "/home/banner.png";

const Hero = () => {
    return (
      <section className="relative px-4 lg:px-6 pt-8 md:pt-8 lg:pt-0 min-h-[660px] bg-[#F2F0F1]">
        <div className="max-w-[1440px] mx-auto h-full">
          <div className="flex flex-col lg:flex-row items-center justify-between h-full">
            <div className="lg:max-w-[600px] z-10">
              <h1 className="text-[36px] leading-[34px] lg:text-[64px] lg:leading-[64px] font-bold mb-4 font-['Integral_CF']">
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </h1>
              <p className="text-gray-600 mb-8 font-['Satoshi'] text-[14px] leading-[20px] lg:text-[16px] lg:leading-[22px]">
                Browse through our diverse range of meticulously crafted garments, designed  
                to bring out your individuality and cater to your sense of style.
              </p>
              <button className="w-[358px] h-[52px] lg:w-[210px] lg:h-[52px] px-[54px] py-4 rounded-[62px] bg-black text-white font-['Satoshi'] text-base font-medium decoration-skip-ink-none">
                Shop Now
              </button>
              
              <div className="flex flex-wrap justify-center lg:justify-between lg:flex-nowrap mt-12">
                <div className="w-[45%] lg:w-auto mb-8 lg:mb-0 relative lg:border-r border-gray-200 lg:pr-8">
                  <h3 className="text-2xl font-bold mb-1">200+</h3>
                  <p className="text-gray-600">International Brands</p>
                  <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-gray-200 lg:hidden"></div>
                </div>
                <div className="w-[45%] lg:w-auto mb-8 lg:mb-0 lg:border-r border-gray-200 lg:px-8 pl-8">
                  <h3 className="text-2xl font-bold mb-1">2,000+</h3>
                  <p className="text-gray-600">High-Quality Products</p>
                </div>
                <div className="w-full lg:w-auto text-center lg:text-left lg:pl-8">
                  <h3 className="text-2xl font-bold mb-1">30,000+</h3>
                  <p className="text-gray-600">Happy Customers</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 mt-8 lg:mt-0">
              <img src={banner} alt="Hero Banner" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;