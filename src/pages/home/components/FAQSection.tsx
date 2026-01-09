import { useState } from 'react';
import { faqs } from '../../../mocks/faqs';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faqs" className="py-24 bg-[#F8F4E8]">
      <div className="max-w-[1360px] mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side - Header */}
          <div className="md:sticky md:top-24 mb-12 md:mb-0">
            <div className="inline-block px-4 py-2 bg-[#1A2B4A] text-[#F8F4E8] text-sm font-['Playfair_Display'] rounded-full mb-6">
              FAQs
            </div>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A2B4A] mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-[#1A2B4A]/70 text-lg mb-8">
              Have questions about our carpets? Find your answers below or contact us—we're here to help!
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#1A2B4A] text-[#F8F4E8] text-base font-semibold rounded-full hover:bg-[#D4A574] hover:text-[#1A2B4A] transition-all duration-700 cursor-pointer whitespace-nowrap"
            >
              <span>Get more info</span>
              <i className="ri-arrow-right-line text-xl"></i>
            </button>
          </div>

          {/* Right Side - FAQs */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-[#1A2B4A]/10 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer hover:bg-white/60 transition-colors"
                >
                  <h4 className="font-['Playfair_Display'] text-lg font-semibold text-[#1A2B4A] pr-4">
                    {faq.question}
                  </h4>
                  <i
                    className={`ri-${openIndex === index ? 'subtract' : 'add'}-line text-2xl text-[#D4A574] flex-shrink-0 transition-transform duration-300`}
                  ></i>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-5 text-[#1A2B4A]/80 leading-relaxed border-l-4 border-[#D4A574] ml-6">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
