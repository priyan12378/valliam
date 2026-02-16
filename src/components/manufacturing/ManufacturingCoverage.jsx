import { Layers, Activity, ClipboardCheck, Scale, Ruler, Truck } from 'lucide-react';

export default function ManufacturingCoverage() {
  const areas = [
    {
      title: "Build & Assembly Operations",
      desc: "PCB assembly, system integration, sub-assemblies, and controlled manufacturing workflows.",
      icon: <Layers size={28} />
    },
    {
      title: "Prototype & Pilot Production",
      desc: "Low-volume builds for validation, testing, and early customer deployments.",
      icon: <Ruler size={28} />
    },
    {
      title: "Quality & Functional Validation",
      desc: "In-process inspection, functional testing, and quality checks aligned to production standards.",
      icon: <Activity size={28} />
    },
    {
      title: "Compliance & Regulatory",
      desc: "Manufacturing practices aligned with EMI/EMC, safety, and certification requirements.",
      icon: <ClipboardCheck size={28} />
    },
    {
      title: "Process Engineering",
      desc: "Manufacturing process definition, documentation, and repeatability for scale.",
      icon: <Scale size={28} />
    },
    {
      title: "Scale-Up & Production",
      desc: "Support for production ramp-up, supplier coordination, and volume transitions.",
      icon: <Truck size={28} />
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            COVERAGE <span className="text-[#E60000]">AREAS</span>
          </h2>
          <p className="text-gray-500 mt-2">Comprehensive support across build, validation, compliance, and scale-up.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, idx) => (
            <div key={idx} className="group p-8 border border-gray-100 hover:border-[#007BFF] hover:shadow-xl transition-all duration-300 rounded-sm bg-gray-50 hover:bg-white">
              <div className="w-12 h-12 flex items-center justify-center bg-white rounded-lg shadow-sm text-gray-400 group-hover:text-[#007BFF] mb-6 transition-colors">
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