import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { ProcessingJourney } from './components/ProcessingJourney';
import { Machinery } from './components/Machinery';
import { Products } from './components/Products';
import { QualityFinishing } from './components/QualityFinishing';
import { Gallery } from './components/Gallery';
import { ResponsibleProcessing } from './components/ResponsibleProcessing';
import { LocationSection } from './components/LocationSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedProductForEnquiry, setSelectedProductForEnquiry] = useState<string>('');
  const [selectedLocationForEnquiry, setSelectedLocationForEnquiry] = useState<string>('');

  const handleExploreProcess = () => {
    const section = document.getElementById('processing');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewProducts = () => {
    const section = document.getElementById('products');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProductForEnquiry = (productName: string) => {
    setSelectedProductForEnquiry(productName);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRequestQuoteWithLocation = (locationName: string, distanceKm: number) => {
    setSelectedLocationForEnquiry(`${locationName} (${distanceKm} km from plant)`);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans selection:bg-amber-600 selection:text-white antialiased">
      {/* Sticky Top Navigation */}
      <Navbar onExploreProcessClick={handleExploreProcess} />

      {/* 1. Hero Section */}
      <main>
        <Hero
          onExploreProcess={handleExploreProcess}
          onViewProducts={handleViewProducts}
        />

        {/* 2. About Us */}
        <AboutUs />

        {/* 3. Processing Journey (9 Steps) */}
        <ProcessingJourney />

        {/* 4. Advanced Machinery & Equipment */}
        <Machinery />

        {/* 5. Granite Products */}
        <Products onSelectProductForEnquiry={handleSelectProductForEnquiry} />

        {/* 6. Quality & Finishing */}
        <QualityFinishing />

        {/* 7. Inside Our Processing Unit Gallery */}
        <Gallery />

        {/* 8. Environment & Safety (Responsible Processing) */}
        <ResponsibleProcessing />

        {/* 9. Plant & Delivery Site Locator */}
        <LocationSection onRequestQuoteWithLocation={handleRequestQuoteWithLocation} />

        {/* 10. Contact & Enquiry */}
        <Contact
          initialSelectedProduct={selectedProductForEnquiry}
          initialSelectedLocation={selectedLocationForEnquiry}
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

