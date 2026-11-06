import React from 'react';
import { GraniteProduct } from '../types';
import { X, Check, Sparkles, Layers, Ruler, Shield, ArrowRight } from 'lucide-react';

interface ProductModalProps {
  product: GraniteProduct | null;
  onClose: () => void;
  onInquire: (productName: string) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onInquire }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Hero Image */}
        <div className="relative h-64 sm:h-72 bg-slate-100 shrink-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent"></div>

          <button
            id="product-modal-close-btn"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white text-slate-800 transition-colors shadow-sm"
            aria-label="Close product modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <span className="inline-block px-2.5 py-1 rounded bg-white/90 backdrop-blur-sm text-slate-800 text-xs font-mono uppercase mb-2 border border-slate-200 font-bold shadow-xs">
              {product.category}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              {product.name}
            </h3>
          </div>
        </div>

        {/* Scrollable details */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-slate-700">
          <div>
            <p className="text-slate-800 text-sm sm:text-base leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Dimensional Specs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-slate-500 font-medium">
                <Ruler className="w-3.5 h-3.5 text-amber-600" />
                <span>Standard Dimensions</span>
              </div>
              <p className="text-sm font-semibold text-slate-900">{product.dimensions}</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-slate-500 font-medium">
                <Layers className="w-3.5 h-3.5 text-amber-600" />
                <span>Available Thicknesses</span>
              </div>
              <p className="text-sm font-semibold text-slate-900">{product.thickness}</p>
            </div>
          </div>

          {/* Finishes Available */}
          <div>
            <h4 className="text-xs font-mono uppercase text-slate-900 tracking-wider mb-2 flex items-center gap-2 font-bold">
              <Sparkles className="w-4 h-4 text-amber-600" />
              Available Surface Finishes
            </h4>
            <div className="flex flex-wrap gap-2">
              {product.finishesAvailable.map((finish, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-800"
                >
                  {finish}
                </span>
              ))}
            </div>
          </div>

          {/* Recommended Applications */}
          <div>
            <h4 className="text-xs font-mono uppercase text-slate-900 tracking-wider mb-2 font-bold">
              Recommended Applications
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {product.recommendedUses.map((use, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{use}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Advantages */}
          <div>
            <h4 className="text-xs font-mono uppercase text-slate-900 tracking-wider mb-2 font-bold">
              Material Strengths
            </h4>
            <div className="space-y-1.5">
              {product.highlights.map((hl, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between px-6 gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-600 font-medium hidden sm:flex">
            <Shield className="w-4 h-4 text-amber-600" />
            <span>Industrial Quality Guarantee</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-white border border-slate-300 hover:bg-slate-100 text-xs font-bold text-slate-700 transition-colors uppercase tracking-wider shadow-xs"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onInquire(product.name);
              }}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-colors"
            >
              <span>Enquire for {product.name}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
