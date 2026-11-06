import React from 'react';
import { Sparkles, ShieldCheck, Gauge, Award, CheckCircle2, Layers, MapPin } from 'lucide-react';

interface HeroProps {
  onExploreProcess: () => void;
  onViewProducts: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProcess, onViewProducts }) => {
  const featureCards = [
    {
      id: 'feat-premium',
      icon: Sparkles,
      title: 'Premium Granite',
      description: 'Carefully selected raw monolithic blocks with distinct mineral depth, rich natural hues, and supreme structural density.'
    },
    {
      id: 'feat-precision',
      icon: Gauge,
      title: 'Precision Processing',
      description: 'Multi-blade gang saws, computerized bridge cutters, and laser guidance ensuring exact millimeter-level dimensional accuracy.'
    },
    {
      id: 'feat-quality',
      icon: Award,
      title: 'Quality Finishing',
      description: 'Automated multi-head polishing lines delivering mirror-smooth gloss, consistent calibrating, and customized tactile surfaces.'
    },
    {
      id: 'feat-reliable',
      icon: ShieldCheck,
      title: 'Reliable Service',
      description: 'Standardized material inspection, protective industrial packaging, and on-schedule dispatch for demanding commercial requirements.'
    }
  ];

  return (
    <section id="home" className="relative pt-24 md:pt-28 pb-16 overflow-hidden bg-gradient-to-b from-amber-50/50 via-white to-slate-50">
      {/* Subtle background stone dot pattern */}
      <div className="absolute inset-0 bg-stone-pattern opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Hero Header & Media Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-4 pb-12">
          {/* Left Column: Hero Card with Warm Architectural Styling */}
          <div className="lg:col-span-7 bg-white rounded-2xl relative overflow-hidden flex flex-col justify-between p-8 sm:p-10 border border-slate-200/90 shadow-md">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-[11px] font-mono-tech uppercase tracking-wider font-semibold">
                <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                Industrial Stone Processing Unit
              </div>

              <h1
                id="hero-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-slate-900 tracking-tight font-heading"
              >
                From Natural Stone to <br className="hidden sm:inline" />
                <span className="text-amber-600">Timeless Surfaces</span>
              </h1>

              <p
                id="hero-subtitle"
                className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-lg"
              >
                Precision cutting, multi-head diamond polishing and certified granite products crafted with industrial excellence for global architectural projects.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  id="hero-view-products-btn"
                  onClick={onViewProducts}
                  className="px-6 py-3 bg-amber-600 text-white rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-amber-700 transition-colors shadow-sm"
                >
                  View Products
                </button>

                <button
                  id="hero-explore-process-btn"
                  onClick={onExploreProcess}
                  className="px-6 py-3 bg-white border border-slate-300 text-slate-700 rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-slate-50 hover:text-slate-900 transition-colors shadow-xs"
                >
                  Explore Process
                </button>

                <a
                  href="#location"
                  id="hero-locate-plant-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-5 py-3 bg-slate-100 border border-slate-200 text-slate-700 rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-slate-200 hover:text-slate-900 transition-colors shadow-2xs inline-flex items-center gap-1.5"
                >
                  <MapPin className="w-3.5 h-3.5 text-amber-600" />
                  <span>Locate Plant</span>
                </a>
              </div>
            </div>

            {/* Micro Highlights Banner */}
            <div className="pt-6 mt-6 border-t border-slate-100 grid grid-cols-3 gap-4">
              <div>
                <span className="block text-xl sm:text-2xl font-bold text-slate-900 font-heading">100%</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-wider font-mono-tech font-semibold">Natural Stone</span>
              </div>
              <div>
                <span className="block text-xl sm:text-2xl font-bold text-amber-600 font-heading">±0.2mm</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-wider font-mono-tech font-semibold">Laser Precision</span>
              </div>
              <div>
                <span className="block text-xl sm:text-2xl font-bold text-slate-900 font-heading">95°+ GU</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-wider font-mono-tech font-semibold">Gloss Mirror</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Display & Quick Summary Card */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 flex-1 min-h-[240px] group shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                alt="Granite Quarry and Large Processed Slabs"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1590487988256-9ed24133863e?auto=format&fit=crop&w=1200&q=80';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>

              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-white/95 border border-slate-200/80 backdrop-blur-md shadow-md">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono-tech uppercase text-amber-700 block tracking-wider font-bold">
                      Heavy Plant Facility
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5">
                      Multi-Blade Gang Saw & CNC Line
                    </p>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-emerald-50 text-[10px] font-mono-tech text-emerald-800 border border-emerald-200 font-semibold uppercase tracking-wider">
                    Active Facility
                  </span>
                </div>
              </div>
            </div>

            {/* Quality Summary Banner */}
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                <span className="uppercase text-[10px] tracking-wider text-slate-700 font-bold font-mono-tech">
                  Quality Assurance Standards
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every slab passes through multi-stage inspection for dimensional calibration, surface crystal uniformity, and structural integrity.
              </p>
            </div>
          </div>
        </div>

        {/* Four Feature Cards */}
        <div className="pt-2 pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featureCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.id}
                  id={card.id}
                  className="bg-white rounded-xl p-5 border border-slate-200/90 hover:border-amber-400 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center mb-4 text-amber-700">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1.5 font-heading">
                      {card.title}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Short Introduction Section */}
        <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm relative overflow-hidden">
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <div className="flex items-center justify-center gap-2 mb-1">
              <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
              <span className="text-[10px] font-mono-tech text-amber-800 uppercase tracking-widest font-bold">
                Core Purpose & Craftsmanship
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 font-heading">
              Transforming Natural Granite Into Exceptional Surfaces
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              Raw granite blocks quarried from deep geological deposits are carefully processed using high-precision multi-blade gang saws, automated continuous polishing lines, and skilled workmanship to create durable, high-quality finished products tailored for modern architecture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

