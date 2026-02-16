import { Check, BoxSelect } from 'lucide-react';

export default function ProductDesignServices() {
  const benefits = [
    "Robust and manufacturable product designs",
    "Reduced design rework and late-stage changes",
    "Faster validation and iteration cycles",
    "Smoother transition from prototype to production"
  ];

  return (
    <section className="py-24 bg-[#0a0a0a] text-white">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Content */}
          <div>
            <div className="w-20 h-1 bg-[#E60000] mb-8"></div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              VALLIAM <br />
              <span className="text-gray-500">PRODUCT DESIGN SERVICES</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
              We provide structured product engineering and validation capabilities that bridge concept design and production readiness. Our approach combines electronics, mechanical engineering, and system-level validation to ensure products are robust, manufacturable, and compliant from day one.
            </p>

            <div className="grid grid-cols-1 gap-4">
              {[
                "Electronics design validation & prototype bring-up",
                "Mechanical fitment, enclosure validation & tolerance checks",
                "Embedded firmware integration & functional validation",
                "Cross-domain system integration (electronics + mechanics)",
                "Pre-production validation & readiness assessment"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-sm hover:bg-white/10 transition-colors">
                  <BoxSelect size={20} className="text-[#007BFF]" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Benefits Card */}
          <div className="bg-[#E60000] p-10 md:p-12 rounded-sm shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" 
                 style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-8 relative z-10" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              Key Benefits
            </h3>

            <div className="space-y-6 relative z-10">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="p-1 bg-white rounded-full text-[#E60000] mt-1 shadow-sm">
                    <Check size={16} strokeWidth={4} />
                  </div>
                  <p className="text-lg font-medium text-white leading-tight" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}