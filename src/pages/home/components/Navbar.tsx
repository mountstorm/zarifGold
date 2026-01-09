import { useState, useEffect } from 'react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled ? 'bg-[#1A2B4A] shadow-md' : 'bg-[#1A2B4A]/80 backdrop-blur-md'
        }`}
      >
        <div className="max-w-[1360px] mx-auto px-6 md:px-8 py-4 md:py-5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('hero')}
              className="cursor-pointer hover:opacity-80 transition-all duration-700"
            >
              <img 
                src="https://static.readdy.ai/image/1b93fe84a714a0fe47b31d49928e6754/50bb3577f3313494d2ce04843b2da68d.png" 
                alt="Zarif Gold Logo" 
                className="h-14 md:h-16 w-auto"
              />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('about')}
                className="text-[15px] font-playfair text-[#F8F4E8] hover:text-[#D4A574] transition-all duration-700 cursor-pointer whitespace-nowrap"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="text-[15px] font-playfair text-[#F8F4E8] hover:text-[#D4A574] transition-all duration-700 cursor-pointer whitespace-nowrap"
              >
                Collection
              </button>
              <button
                onClick={() => scrollToSection('team')}
                className="text-[15px] font-playfair text-[#F8F4E8] hover:text-[#D4A574] transition-all duration-700 cursor-pointer whitespace-nowrap"
              >
                Our Team
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="text-[15px] font-playfair text-[#F8F4E8] hover:text-[#D4A574] transition-all duration-700 cursor-pointer whitespace-nowrap"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection('faqs')}
                className="text-[15px] font-playfair text-[#F8F4E8] hover:text-[#D4A574] transition-all duration-700 cursor-pointer whitespace-nowrap"
              >
                FAQs
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-2.5 text-[15px] font-playfair bg-[#F8F4E8] text-[#1A2B4A] hover:bg-[#D4A574] rounded-full transition-all duration-700 cursor-pointer whitespace-nowrap"
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-8 h-8 flex items-center justify-center cursor-pointer"
            >
              <i className={`ri-${isMobileMenuOpen ? 'close' : 'menu'}-line text-2xl text-[#F8F4E8] transition-colors duration-700`}></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Full-Screen Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          {/* Background with gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A2B4A] via-[#1A2B4A] to-[#0F1A2E]"></div>
          
          {/* Close Button - Top Right */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center cursor-pointer z-10"
          >
            <i className="ri-close-line text-3xl text-white"></i>
          </button>

          {/* Logo - Top Left */}
          <div className="absolute top-6 left-6 z-10">
            <img 
              src="https://static.readdy.ai/image/1b93fe84a714a0fe47b31d49928e6754/50bb3577f3313494d2ce04843b2da68d.png" 
              alt="Zarif Gold Logo" 
              className="h-14 w-auto"
            />
          </div>

          {/* Navigation Links - Left Aligned, Vertically Stacked */}
          <div className="relative h-full flex flex-col justify-center px-12 space-y-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-left text-white text-3xl font-['Playfair_Display'] hover:text-[#D4A574] transition-colors duration-300 cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="text-left text-white text-3xl font-['Playfair_Display'] hover:text-[#D4A574] transition-colors duration-300 cursor-pointer"
            >
              Collection
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className="text-left text-white text-3xl font-['Playfair_Display'] hover:text-[#D4A574] transition-colors duration-300 cursor-pointer"
            >
              Our Team
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-left text-white text-3xl font-['Playfair_Display'] hover:text-[#D4A574] transition-colors duration-300 cursor-pointer"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('faqs')}
              className="text-left text-white text-3xl font-['Playfair_Display'] hover:text-[#D4A574] transition-colors duration-300 cursor-pointer"
            >
              FAQs
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-left text-white text-3xl font-['Playfair_Display'] hover:text-[#D4A574] transition-colors duration-300 cursor-pointer"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </>
  );
}
