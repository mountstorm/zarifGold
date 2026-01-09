
import { useState } from 'react';
import { products } from '../../../mocks/products';

export function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  return (
    <>
      <section id="products" className="py-24 bg-white">
        <div className="max-w-[1360px] mx-auto px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#1A2B4A] text-[#F8F4E8] text-sm font-['Playfair_Display'] rounded-full mb-6">
              Collection
            </div>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A2B4A] mb-6">
              The Collection
            </h2>
            <p className="text-[#1A2B4A]/70 text-lg max-w-2xl mx-auto">
              Discover why our carpets stand above the rest.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-product-shop>
            {products.map((product, index) => (
              <div
                key={index}
                onClick={() => setSelectedProduct(product)}
                className="group bg-[#F8F4E8] rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-700 cursor-pointer"
              >
                <div className="relative h-[400px] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#1A2B4A] mb-2">
                    {product.name}
                  </h3>
                  <p className="text-[#1A2B4A]/70 text-sm mb-4">{product.origin}</p>
                  <button className="text-[#D4A574] font-semibold hover:text-[#1A2B4A] transition-colors duration-300 flex items-center gap-2 group/btn cursor-pointer whitespace-nowrap">
                    <span>View Masterpiece</span>
                    <i className="ri-arrow-right-line transition-transform duration-300 group-hover/btn:translate-x-1"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16 flex justify-center">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 border-2 border-[#1A2B4A] text-[#1A2B4A] text-sm md:text-base font-semibold rounded-full hover:bg-[#1A2B4A] hover:text-[#F8F4E8] transition-all duration-700 cursor-pointer whitespace-nowrap"
            >
              <span>Custom Order</span>
              <i className="ri-arrow-right-line text-xl"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Full-Screen Product Modal */}
      {selectedProduct && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center animate-fade-in"
          onClick={() => setSelectedProduct(null)}
        >
          <div 
            className="bg-[#F8F4E8] rounded-lg w-[95vw] max-w-7xl h-[90vh] overflow-hidden relative flex flex-col lg:flex-row animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-white/90 hover:bg-white rounded-full transition-all duration-300 cursor-pointer shadow-lg"
            >
              <i className="ri-close-line text-2xl text-[#1A2B4A]"></i>
            </button>

            {/* Product Image - Left Half */}
            <div className="relative w-full lg:w-1/2 h-[40vh] lg:h-full overflow-hidden">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Details - Right Half */}
            <div className="w-full lg:w-1/2 h-[60vh] lg:h-full overflow-y-auto p-6 md:p-8 lg:p-12 flex flex-col justify-center">
              <div className="max-w-xl mx-auto w-full space-y-6">
                <div className="inline-block px-4 py-2 bg-[#1A2B4A] text-[#F8F4E8] text-sm font-['Playfair_Display'] rounded-full animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
                  {selectedProduct.origin}
                </div>
                
                <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A2B4A] leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
                  {selectedProduct.name}
                </h2>

                <div className="space-y-5 animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
                  <div className="group">
                    <h3 className="font-['Playfair_Display'] text-lg font-semibold text-[#1A2B4A] mb-2 transition-colors duration-300 group-hover:text-[#D4A574]">
                      Craftsmanship
                    </h3>
                    <p className="text-[#1A2B4A]/70 text-sm leading-relaxed transition-all duration-300 group-hover:text-[#1A2B4A]/90">
                      Woven with an extremely high knot count to achieve the photo-realistic gradient of colors (shading). This technique, often found in the finest court rugs, allows the weaver to "paint" with thread, capturing texture and depth that rivals oil painting.
                    </p>
                  </div>

                  <div className="group">
                    <h3 className="font-['Playfair_Display'] text-lg font-semibold text-[#1A2B4A] mb-2 transition-colors duration-300 group-hover:text-[#D4A574]">
                      Materials
                    </h3>
                    <p className="text-[#1A2B4A]/70 text-sm leading-relaxed transition-all duration-300 group-hover:text-[#1A2B4A]/90">
                      Constructed from pure silk on a silk foundation, giving the rug a luminous, glass-like finish. The fine silk threads allow for the microscopic detail needed to capture the horse's lifelike features.
                    </p>
                  </div>

                  <div className="group">
                    <h3 className="font-['Playfair_Display'] text-lg font-semibold text-[#1A2B4A] mb-2 transition-colors duration-300 group-hover:text-[#D4A574]">
                      Heritage
                    </h3>
                    <p className="text-[#1A2B4A]/70 text-sm leading-relaxed transition-all duration-300 group-hover:text-[#1A2B4A]/90">
                      While horses have always been central to Central Asian culture and the nomadic history of Uzbekistan, this rug elevates that bond to high art. It is a tribute to the noble companion of the steppes, woven with the refinement of the Fergana city workshops.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSelectedProduct(null);
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#1A2B4A] text-[#F8F4E8] text-base font-['Playfair_Display'] font-semibold rounded-full hover:bg-[#D4A574] hover:text-[#1A2B4A] transition-all duration-500 cursor-pointer whitespace-nowrap shadow-lg hover:shadow-xl hover:scale-105 animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
                >
                  <span>Custom Order</span>
                  <i className="ri-arrow-right-line text-xl transition-transform duration-300 group-hover:translate-x-1"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
