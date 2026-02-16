import { Cpu, PenTool, ShieldCheck, Factory } from 'lucide-react';

export default function ManufacturingTimeline() {
  
  const steps = [
    {
      id: "01",
      title: "Electronic Manufacturing Services (EMS)",
      desc: "End-to-end electronic manufacturing services covering PCB assembly, system integration, and functional testing.",
      icon: <Cpu size={32} />,
      points: [
        "SMT and through-hole PCB assembly",
        "Box build and system integration",
        "Cable harnessing and sub-assemblies",
        "Functional and in-circuit testing",
        "Low- to medium-volume production"
      ]
    },
    {
      id: "02",
      title: "Prototyping",
      desc: "Rapid and iterative prototyping to validate designs, de-risk production, and accelerate product development.",
      icon: <PenTool size={32} />,
      points: [
        "Prototype PCB assembly",
        "Mechanical enclosure prototyping",
        "Engineering samples and pilot builds",
        "Design validation builds",
        "Iterative refinement support"
      ]
    },
    {
      id: "03",
      title: "Compliance & Pre-Compliance",
      desc: "Manufacturing-aligned support to ensure products meet regulatory and quality requirements before formal certification.",
      icon: <ShieldCheck size={32} />,
      points: [
        "Pre-compliance build reviews",
        "EMI/EMC readiness support",
        "Test coordination and documentation",
        "Design and process alignment"
      ]
    },
    {
      id: "04",
      title: "Industrialisation & Production",
      desc: "Structured support to transition products from prototypes to scalable, repeatable manufacturing.",
      icon: <Factory size={32} />,
      points: [
        "DFM/DFA implementation",
        "Process definition and work instructions",
        "Supplier and vendor coordination",
        "Pilot production and ramp-up support"
      ]
    }
  ];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            OUR <span className="text-[#007BFF]">CAPABILITIES</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From concept to scale, we manage every stage of the manufacturing lifecycle.
          </p>
        </div>

        {/* TIMELINE CONTAINER */}
        <div className="relative">
          {/* Central Line (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 -translate-x-1/2 rounded-full"></div>

          <div className="space-y-12 lg:space-y-24">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}>
                
                {/* 1. TEXT CONTENT SIDE */}
                <div className="flex-1 lg:text-right">
                  <div className={`flex flex-col gap-4 ${index % 2 === 0 ? 'lg:items-end' : 'lg:items-start'}`}>
                    <div className="p-3 bg-white border border-gray-100 shadow-sm rounded-lg w-fit">
                      <span className="text-[#007BFF]">{step.icon}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {step.desc}
                    </p>
                    
                    {/* Points List */}
                    <ul className={`space-y-2 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                      {step.points.map((point, i) => (
                        <li key={i} className="text-sm font-medium text-gray-500 flex items-center gap-2 lg:justify-end">
                           {index % 2 !== 0 && <span className="w-1.5 h-1.5 bg-[#E60000] rounded-full"></span>}
                           {point}
                           {index % 2 === 0 && <span className="w-1.5 h-1.5 bg-[#E60000] rounded-full"></span>}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* 2. CENTER NODE (NUMBER) */}
                <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-white border-4 border-[#007BFF] flex items-center justify-center shadow-xl">
                  <span className="text-xl font-bold text-black" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    {step.id}
                  </span>
                </div>

                {/* 3. EMPTY SPACER SIDE (To balance the flex layout) */}
                <div className="flex-1 hidden lg:block"></div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}