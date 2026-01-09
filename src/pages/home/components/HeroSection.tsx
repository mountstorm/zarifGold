export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <iframe
          src="https://www.youtube.com/embed/aI5bLy8B8NA?autoplay=1&mute=1&loop=1&playlist=aI5bLy8B8NA&controls=0&showinfo=0&rel=0&modestbranding=1"
          title="Handcrafted Carpet Video"
          className="w-full h-full object-cover"
          style={{ 
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '177.77777778vh',
            minWidth: '100vw',
            height: '56.25vw',
            minHeight: '100vh',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none'
          }}
          allow="autoplay; encrypted-media"
          frameBorder="0"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1360px] mx-auto px-6 md:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4A574]/20 backdrop-blur-sm rounded-full mb-6 md:mb-8 animate-fade-in">
          <div className="flex gap-1">
            <div className="w-1.5 h-1.5 bg-[#D4A574] rounded-full animate-pulse"></div>
            <div className="w-1.5 h-1.5 bg-[#D4A574] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-1.5 h-1.5 bg-[#D4A574] rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
          <span className="text-[#F8F4E8] text-xs md:text-sm font-['Playfair_Display']">Claim the limited offer now!</span>
        </div>

        {/* Main Heading */}
        <h1 className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-[#F8F4E8] leading-tight mb-4 md:mb-6 animate-fade-in-up px-4">
          Your trusted craftsmen for silk & hand-made carpets
        </h1>

        {/* Description */}
        <p className="text-[#F8F4E8] text-sm md:text-base lg:text-lg max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed animate-fade-in-up px-4" style={{ animationDelay: '0.4s' }}>
          Zarif Gold transforms your home with exquisite silk and wool carpets, meticulously handwoven in the historic Fergana Valley.
        </p>

        {/* CTA Button */}
        <button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="group inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-[#D4A574] text-[#1A2B4A] text-sm md:text-base font-semibold rounded-full hover:bg-[#F8F4E8] transition-all duration-700 cursor-pointer animate-fade-in-up whitespace-nowrap"
          style={{ animationDelay: '0.6s' }}
        >
          <span>Purchase now!</span>
          <div className="flex items-center gap-1 overflow-hidden">
            <i className="ri-arrow-right-line text-xl transition-transform duration-700 group-hover:translate-x-1"></i>
          </div>
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-[#F8F4E8]/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-[#D4A574] rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
