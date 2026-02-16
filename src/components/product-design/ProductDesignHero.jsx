import { PenTool, Layers } from 'lucide-react';

// Suggested Image: A sleek CAD model, wireframe, or engineer working on a PCB
import designBg from '../../assets/cybersecurity_bg.jpg'; // Reusing placeholder

export default function ProductDesignHero() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#050505] text-white overflow-hidden">
      
      {/* Background & Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={designBg} alt="Product Design" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-transparent"></div>
        
        {/* Abstract Blueprint Grid */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'linear-gradient(#007BFF 1px, transparent 1px), linear-gradient(90deg, #007BFF 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        <div className="lg:w-2/3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#007BFF]/10 border border-[#007BFF]/30 rounded-full mb-6 backdrop-blur-sm">
            <PenTool size={14} className="text-[#007BFF]" />
            <span className="text-xs font-bold tracking-widest text-[#007BFF] uppercase" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              Concept to Production
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1]" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            END-TO-END <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007BFF] to-[#00C6FF]">
              PRODUCT DESIGN
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-8 leading-relaxed max-w-2xl border-l-2 border-[#E60000] pl-6" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
            Valliam provides comprehensive product design services supporting the complete journey from concept to production-ready products. We combine electronics, mechanical engineering, and system integration to deliver robust solutions.
          </p>

          <div className="flex flex-wrap gap-3">
            {["Electronics Design", "Mechanical Engineering", "System Integration"].map((tag, idx) => (
              <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-sm text-sm font-bold text-gray-300 uppercase tracking-wider">
                <Layers size={16} className="text-[#E60000]" />
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}