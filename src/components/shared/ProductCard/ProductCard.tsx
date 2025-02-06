interface ProductCardProps {
    image: string;
    title: string;
    price: number;
    originalPrice?: number;
    rating: number;
    reviewCount: number;
  }
  
  const ProductCard = ({ image, title, price, originalPrice, rating, reviewCount }: ProductCardProps) => {
    const starSvgProps = {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      children: <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    };

    return (
      <div className="bg-[#F2F0F1] rounded-lg p-4">
        <img src={image} alt={title} className="w-full h-auto mb-4" />
        <h3 className="font-['Satoshi'] text-lg font-medium mb-2">{title}</h3>
        <div className="flex items-center mb-2">
          {/* Rating Stars */}
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                {...starSvgProps}
              />
            ))}
          </div>
          <span className="text-gray-600 ml-2">({reviewCount})</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-bold">${price}</span>
          {originalPrice && (
            <span className="text-gray-400 line-through">${originalPrice}</span>
          )}
          {originalPrice && (
            <span className="text-red-500 text-sm">
              -{Math.round(((originalPrice - price) / originalPrice) * 100)}%
            </span>
          )}
        </div>
      </div>
    );
  };
  
  export default ProductCard;