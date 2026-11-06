import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/content';
import { ProcessStep } from '../types';
import {
  Pickaxe,
  Box,
  Truck,
  Scissors,
  Layers,
  Sparkles,
  Maximize2,
  CheckSquare,
  PackageCheck,
  ChevronRight,
  ArrowRight,
  Gauge
} from 'lucide-react';

const STEP_ICONS: Record<string, React.ElementType> = {
  '01': Pickaxe,
  '02': Box,
  '03': Truck,
  '04': Scissors,
  '05': Layers,
  '06': Sparkles,
  '07': Maximize2,
  '08': CheckSquare,
  '09': PackageCheck,
};

export const ProcessingJourney: React.FC = () => {
  const [selectedStepIndex, setSelectedStepIndex] = useState<number>(0);
  const activeStep: ProcessStep = PROCESS_STEPS[selectedStepIndex];
  const ActiveIcon = STEP_ICONS[activeStep.stepNumber] || Layers;

  const nextStep = () => {
    setSelectedStepIndex((prev) => (prev < PROCESS_STEPS.length - 1 ? prev + 1 : 0));
  };

  const prevStep = () => {
    setSelectedStepIndex((prev) => (prev > 0 ? prev - 1 : PROCESS_STEPS.length - 1));
  };

  return (
    <section id="processing" className="py-16 md:py-24 bg-white relative overflow-hidden border-t border-slate-200">
      {/* Texture and background accents */}
      <div className="absolute inset-0 bg-stone-pattern opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
            <span className="uppercase text-[10px] tracking-widest text-amber-800 font-bold font-mono-tech">
              The Processing Journey
            </span>
          </div>
          <h2
            id="processing-heading"
            className="text-3xl sm:text-4xl font-bold text-slate-900 font-heading tracking-tight"
          >
            End-To-End Processing Lifecycle
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto">
            From raw geological block quarrying to mirror-polished, dimensionally inspected architectural stone.
          </p>
        </div>

        {/* Horizontal Interactive Step Selector (Scrollable on small devices) */}
        <div className="mb-8 pb-2 overflow-x-auto no-scrollbar">
          <div className="flex items-center justify-between min-w-[760px] lg:min-w-full relative px-2">
            {/* Connecting line */}
            <div className="absolute left-8 right-8 top-1/2 -translate-y-1/2 h-1 bg-slate-200 -z-0 rounded-full">
              <div
                className="h-full bg-amber-500 transition-all duration-500 rounded-full"
                style={{ width: `${(selectedStepIndex / (PROCESS_STEPS.length - 1)) * 100}%` }}
              ></div>
            </div>

            {PROCESS_STEPS.map((step, idx) => {
              const Icon = STEP_ICONS[step.stepNumber] || Layers;
              const isSelected = idx === selectedStepIndex;
              const isPassed = idx < selectedStepIndex;

              return (
                <button
                  key={step.id}
                  id={`process-step-btn-${step.stepNumber}`}
                  onClick={() => setSelectedStepIndex(idx)}
                  className={`relative z-10 flex flex-col items-center group focus:outline-none transition-all duration-300`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300 ${
                      isSelected
                        ? 'bg-amber-600 border-amber-600 text-white shadow-md scale-110 ring-4 ring-amber-100'
                        : isPassed
                        ? 'bg-white border-amber-400 text-amber-700 shadow-xs'
                        : 'bg-white border-slate-300 text-slate-400 group-hover:border-slate-400 group-hover:text-slate-600'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span
                    className={`mt-2 text-[11px] font-mono font-semibold tracking-wider transition-colors ${
                      isSelected ? 'text-amber-700 font-bold' : 'text-slate-500'
                    }`}
                  >
                    {step.stepNumber}
                  </span>
                  <span
                    className={`text-[10px] font-medium max-w-[80px] text-center leading-tight truncate mt-0.5 uppercase tracking-tight ${
                      isSelected ? 'text-slate-900 font-bold' : 'text-slate-500'
                    }`}
                  >
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Featured Detail Showcase Card */}
        <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 lg:p-8 border border-slate-200 shadow-sm mb-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Image with stage stamp */}
            <div className="lg:col-span-6 relative rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm">
              <img
                src={activeStep.image}
                alt={activeStep.title}
                className="w-full h-[300px] sm:h-[350px] object-cover transition-all duration-500 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>

              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-md border border-slate-200 flex items-center gap-2 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                <span className="text-[10px] font-mono text-slate-800 uppercase font-bold tracking-wider">
                  STAGE {activeStep.stepNumber} / 09
                </span>
              </div>

              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-white/95 border border-slate-200 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-2">
                  <Gauge className="w-3.5 h-3.5 text-amber-600" />
                  <span className="text-xs text-slate-700 font-mono font-medium">
                    Tolerance: Standard Calibrated
                  </span>
                </div>
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">{activeStep.title}</span>
              </div>
            </div>

            {/* Right: Stage Content & Technical Specs */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-700 shadow-xs">
                  <ActiveIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-amber-700 block font-bold">
                    STEP {activeStep.stepNumber}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                    {activeStep.title}
                  </h3>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                <p className="text-slate-800 font-medium text-sm leading-snug">
                  {activeStep.shortDesc}
                </p>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {activeStep.fullDesc}
              </p>

              {/* Machinery & Key Aspects */}
              <div className="space-y-2.5 pt-1">
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <span className="font-bold text-slate-500 shrink-0 font-mono uppercase tracking-wider">
                    Equipment:
                  </span>
                  <span className="text-slate-900 font-semibold">{activeStep.equipment}</span>
                </div>

                <div className="pt-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-amber-800 block mb-2 font-bold">
                    Key Quality Focus:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeStep.keyAspects.map((aspect, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-700 shadow-xs"
                      >
                        <ChevronRight className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        <span>{aspect}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Stepper Navigation Buttons */}
              <div className="flex items-center justify-between pt-3 border-t border-slate-200">
                <button
                  id="process-prev-stage-btn"
                  onClick={prevStep}
                  className="px-4 py-2 rounded-lg bg-white border border-slate-300 hover:bg-slate-100 text-xs font-bold text-slate-700 transition-colors uppercase tracking-wider shadow-xs"
                >
                  ← PREV
                </button>
                <div className="text-xs text-slate-500 font-mono font-medium">
                  {selectedStepIndex + 1} / {PROCESS_STEPS.length}
                </div>
                <button
                  id="process-next-stage-btn"
                  onClick={nextStep}
                  className="px-5 py-2 rounded-lg bg-amber-600 hover:bg-amber-700 text-xs font-bold text-white transition-colors flex items-center gap-1 uppercase tracking-wider shadow-sm"
                >
                  <span>NEXT</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Complete Step-by-Step Overview Grid (Full 9 Stages at a Glance) */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
            <h3 className="text-base font-bold text-slate-900 font-heading uppercase tracking-wider">
              All 9 Processing Stages
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {PROCESS_STEPS.map((step, index) => {
              const Icon = STEP_ICONS[step.stepNumber] || Layers;
              const isCurrent = index === selectedStepIndex;

              return (
                <div
                  key={step.id}
                  id={`process-card-step-${step.stepNumber}`}
                  onClick={() => {
                    setSelectedStepIndex(index);
                    const el = document.getElementById('processing');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`cursor-pointer rounded-xl p-4 transition-all duration-200 border ${
                    isCurrent
                      ? 'bg-amber-50/70 border-amber-400 shadow-sm ring-2 ring-amber-200'
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-sm'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-mono text-amber-700 font-bold bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                        {step.stepNumber}
                      </span>
                      <h4 className="text-sm font-bold text-slate-900 font-heading">
                        {step.title}
                      </h4>
                    </div>
                    <Icon className="w-4 h-4 text-amber-600" />
                  </div>

                  <p className="text-slate-600 text-xs leading-relaxed line-clamp-2">
                    {step.shortDesc}
                  </p>

                  <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono">
                    <span className="text-slate-500 truncate max-w-[170px]">
                      {step.equipment}
                    </span>
                    <span className="text-amber-700 font-bold uppercase tracking-wider">
                      Inspect →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
