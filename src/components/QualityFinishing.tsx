import React, { useState } from 'react';
import { STONE_FINISHES } from '../data/content';
import { StoneFinish } from '../types';
import {
  Ruler,
  Sparkles,
  SearchCheck,
  ShieldCheck,
  CheckCircle,
  Eye,
  Layers,
  ArrowRight
} from 'lucide-react';

export const QualityFinishing: React.FC = () => {
  const [activeFinish, setActiveFinish] = useState<StoneFinish>(STONE_FINISHES[0]);

  const qualityPillars = [
    {
      id: 'pillar-dimensions',
      icon: Ruler,
      title: 'Accurate Dimensions',
      desc: 'Laser-calibrated diagonal checks, computerized bridge saws, and dial-gauge calipers ensure strict adherence to ±0.2mm tolerances.',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'pillar-smoothness',
      icon: Sparkles,
      title: 'Smooth Finishing',
      desc: 'Multi-stage abrasive diamond heads progressively buff stone crystalline surfaces to achieve flawless optical reflection above 95° GU.',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'pillar-inspection',
      icon: SearchCheck,
      title: 'Surface Inspection',
      desc: 'Individual piece optical scanning, color-shade categorizing, and ultrasonic fissure audits guarantee uniform structural integrity.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'pillar-handling',
      icon: ShieldCheck,
      title: 'Careful Handling',
      desc: 'Pneumatic vacuum lifters, polyurethane-padded clamps, and fumigated timber A-frames protect edges and surfaces throughout staging.',
      image: 'https://images.unsplash.com/photo-1586528116493-a029325540fa?auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <section id="quality" className="py-16 md:py-24 bg-white relative overflow-hidden border-t border-slate-200">
      {/* Background accents */}
      <div className="absolute inset-0 bg-stone-pattern opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
            <span className="uppercase text-[10px] tracking-widest text-amber-800 font-bold font-mono-tech">
              Quality Assurance Protocol
            </span>
          </div>
          <h2
            id="quality-heading"
            className="text-3xl sm:text-4xl font-bold text-slate-900 font-heading tracking-tight"
          >
            Built Around Quality
          </h2>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed pt-1 max-w-2xl mx-auto font-medium">
            "Every granite product passes through carefully controlled stages of cutting, surface processing, polishing and inspection to achieve the desired dimensions, appearance and finish."
          </p>
        </div>

        {/* 4 Feature Quality Cards with Texture Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {qualityPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                id={pillar.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-amber-400 transition-all flex flex-col group shadow-xs hover:shadow-md"
              >
                <div className="relative h-44 overflow-hidden bg-slate-100">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                  <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-white/90 backdrop-blur-sm border border-slate-200 text-amber-700 flex items-center justify-center shadow-sm">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 font-heading mb-1.5 group-hover:text-amber-700 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-slate-100 flex items-center gap-1.5 text-[10px] font-mono text-amber-800 font-semibold">
                    <CheckCircle className="w-3.5 h-3.5 text-amber-600" />
                    <span>Verified Protocol</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Surface Finishes Interactive Showcase */}
        <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6 sm:p-8 shadow-sm relative overflow-hidden">
          <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono text-amber-800 uppercase tracking-widest block mb-1 font-bold">
                Surface Finishing Diversity
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                Granite Texture & Finish Profiles
              </h3>
            </div>
            <p className="text-slate-600 text-xs max-w-md">
              Select a finish type below to inspect surface texture, light reflectivity, and technical slip resistance.
            </p>
          </div>

          {/* Finish selector tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {STONE_FINISHES.map((finish) => (
              <button
                key={finish.id}
                onClick={() => setActiveFinish(finish)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-xs ${
                  activeFinish.id === finish.id
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {finish.name}
              </button>
            ))}
          </div>

          {/* Active Finish Highlight Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center bg-white rounded-xl p-5 border border-slate-200 shadow-xs">
            <div className="lg:col-span-5 relative rounded-lg overflow-hidden border border-slate-200 h-56 sm:h-64 bg-slate-100">
              <img
                src={activeFinish.image}
                alt={activeFinish.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-lg bg-white/95 backdrop-blur-sm border border-slate-200 text-xs font-mono text-slate-800 shadow-sm">
                Texture: <span className="text-amber-700 font-bold">{activeFinish.texture}</span>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-3.5">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                <h4 className="text-xl font-bold text-slate-900 font-heading">
                  {activeFinish.name}
                </h4>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {activeFinish.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="text-[10px] font-mono text-slate-500 uppercase block font-medium">Slip Resistance</span>
                  <span className="text-xs font-semibold text-slate-800">{activeFinish.slipResistance}</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="text-[10px] font-mono text-slate-500 uppercase block font-medium">Surface Reflectivity</span>
                  <span className="text-xs font-semibold text-amber-700">{activeFinish.reflectivity}</span>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-amber-50/60 border border-amber-200">
                <span className="text-[10px] font-mono text-amber-800 uppercase block mb-0.5 font-bold">Architectural Suitability</span>
                <span className="text-xs text-slate-800">{activeFinish.bestFor}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
