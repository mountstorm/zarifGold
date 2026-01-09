import { useState, useEffect, useRef } from 'react';

export function AboutSection() {
  const [counts, setCounts] = useState({ years: 0, carpets: 0, artisans: 0, satisfaction: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCount('years', 10, 2000);
          animateCount('carpets', 250, 2500);
          animateCount('artisans', 30, 2000);
          animateCount('satisfaction', 100, 2000);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCount = (key: keyof typeof counts, target: number, duration: number) => {
    const startTime = Date.now();
    const step = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(easeOutQuart * target);
      
      setCounts(prev => ({ ...prev, [key]: current }));
      
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  };

  return (
    <section id="about" className="py-24 bg-[#F8F4E8]">
      <div className="max-w-[1360px] mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#1A2B4A] text-[#F8F4E8] text-sm font-['Playfair_Display'] rounded-full mb-6">
            About us
          </div>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A2B4A] mb-6">
            Fergana Valley's Finest Silk Carpet Specialists
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto space-y-6 text-[#1A2B4A] text-base md:text-lg leading-relaxed">
          <p>
            At Zarif Gold, our name embodies the essence of our heritage: <em>Zarif</em>, meaning the exquisite silk once treasured along the legendary Silk Road, and <em>Gold</em>, reflecting the dedication, timeless beauty, and excellence woven into each of our carpets.
          </p>
          <p>
            For generations, artisans from Uzbekistan's renowned Fergana Valley have meticulously handcrafted every carpet, preserving ancient weaving traditions with remarkable care and precision.
          </p>
          <p>
            Our founder and master craftsman, <strong>Hikmatillo Umarhojiyev</strong>, brings decades of hands-on experience and passion to every creation. Born into a distinguished lineage of Uzbek carpet weavers, Hikmatillo has dedicated his life to mastering traditional techniques, blending authenticity with contemporary artistry. Recognized locally and internationally, his commitment to craftsmanship ensures each Zarif Gold carpet is not merely decor—it's a profound cultural legacy, designed to bring warmth, elegance, and meaning to your home.
          </p>
        </div>

        {/* Image Carousel */}
        <div className="mt-16 overflow-hidden">
          <div className="flex gap-6 animate-scroll-left">
            <img src="https://drive.google.com/thumbnail?id=13RlOMoG7ZlBUNXIjizZ5cxKQAu-uTtPn&sz=w1200" alt="Carpet 1" className="h-[400px] w-auto object-cover rounded-lg flex-shrink-0" />
            <img src="https://drive.google.com/thumbnail?id=1bbMmsdK_uC3cyDaYAhwlnz48wHExcE3I&sz=w1200" alt="Carpet 3" className="h-[400px] w-auto object-cover rounded-lg flex-shrink-0" />
            <img src="https://drive.google.com/thumbnail?id=1xSAEsyf3-UMT9X3mMqYTwKNIMy1lYqQ8&sz=w1200" alt="Carpet 4" className="h-[400px] w-auto object-cover rounded-lg flex-shrink-0" />
            <img src="https://drive.google.com/thumbnail?id=1xSOIioXn4f5bfQFK0fYNVZu7ybfgI1-E&sz=w1200" alt="Carpet 5" className="h-[400px] w-auto object-cover rounded-lg flex-shrink-0" />
            <img src="https://drive.google.com/thumbnail?id=1uSiODgBgwPPx_P6J7uOFxoXWQ-7lMonG&sz=w1200" alt="Carpet 6" className="h-[400px] w-auto object-cover rounded-lg flex-shrink-0" />
            <img src="https://drive.google.com/thumbnail?id=1LJ_nW5AMvminuVxDt1wzUYn-JnOcbssP&sz=w1200" alt="Carpet 7" className="h-[400px] w-auto object-cover rounded-lg flex-shrink-0" />
            <img src="https://drive.google.com/thumbnail?id=1QUbzr3mR7TSPLplIlIg3dhP_WPuT36aK&sz=w1200" alt="Carpet 8" className="h-[400px] w-auto object-cover rounded-lg flex-shrink-0" />
            <img src="https://drive.google.com/thumbnail?id=1jZwX5AGvKwXDsHmxoQ9l9tjS1-ntQMLQ&sz=w1200" alt="Carpet 9" className="h-[400px] w-auto object-cover rounded-lg flex-shrink-0" />
            {/* Duplicate for seamless loop */}
            <img src="https://drive.google.com/thumbnail?id=13RlOMoG7ZlBUNXIjizZ5cxKQAu-uTtPn&sz=w1200" alt="Carpet 1" className="h-[400px] w-auto object-cover rounded-lg flex-shrink-0" />
          </div>
        </div>

        {/* Stats */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24">
          <div className="text-center transform transition-all duration-700 hover:scale-105">
            <div className="font-['Playfair_Display'] text-5xl md:text-6xl font-bold text-[#D4A574] mb-2 transition-all duration-300">
              {counts.years}+
            </div>
            <h4 className="text-lg font-semibold text-[#1A2B4A] mb-2">Years experience</h4>
            <p className="text-sm text-[#1A2B4A]/70">A decade of authentic craftsmanship and cultural expertise.</p>
          </div>
          <div className="text-center transform transition-all duration-700 hover:scale-105">
            <div className="font-['Playfair_Display'] text-5xl md:text-6xl font-bold text-[#D4A574] mb-2 transition-all duration-300">
              {counts.carpets}+
            </div>
            <h4 className="text-lg font-semibold text-[#1A2B4A] mb-2">Carpets delivered</h4>
            <p className="text-sm text-[#1A2B4A]/70">Over 250 unique, handmade carpets adorning homes worldwide.</p>
          </div>
          <div className="text-center transform transition-all duration-700 hover:scale-105">
            <div className="font-['Playfair_Display'] text-5xl md:text-6xl font-bold text-[#D4A574] mb-2 transition-all duration-300">
              {counts.artisans}
            </div>
            <h4 className="text-lg font-semibold text-[#1A2B4A] mb-2">Master Artisans</h4>
            <p className="text-sm text-[#1A2B4A]/70">Our team of 30 experts ensures top-quality results</p>
          </div>
          <div className="text-center transform transition-all duration-700 hover:scale-105">
            <div className="font-['Playfair_Display'] text-5xl md:text-6xl font-bold text-[#D4A574] mb-2 transition-all duration-300">
              {counts.satisfaction}%
            </div>
            <h4 className="text-lg font-semibold text-[#1A2B4A] mb-2">Client satisfaction</h4>
            <p className="text-sm text-[#1A2B4A]/70">Every client delighted by exceptional quality and attentive service.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
