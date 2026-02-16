import { Wrench, CheckSquare, Globe, ArrowRight } from 'lucide-react';

// 1. Image Import (Use your own image or this placeholder concept)
// Suggested Image: A high-tech cleanroom, SMT line, or circuit board assembly
import factoryBg from '../../assets/cybersecurity_bg.jpg'; // Reusing existing for now

export default function ManufacturingTools() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      
      {/* =========================================
          BACKGROUND LAYER
      ========================================= */}
      <div className="absolute inset-0 z-0">
        <img 
          src={factoryBg} 
          alt="Manufacturing Facility" 
          className="w-full h-full object-cover scale-105" 
        />
        {/* Heavy Dark Overlay for Maximum Text Contrast */}
        <div className="absolute inset-0 bg-[#050505]/90"></div>
        
        {/* Optional: Blue Gradient Accent from bottom */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#007BFF]/20 to-transparent"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full mb-6 backdrop-blur-sm">
             <span className="w-2 h-2 rounded-full bg-[#007BFF] animate-pulse"></span>
             <span className="text-xs font-bold tracking-[0.2em] text-white uppercase" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
               Infrastructure
             </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            TOOLS, FACILITIES & <span className="text-[#007BFF]">ECOSYSTEM</span>
          </h2>
        </div>

        {/* 3-Column Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Capabilities */}
          <div className="group p-8 bg-white/5 border border-white/10 rounded-sm hover:bg-white/10 hover:border-[#007BFF]/50 transition-all duration-300 backdrop-blur-sm">
            <div className="w-14 h-14 bg-[#007BFF]/20 rounded-lg flex items-center justify-center text-[#007BFF] mb-6 group-hover:bg-[#007BFF] group-hover:text-white transition-colors">
              <Wrench size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              Manufacturing <br />Capabilities
            </h3>
            <ul className="space-y-3 text-gray-300 font-light" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
              <li className="flex items-start gap-2"><span className="text-[#007BFF] mt-1">›</span> SMT assembly lines</li>
              <li className="flex items-start gap-2"><span className="text-[#007BFF] mt-1">›</span> Manual assembly stations</li>
              <li className="flex items-start gap-2"><span className="text-[#007BFF] mt-1">›</span> Test fixtures & jigs</li>
              <li className="flex items-start gap-2"><span className="text-[#007BFF] mt-1">›</span> Automated inspection tools</li>
            </ul>
          </div>

          {/* Card 2: Quality */}
          <div className="group p-8 bg-white/5 border border-white/10 rounded-sm hover:bg-white/10 hover:border-[#E60000]/50 transition-all duration-300 backdrop-blur-sm">
            <div className="w-14 h-14 bg-[#E60000]/20 rounded-lg flex items-center justify-center text-[#E60000] mb-6 group-hover:bg-[#E60000] group-hover:text-white transition-colors">
              <CheckSquare size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              Quality & <br />Validation
            </h3>
            <ul className="space-y-3 text-gray-300 font-light" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
              <li className="flex items-start gap-2"><span className="text-[#E60000] mt-1">›</span> Functional test setups</li>
              <li className="flex items-start gap-2"><span className="text-[#E60000] mt-1">›</span> Burn-in testing chambers</li>
              <li className="flex items-start gap-2"><span className="text-[#E60000] mt-1">›</span> Inspection tools</li>
              <li className="flex items-start gap-2"><span className="text-[#E60000] mt-1">›</span> Verification instruments</li>
            </ul>
          </div>

          {/* Card 3: Supply Chain */}
          <div className="group p-8 bg-white/5 border border-white/10 rounded-sm hover:bg-white/10 hover:border-[#00BFFF]/50 transition-all duration-300 backdrop-blur-sm">
            <div className="w-14 h-14 bg-[#00BFFF]/20 rounded-lg flex items-center justify-center text-[#00BFFF] mb-6 group-hover:bg-[#00BFFF] group-hover:text-white transition-colors">
              <Globe size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              Supply Chain & <br />Partners
            </h3>
            <ul className="space-y-3 text-gray-300 font-light" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
              <li className="flex items-start gap-2"><span className="text-[#00BFFF] mt-1">›</span> Global component sourcing</li>
              <li className="flex items-start gap-2"><span className="text-[#00BFFF] mt-1">›</span> Fabrication partners (PCB/Mech)</li>
              <li className="flex items-start gap-2"><span className="text-[#00BFFF] mt-1">›</span> Compliance & certification labs</li>
              <li className="flex items-start gap-2"><span className="text-[#00BFFF] mt-1">›</span> Logistics partners</li>
            </ul>
          </div>

        </div>

        {/* Engagement Models Footer */}
        <div className="mt-20 pt-10 border-t border-white/10 text-center">
           <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">
             Flexible Engagement Models
           </p>
           
           <div className="flex flex-wrap justify-center gap-4">
             {[
               "Prototype & Pilot Support", 
               "Build-to-Spec Services", 
               "Compliance-Aligned Production", 
               "Scale-Up Support",
               "Dedicated Manufacturing Teams"
             ].map((model, idx) => (
               <div key={idx} className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-[#007BFF] border border-white/10 hover:border-[#007BFF] rounded-full text-sm text-gray-300 hover:text-white transition-all duration-300 cursor-default">
                 {model}
               </div>
             ))}
           </div>

           {/* CTA Button */}
           <div className="mt-12">
             <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#E60000] hover:bg-[#B30000] text-white font-bold rounded-sm transition-all duration-300 shadow-[0_0_20px_rgba(230,0,0,0.4)] hover:shadow-[0_0_40px_rgba(230,0,0,0.6)]" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
               START YOUR BUILD <ArrowRight size={20} />
             </a>
           </div>
        </div>

      </div>
    </section>
  );
}