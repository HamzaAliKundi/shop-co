import { Star } from "lucide-react";
import shirt from "/home/shirt.png"

export const TopSelling = () => {
    const products = [
        {
            image: '/products/vertical-striped-shirt.png',
            title: 'Vertical Striped Shirt',
            price: 212,
            originalPrice: 232,
            rating: 4.5,
            reviews: 145,
            hasDiscount: true
        },
        {
            image: '/products/courage-tshirt.png',
            title: 'Courage Graphic T-shirt',
            price: 145,
            rating: 4.3,
            reviews: 95,
            hasDiscount: false
        },
        {
            image: '/products/bermuda-shorts.png',
            title: 'Loose Fit Bermuda Shorts',
            price: 80,
            rating: 4.8,
            reviews: 215,
            hasDiscount: false
        },
        {
            image: '/products/skinny-jeans.png',
            title: 'Faded Skinny Jeans',
            price: 210,
            rating: 4.6,
            reviews: 178,
            hasDiscount: false
        }
    ];

    return (
        <section className="py-16">
            <div className="max-w-[1440px] mx-auto px-4 lg:px-6">
                <h2 className="flex justify-center text-[32px] md:text-[40px] lg:text[48px] font-bold mb-8 font-['Integral_CF']">
                    TOP SELLING
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div key={product.title} className="group cursor-pointer">
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
                                <span className="text-sm text-gray-600">({product.reviews})</span>
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
    )
}
