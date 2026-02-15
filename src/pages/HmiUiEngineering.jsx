import React from 'react';
import { 
  Layout, Eye, Mic, Glasses, 
  ShieldCheck, MonitorPlay, Sparkles, UserCog 
} from 'lucide-react';

export default function HmiUiEngineering() {
  const capabilities = [
    { 
      icon: <Layout size={28} />, 
      title: "Embedded GUI Frameworks", 
      desc: "Optimized graphics stacks for real-time systems, ensuring low-latency and high-performance visual rendering." 
    },
    { 
      icon: <UserCog size={28} />, 
      title: "AI-Driven Personalization", 
      desc: "Interfaces that learn user preferences and habits to dynamically prioritize relevant information." 
    },
    { 
      icon: <Mic size={28} />, 
      title: "Multimodal Interaction", 
      desc: "Fusion of touch, voice, and gesture recognition for natural, friction-less human-machine communication." 
    },
    { 
      icon: <Glasses size={28} />, 
      title: "AR/VR-Assisted HMI", 
      desc: "Augmented and virtual reality concepts designed for complex industrial and automotive control systems." 
    },
    { 
      icon: <MonitorPlay size={28} />, 
      title: "Digital Twin Simulation", 
      desc: "High-fidelity testing and validation of UI behavior using virtual replicas of the target hardware environment." 
    },
    { 
      icon: <ShieldCheck size={28} />, 
      title: "Safety-Aware Design", 
      desc: "Human-centered design for mission-critical systems where cognitive load and safety are the highest priorities." 
    }
  ];

  return (
    <main className="bg-white overflow-hidden pt-20 min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-24 bg-[#050505] text-white">
        <div className="absolute inset-0 opacity-20">
           <div className="w-full h-full bg-[url('/src/assets/tech-grid.png')] bg-repeat opacity-30"></div>
           <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 relative z-20">
          <div className="lg:w-3/4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#007BFF]/10 border border-[#007BFF]/30 rounded-full mb-6">
              <Sparkles size={14} className="text-[#007BFF]" />
              <span className="text-xs font-bold tracking-widest text-[#007BFF] uppercase" style={{ fontFamily: 'Rajdhani' }}>
                Adaptive Interfaces
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight" style={{ fontFamily: 'Rajdhani' }}>
              HMI / UI <br />
              <span className="text-[#007BFF]">Engineering</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl border-l-4 border-[#007BFF] pl-6" style={{ fontFamily: 'IBM Plex Sans' }}>
              We design and engineer future-ready HMI/UI platforms that are intelligent, context-aware, and optimized for embedded environments. Our HMIs are built to evolve through software-defined updates and user personalization.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CAPABILITIES GRID */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900" style={{ fontFamily: 'Rajdhani' }}>
                FUTURE-FOCUSED <span className="text-[#E60000]">CAPABILITIES</span>
              </h2>
            </div>
            <div className="hidden md:block w-1/3 h-px bg-gray-300"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((item, idx) => (
              <div key={idx} className="group p-10 bg-white border border-gray-200 rounded-sm hover:border-[#007BFF] transition-all duration-300 hover:shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gray-50 rounded-bl-full -mr-8 -mt-8 transition-colors group-hover:bg-[#007BFF]/10"></div>
                <div className="w-14 h-14 bg-gray-50 rounded-lg flex items-center justify-center text-[#007BFF] mb-6 group-hover:bg-[#007BFF] group-hover:text-white transition-colors duration-300 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Rajdhani' }}>{item.title}</h3>
                <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'IBM Plex Sans' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. LONG-TERM VISION */}
      <section className="py-24 bg-black relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <Eye className="mx-auto text-[#007BFF] mb-6 animate-pulse" size={48} />
          <h2 className="text-sm font-bold text-gray-500 mb-6 tracking-[0.3em] uppercase" style={{ fontFamily: 'Rajdhani' }}>Our Vision</h2>
          <h3 className="text-3xl md:text-5xl font-light text-white leading-tight" style={{ fontFamily: 'IBM Plex Sans' }}>
            "To create interfaces that <span className="text-[#007BFF] font-semibold">adapt to users, context, and environment</span>, transforming interfaces into intelligent companions."
          </h3>
          <div className="mt-12 w-24 h-1 bg-gradient-to-r from-[#007BFF] to-[#E60000] mx-auto opacity-70"></div>
        </div>
      </section>
    </main>
  );
}