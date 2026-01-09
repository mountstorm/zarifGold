import { useState } from 'react';
import { artisans } from '../../../mocks/artisans';

export function TeamSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % artisans.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + artisans.length) % artisans.length);
  };

  return (
    <section id="team" className="py-24 bg-[#F8F4E8]">
      <div className="max-w-[1360px] mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#1A2B4A] text-[#F8F4E8] text-sm font-['Playfair_Display'] rounded-full mb-6">
            Our team
          </div>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A2B4A] mb-6">
            Meet Our Master Artisans
          </h2>
          <p className="text-[#1A2B4A]/70 text-lg max-w-2xl mx-auto">
            Discover the talented craftspeople behind every Zarif Gold masterpiece.
          </p>
        </div>

        {/* Featured Artisan Carousel */}
        <div className="relative">
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg min-h-[700px]">
            <div className="relative w-full h-full">
              {artisans.map((artisan, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 grid md:grid-cols-2 transition-all duration-700 ease-in-out ${
                    index === currentIndex
                      ? 'opacity-100 translate-x-0'
                      : index < currentIndex
                      ? 'opacity-0 -translate-x-full'
                      : 'opacity-0 translate-x-full'
                  }`}
                >
                  <div className="relative h-full min-h-[700px]">
                    <img
                      src={artisan.image}
                      alt={artisan.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-between min-h-[700px]">
                    <div>
                      <h3 className="font-['Playfair_Display'] text-3xl font-bold text-[#1A2B4A] mb-4">
                        {artisan.title}
                      </h3>
                      <p className="text-[#1A2B4A]/80 text-base leading-relaxed mb-6">
                        {artisan.bio}
                      </p>
                      {artisan.bio2 && (
                        <p className="text-[#1A2B4A]/80 text-base leading-relaxed mb-6">
                          {artisan.bio2}
                        </p>
                      )}
                      <div className="flex gap-3 mb-8">
                        <span className="px-4 py-2 bg-[#D4A574]/20 text-[#1A2B4A] text-sm rounded-full whitespace-nowrap">{artisan.specialty}</span>
                        <span className="px-4 py-2 bg-[#D4A574]/20 text-[#1A2B4A] text-sm rounded-full whitespace-nowrap">{artisan.years}</span>
                      </div>
                    </div>
                    
                    {/* Quote */}
                    {artisan.quote && (
                      <div className="pt-8 border-t border-[#1A2B4A]/10">
                        <div className="flex items-start gap-4">
                          <i className="ri-double-quotes-l text-4xl text-[#D4A574] flex-shrink-0"></i>
                          <div>
                            <p className="font-['Playfair_Display'] text-xl italic text-[#1A2B4A] mb-4">
                              {artisan.quote}
                            </p>
                            <div className="flex items-center gap-3">
                              <img
                                src={artisan.avatar || artisan.image}
                                alt={artisan.name}
                                className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                              />
                              <span className="text-sm text-[#1A2B4A]/70">{artisan.name}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer z-10"
          >
            <i className="ri-arrow-left-s-line text-2xl text-[#1A2B4A]"></i>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer z-10"
          >
            <i className="ri-arrow-right-s-line text-2xl text-[#1A2B4A]"></i>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {artisans.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentIndex ? 'bg-[#D4A574] w-8' : 'bg-[#1A2B4A]/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
