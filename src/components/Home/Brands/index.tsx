import versac from '/home/versac.png'
import zara from '/home/zara.png'
import ducci from '/home/gucci.png'
import prada from '/home/prada.png'
import calvin from '/home/calvin.png'

const Brands = () => {
    const brands = [
      { name: 'VERSACE', image: versac },
      { name: 'ZARA', image: zara }, 
      { name: 'GUCCI', image: ducci },
      { name: 'PRADA', image: prada },
      { name: 'Calvin Klein', image: calvin }
    ];
    
    return (
      <section className="bg-black py-8">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-6">
          <div className="flex flex-wrap justify-between items-center gap-8">
            {brands.map((brand) => (
              <img 
                key={brand.name}
                src={brand.image}
                alt={brand.name}
                className="w-[116.74px] h-[23.25px] lg:w-[166.48px] lg:h-[33.16px] object-contain"
              />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Brands;