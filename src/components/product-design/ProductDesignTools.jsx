import { Cpu, PenTool, Printer, ArrowRight } from 'lucide-react';

// Use a relevant image or reuse existing
import toolBg from '../../assets/cybersecurity_bg.jpg'; 

export default function ProductDesignTools() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src={toolBg} alt="Design Tools" className="w-full h-full object-cover scale-105" />
        <div className="absolute inset-0 bg-[#050505]/90"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            TOOLCHAIN & <span className="text-[#007BFF]">ENVIRONMENTS</span>
          </h2>
        </div>

        {/* 3-Column Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="p-8 bg-white/5 border border-white/10 rounded-sm backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-6">
              <Cpu size={32} className="text-[#007BFF]" />
              <h3 className="text-xl font-bold text-white">Electronics & <br />Embedded</h3>
            </div>
            <ul className="space-y-3 text-gray-300 font-light text-sm">
              <li>• Altium, KiCad, OrCAD</li>
              <li>• ARM-based platforms</li>
              <li>• RTOS & Embedded Linux</li>
            </ul>
          </div>

          <div className="p-8 bg-white/5 border border-white/10 rounded-sm backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-6">
              <PenTool size={32} className="text-[#E60000]" />
              <h3 className="text-xl font-bold text-white">Mechanical <br />Design</h3>
            </div>
            <ul className="space-y-3 text-gray-300 font-light text-sm">
              <li>• CAD / CAE / CAM Tools</li>
              <li>• Thermal Simulation</li>
              <li>• Structural Analysis</li>
            </ul>
          </div>

          <div className="p-8 bg-white/5 border border-white/10 rounded-sm backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-6">
              <Printer size={32} className="text-[#00BFFF]" />
              <h3 className="text-xl font-bold text-white">Prototyping & <br />Manufacturing</h3>
            </div>
            <ul className="space-y-3 text-gray-300 font-light text-sm">
              <li>• Rapid Prototyping (3D Print)</li>
              <li>• PCB Assembly</li>
              <li>• Enclosure Fabrication</li>
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
               "Concept-to-production", 
               "Design-only engagement", 
               "Build-to-spec services", 
               "Rapid prototyping",
               "Dedicated engineering teams"
             ].map((model, idx) => (
               <div key={idx} className="px-6 py-2 bg-white/5 hover:bg-[#007BFF] border border-white/10 rounded-full text-sm text-gray-300 hover:text-white transition-all cursor-default">
                 {model}
               </div>
             ))}
           </div>

           <div className="mt-12">
             <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#007BFF] hover:bg-blue-600 text-white font-bold rounded-sm transition-all shadow-lg" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
               START YOUR DESIGN <ArrowRight size={20} />
             </a>
           </div>
        </div>

      </div>
    </section>
  );
}