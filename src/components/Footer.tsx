import React from 'react';
import { Layers, ArrowUp, MapPin, Phone, Mail, ChevronRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Processing', href: '#processing' },
    { name: 'Machinery', href: '#machinery' },
    { name: 'Products', href: '#products' },
    { name: 'Quality', href: '#quality' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Environment & Safety', href: '#responsibility' },
    { name: 'Plant & Site Locator', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-stone-pattern opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
          {/* Company Brand Column */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-amber-600 flex items-center justify-center text-white shadow-sm">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <span className="block font-heading text-lg font-bold tracking-tight text-white">
                  Granite Processing Unit
                </span>
                <span className="block text-[10px] text-amber-400 font-mono font-bold tracking-wider uppercase">
                  Precision Natural Stone Fabrication
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-md pt-1">
              Transforming natural quarry granite into high-precision slabs, architectural facades, and customized surfaces through advanced diamond gang sawing, automated polishing, and rigorous optical quality inspection.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="text-[11px] font-mono uppercase text-amber-400 tracking-widest font-bold">
              Navigation
            </h4>
            <ul className="space-y-1.5">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-xs text-slate-400 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-amber-400 transition-colors" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Plant Headquarters & Contact Column */}
          <div className="lg:col-span-4 space-y-2.5">
            <h4 className="text-[11px] font-mono uppercase text-amber-400 tracking-widest font-bold">
              Industrial Plant Facility
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                <span>Plot 48-52, Stone Industrial Complex, Phase II, Granite Processing Hub</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>+1 (800) 472-6483 / +1 (555) 984-2100</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>enquiries@graniteprocessingunit.com</span>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-slate-200 hover:text-white transition-colors shadow-sm"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3 h-3 text-amber-400" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500 font-mono">
          <p id="copyright-text">
            © 2026 Granite Processing Unit. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Precision Stone Manufacturing</span>
            <span>•</span>
            <span className="text-slate-400">Natural Stone Craftsmanship</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
