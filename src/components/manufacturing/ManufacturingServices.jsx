import { Check } from 'lucide-react';

export default function ManufacturingServices() {
  const benefits = [
    "Improved build quality and consistency",
    "Reduced manufacturing rework and delays",
    "Faster transition from prototype to production",
    "Scalable and repeatable manufacturing processes"
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
              <span className="text-gray-500">MANUFACTURING SERVICES</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
              We provide structured manufacturing and industrialisation capabilities that support electronics products from early builds through scalable production. Our focus is on build quality, repeatability, compliance alignment, and smooth transition from prototype to volume manufacturing.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "PCB assembly & EMS",
                "Prototype & Pilot builds",
                "Box build & System integration",
                "Functional testing & QC",
                "Pre-compliance support",
                "DFM/DFA Implementation"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-sm">
                  <div className="w-2 h-2 bg-[#007BFF] rounded-full"></div>
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Benefits Card */}
          <div className="bg-[#007BFF] p-10 md:p-12 rounded-sm shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10" 
                 style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-8 relative z-10" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              Why Choose Valliam?
            </h3>

            <div className="space-y-6 relative z-10">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="p-1 bg-white rounded-full text-[#007BFF] mt-1">
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