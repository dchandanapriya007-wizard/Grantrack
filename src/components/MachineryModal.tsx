import React from 'react';
import { MachineItem } from '../types';
import { X, CheckCircle, Cpu, Cog, ShieldCheck, Gauge } from 'lucide-react';

interface MachineryModalProps {
  machine: MachineItem | null;
  onClose: () => void;
}

export const MachineryModal: React.FC<MachineryModalProps> = ({ machine, onClose }) => {
  if (!machine) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with image */}
        <div className="relative h-56 sm:h-64 bg-slate-100 shrink-0">
          <img
            src={machine.image}
            alt={machine.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent"></div>

          <button
            id="modal-close-btn"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white text-slate-800 transition-colors shadow-sm"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-xs font-mono text-amber-300 uppercase tracking-widest block mb-1 font-bold">
              {machine.tagline}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              {machine.name}
            </h3>
          </div>
        </div>

        {/* Scrollable specs & features */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-slate-700">
          <div>
            <h4 className="text-xs font-mono uppercase text-amber-800 tracking-wider mb-2 font-bold">
              Operational Role
            </h4>
            <p className="text-slate-800 text-sm leading-relaxed">
              {machine.description}
            </p>
          </div>

          {/* Technical Specs Grid */}
          <div>
            <h4 className="text-xs font-mono uppercase text-slate-900 tracking-wider mb-3 flex items-center gap-2 font-bold">
              <Cpu className="w-4 h-4 text-amber-600" />
              Technical Specifications & Capacity
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[11px] font-mono text-slate-500 block uppercase">Capacity</span>
                <span className="text-sm font-semibold text-slate-900">{machine.specs.capacity}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[11px] font-mono text-slate-500 block uppercase">Precision Tolerance</span>
                <span className="text-sm font-semibold text-amber-700">{machine.specs.precision}</span>
              </div>
              {machine.specs.bladeType && (
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-[11px] font-mono text-slate-500 block uppercase">Tooling / Blade Type</span>
                  <span className="text-sm font-semibold text-slate-900">{machine.specs.bladeType}</span>
                </div>
              )}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[11px] font-mono text-slate-500 block uppercase">Automation Level</span>
                <span className="text-sm font-semibold text-slate-900">{machine.specs.automation}</span>
              </div>
            </div>
          </div>

          {/* Industrial Features */}
          <div>
            <h4 className="text-xs font-mono uppercase text-slate-900 tracking-wider mb-3 flex items-center gap-2 font-bold">
              <Cog className="w-4 h-4 text-amber-600" />
              Engineering Highlights
            </h4>
            <div className="space-y-2">
              {machine.features.map((feat, index) => (
                <div key={index} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between px-6">
          <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
            <ShieldCheck className="w-4 h-4 text-amber-600" />
            <span>Facility Standard Equipment</span>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-amber-600 hover:bg-amber-700 text-xs font-bold text-white transition-colors uppercase tracking-wider shadow-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
