import { Star } from "lucide-react";
import shirt from "/home/shirt.png"
import { useNavigate } from "react-router-dom";

const NewArrivals = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      image: '/products/tshirt-tape.png',
      title: 'T-shirt with Tape Details', 
      price: 120,
      originalPrice: 150,
      rating: 4.5,
      reviews: 145,
      hasDiscount: true
    },
    {
      id: 2,
      image: '/products/polo-shirt.png',
      title: 'Polo Shirt with Contrast Trim',
      price: 89,
      rating: 4.3,
      reviews: 95
    },
    {
      id: 3,
      image: '/products/denim-jacket.png', 
      title: 'Classic Denim Jacket',
      price: 199,
      rating: 4.8,
      reviews: 215
    },
    {
      id: 4,
      image: '/products/hoodie.png',
      title: 'Essential Cotton Hoodie',
      price: 149,
      rating: 4.6,
      reviews: 178
    }
  ];

  return (
    <section className="py-16">
    <div className="max-w-[1440px mx-auto px-4 lg:px-6">
      <h2 className="flex justify-center text-[32px] md:text-[40px] lg:text[48px] font-bold mb-8 font-['Integral_CF']">
        NEW ARRIVALS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.title} onClick={() => navigate(`/product-detail/${product.id}`)} className="group cursor-pointer">
            <div className="relative aspect-square mb-4 bg-[#F0EEED] rounded-lg overflow-hidden">
              <img
                src={shirt || product?.title}
                alt={product.title}
                className="object-cover w-full h-full transition-transform group-hover:scale-105"
              />
            </div>
            <h3 className="font-bold text-[16px] md:text-[18px] lg:text-[20px]">{product.title}</h3>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`w-[15.47px] h-[15.47px] md:w-[18.49px] md:h-[18.49px] ${i < product.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
                ))}
              </div>
              <span className="text-sm text-gray-600">
                <span className="font-['Satoshi'] text-[12px] md:text-[14px] leading-[16.2px] md:leading-[18.9px] font-normal">
                  {product.rating}/5
                </span>
                ({product.reviews})
              </span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <span className="font-bold text-[20px] md:text-[22px] lg:text-[24px]">${product.price}</span>
              {product.hasDiscount && (
                <>
                  <span className="text-gray-500 line-through text-[16px] md:text-[18px] lg:text-[20px]">
                    ${product.originalPrice}
                  </span>
                  <span className="bg-red-100 text-red-600 text-[10px] md:text-[11px] lg:text-[12px] px-2 py-1 rounded-[62px] w-[58px] h-[28px] flex items-center justify-center">
                    -20%
                  </span>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-8">
        <button className="w-[358px] h-[46px] lg:w-[218px] lg:h-[42px] px-[54px] py-2 rounded-[62px] border border-[#0000001A] text-black font-['Satoshi'] text-base hover:bg-gray-200 transition-colors flex items-center justify-center">
          View All
        </button>
      </div>
    </div>
  </section>
  );
};

export default NewArrivals;