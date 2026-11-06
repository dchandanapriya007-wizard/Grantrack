import React from 'react';
import { GalleryItem } from '../types';
import { X, Layers, Maximize2 } from 'lucide-react';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-white/80 hover:bg-white text-slate-800 transition-colors shadow-sm"
          aria-label="Close lightbox"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative max-h-[75vh] bg-slate-950 flex items-center justify-center overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-auto max-h-[75vh] object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="p-5 sm:p-6 bg-white border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="text-xs font-mono text-amber-700 uppercase tracking-widest block mb-1 font-bold">
              Category: {item.category}
            </span>
            <h3 className="text-xl font-bold text-slate-900 font-heading">
              {item.title}
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              {item.description}
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-2">
            <span className="px-3.5 py-1.5 rounded-lg bg-amber-50 border border-amber-200 text-xs font-mono font-bold text-amber-800 uppercase tracking-wider">
              Facility Photography
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
