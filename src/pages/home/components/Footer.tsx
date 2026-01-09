
export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1A2B4A] text-[#F8F4E8] py-16">
      <div className="max-w-[1360px] mx-auto px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Description */}
          <div>
            <img 
              src="https://static.readdy.ai/image/1b93fe84a714a0fe47b31d49928e6754/50bb3577f3313494d2ce04843b2da68d.png" 
              alt="Zarif Gold Logo" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-[#F8F4E8]/70 text-sm leading-relaxed">
              Master-crafted silk carpets from Uzbekistan's Fergana Valley. Five generations of weaving excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-['Playfair_Display'] text-lg font-semibold mb-4">Quick links</h4>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => scrollToSection('about')}
                className="text-[#F8F4E8]/70 hover:text-[#D4A574] transition-colors text-left text-sm cursor-pointer"
              >
                About us
              </button>
              <button
                onClick={() => scrollToSection('reviews')}
                className="text-[#F8F4E8]/70 hover:text-[#D4A574] transition-colors text-left text-sm cursor-pointer"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection('team')}
                className="text-[#F8F4E8]/70 hover:text-[#D4A574] transition-colors text-left text-sm cursor-pointer"
              >
                Our work
              </button>
              <button
                onClick={() => scrollToSection('faqs')}
                className="text-[#F8F4E8]/70 hover:text-[#D4A574] transition-colors text-left text-sm cursor-pointer"
              >
                FAQs
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="text-[#F8F4E8]/70 hover:text-[#D4A574] transition-colors text-left text-sm cursor-pointer"
              >
                Collection
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-[#F8F4E8]/70 hover:text-[#D4A574] transition-colors text-left text-sm cursor-pointer"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-['Playfair_Display'] text-lg font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#F8F4E8]/10 hover:bg-[#D4A574] rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer"
              >
                <i className="ri-instagram-line text-lg"></i>
              </a>
              <a
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#F8F4E8]/10 hover:bg-[#D4A574] rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer"
              >
                <i className="ri-tiktok-line text-lg"></i>
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#F8F4E8]/10 hover:bg-[#D4A574] rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer"
              >
                <i className="ri-twitter-x-line text-lg"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#F8F4E8]/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#F8F4E8]/60">
          <p>© 2025 Zarif Gold. Fergana Valley, Uzbekistan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
