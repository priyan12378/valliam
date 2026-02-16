import { Lightbulb, Workflow, PenTool, TestTube, FileCheck, Factory } from 'lucide-react';

export default function ProductDesignCoverage() {
  const areas = [
    {
      title: "Concept & Requirement",
      desc: "Product ideation, feasibility analysis, requirement capture, and architecture planning.",
      icon: <Lightbulb size={28} />
    },
    {
      title: "System Architecture",
      desc: "Definition of system-level architecture integrating electronics, mechanics, and software.",
      icon: <Workflow size={28} />
    },
    {
      title: "Detailed Design",
      desc: "Detailed hardware, firmware, and mechanical design with design reviews and optimisation.",
      icon: <PenTool size={28} />
    },
    {
      title: "Prototyping & Validation",
      desc: "Prototype builds, functional validation, testing, and design iteration.",
      icon: <TestTube size={28} />
    },
    {
      title: "Compliance Readiness",
      desc: "Design alignment with regulatory requirements, documentation, and test preparation.",
      icon: <FileCheck size={28} />
    },
    {
      title: "Manufacturing Support",
      desc: "Design for manufacturability (DFM), production transition, and vendor coordination.",
      icon: <Factory size={28} />
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            COVERAGE <span className="text-[#007BFF]">AREAS</span>
          </h2>
          <p className="text-gray-500 mt-2">Comprehensive coverage across concept, design, validation, and production readiness.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, idx) => (
            <div key={idx} className="group p-8 border border-gray-100 hover:border-[#E60000] hover:shadow-xl transition-all duration-300 rounded-sm bg-gray-50 hover:bg-white">
              <div className="w-12 h-12 flex items-center justify-center bg-white rounded-lg shadow-sm text-gray-400 group-hover:text-[#E60000] mb-6 transition-colors">
                {area.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                {area.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
                {area.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}