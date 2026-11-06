import React, { useState } from 'react';
import { MACHINERY_DATA } from '../data/content';
import { MachineItem } from '../types';
import { MachineryModal } from './MachineryModal';
import { Cpu, ArrowRight, Gauge, Shield } from 'lucide-react';

export const Machinery: React.FC = () => {
  const [selectedMachine, setSelectedMachine] = useState<MachineItem | null>(null);

  return (
    <section id="machinery" className="py-16 md:py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      {/* Background accents */}
      <div className="absolute inset-0 bg-stone-pattern opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
            <span className="uppercase text-[10px] tracking-widest text-amber-800 font-bold font-mono-tech">
              Plant Infrastructure & Automation
            </span>
          </div>
          <h2
            id="machinery-heading"
            className="text-3xl sm:text-4xl font-bold text-slate-900 font-heading tracking-tight"
          >
            Machinery & Equipment Showcase
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto">
            High-output stone processing technology engineered for extreme durability, laser precision, and refined surface aesthetics.
          </p>
        </div>

        {/* Machinery Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MACHINERY_DATA.map((machine) => (
            <div
              key={machine.id}
              id={`machinery-card-${machine.id}`}
              className="bg-white rounded-2xl overflow-hidden flex flex-col group border border-slate-200 hover:border-amber-400 shadow-xs hover:shadow-md transition-all"
            >
              {/* Machine Image */}
              <div className="relative h-52 overflow-hidden bg-slate-100">
                <img
                  src={machine.image}
                  alt={machine.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>

                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md border border-slate-200 flex items-center gap-1.5 text-[10px] font-mono text-slate-800 shadow-xs">
                  <Gauge className="w-3.5 h-3.5 text-amber-600" />
                  <span>{machine.specs.precision}</span>
                </div>
              </div>

              {/* Machine Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-[10px] font-mono uppercase text-amber-700 tracking-wider block mb-1 font-bold">
                    {machine.tagline}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 font-heading group-hover:text-amber-700 transition-colors">
                    {machine.name}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed mt-2 line-clamp-2">
                    {machine.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-[10px] text-slate-500 font-mono truncate max-w-[150px]">
                    {machine.specs.operationalRole}
                  </div>

                  <button
                    id={`machine-learn-more-btn-${machine.id}`}
                    onClick={() => setSelectedMachine(machine)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider transition-colors border border-amber-200"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Machinery Detail Modal */}
      {selectedMachine && (
        <MachineryModal
          machine={selectedMachine}
          onClose={() => setSelectedMachine(null)}
        />
      )}
    </section>
  );
};
