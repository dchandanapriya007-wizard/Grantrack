import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/content';
import { GalleryItem } from '../types';
import { LightboxModal } from './LightboxModal';
import { Eye, Filter, Sparkles, Image as ImageIcon } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Quarry', 'Granite Blocks', 'Cutting', 'Machinery', 'Polishing', 'Finished Products'];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      {/* Subtle texture */}
      <div className="absolute inset-0 bg-stone-pattern opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
            <span className="uppercase text-[10px] tracking-widest text-amber-800 font-bold font-mono-tech">
              Visual Documentation
            </span>
          </div>
          <h2
            id="gallery-heading"
            className="text-3xl sm:text-4xl font-bold text-slate-900 font-heading tracking-tight"
          >
            Inside Our Processing Unit
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto">
            High-resolution visual archives showcasing our quarries, primary block saws, automated finishing lines, and finished slabs.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-xs ${
                activeCategory === cat
                  ? 'bg-amber-600 text-white shadow-md'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry / Responsive Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              id={`gallery-item-${item.id}`}
              onClick={() => setSelectedItem(item)}
              className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200 hover:border-amber-400 cursor-pointer shadow-xs hover:shadow-md transition-all"
            >
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent opacity-85 group-hover:opacity-65 transition-opacity"></div>

                {/* Top Category Badge */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md border border-slate-200 text-[10px] font-mono font-bold text-slate-800 shadow-xs">
                  {item.category}
                </div>

                {/* Hover Eye Icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200 text-slate-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                  <Eye className="w-3.5 h-3.5 text-amber-700" />
                </div>

                {/* Bottom Caption Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 transform transition-transform duration-300 group-hover:-translate-y-1">
                  <h3 className="text-base font-bold text-white font-heading group-hover:text-amber-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-200 text-xs mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <LightboxModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </section>
  );
};
