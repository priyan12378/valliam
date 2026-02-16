import { Settings, CheckCircle2 } from 'lucide-react';

// Import a relevant background image or use a placeholder
import heroBg from '../../assets/cybersecurity_bg.jpg'; // Reusing existing or add new

export default function ManufacturingHero() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#050505] text-white overflow-hidden">
      
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        {/* <img src={heroBg} alt="Manufacturing" className="w-full h-full object-cover opacity-20" /> */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
        
        {/* Abstract Grid Overlay */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        <div className="lg:w-2/3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E60000]/10 border border-[#E60000]/30 rounded-full mb-6 backdrop-blur-sm">
            <Settings size={14} className="text-[#E60000] animate-spin-slow" />
            <span className="text-xs font-bold tracking-widest text-[#E60000] uppercase" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              Build &bull; Validate &bull; Scale
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1]" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            PROTOTYPING & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007BFF] to-[#00C6FF]">
              MANUFACTURING
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-8 leading-relaxed max-w-2xl border-l-2 border-[#007BFF] pl-6" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
            Valliam provides manufacturing services that bridge product design and large-scale production. We enable smooth transitions from early builds to production-ready systems.
          </p>

          <div className="flex flex-wrap gap-4 text-sm font-bold text-gray-300 uppercase tracking-wider">
            {["EMS Services", "Rapid Prototyping", "Compliance Support", "Industrialisation"].map((tag, idx) => (
              <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-sm">
                <CheckCircle2 size={16} className="text-[#007BFF]" />
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}