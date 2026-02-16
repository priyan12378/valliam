import { Cpu, Zap, Globe, Lightbulb, Shield } from 'lucide-react';

export default function CompanyAbout() {
  
  const strengths = [
    { icon: <Cpu size={24} />, text: "Electronics Design" },
    { icon: <Zap size={24} />, text: "Embedded Software & Firmware" },
    { icon: <Globe size={24} />, text: "Connectivity & Cloud Platforms" },
    { icon: <Lightbulb size={24} />, text: "Intelligent Systems & Edge Computing" },
    { icon: <Shield size={24} />, text: "Safety, Security & Compliance-Driven Engineering" }
  ];

  return (
    // UPDATED PADDING: Reduced top padding (pt-16 lg:pt-24) to reduce the gap
    <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-32 bg-white">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: The Narrative */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 border border-red-100 rounded-full mb-4">
               <span className="w-2 h-2 rounded-full bg-[#E60000]"></span>
               <span className="text-xs font-bold tracking-[0.2em] text-[#E60000] uppercase" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                 About Valliam
               </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-black leading-[0.95]" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              DEEP-TECH <span className="text-[#E60000]">ENGINEERING</span> & PRODUCT DEVELOPMENT.
            </h1>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
              <p>
                <strong className="text-black">Valliam Technical Centre Pvt Ltd</strong> is a deep-tech engineering and product development company focused on building next-generation smart, connected, and ultra-low-power electronic products.
              </p>
              <p>
                We specialize in transforming ideas into scalable, production-ready embedded systems and connected platforms across industries such as automotive, industrial automation, smart devices, energy systems, and next-generation electronics.
              </p>
              <p>
                We partner with product companies, OEMs, and technology innovators to accelerate product development while ensuring reliability, performance, power efficiency, and long-term maintainability.
              </p>
            </div>
          </div>

          {/* Right: The Strengths Card */}
          <div className="relative">
            {/* Decorative Tilt Background */}
            <div className="absolute inset-0 bg-gray-100 transform rotate-3 rounded-sm scale-95 origin-center"></div>
            
            <div className="relative bg-black text-white p-10 lg:p-12 rounded-sm shadow-2xl border-l-4 border-[#E60000]">
               <h3 className="text-3xl font-bold mb-8 text-white" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                 OUR CORE <span className="text-[#007BFF]">STRENGTHS</span>
               </h3>
               <div className="space-y-6">
                 {strengths.map((item, idx) => (
                   <div key={idx} className="flex items-start gap-4 group">
                     <div className="mt-1 p-2 rounded bg-white/10 text-[#E60000] group-hover:bg-[#E60000] group-hover:text-white transition-colors duration-300">
                       {item.icon}
                     </div>
                     <span className="text-lg font-medium text-gray-200" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
                       {item.text}
                     </span>
                   </div>
                 ))}
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}