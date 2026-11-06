import React, { useState, useEffect } from 'react';
import { Menu, X, Layers, ChevronRight, Phone } from 'lucide-react';

interface NavbarProps {
  onExploreProcessClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onExploreProcessClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'processing', 'machinery', 'products', 'quality', 'gallery', 'responsibility', 'location', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About Us', href: '#about', id: 'about' },
    { name: 'Processing', href: '#processing', id: 'processing' },
    { name: 'Machinery', href: '#machinery', id: 'machinery' },
    { name: 'Products', href: '#products', id: 'products' },
    { name: 'Quality', href: '#quality', id: 'quality' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'Location', href: '#location', id: 'location' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreBtn = () => {
    if (onExploreProcessClick) {
      onExploreProcessClick();
    } else {
      const target = document.querySelector('#processing');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-sm py-3.5'
          : 'bg-white border-b border-slate-200 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group"
            id="nav-brand-link"
          >
            <div className="w-8 h-8 bg-amber-600 rounded-sm rotate-45 border border-amber-500 flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-105">
              <div className="w-3 h-3 bg-white rounded-xs"></div>
            </div>
            <div>
              <span className="block text-xl font-bold tracking-tighter text-slate-900 uppercase leading-none">
                GRANITE<span className="text-amber-600">WORKS</span>
              </span>
              <span className="block text-[9px] tracking-widest uppercase text-slate-500 font-mono-tech mt-0.5">
                Processing Unit
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold uppercase tracking-wider text-slate-600">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`transition-colors py-1 ${
                    isActive
                      ? 'text-amber-600 font-bold border-b-2 border-amber-600'
                      : 'hover:text-amber-600'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Highlighted Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="nav-explore-process-btn"
              onClick={handleExploreBtn}
              className="px-5 py-2.5 bg-amber-600 text-white rounded-full text-[11px] font-bold tracking-wider hover:bg-amber-700 transition-colors uppercase shadow-sm"
            >
              <span>EXPLORE OUR PROCESS</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            id="nav-mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 mt-2 shadow-xl animate-in slide-in-from-top duration-200"
        >
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  id={`mobile-nav-link-${link.id}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-2.5 rounded-md text-xs font-semibold uppercase tracking-wider flex items-center justify-between ${
                    isActive
                      ? 'text-amber-700 bg-amber-50 font-bold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <div className="w-1.5 h-1.5 rounded-full bg-amber-600"></div>}
                </a>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
            <button
              id="mobile-nav-explore-btn"
              onClick={handleExploreBtn}
              className="w-full py-3 px-4 rounded-full bg-amber-600 text-white font-bold text-xs uppercase tracking-wider hover:bg-amber-700 transition-colors shadow-sm"
            >
              <span>EXPLORE OUR PROCESS</span>
            </button>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium text-xs border border-slate-200"
            >
              <Phone className="w-3.5 h-3.5 text-amber-600" />
              <span>Direct Contact & Enquiry</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
