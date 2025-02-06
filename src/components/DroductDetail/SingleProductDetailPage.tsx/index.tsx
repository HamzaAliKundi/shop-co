import { useState, useEffect } from 'react';

interface ProductImage {
  id: number;
  url: string;
}

interface ProductDetails {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  description: string;
  rating: number;
  images: ProductImage[];
  colors: Array<{
    name: string;
    hex: string;
  }>;
  sizes: string[];
  stock?: number;
}

interface CartItem {
  productId: number;
  name: string;
  price: number;
  quantity: number;
  color: string;
  size: string;
  image: string;
}

const SingleProductDetailPage = () => {
  // State for product data
  const [product, setProduct] = useState<ProductDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // State for user selections
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  // Fetch product data
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        setLoading(true);
        // Temporary mock data
        const mockData: ProductDetails = {
          id: 1,
          name: 'ONE LIFE GRAPHIC T-SHIRT',
          price: 260,
          originalPrice: 300,
          description: 'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
          rating: 4.5,
          images: [
            { id: 1, url: '/home/shirt.png' },
            { id: 2, url: '/home/shirt2.png' },
            { id: 3, url: '/home/image4.png' },
          ],
          colors: [
            { name: 'olive', hex: '#4A5043' },
            { name: 'teal', hex: '#2F4F4F' },
            { name: 'navy', hex: '#1B1B44' },
          ],
          sizes: ['Small', 'Medium', 'Large', 'X-Large'],
        };

        setProduct(mockData);
        setSelectedColor(mockData.colors[0].name);
        setSelectedSize(mockData.sizes[2]); // Default to 'Large'
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch product details');
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, []);

  const handleQuantityChange = (type: 'increment' | 'decrement') => {
    if (type === 'increment') {
      setQuantity(prev => prev + 1);
    } else if (type === 'decrement' && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleAddToCart = async () => {
    if (!product) return;

    const cartItem: CartItem = {
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      color: selectedColor,
      size: selectedSize,
      image: product.images[selectedImage].url,
    };

    try {
      console.log('Adding to cart:', cartItem);
      // Add success notification here
    } catch (err) {
      console.error('Failed to add to cart:', err);
      // Add error notification here
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left side - Image gallery */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col-reverse lg:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex lg:flex-col gap-3 lg:w-24">
              {product.images.map((image, index) => (
                <div
                  key={image.id}
                  className={`flex-shrink-0 w-20 h-20 border rounded-lg overflow-hidden cursor-pointer ${
                    selectedImage === index ? 'border-2 border-black' : 'border-gray-200'
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img src={image.url} alt="Product thumbnail" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 rounded-lg overflow-hidden bg-gray-50">
              <img
                src={product.images[selectedImage].url}
                alt="Product"
                className="w-full h-[500px] object-contain"
              />
            </div>
          </div>
        </div>

        {/* Right side - Product details */}
        <div className="w-full lg:w-1/2">
          <div className="space-y-3">
            <h1 className="text-[24px] lg:text-[40px] font-[700] leading-[28px] lg:leading-[48px] font-['Integral_CF'] text-left">{product.name}</h1>
            
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={`text-2xl ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
                  ★
                </span>
              ))}
              <span className="ml-2 text-gray-600 font-['Satoshi'] text-[14px] lg:text-[16px] font-[400] leading-[18.9px] lg:leading-[21.6px] text-left underline-from-font decoration-skip-ink-none">
                {product.rating}/5
              </span>
            </div>

            <hr className="border-gray-200" />

            <div className="flex items-center gap-4">
              <span className="font-['Satoshi'] text-[24px] lg:text-[32px] font-[700] leading-[32.4px] lg:leading-[43.2px] text-left underline-from-font decoration-skip-ink-none">${product.price}</span>
              <span className="text-gray-400 font-['Satoshi'] text-[24px] lg:text-[32px] font-[700] leading-[32.4px] lg:leading-[43.2px] text-left line-through underline-from-font decoration-skip-ink-none">${product.originalPrice}</span>
              <span className="bg-red-100 text-red-500 px-3 py-1 rounded-full text-sm">
                -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
              </span>
            </div>

            <p className="text-gray-600 font-['Satoshi'] text-[14px] lg:text-[16px] font-[400] leading-[20px] lg:leading-[22px] text-left underline-from-font decoration-skip-ink-none">{product.description}</p>

            <hr className="border-gray-200" />

            <div>
              <h3 className="font-['Satoshi'] text-[14px] lg:text-[16px] font-[400] leading-[18.9px] lg:leading-[21.6px] text-left underline-from-font decoration-skip-ink-none mb-3">Select Colors</h3>
              <div className="flex gap-3">
                {product.colors.map(color => (
                  <button
                    key={color.name}
                    className={`w-[37px] h-[37px] rounded-full relative ${
                      selectedColor === color.name ? 'ring-2 ring-black ring-offset-2' : ''
                    }`}
                    style={{ backgroundColor: color.hex }}
                    onClick={() => setSelectedColor(color.name)}
                  >
                    {selectedColor === color.name && (
                      <span className="absolute inset-0 flex items-center justify-center text-white">✓</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <hr className="border-gray-200" />

            <div>
              <h3 className="font-['Satoshi'] text-[14px] lg:text-[16px] font-[400] leading-[18.9px] lg:leading-[21.6px] text-left underline-from-font decoration-skip-ink-none mb-3">Choose Size</h3>
              <div className="flex gap-3">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    className={`px-4 py-2 lg:px-6 lg:py-3 rounded-full text-sm lg:text-base ${
                      selectedSize === size
                        ? 'bg-black text-white'
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <hr className="border-gray-200" />

            <div className="flex gap-4">
              <div className="flex items-center border rounded-full px-4 py-2">
                <button
                  className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center text-base md:text-xl"
                  onClick={() => handleQuantityChange('decrement')}
                >
                  −
                </button>
                <span className="w-6 md:w-8 text-center text-sm md:text-base">{quantity}</span>
                <button
                  className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center text-base md:text-xl"
                  onClick={() => handleQuantityChange('increment')}
                >
                  +
                </button>
              </div>
              <button 
                className="flex-1 bg-black text-white py-2 md:py-3 rounded-full hover:bg-gray-800 transition-colors text-base md:text-lg"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductDetailPage;