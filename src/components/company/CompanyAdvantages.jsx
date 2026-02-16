import { Infinity, ShieldCheck, Zap, Users, PackageCheck, Battery } from 'lucide-react';

export default function CompanyAdvantages() {
  
  const advantages = [
    {
      id: 1,
      icon: <Infinity size={32} />,
      title: "End-to-End Capability",
      desc: "Comprehensive services covering the entire spectrum from hardware architecture to cloud deployment."
    },
    {
      id: 2,
      icon: <ShieldCheck size={32} />,
      title: "Industry Standards",
      desc: "Strict adherence to global quality, safety, and compliance protocols (ISO, IEC, MISRA)."
    },
    {
      id: 3,
      icon: <Zap size={32} />,
      title: "Future-Ready Architecture",
      desc: "Adoption of advanced, scalable technologies ensuring product longevity and market relevance."
    },
    {
      id: 4,
      icon: <Users size={32} />,
      title: "Co-Innovation Model",
      desc: "A collaborative partnership approach where we share risks and rewards to drive mutual success."
    },
    {
      id: 5,
      icon: <PackageCheck size={32} />,
      title: "Product-First Mindset",
      desc: "We don't just write code; we build scalable, maintainable, and manufacturable market-ready products."
    },
    {
      id: 6,
      icon: <Battery size={32} />,
      title: "Ultra-Low-Power DNA",
      desc: "Deep expertise in designing energy-efficient systems for maximum battery life and sustainability."
    }
  ];

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="max-w-[1440px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-gray-200 rounded-full mb-6 shadow-sm">
             <span className="w-2 h-2 rounded-full bg-[#E60000]"></span>
             <span className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
               Why Choose Us
             </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black uppercase tracking-tight" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            VALLIAM'S <span className="text-[#E60000]">ENGINEERING ADVANTAGE</span>
          </h2>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((item) => (
            <div 
              key={item.id} 
              className="group bg-white p-8 rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 border-l-4 border-transparent hover:border-[#007BFF] relative overflow-hidden"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400 group-hover:text-[#007BFF] group-hover:bg-blue-50 transition-colors duration-300 mb-6">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-black transition-colors" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-sm" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
                {item.desc}
              </p>

              {/* Decorative Number */}
              <div className="absolute top-4 right-4 text-6xl font-bold text-gray-50 pointer-events-none group-hover:text-gray-100 transition-colors" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                0{item.id}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}