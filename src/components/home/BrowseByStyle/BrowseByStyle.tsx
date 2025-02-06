const BrowseByStyle = () => {
  return (
    <section className="py-16">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-6">
        <div className="bg-gray-200 p-8 rounded-lg shadow-lg w-full mx-auto">
          <h1 className="text-center text-2xl font-bold mb-6 font-['Roboto']">
            BROWSE BY DRESS STYLE
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4">
            <div className="relative h-48 sm:h-64 lg:col-span-5 overflow-hidden">
              <img 
                src="https://storage.googleapis.com/a1aa/image/E3y6rcDGpevwwKuZmCXKwyzH0NL_mf7KBmYBccmki94.jpg"
                alt="Casual dress style with a man wearing a casual t-shirt"
                className="w-full h-full object-cover object-center rounded-lg hover:scale-105 transition-transform duration-300"
                width="600"
                height="400"
              />
              <div className="absolute bottom-2 left-2 text-black text-lg font-semibold">
                Casual
              </div>
            </div>
            <div className="relative h-48 sm:h-64 lg:col-span-7 overflow-hidden">
              <img
                src="https://storage.googleapis.com/a1aa/image/3SjwbUzUubOAu09S9a9DBCAz9qmdHO_rpRMLpKGQC2E.jpg"
                alt="Formal dress style with a man wearing a formal suit"
                className="w-full h-full object-cover object-center rounded-lg hover:scale-105 transition-transform duration-300"
                width="600"
                height="400"
              />
              <div className="absolute bottom-2 left-2 text-black text-lg font-semibold">
                Formal
              </div>
            </div>
            <div className="relative h-48 sm:h-64 lg:col-span-7 overflow-hidden">
              <img
                src="https://storage.googleapis.com/a1aa/image/wDZVyzs4M252mPSZmfR_N1JF7enH4g824_nHonvTUJE.jpg"
                alt="Party dress style with a woman wearing a party dress"
                className="w-full h-full object-cover object-center rounded-lg hover:scale-105 transition-transform duration-300"
                width="600"
                height="400"
              />
              <div className="absolute bottom-2 left-2 text-black text-lg font-semibold">
                Party
              </div>
            </div>
            <div className="relative h-48 sm:h-64 lg:col-span-5 overflow-hidden">
              <img
                src="https://storage.googleapis.com/a1aa/image/FX_Nh5otKYnFHVNGQD21fthFsiTRv5GFPr-KMwNjgTg.jpg"
                alt="Gym dress style with a person wearing gym attire"
                className="w-full h-full object-cover object-center rounded-lg hover:scale-105 transition-transform duration-300"
                width="600"
                height="400"
              />
              <div className="absolute bottom-2 left-2 text-black text-lg font-semibold">
                Gym
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrowseByStyle;