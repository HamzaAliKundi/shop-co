import { Star } from "lucide-react";
import shirt from "/public/products/shirt.png"

export const TopSelling = () => {
    const products = [
        {
            image: '/products/tshirt-tape.png',
            title: 'T-shirt with Tape Details',
            price: 120,
            rating: 4.5,
            reviews: 145
        },
        {
            image: '/products/polo-shirt.png',
            title: 'Polo Shirt with Contrast Trim',
            price: 89,
            rating: 4.3,
            reviews: 95
        },
        {
            image: '/products/denim-jacket.png',
            title: 'Classic Denim Jacket',
            price: 199,
            rating: 4.8,
            reviews: 215
        },
        {
            image: '/products/hoodie.png',
            title: 'Essential Cotton Hoodie',
            price: 149,
            rating: 4.6,
            reviews: 178
        }
    ];

    return (
        <section className="py-16">
            <div className="max-w-[1440px] mx-auto px-4 lg:px-6">
                <h2 className="text-3xl flex justify-center lg:text-4xl font-bold mb-8 font-['Integral_CF']">
                    TOP SELLING
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div key={product.title} className="group cursor-pointer">
                            <div className="relative aspect-square mb-4 bg-gray-100 rounded-lg overflow-hidden">
                                <img
                                    src={shirt || product?.title}
                                    alt={product.title}
                                    className="object-cover w-full h-full transition-transform group-hover:scale-105"
                                />
                            </div>
                            <h3 className="font-semibold">{product.title}</h3>
                            <div className="flex items-center gap-2 mt-2">
                                <div className="flex">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star key={i} className={`h-4 w-4 ${i < product.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
                                    ))}
                                </div>
                                <span className="text-sm text-gray-600">({product.reviews})</span>
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                                <span className="font-bold">${product.price}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-8">
                    <button className="px-12 py-3 rounded-full border border-[#000000] text-black font-['Satoshi'] text-base hover:bg-black hover:text-white transition-colors">
                        View All
                    </button>
                </div>
            </div>
        </section>
    )
}
