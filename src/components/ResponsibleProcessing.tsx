import React from 'react';
import { ShieldCheck, Recycle, Trees, HardHat, Droplets, VolumeX, Sparkles, CheckCircle2 } from 'lucide-react';

export const ResponsibleProcessing: React.FC = () => {
  const sections = [
    {
      id: 'resp-worker-safety',
      icon: HardHat,
      title: 'Worker Safety',
      subtitle: 'Workforce Protection & Safe Machinery Protocols',
      description: 'The safety and well-being of our workforce is paramount throughout all quarrying, cutting, and handling operations.',
      points: [
        'Mandatory personal protective equipment (PPE) including respirators, eye shields, and steel-toed footwear',
        'Stringent machinery interlocks, dual emergency stop mechanisms, and regular safety drills',
        'Pneumatic and vacuum-assisted slab handling systems to eliminate manual heavy lifting hazards',
        'Continuous certified training on heavy crane rigging and diamond blade maintenance protocols'
      ]
    },
    {
      id: 'resp-waste-management',
      icon: Recycle,
      title: 'Waste Management',
      subtitle: 'By-Product Valorization & Slurry Recycling',
      description: 'Responsible handling and utilization of granite cutting waste and stone by-products generated during slab fabrication.',
      points: [
        'Stone slurry filtration through advanced filter-press units to recover clean, reusable water',
        'Consolidation of stone slurry cake into approved geo-fill and civil engineering stabilizers',
        'Repurposing granite offcuts into pavers, cobbles, mosaic tiles, and decorative landscaping aggregate',
        'Systematic zero-landfill goals by channeling usable stone fragments into construction bases'
      ]
    },
    {
      id: 'resp-environmental-care',
      icon: Trees,
      title: 'Environmental Care',
      subtitle: 'Dust Suppression, Noise Dampening & Water Conservation',
      description: 'Proactive measures to minimize industrial footprint and safeguard the surrounding ecosystem and air quality.',
      points: [
        'Closed-loop water recycling networks achieving over 90% water recirculation across all cutting bays',
        'High-efficiency wet-cutting protocols and misting dust suppression cannons to prevent airborne particulates',
        'Acoustic baffling and insulated machine enclosures to significantly reduce operational ambient noise',
        'Regular environmental compliance monitoring for clean energy optimization and site green belts'
      ]
    }
  ];

  return (
    <section id="responsibility" className="py-16 md:py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      {/* Background texture */}
      <div className="absolute inset-0 bg-stone-pattern opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
            <span className="uppercase text-[10px] tracking-widest text-amber-800 font-bold font-mono-tech">
              Sustainable Operations
            </span>
          </div>
          <h2
            id="responsibility-heading"
            className="text-3xl sm:text-4xl font-bold text-slate-900 font-heading tracking-tight"
          >
            Responsible Processing
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto">
            Balancing heavy industrial stone manufacturing with workforce protection, closed-loop water cycles, and sustainable material stewardship.
          </p>
        </div>

        {/* 3 Main Sustainability & Safety Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sections.map((sec) => {
            const Icon = sec.icon;
            return (
              <div
                key={sec.id}
                id={sec.id}
                className="bg-white rounded-2xl p-6 sm:p-7 flex flex-col justify-between border border-slate-200 hover:border-amber-400 transition-all shadow-xs hover:shadow-md group"
              >
                <div>
                  {/* Icon & Heading */}
                  <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center mb-5 text-amber-700 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-[10px] font-mono uppercase text-amber-800 tracking-wider block mb-1 font-bold">
                    {sec.subtitle}
                  </span>

                  <h3 className="text-xl font-bold text-slate-900 font-heading mb-2.5 group-hover:text-amber-700 transition-colors">
                    {sec.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                    {sec.description}
                  </p>

                  {/* Bullet points */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-100">
                    {sec.points.map((pt, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>Operational Metric</span>
                  <span className="text-amber-800 font-bold">Active Compliance</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
