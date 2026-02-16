import { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // IMPORTANT: Replace this with YOUR actual Google Form URL
  // Get it from: Form → Send → Link icon → Copy the full URL (uncheck "Shorten URL")
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScbtBVPZskpvyIGBYrIDVbjjEuDbmdgTJRXui-jMKtRVj-RtQ/viewform";
  
  const entryIDs = {
    name: "entry.2005620554",
    phone: "entry.1166974658",
    email: "entry.1045781291",
    message: "entry.839337160",
    source: "entry.1065046570"
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('🚀 Form submission started');
    setLoading(true);

    const formData = new FormData(e.target);
    
    // Build the Google Form submission URL with query parameters
    const params = new URLSearchParams();
    for (let [key, value] of formData.entries()) {
      params.append(key, value);
      console.log(`  ${key}: ${value}`);
    }

    // Create iframe submission URL
    const submitURL = GOOGLE_FORM_URL.replace('/viewform', '/formResponse');
    const fullURL = `${submitURL}?${params.toString()}`;
    
    console.log('📤 Submitting to:', fullURL);

    // Create a hidden iframe to submit
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.name = 'hidden_iframe_' + Date.now();
    document.body.appendChild(iframe);

    // Create a form to submit
    const form = document.createElement('form');
    form.action = submitURL;
    form.method = 'POST';
    form.target = iframe.name;
    
    // Add all form fields
    for (let [key, value] of formData.entries()) {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = value;
      form.appendChild(input);
    }
    
    document.body.appendChild(form);
    
    // Submit the form
    form.submit();
    
    // Clean up and show success after delay
    setTimeout(() => {
      console.log('✅ Form submitted successfully');
      setLoading(false);
      setSubmitted(true);
      document.body.removeChild(form);
      document.body.removeChild(iframe);
      e.target.reset();
    }, 2000);
  };

  return (
    <main className="bg-white pt-20 min-h-screen">
      
      {/* =========================================
          HERO SECTION
      ========================================= */}
      <section className="relative py-20 bg-[#050505] text-white overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#050505]"></div>
          <div className="absolute inset-0 opacity-10" 
               style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
          </div>
          {/* Glowing Orb */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E60000]/10 blur-[120px] rounded-full"></div>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 relative z-10">
          <div className="lg:w-2/3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E60000]/10 border border-[#E60000]/30 rounded-full mb-6">
              <MessageSquare size={14} className="text-[#E60000]" />
              <span className="text-xs font-bold tracking-widest text-[#E60000] uppercase" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                Get in Touch
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              CONTACT <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E60000] to-[#ff5e5e]">VALLIAM</span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-2xl border-l-2 border-[#007BFF] pl-6" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
              Have a project in mind? We'd love to hear from you. Let's build the future of electronics together.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================
          CONTACT FORM & INFO
      ========================================= */}
      <section className="py-24 bg-gray-50 relative">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* LEFT: Contact Information */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-black mb-6" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  REACH US <span className="text-[#007BFF]">DIRECTLY</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Whether you have a question about our services, pricing, or technical capabilities, our team is ready to answer all your questions.
                </p>
              </div>

              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-white rounded-lg shadow-sm border border-gray-100 flex items-center justify-center text-[#007BFF] group-hover:bg-[#007BFF] group-hover:text-white transition-colors duration-300">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900" style={{ fontFamily: 'Rajdhani, sans-serif' }}>Email Us</h4>
                    <a href="mailto:info@valliam.com" className="text-gray-600 hover:text-[#007BFF] transition-colors text-lg">info@valliam.com</a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-white rounded-lg shadow-sm border border-gray-100 flex items-center justify-center text-[#E60000] group-hover:bg-[#E60000] group-hover:text-white transition-colors duration-300">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900" style={{ fontFamily: 'Rajdhani, sans-serif' }}>Call Us</h4>
                    <p className="text-gray-600 text-lg">+91 98765 43210</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-white rounded-lg shadow-sm border border-gray-100 flex items-center justify-center text-gray-700 group-hover:bg-black group-hover:text-white transition-colors duration-300">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900" style={{ fontFamily: 'Rajdhani, sans-serif' }}>Headquarters</h4>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      Valliam Technical Centre Pvt Ltd,<br />
                      Coimbatore, Tamil Nadu, India.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: The Form */}
            <div className="bg-white p-10 md:p-12 rounded-sm shadow-xl border-t-4 border-[#007BFF] relative">
              
              {/* SUCCESS STATE OVERLAY */}
              {submitted ? (
                <div className="absolute inset-0 bg-white z-20 flex flex-col items-center justify-center text-center p-12 rounded-sm">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Rajdhani, sans-serif' }}>Message Sent!</h3>
                  <p className="text-gray-600 mb-8 max-w-sm">Thank you for contacting Valliam. Our engineering team will review your inquiry and get back to you shortly.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="px-8 py-3 bg-gray-900 text-white font-bold rounded hover:bg-black transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : null}

              {/* THE FORM */}
              <h3 className="text-2xl font-bold mb-8" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                Send us a Message
              </h3>

              <form 
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Full Name</label>
                    <input 
                      type="text" 
                      name={entryIDs.name}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:border-[#007BFF] focus:ring-1 focus:ring-[#007BFF] outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Phone</label>
                    <input 
                      type="tel" 
                      name={entryIDs.phone}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:border-[#007BFF] focus:ring-1 focus:ring-[#007BFF] outline-none transition-all"
                      placeholder="+91 ..."
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Email Address</label>
                  <input 
                    type="email" 
                    name={entryIDs.email}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:border-[#007BFF] focus:ring-1 focus:ring-[#007BFF] outline-none transition-all"
                    placeholder="john@company.com"
                  />
                </div>

                {/* Source Selection */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">How did you hear about us?</label>
                  <div className="relative">
                    <select 
                      name={entryIDs.source}
                      required
                      defaultValue=""
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:border-[#007BFF] focus:ring-1 focus:ring-[#007BFF] outline-none transition-all appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select an option</option>
                      <option value="Social Media">Social Media</option>
                      <option value="Search Engine">Search Engine</option>
                      <option value="Referral">Referral / Colleague</option>
                      <option value="Event">Event / Conference</option>
                      <option value="Other">Other</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                      <ArrowRight size={16} className="rotate-90" />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Message</label>
                  <textarea 
                    name={entryIDs.message}
                    required
                    rows="4"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:border-[#007BFF] focus:ring-1 focus:ring-[#007BFF] outline-none transition-all resize-none"
                    placeholder="Tell us about your project requirements..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  disabled={loading}
                  className={`w-full py-4 px-6 text-white font-bold uppercase tracking-widest rounded flex items-center justify-center gap-2 transition-all shadow-lg ${
                    loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#E60000] hover:bg-[#B30000] hover:-translate-y-1'
                  }`}
                  style={{ fontFamily: 'Rajdhani, sans-serif' }}
                >
                  {loading ? (
                    <>Sending...</>
                  ) : (
                    <>Send Message <Send size={20} /></>
                  )}
                </button>

              </form>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}