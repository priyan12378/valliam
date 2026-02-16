import { Link } from 'react-router-dom'; // Import Link for SPA navigation
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Navigation Links Data
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Company', path: '/company' },
    { name: 'Manufacturing', path: '/manufacturing' },
    { name: 'Product Design', path: '/product-design' },
    { name: 'Contact', path: '/contact' }
  ];

  const coreServices = [
    { name: 'Edge AI', path: '/edge-ai' },
    { name: 'IoT Cloud', path: '/iot-cloud' },
    { name: 'Autosar', path: '/autosar' },
    { name: 'Digital Twins', path: '/digital-twins' },
    { name: 'FuSa Compliance', path: '/fusa' },
    { name: 'ECU Software', path: '/ecu-software-platform' }
  ];

  return (
    <footer className="text-white py-16 bg-[#000000] border-t border-gray-900">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
        
        {/* Top Border Accent */}
        <div className="h-1 mb-12 bg-gradient-to-r from-[#E60000] via-[#007BFF] to-[#E60000]"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* 1. Company Info */}
          <div>
            <h3 className="text-3xl font-bold mb-2 tracking-tight text-[#E60000]" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              VALLIAM
            </h3>
            <p className="text-sm mb-6 tracking-widest text-[#007BFF]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Technical Centre
            </p>
            <p className="mb-6 text-gray-400 leading-relaxed text-sm" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
              Precision industrial engineering solutions from POC to production, specializing in Edge AI and Next-Gen Mobility.
            </p>
            
            {/* Social Icons */}
            <div className="flex space-x-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center border border-gray-700 rounded-sm text-gray-400 hover:text-[#007BFF] hover:border-[#007BFF] hover:bg-[#007BFF]/10 transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* 2. Quick Links (Internal Navigation) */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white uppercase tracking-wide" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              QUICK LINKS
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="flex items-center space-x-2 group text-gray-400 hover:text-[#007BFF] transition-all duration-300"
                    style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
                  >
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Core Services (Internal Navigation) */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white uppercase tracking-wide" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              CORE SERVICES
            </h4>
            <ul className="space-y-3">
              {coreServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="flex items-center space-x-2 group text-gray-400 hover:text-[#007BFF] transition-all duration-300"
                    style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
                  >
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white uppercase tracking-wide" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              GET IN TOUCH
            </h4>
            <div className="space-y-4 text-sm">
              
              {/* Email */}
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 flex items-center justify-center bg-[#007BFF]/10 rounded-sm">
                  <Mail size={18} className="text-[#007BFF]" />
                </div>
                <a
                  href="mailto:valliam.tech@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors"
                  style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
                >
                  valliam.tech@gmail.com
                </a>
              </div>

              {/* Phone (Placeholder) */}
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 flex items-center justify-center bg-[#007BFF]/10 rounded-sm">
                  <Phone size={18} className="text-[#007BFF]" />
                </div>
                <a
                  href="tel:+919876543210"
                  className="text-gray-400 hover:text-white transition-colors"
                  style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
                >
                  +91 98765 43210
                </a>
              </div>

              {/* Address (Placeholder) */}
              <div className="flex items-start space-x-3 group">
                <div className="w-10 h-10 flex items-center justify-center bg-[#007BFF]/10 rounded-sm flex-shrink-0">
                  <MapPin size={18} className="text-[#007BFF]" />
                </div>
                <span className="text-gray-400 leading-relaxed" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
                  Coimbatore, Tamil Nadu,<br />India.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-gray-500">
            <p style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
              &copy; {currentYear} Valliam Technical Centre and Services Pvt Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="hover:text-[#007BFF] transition-colors"
                  style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Final Brand Accent */}
        <div className="mt-8 flex items-center justify-center gap-4 opacity-30">
          <div className="h-px flex-1 bg-white/20"></div>
          <p className="text-[10px] font-bold tracking-[0.2em] text-[#007BFF]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            PRECISION INDUSTRIAL ENGINEERING
          </p>
          <div className="h-px flex-1 bg-white/20"></div>
        </div>

      </div>
    </footer>
  );
}