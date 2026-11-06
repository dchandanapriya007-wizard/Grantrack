import React, { useState } from 'react';
import { PRODUCTS_DATA } from '../data/content';
import { GraniteProduct } from '../types';
import { ProductModal } from './ProductModal';
import { ArrowRight, Eye, Layers, Ruler } from 'lucide-react';

interface ProductsProps {
  onSelectProductForEnquiry?: (productName: string) => void;
}

export const Products: React.FC<ProductsProps> = ({ onSelectProductForEnquiry }) => {
  const [selectedProduct, setSelectedProduct] = useState<GraniteProduct | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Structural & Architectural', 'Interior & Residential', 'Flooring & Paving', 'Facades & Exterior', 'Architectural Details'];

  const filteredProducts = activeCategory === 'All'
    ? PRODUCTS_DATA
    : PRODUCTS_DATA.filter((p) => p.category.includes(activeCategory) || (activeCategory === 'Architectural Details' && (p.category === 'Architectural Elements' || p.category === 'Architectural Details' || p.category === 'Bespoke Engineering')));

  const handleInquireFromModal = (productName: string) => {
    if (onSelectProductForEnquiry) {
      onSelectProductForEnquiry(productName);
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="products" className="py-16 md:py-24 bg-white relative overflow-hidden border-t border-slate-200">
      {/* Background accents */}
      <div className="absolute inset-0 bg-stone-pattern opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
            <span className="uppercase text-[10px] tracking-widest text-amber-800 font-bold font-mono-tech">
              Natural Stone Portfolio
            </span>
          </div>
          <h2
            id="products-heading"
            className="text-3xl sm:text-4xl font-bold text-slate-900 font-heading tracking-tight"
          >
            Finished Granite Products
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto">
            Precision-cut slabs, architectural facade elements, countertops and custom stone products crafted to international dimensions.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-xs ${
                activeCategory === cat
                  ? 'bg-amber-600 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              id={`product-card-${product.id}`}
              className="bg-white rounded-2xl overflow-hidden flex flex-col group border border-slate-200 hover:border-amber-400 shadow-xs hover:shadow-md transition-all"
            >
              {/* Product Image */}
              <div className="relative h-56 overflow-hidden bg-slate-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>

                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md border border-slate-200 text-[10px] font-mono font-bold text-slate-800 shadow-xs">
                  {product.category}
                </div>

                <button
                  onClick={() => setSelectedProduct(product)}
                  className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200 text-slate-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-amber-600 hover:text-white shadow-md"
                  aria-label={`View ${product.name}`}
                >
                  <Eye className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Product Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 font-heading group-hover:text-amber-700 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed mt-1.5 line-clamp-2">
                    {product.description}
                  </p>
                </div>

                {/* Specs Snippet */}
                <div className="space-y-1.5 pt-1 text-[11px] text-slate-600 font-mono">
                  <div className="flex items-center gap-1.5 truncate">
                    <Ruler className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>{product.thickness}</span>
                  </div>
                  <div className="flex items-center gap-1.5 truncate">
                    <Layers className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>{product.finishesAvailable.join(', ')}</span>
                  </div>
                </div>

                {/* Action */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] text-slate-500 font-mono">Custom Sizing Ready</span>

                  <button
                    id={`product-view-details-btn-${product.id}`}
                    onClick={() => setSelectedProduct(product)}
                    className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider transition-colors border border-amber-200"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Details Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onInquire={handleInquireFromModal}
        />
      )}
    </section>
  );
};
