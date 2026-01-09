import { useState } from 'react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formBody = new URLSearchParams();
      formBody.append('name', formData.name);
      formBody.append('email', formData.email);
      formBody.append('phone', formData.phone);
      formBody.append('message', formData.message);

      const response = await fetch('https://readdy.ai/api/form/d5f9dk1kb5a33vars2g0', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 bg-[#8B6F47]">
      <div className="max-w-[1360px] mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Side - Info */}
          <div className="text-[#F8F4E8]">
            <div className="inline-block px-4 py-2 bg-[#D4A574] text-[#1A2B4A] text-sm font-['Playfair_Display'] rounded-full mb-6">
              Contact
            </div>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get in touch
            </h2>
            <p className="text-[#F8F4E8]/80 text-lg mb-12 leading-relaxed">
              For any inquiries or to explore your vision further, we invite you to contact our professional team using the details provided below.
            </p>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h4 className="text-sm font-semibold text-[#D4A574] mb-2 uppercase tracking-wider">Office</h4>
                <p className="text-[#F8F4E8]/90">221 Serrano Dr, San Francisco, CA 94132 US</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#D4A574] mb-2 uppercase tracking-wider">Email</h4>
                <a href="mailto:admin@zarif.gold" className="text-[#F8F4E8]/90 hover:text-[#D4A574] transition-colors">
                  admin@zarif.gold
                </a>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#D4A574] mb-2 uppercase tracking-wider">Telephone</h4>
                <a href="tel:+16289460353" className="text-[#F8F4E8]/90 hover:text-[#D4A574] transition-colors">
                  +1 (628) 946-0353
                </a>
              </div>

              <div className="pt-8 border-t border-[#F8F4E8]/20">
                <h4 className="text-sm font-semibold text-[#D4A574] mb-4 uppercase tracking-wider">Follow us</h4>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#F8F4E8]/10 hover:bg-[#D4A574] rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer"
                  >
                    <i className="ri-instagram-line text-xl text-[#F8F4E8]"></i>
                  </a>
                  <a
                    href="https://www.tiktok.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#F8F4E8]/10 hover:bg-[#D4A574] rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer"
                  >
                    <i className="ri-tiktok-line text-xl text-[#F8F4E8]"></i>
                  </a>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#F8F4E8]/10 hover:bg-[#D4A574] rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer"
                  >
                    <i className="ri-twitter-x-line text-xl text-[#F8F4E8]"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white rounded-2xl p-8 md:p-10">
            <form onSubmit={handleSubmit} data-readdy-form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[#1A2B4A] mb-2">
                  Name <span className="text-[#D4A574]">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Smith"
                  className="w-full px-4 py-3 bg-[#F8F4E8] border border-[#1A2B4A]/10 rounded-lg focus:outline-none focus:border-[#D4A574] transition-colors text-[#1A2B4A]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#1A2B4A] mb-2">
                  Email <span className="text-[#D4A574]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="johnsmith@gmail.com"
                  className="w-full px-4 py-3 bg-[#F8F4E8] border border-[#1A2B4A]/10 rounded-lg focus:outline-none focus:border-[#D4A574] transition-colors text-[#1A2B4A]"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-[#1A2B4A] mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (628) 946-0353"
                  className="w-full px-4 py-3 bg-[#F8F4E8] border border-[#1A2B4A]/10 rounded-lg focus:outline-none focus:border-[#D4A574] transition-colors text-[#1A2B4A]"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[#1A2B4A] mb-2">
                  Message <span className="text-[#D4A574]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  maxLength={500}
                  rows={5}
                  placeholder="Hello, I'd like to enquire about..."
                  className="w-full px-4 py-3 bg-[#F8F4E8] border border-[#1A2B4A]/10 rounded-lg focus:outline-none focus:border-[#D4A574] transition-colors resize-none text-[#1A2B4A]"
                ></textarea>
                <p className="text-xs text-[#1A2B4A]/50 mt-1">{formData.message.length}/500 characters</p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-[#1A2B4A] text-[#F8F4E8] text-base font-semibold rounded-full hover:bg-[#D4A574] hover:text-[#1A2B4A] transition-all duration-700 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap"
              >
                {isSubmitting ? 'Sending...' : 'Send message'}
              </button>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-100 text-green-800 rounded-lg text-center">
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-100 text-red-800 rounded-lg text-center">
                  Sorry, there was an error sending your message. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
