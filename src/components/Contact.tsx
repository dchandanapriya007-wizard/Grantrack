import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Building2,
  ShieldCheck,
  Compass
} from 'lucide-react';

interface ContactProps {
  initialSelectedProduct?: string;
  initialSelectedLocation?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialSelectedProduct, initialSelectedLocation }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    productInterest: initialSelectedProduct || 'General Granite Enquiry',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Update when initialSelectedProduct or initialSelectedLocation changes
  React.useEffect(() => {
    if (initialSelectedProduct) {
      setFormData((prev) => ({ ...prev, productInterest: initialSelectedProduct }));
    }
  }, [initialSelectedProduct]);

  React.useEffect(() => {
    if (initialSelectedLocation) {
      setFormData((prev) => ({
        ...prev,
        message: prev.message
          ? `${prev.message}\nDelivery / Project Site: ${initialSelectedLocation}`
          : `Delivery / Project Site: ${initialSelectedLocation}`
      }));
    }
  }, [initialSelectedLocation]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate clean local submission response
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      productInterest: 'General Granite Enquiry',
      message: ''
    });
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white relative overflow-hidden border-t border-slate-200">
      {/* Background accents */}
      <div className="absolute inset-0 bg-stone-pattern opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
            <span className="uppercase text-[10px] tracking-widest text-amber-800 font-bold font-mono-tech">
              Industrial Procurement & Inquiries
            </span>
          </div>
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl font-bold text-slate-900 font-heading tracking-tight"
          >
            Let's Work With Granite
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto">
            Connect with our technical team for custom dimensional quotations, slab inventory availability, and project specifications.
          </p>
        </div>

        {/* Contact Grid: Form & Map Placeholder */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm relative">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-amber-100 border border-amber-300 text-amber-700 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 font-heading">
                    Enquiry Submitted Successfully
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-slate-900 font-bold">{formData.fullName}</span>. Your enquiry regarding <span className="text-amber-800 font-semibold">{formData.productInterest}</span> has been received. Our processing unit coordinator will connect with you shortly.
                  </p>
                  <button
                    onClick={handleReset}
                    className="mt-3 px-5 py-2.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" id="granite-contact-form">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                    <h3 className="text-lg font-bold text-slate-900 font-heading">
                      Procurement & Project Enquiry
                    </h3>
                    <span className="text-[11px] text-amber-800 font-bold font-mono">Direct Technical Routing</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="fullName" className="block text-[11px] font-mono uppercase text-slate-700 mb-1 font-bold">
                        Full Name <span className="text-amber-600">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Johnathan Vance"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition-colors shadow-2xs"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-[11px] font-mono uppercase text-slate-700 mb-1 font-bold">
                        Email Address <span className="text-amber-600">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. office@architects.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition-colors shadow-2xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-[11px] font-mono uppercase text-slate-700 mb-1 font-bold">
                        Phone Number <span className="text-amber-600">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +1 (555) 349-8200"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition-colors shadow-2xs"
                      />
                    </div>

                    {/* Product of Interest */}
                    <div>
                      <label htmlFor="productInterest" className="block text-[11px] font-mono uppercase text-slate-700 mb-1 font-bold">
                        Product of Interest
                      </label>
                      <select
                        id="productInterest"
                        value={formData.productInterest}
                        onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition-colors shadow-2xs"
                      >
                        <option value="General Granite Enquiry">General Granite Enquiry</option>
                        <option value="Granite Slabs">Granite Slabs</option>
                        <option value="Kitchen Countertops">Kitchen Countertops</option>
                        <option value="Flooring">Flooring & Paving</option>
                        <option value="Wall Cladding">Exterior / Interior Wall Cladding</option>
                        <option value="Staircases">Granite Staircases & Treads</option>
                        <option value="Window Sills">Window Sills & Copings</option>
                        <option value="Custom Granite Pieces">Custom CNC Architectural Pieces</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-[11px] font-mono uppercase text-slate-700 mb-1 font-bold">
                      Message / Project Details <span className="text-amber-600">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please specify thickness, required finish, estimated area (sq.ft / sq.m), or delivery location..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition-colors resize-none shadow-2xs"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    id="contact-submit-btn"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs uppercase tracking-wider transition-colors disabled:opacity-50 shadow-sm"
                  >
                    {isSubmitting ? (
                      <span>Processing Enquiry...</span>
                    ) : (
                      <>
                        <span>Submit Enquiry</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Facility Location & Map Placeholder Card */}
          <div className="lg:col-span-5 space-y-5">
            {/* Contact Details Card */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-sm space-y-5">
              <h3 className="text-base font-bold text-slate-900 font-heading">
                Facility & Plant Office
              </h3>

              <div className="space-y-4">
                {/* Location */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 text-amber-700 shadow-xs">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase block font-bold">Facility Location</span>
                    <p className="text-xs font-semibold text-slate-800 mt-0.5 leading-relaxed">
                      Plot No. 48-52, Stone Industrial Complex, Phase II, Highway Corridor, Granite Processing Hub
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 text-amber-700 shadow-xs">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase block font-bold">Direct Lines</span>
                    <p className="text-xs font-semibold text-slate-800 mt-0.5">
                      +1 (800) 472-6483 / +1 (555) 984-2100
                    </p>
                    <p className="text-[10px] text-slate-500 font-mono">Dispatch & Quarry Yard extension available</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 text-amber-700 shadow-xs">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase block font-bold">Email Support</span>
                    <p className="text-xs font-semibold text-slate-800 mt-0.5">
                      enquiries@graniteprocessingunit.com
                    </p>
                    <p className="text-[10px] text-slate-500 font-mono">quotes@graniteprocessingunit.com</p>
                  </div>
                </div>

                {/* Operational Hours */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 text-amber-700 shadow-xs">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase block font-bold">Operating Hours</span>
                    <p className="text-xs font-semibold text-slate-800 mt-0.5">
                      Mon – Sat: 08:00 AM – 06:30 PM
                    </p>
                    <p className="text-[10px] text-slate-500 font-mono">Continuous 24/7 cutting shift operations</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Industrial Map Placeholder */}
            <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-sm relative group">
              <div className="relative h-52 bg-slate-100 flex items-center justify-center overflow-hidden">
                {/* Visual architectural industrial grid map rendering */}
                <div className="absolute inset-0 opacity-40 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                
                {/* Radial roads / plant schematics layout */}
                <div className="w-40 h-40 rounded-full border border-slate-300 absolute flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full border border-slate-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center animate-ping opacity-30"></div>
                  </div>
                </div>

                {/* Pin marker */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-xl bg-amber-600 shadow-md flex items-center justify-center text-white">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div className="mt-2 px-3 py-1 rounded-lg bg-white border border-slate-200 text-[11px] font-mono text-slate-900 font-bold shadow-md">
                    Granite Processing Unit Yard
                  </div>
                </div>

                <div className="absolute bottom-2.5 left-2.5 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md border border-slate-200 text-[9px] font-mono text-slate-600 flex items-center gap-1.5 shadow-xs">
                  <Compass className="w-3 h-3 text-amber-600" />
                  <span>GPS: 12.9716° N, 77.5946° E</span>
                </div>

                <a
                  href="#location"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="absolute bottom-2.5 right-2.5 bg-amber-600 hover:bg-amber-700 text-white px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider transition-colors shadow-sm flex items-center gap-1"
                >
                  <span>Open Full Locator</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
