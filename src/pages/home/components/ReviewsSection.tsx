
import { useState, useEffect } from 'react';
import { testimonials } from '../../../mocks/testimonials';

export function ReviewsSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setVisibleCount(mobile ? 3 : 6);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const showMore = () => {
    setVisibleCount(testimonials.length);
  };

  const remainingCount = testimonials.length - visibleCount;

  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="max-w-[1360px] mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#1A2B4A] text-[#F8F4E8] text-sm font-['Playfair_Display'] rounded-full mb-6">
            Testimonials
          </div>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A2B4A] mb-6">
            What Our Clients Are Saying
          </h2>
          <p className="text-[#1A2B4A]/70 text-lg max-w-2xl mx-auto">
            Discover why customers around the world cherish Zarif Gold carpets—exceptional craftsmanship, authentic heritage, and timeless elegance woven into every rug.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.slice(0, visibleCount).map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#F8F4E8] rounded-2xl p-8 border border-[#1A2B4A]/10 hover:shadow-xl hover:border-[#D4A574]/30 transition-all duration-300 flex flex-col"
            >
              {/* Author at Top */}
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover ring-2 ring-[#D4A574]/20"
                />
                <div>
                  <p className="font-semibold text-[#1A2B4A] text-lg font-['Playfair_Display']">
                    {testimonial.name}
                  </p>
                  {/* Stars */}
                  <div className="flex gap-0.5 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="ri-star-fill text-[#D4A574] text-sm"></i>
                    ))}
                  </div>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-[#1A2B4A]/80 text-sm leading-relaxed flex-grow">
                "{testimonial.review}"
              </p>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {visibleCount < testimonials.length && (
          <div className="text-center">
            <button
              onClick={showMore}
              className="px-8 py-3 bg-[#1A2B4A] text-[#F8F4E8] rounded-full hover:bg-[#D4A574] hover:text-[#1A2B4A] transition-all duration-300 font-medium whitespace-nowrap cursor-pointer"
            >
              Show {remainingCount} More {remainingCount === 1 ? 'Review' : 'Reviews'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
