import React from 'react';
import { Shield, Crosshair, CheckCircle, Factory, Cpu, Users, Award } from 'lucide-react';

export const AboutUs: React.FC = () => {
  const highlights = [
    {
      id: 'highlight-quality',
      icon: Award,
      title: 'Quality',
      description: 'Careful inspection at different stages of processing to ensure density, uniform grain, and zero structural flaws.'
    },
    {
      id: 'highlight-precision',
      icon: Crosshair,
      title: 'Precision',
      description: 'Accurate cutting, diamond blade calibration, polishing, and edge profiling to exact engineering tolerances.'
    },
    {
      id: 'highlight-reliability',
      icon: Shield,
      title: 'Reliability',
      description: 'Consistent processing workflows, robust inventory holding, and dependable delivery schedules for large installations.'
    }
  ];

  const keyFacts = [
    { label: 'Modern Machinery', value: 'Gang Saws & CNC Bridge Lines', icon: Cpu },
    { label: 'Skilled Workmanship', value: 'Experienced Stone Artisans', icon: Users },
    { label: 'Quality Control', value: 'Multi-Stage Laser & Optical Checks', icon: CheckCircle },
    { label: 'End-To-End Workflow', value: 'Quarry Extraction to Finished Slabs', icon: Factory },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      {/* Background accents */}
      <div className="absolute inset-0 bg-stone-pattern opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
            <span className="uppercase text-[10px] tracking-widest text-amber-800 font-bold font-mono-tech">
              Industrial Facility Profile
            </span>
          </div>
          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl font-bold text-slate-900 font-heading tracking-tight"
          >
            About Our Granite Processing Unit
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto">
            Engineered excellence and heavy industrial stone fabrication for global architectural infrastructure.
          </p>
        </div>

        {/* Content & Media Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          {/* Left Column: Industrial Image with detail badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white group shadow-md">
              <img
                src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80"
                alt="Granite processing machinery and cutting line"
                className="w-full h-[360px] sm:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>

              {/* Floating Stat Card */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-white/95 border border-slate-200/90 backdrop-blur-md shadow-lg">
                <div className="grid grid-cols-2 gap-4 divide-x divide-slate-200 text-center">
                  <div>
                    <span className="block text-xl font-bold text-slate-900 font-heading">High-Capacity</span>
                    <span className="text-[11px] text-slate-500 font-medium">Continuous Production</span>
                  </div>
                  <div className="pl-4">
                    <span className="block text-xl font-bold text-amber-600 font-heading">Calibrated</span>
                    <span className="text-[11px] text-slate-500 font-medium">Even Thickness & Surface</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Professional Content */}
          <div className="lg:col-span-6 space-y-5">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading leading-snug">
              Engineered Excellence in Natural Stone Manufacturing
            </h3>

            <div className="space-y-3.5 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                Granite is a natural and durable stone widely used in construction and interior applications due to its exceptional hardness, resistance to abrasions, and distinctive aesthetic patterns.
              </p>
              <p>
                Raw granite blocks are processed through multiple stages to produce finished slabs and customized architectural products. Our unit combines heavy-duty modern machinery, skilled workers, and rigorous quality inspection at every phase.
              </p>
              <p>
                Precision cutting and multi-stage polishing ensure consistent, high-quality finishes, while proper material handling and processing practices are followed throughout the workflow to maintain structural integrity.
              </p>
            </div>

            {/* Quick Feature Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {keyFacts.map((fact, index) => {
                const Icon = fact.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-xs"
                  >
                    <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0 text-amber-700">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block font-mono-tech uppercase tracking-wider">{fact.label}</span>
                      <span className="text-xs font-semibold text-slate-800">{fact.value}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Three Highlights: Quality, Precision, Reliability */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                id={item.id}
                className="bg-white rounded-xl p-6 border border-slate-200/90 hover:border-amber-400 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center mb-4 text-amber-700">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-1.5 font-heading">
                    {item.title}
                  </h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
