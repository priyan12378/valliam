import { Cpu, Box, Layers } from 'lucide-react';

export default function ProductDesignTimeline() {
  
  const steps = [
    {
      id: "01",
      title: "Electronics Product Design",
      desc: "Design and development of electronic systems covering architecture, hardware, and embedded firmware.",
      icon: <Cpu size={32} />,
      points: [
        "Electronic architecture and system design",
        "Schematic capture and PCB layout",
        "Component selection and BOM optimisation",
        "Embedded firmware development",
        "Prototyping and design validation"
      ]
    },
    {
      id: "02",
      title: "Mechanical Product Design",
      desc: "Mechanical engineering and enclosure design focused on functionality, reliability, and manufacturability.",
      icon: <Box size={32} />,
      points: [
        "Industrial design support",
        "Enclosure and housing design",
        "Thermal and structural analysis",
        "Material selection and tolerance analysis",
        "DFM/DFA considerations"
      ]
    },
    {
      id: "03",
      title: "End-to-End Product Development",
      desc: "Integrated product development bringing electronics and mechanics together into a complete system.",
      icon: <Layers size={32} />,
      points: [
        "Requirement definition and feasibility analysis",
        "Cross-domain system integration",
        "Prototype build and testing",
        "Compliance and certification readiness",
        "Production handover and scale-up support"
      ]
    }
  ];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            OUR DESIGN <span className="text-[#007BFF]">CAPABILITIES</span>
          </h2>
          <div className="w-24 h-1 bg-[#E60000] mx-auto"></div>
        </div>

        {/* TIMELINE */}
        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 -translate-x-1/2 rounded-full"></div>

          <div className="space-y-12 lg:space-y-24">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}>
                
                {/* Text Side */}
                <div className="flex-1 lg:text-right">
                  <div className={`flex flex-col gap-4 ${index % 2 === 0 ? 'lg:items-end' : 'lg:items-start'}`}>
                    <div className="p-3 bg-white border border-gray-100 shadow-sm rounded-lg w-fit text-[#007BFF]">
                      {step.icon}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4 max-w-lg">
                      {step.desc}
                    </p>
                    
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

                {/* Center Number */}
                <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-white border-4 border-[#007BFF] flex items-center justify-center shadow-xl">
                  <span className="text-xl font-bold text-black" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    {step.id}
                  </span>
                </div>

                {/* Spacer */}
                <div className="flex-1 hidden lg:block"></div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}