const Newsletter = () => {
    return (
      <div className="bg-gradient-to-b from-white from-50% to-[#F0F0F0] to-50%">
        <div className="bg-black rounded-[20px] mx-4 lg:mx-auto max-w-[1440px] px-4 lg:px-16 py-8  mt-14 lg:py-[36px]">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <h2 className="text-white font-bold font-['Integral_CF'] lg:max-w-[500px] text-center lg:text-left text-[32px] md:text-[32px] lg:text-[40px]">
              STAY UP TO DATE ABOUT OUR LATEST OFFERS
            </h2>

            <div className="w-full lg:w-[350px] flex flex-col items-stretch gap-4">
              <div className="relative">
                <span className="absolute left-6 top-1/2 -translate-y-1/2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#6C7275" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M22 6L12 13L2 6" stroke="#6C7275" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full h-[48px] pl-14 pr-6 rounded-[62px] bg-white font-['Satoshi'] text-base focus:outline-none"
                />
              </div>
              <button className="w-full whitespace-nowrap h-[48px] px-8 bg-white text-black rounded-[62px] font-['Satoshi'] text-base hover:bg-gray-100">
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Newsletter;