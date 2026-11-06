import React, { useState, useEffect, useRef } from 'react';
import {
  MapPin,
  Navigation,
  Compass,
  Crosshair,
  Plus,
  Trash2,
  ExternalLink,
  Copy,
  Check,
  Truck,
  Building2,
  Radio,
  Layers,
  Search,
  ArrowRight,
  Clock,
  Shield,
  LocateFixed,
  AlertCircle,
  CornerDownRight,
  Info,
} from 'lucide-react';
import { LocationItem } from '../types';

// Central Granite Processing Unit Factory Coordinates
export const FACTORY_LOCATION: LocationItem = {
  id: 'factory-central',
  name: 'Granite Processing Unit & Central Fabrication Yard',
  category: 'factory',
  address: 'Plot No. 48-52, Stone Industrial Complex, Phase II, Highway Corridor, Granite Hub',
  lat: 12.9716,
  lng: 77.5946,
  tag: 'HQ & Plant',
  phone: '+1 (800) 472-6483',
  notes: 'Heavy multi-blade gang saws, automated 21-head polishing lines, slab stockyard, and 20-ton overhead gantry loading cranes.',
};

// Default sample project delivery sites for immediate testing
const DEFAULT_PRESET_LOCATIONS: LocationItem[] = [
  {
    id: 'preset-1',
    name: 'Metro Transit Hub & Commercial Plaza',
    category: 'project',
    address: 'East Corridor Expressway, Sector 14, Commercial District',
    lat: 13.0358,
    lng: 77.597,
    tag: 'Active Project',
    notes: 'Requiring 45,000 sq.ft Flamed & Honed granite paving tiles.',
  },
  {
    id: 'preset-2',
    name: 'Harborfront Maritime Export Terminal',
    category: 'port',
    address: 'Pier 9, Deepwater Container Logistics Terminal, Coastal Way',
    lat: 13.0827,
    lng: 77.6507,
    tag: 'Export Port',
    notes: 'Seaworthy wooden crate container shipping dispatch point.',
  },
  {
    id: 'preset-3',
    name: 'Highland Luxury Residency & Villa Enclave',
    category: 'project',
    address: 'Pine Valley Heights, Ridge Road, Northern Precinct',
    lat: 12.925,
    lng: 77.535,
    tag: 'Architectural Site',
    notes: 'Premium high-gloss book-matched granite slabs delivery.',
  },
];

// Helper: Calculate Haversine distance in Kilometers
function calculateDistanceKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Earth radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c * 10) / 10;
}

// Helper: Freight transit duration estimation
function getTransitEstimate(distanceKm: number): { time: string; transportMode: string } {
  if (distanceKm === 0) {
    return { time: 'On-site', transportMode: 'Direct Yard Crane Stacking' };
  }
  if (distanceKm < 25) {
    return { time: '~30 – 45 mins', transportMode: 'Local Flatbed Truck with Crane Offloading' };
  }
  if (distanceKm < 75) {
    return { time: '~1 – 2 hours', transportMode: 'Heavy Articulated Stone Hauler (A-Frame Crates)' };
  }
  if (distanceKm < 200) {
    return { time: '~3 – 5 hours', transportMode: 'Long-haul Hydraulic Flatbed Carrier' };
  }
  return { time: '1 – 2 Days', transportMode: 'Interstate Heavy Freight or Intermodal Container' };
}

interface LocationSectionProps {
  onRequestQuoteWithLocation?: (locationName: string, distanceKm: number) => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ onRequestQuoteWithLocation }) => {
  // Saved locations state with local persistence
  const [locations, setLocations] = useState<LocationItem[]>(() => {
    try {
      const saved = localStorage.getItem('gpu_custom_locations');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return [...DEFAULT_PRESET_LOCATIONS, ...parsed];
        }
      }
    } catch {
      // fallback
    }
    return DEFAULT_PRESET_LOCATIONS;
  });

  // Selected active location for pinpointing
  const [selectedLocation, setSelectedLocation] = useState<LocationItem>(FACTORY_LOCATION);
  const [activeTab, setActiveTab] = useState<'map' | 'radar'>('map');
  const [showAddForm, setShowAddForm] = useState(false);
  const [copiedCoordinates, setCopiedCoordinates] = useState(false);
  const [isDetectingGPS, setIsDetectingGPS] = useState(false);
  const [gpsError, setGpsError] = useState<string | null>(null);

  // Form State for Adding Location
  const [formName, setFormName] = useState('');
  const [formCategory, setFormCategory] = useState<'project' | 'custom' | 'warehouse'>('project');
  const [formAddress, setFormAddress] = useState('');
  const [formLat, setFormLat] = useState<string>('');
  const [formLng, setFormLng] = useState<string>('');
  const [formNotes, setFormNotes] = useState('');

  // Map zoom level
  const [mapZoom, setMapZoom] = useState<number>(13);

  // Sync custom items to localStorage
  const saveCustomLocations = (allLocs: LocationItem[]) => {
    const customOnly = allLocs.filter((l) => l.isCustom);
    try {
      localStorage.setItem('gpu_custom_locations', JSON.stringify(customOnly));
    } catch {
      // ignore
    }
  };

  // 1-Click Locate handler
  const handleSelectLocation = (loc: LocationItem) => {
    setSelectedLocation(loc);
    setCopiedCoordinates(false);
    // Smooth scroll to map on small screens
    if (window.innerWidth < 1024) {
      const mapCard = document.getElementById('interactive-map-container');
      if (mapCard) {
        mapCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  };

  // Browser Geolocation Detection
  const handleDetectGPS = () => {
    if (!navigator.geolocation) {
      setGpsError('Geolocation is not supported by your browser.');
      return;
    }

    setIsDetectingGPS(true);
    setGpsError(null);

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = Math.round(pos.coords.latitude * 10000) / 10000;
        const lng = Math.round(pos.coords.longitude * 10000) / 10000;
        setFormLat(lat.toString());
        setFormLng(lng.toString());
        if (!formName) {
          setFormName('My Current Location / Site');
        }
        if (!formAddress) {
          setFormAddress(`GPS Coordinates: ${lat}, ${lng}`);
        }
        setIsDetectingGPS(false);
      },
      (err) => {
        setIsDetectingGPS(false);
        if (err.code === 1) {
          setGpsError('Location permission denied. Please enter coordinates or address manually.');
        } else {
          setGpsError('Unable to retrieve position. Please try manual entry.');
        }
      },
      { timeout: 10000, enableHighAccuracy: true }
    );
  };

  // Add Custom Location
  const handleAddLocationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim()) return;

    // Use entered coordinates, or offset from factory if left blank
    let lat = parseFloat(formLat);
    let lng = parseFloat(formLng);

    if (isNaN(lat) || isNaN(lng)) {
      // Create slight jitter offset from factory for simulation if user only typed text
      lat = Math.round((FACTORY_LOCATION.lat + (Math.random() * 0.1 - 0.05)) * 10000) / 10000;
      lng = Math.round((FACTORY_LOCATION.lng + (Math.random() * 0.1 - 0.05)) * 10000) / 10000;
    }

    const newLoc: LocationItem = {
      id: `custom-${Date.now()}`,
      name: formName.trim(),
      category: formCategory,
      address: formAddress.trim() || 'Client Designated Delivery Site',
      lat,
      lng,
      tag: 'Your Location',
      notes: formNotes.trim() || 'Custom added site for granite quotation and logistics delivery.',
      isCustom: true,
    };

    const updated = [newLoc, ...locations];
    setLocations(updated);
    saveCustomLocations(updated);

    // Automatically locate the new location right away!
    setSelectedLocation(newLoc);
    setShowAddForm(false);

    // Reset Form
    setFormName('');
    setFormAddress('');
    setFormLat('');
    setFormLng('');
    setFormNotes('');
    setGpsError(null);
  };

  // Remove custom location
  const handleDeleteLocation = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = locations.filter((loc) => loc.id !== id);
    setLocations(updated);
    saveCustomLocations(updated);
    if (selectedLocation.id === id) {
      setSelectedLocation(FACTORY_LOCATION);
    }
  };

  // Copy GPS Coordinates
  const handleCopyCoordinates = (lat: number, lng: number) => {
    const text = `${lat.toFixed(4)}, ${lng.toFixed(4)}`;
    navigator.clipboard.writeText(text);
    setCopiedCoordinates(true);
    setTimeout(() => setCopiedCoordinates(false), 2200);
  };

  // Distance from factory
  const distanceKm = calculateDistanceKm(
    FACTORY_LOCATION.lat,
    FACTORY_LOCATION.lng,
    selectedLocation.lat,
    selectedLocation.lng
  );
  const distanceMiles = Math.round(distanceKm * 0.621371 * 10) / 10;
  const transitInfo = getTransitEstimate(distanceKm);

  // Google Maps URL with turn-by-turn directions from factory
  const googleMapsDirectionsUrl =
    selectedLocation.id === FACTORY_LOCATION.id
      ? `https://www.google.com/maps/search/?api=1&query=${FACTORY_LOCATION.lat},${FACTORY_LOCATION.lng}`
      : `https://www.google.com/maps/dir/?api=1&origin=${FACTORY_LOCATION.lat},${FACTORY_LOCATION.lng}&destination=${selectedLocation.lat},${selectedLocation.lng}`;

  // Interactive Radar click to place custom pin
  const handleRadarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const normX = (x / rect.width - 0.5) * 2; // -1 to 1
    const normY = (y / rect.height - 0.5) * 2; // -1 to 1

    // Scale to approximate lat/lng offset (~0.1 degree radius)
    const newLat = Math.round((FACTORY_LOCATION.lat - normY * 0.08) * 10000) / 10000;
    const newLng = Math.round((FACTORY_LOCATION.lng + normX * 0.08) * 10000) / 10000;

    const clickedLoc: LocationItem = {
      id: `map-pin-${Date.now()}`,
      name: `Dropped Pin (${newLat}, ${newLng})`,
      category: 'custom',
      address: `Custom Pin Coordinate on Radial Grid`,
      lat: newLat,
      lng: newLng,
      tag: 'Pinned Site',
      notes: 'Interactive map coordinate selected for distance and freight transit estimation.',
      isCustom: true,
    };

    const updated = [clickedLoc, ...locations];
    setLocations(updated);
    saveCustomLocations(updated);
    setSelectedLocation(clickedLoc);
  };

  // OpenStreetMap embed URL with dynamic bounding box
  const delta = 0.02 * (15 - Math.min(Math.max(mapZoom, 11), 16));
  const bbox = `${selectedLocation.lng - delta},${selectedLocation.lat - delta},${selectedLocation.lng + delta},${selectedLocation.lat + delta}`;
  const osmEmbedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${selectedLocation.lat},${selectedLocation.lng}`;

  return (
    <section id="location" className="py-16 md:py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      {/* Background texture */}
      <div className="absolute inset-0 bg-stone-pattern opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-2 h-2 bg-amber-600 rounded-full animate-pulse"></span>
            <span className="uppercase text-[10px] tracking-widest text-amber-800 font-bold font-mono-tech">
              Plant Coordinates & Logistics Locator
            </span>
          </div>
          <h2
            id="location-section-heading"
            className="text-3xl sm:text-4xl font-bold text-slate-900 font-heading tracking-tight"
          >
            Locate Our Plant & Your Delivery Sites
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            Click any location below to pinpoint it on the interactive map, calculate transit distance from our granite factory, or add your own project address with instant GPS coordinates.
          </p>
        </div>

        {/* Main Grid: Left List & Add Form, Right Interactive Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Location Cards & Add Form (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Quick Action Bar: Add Location & GPS auto-detect */}
            <div className="flex items-center justify-between gap-3 bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span className="text-xs font-bold text-slate-900 font-mono">
                  {locations.length + 1} Pinpoints Available
                </span>
              </div>
              <button
                id="btn-toggle-add-location"
                onClick={() => setShowAddForm(!showAddForm)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all shadow-xs ${
                  showAddForm
                    ? 'bg-slate-800 text-white'
                    : 'bg-amber-600 hover:bg-amber-700 text-white'
                }`}
              >
                <Plus className={`w-3.5 h-3.5 transition-transform ${showAddForm ? 'rotate-45' : ''}`} />
                <span>{showAddForm ? 'Close Form' : 'Add Your Site'}</span>
              </button>
            </div>

            {/* Add Custom Location Form Dropdown */}
            {showAddForm && (
              <div
                id="add-location-form-card"
                className="bg-white rounded-2xl p-5 sm:p-6 border border-amber-300 shadow-md animate-in fade-in slide-in-from-top-3 duration-200"
              >
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                      <Plus className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900">Add Your Project Location</h3>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">1-Click Locate</span>
                </div>

                <form onSubmit={handleAddLocationSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-[11px] font-mono uppercase text-slate-700 mb-1 font-bold">
                      Project / Site Name <span className="text-amber-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="e.g. Apex Commercial Center, My Villa Site"
                      className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-mono uppercase text-slate-700 mb-1 font-bold">
                        Site Type
                      </label>
                      <select
                        value={formCategory}
                        onChange={(e) => setFormCategory(e.target.value as any)}
                        className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-amber-600"
                      >
                        <option value="project">Construction Site</option>
                        <option value="custom">Architectural Office</option>
                        <option value="warehouse">Storage Depot</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase text-slate-700 mb-1 font-bold">
                        GPS Detection
                      </label>
                      <button
                        type="button"
                        onClick={handleDetectGPS}
                        disabled={isDetectingGPS}
                        className="w-full py-2 px-2.5 rounded-lg bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-900 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors disabled:opacity-50"
                      >
                        <LocateFixed className={`w-3.5 h-3.5 text-amber-700 ${isDetectingGPS ? 'animate-spin' : ''}`} />
                        <span>{isDetectingGPS ? 'Detecting...' : 'Use My GPS'}</span>
                      </button>
                    </div>
                  </div>

                  {gpsError && (
                    <div className="p-2 rounded bg-red-50 border border-red-200 text-[11px] text-red-700 flex items-start gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                      <span>{gpsError}</span>
                    </div>
                  )}

                  <div>
                    <label className="block text-[11px] font-mono uppercase text-slate-700 mb-1 font-bold">
                      Address / Landmark / City
                    </label>
                    <input
                      type="text"
                      value={formAddress}
                      onChange={(e) => setFormAddress(e.target.value)}
                      placeholder="e.g. Ring Road Phase 2, Industrial Sector 9"
                      className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-amber-600"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-mono uppercase text-slate-500 mb-1">
                        Latitude (Optional)
                      </label>
                      <input
                        type="text"
                        value={formLat}
                        onChange={(e) => setFormLat(e.target.value)}
                        placeholder="e.g. 12.9812"
                        className="w-full px-2.5 py-1.5 rounded-md bg-slate-50 border border-slate-300 text-slate-900 text-xs font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono uppercase text-slate-500 mb-1">
                        Longitude (Optional)
                      </label>
                      <input
                        type="text"
                        value={formLng}
                        onChange={(e) => setFormLng(e.target.value)}
                        placeholder="e.g. 77.6045"
                        className="w-full px-2.5 py-1.5 rounded-md bg-slate-50 border border-slate-300 text-slate-900 text-xs font-mono"
                      />
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setShowAddForm(false)}
                      className="px-3.5 py-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 text-xs font-bold uppercase transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-colors flex items-center gap-1.5"
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>Save & Locate on Map</span>
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Scrollable list of Clickable Locations */}
            <div className="space-y-3 max-h-[580px] overflow-y-auto pr-1">
              {/* 1. Primary Granite Processing Unit Plant Card */}
              <div
                id={`location-card-${FACTORY_LOCATION.id}`}
                onClick={() => handleSelectLocation(FACTORY_LOCATION)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer shadow-xs relative overflow-hidden group ${
                  selectedLocation.id === FACTORY_LOCATION.id
                    ? 'bg-amber-50/90 border-amber-500 ring-2 ring-amber-500/20 shadow-md'
                    : 'bg-white border-slate-200 hover:border-amber-400 hover:shadow-sm'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors shadow-xs ${
                        selectedLocation.id === FACTORY_LOCATION.id
                          ? 'bg-amber-600 text-white'
                          : 'bg-slate-100 text-slate-700 group-hover:bg-amber-100 group-hover:text-amber-800'
                      }`}
                    >
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-amber-600 text-white font-mono text-[10px] uppercase font-bold tracking-wider">
                          Central Plant
                        </span>
                        <span className="text-[11px] font-mono text-emerald-700 font-bold">HQ Base 0.0 km</span>
                      </div>
                      <h3 className="text-sm font-bold text-slate-900 mt-1 font-heading">
                        {FACTORY_LOCATION.name}
                      </h3>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed line-clamp-2">
                        {FACTORY_LOCATION.address}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 text-right">
                    <span
                      className={`inline-flex items-center gap-1 text-[11px] font-bold font-mono transition-colors ${
                        selectedLocation.id === FACTORY_LOCATION.id
                          ? 'text-amber-700'
                          : 'text-slate-400 group-hover:text-amber-600'
                      }`}
                    >
                      <Crosshair className="w-3.5 h-3.5" />
                      <span>{selectedLocation.id === FACTORY_LOCATION.id ? 'Active' : 'Locate'}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* 2. List of Customer Added & Preset Sites */}
              {locations.map((loc) => {
                const isSelected = selectedLocation.id === loc.id;
                const dist = calculateDistanceKm(
                  FACTORY_LOCATION.lat,
                  FACTORY_LOCATION.lng,
                  loc.lat,
                  loc.lng
                );

                return (
                  <div
                    key={loc.id}
                    id={`location-card-${loc.id}`}
                    onClick={() => handleSelectLocation(loc)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer shadow-xs relative overflow-hidden group ${
                      isSelected
                        ? 'bg-amber-50/90 border-amber-500 ring-2 ring-amber-500/20 shadow-md'
                        : 'bg-white border-slate-200 hover:border-amber-400 hover:shadow-sm'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors shadow-xs ${
                            isSelected
                              ? 'bg-amber-600 text-white'
                              : 'bg-slate-100 text-slate-700 group-hover:bg-amber-100 group-hover:text-amber-800'
                          }`}
                        >
                          <MapPin className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span
                              className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase font-bold tracking-wider ${
                                loc.isCustom
                                  ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                                  : 'bg-slate-100 text-slate-700 border border-slate-200'
                              }`}
                            >
                              {loc.tag || loc.category}
                            </span>
                            <span className="text-[11px] font-mono text-slate-600 font-bold">
                              {dist} km from plant
                            </span>
                          </div>
                          <h3 className="text-sm font-bold text-slate-900 mt-1 font-heading">
                            {loc.name}
                          </h3>
                          <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                            {loc.address}
                          </p>
                        </div>
                      </div>

                      <div className="shrink-0 flex items-center gap-1.5">
                        {loc.isCustom && (
                          <button
                            onClick={(e) => handleDeleteLocation(loc.id, e)}
                            title="Remove this saved location"
                            className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                        <span
                          className={`inline-flex items-center gap-1 text-[11px] font-bold font-mono transition-colors ${
                            isSelected
                              ? 'text-amber-700'
                              : 'text-slate-400 group-hover:text-amber-600'
                          }`}
                        >
                          <Crosshair className="w-3.5 h-3.5" />
                          <span>{isSelected ? 'Active' : 'Locate'}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Interactive Map & Live Telemetry Inspector (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Map Container */}
            <div
              id="interactive-map-container"
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md relative"
            >
              {/* Map Top Bar: Tabs & Quick Controls */}
              <div className="p-3 sm:px-4 bg-white border-b border-slate-200 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setActiveTab('map')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                      activeTab === 'map'
                        ? 'bg-amber-600 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>Live Map View</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('radar')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                      activeTab === 'radar'
                        ? 'bg-amber-600 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    <Radio className="w-3.5 h-3.5" />
                    <span>Logistics Radar & Route</span>
                  </button>
                </div>

                <div className="flex items-center gap-1.5 text-xs">
                  <button
                    onClick={() => handleSelectLocation(FACTORY_LOCATION)}
                    title="Center to Granite Processing Plant"
                    className="px-2.5 py-1.5 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-800 text-[11px] font-bold font-mono transition-colors flex items-center gap-1"
                  >
                    <Building2 className="w-3 h-3 text-amber-600" />
                    <span>Recenter Plant</span>
                  </button>
                  <div className="flex items-center border border-slate-200 rounded-md overflow-hidden">
                    <button
                      onClick={() => setMapZoom((prev) => Math.min(prev + 1, 16))}
                      title="Zoom In"
                      className="px-2 py-1 bg-white hover:bg-slate-100 text-slate-800 font-bold border-r border-slate-200"
                    >
                      +
                    </button>
                    <button
                      onClick={() => setMapZoom((prev) => Math.max(prev - 1, 11))}
                      title="Zoom Out"
                      className="px-2 py-1 bg-white hover:bg-slate-100 text-slate-800 font-bold"
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>

              {/* Map Surface */}
              <div className="relative h-[380px] sm:h-[420px] bg-slate-100 overflow-hidden">
                {activeTab === 'map' ? (
                  /* Live OpenStreetMap iframe centered dynamically on active coordinates */
                  <div className="w-full h-full relative">
                    <iframe
                      title="Location Map"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      loading="lazy"
                      src={osmEmbedUrl}
                      className="w-full h-full"
                    ></iframe>

                    {/* Floating Pin Indicator overlay */}
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm text-xs font-mono text-slate-800 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-600 animate-ping"></span>
                      <span className="font-bold">{selectedLocation.name}</span>
                    </div>

                    <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md border border-slate-200 text-[10px] font-mono text-slate-600 shadow-xs">
                      GPS: {selectedLocation.lat.toFixed(4)}° N, {selectedLocation.lng.toFixed(4)}° E
                    </div>
                  </div>
                ) : (
                  /* Interactive Radar Schematic Route View */
                  <div
                    onClick={handleRadarClick}
                    className="w-full h-full relative bg-slate-900 flex items-center justify-center cursor-crosshair select-none"
                    title="Click anywhere on the radar to drop a custom pin"
                  >
                    {/* Grid Lines */}
                    <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                    {/* Concentric Distance Rings from Factory */}
                    <div className="absolute w-72 h-72 rounded-full border border-amber-500/20 flex items-center justify-center">
                      <span className="absolute -top-3.5 text-[9px] font-mono text-amber-500/60 uppercase">100 km perimeter</span>
                      <div className="w-48 h-48 rounded-full border border-amber-500/30 flex items-center justify-center">
                        <span className="absolute -top-3 text-[9px] font-mono text-amber-500/70 uppercase">50 km perimeter</span>
                        <div className="w-24 h-24 rounded-full border border-amber-500/40 flex items-center justify-center">
                          <span className="absolute -top-3 text-[9px] font-mono text-amber-500/80 uppercase">25 km</span>
                          <div className="w-8 h-8 rounded-full bg-amber-500/10 animate-ping"></div>
                        </div>
                      </div>
                    </div>

                    {/* Radar sweep beam animation */}
                    <div className="absolute w-72 h-72 rounded-full border-t-2 border-amber-500/40 animate-spin opacity-40 pointer-events-none"></div>

                    {/* Center Factory Marker */}
                    <div className="absolute z-10 flex flex-col items-center">
                      <div className="w-8 h-8 rounded-lg bg-amber-600 text-white flex items-center justify-center shadow-lg border border-white">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <span className="mt-1 px-2 py-0.5 rounded bg-slate-900/90 text-amber-400 font-mono text-[9px] font-bold border border-slate-700">
                        Granite Plant
                      </span>
                    </div>

                    {/* Selected Location Marker & Connecting Transit Line (if not factory) */}
                    {selectedLocation.id !== FACTORY_LOCATION.id && (
                      <>
                        {/* Connecting Line */}
                        <div className="absolute w-36 h-0.5 bg-gradient-to-r from-amber-500 via-amber-300 to-emerald-400 -translate-x-12 -translate-y-8 rotate-[-30deg] pointer-events-none"></div>

                        {/* Target Pin */}
                        <div className="absolute -translate-x-24 -translate-y-16 z-20 flex flex-col items-center animate-bounce">
                          <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center shadow-lg border border-white">
                            <MapPin className="w-4 h-4" />
                          </div>
                          <span className="mt-1 px-2 py-0.5 rounded bg-slate-900/95 text-emerald-400 font-mono text-[9px] font-bold border border-emerald-600">
                            {selectedLocation.name} ({distanceKm} km)
                          </span>
                        </div>
                      </>
                    )}

                    {/* Click guide pill */}
                    <div className="absolute bottom-3 left-3 bg-slate-800/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700 text-[11px] font-mono text-amber-300 flex items-center gap-1.5">
                      <CornerDownRight className="w-3.5 h-3.5" />
                      <span>Click anywhere on radar grid to drop a location pin</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Live Location Telemetry Inspector Card */}
              <div className="p-5 bg-white border-t border-slate-200 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-600"></span>
                      <h3 className="text-base font-bold text-slate-900 font-heading">
                        {selectedLocation.name}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 mt-0.5">
                      {selectedLocation.address}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => handleCopyCoordinates(selectedLocation.lat, selectedLocation.lng)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold font-mono transition-colors shadow-2xs"
                    >
                      {copiedCoordinates ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy GPS</span>
                        </>
                      )}
                    </button>

                    <a
                      href={googleMapsDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
                    >
                      <span>Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Logistics Metrics: Distance, Freight Transit, Transport Mode */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[10px] font-mono uppercase text-slate-500 block font-medium">
                      Plant Haulage Distance
                    </span>
                    <p className="text-base font-bold text-slate-900 mt-0.5 font-mono">
                      {distanceKm} km <span className="text-xs font-normal text-slate-500">({distanceMiles} mi)</span>
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[10px] font-mono uppercase text-slate-500 block font-medium">
                      Estimated Road Transit
                    </span>
                    <p className="text-base font-bold text-amber-700 mt-0.5 font-mono">
                      {transitInfo.time}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[10px] font-mono uppercase text-slate-500 block font-medium">
                      Recommended Carrier
                    </span>
                    <p className="text-xs font-bold text-slate-800 mt-0.5 line-clamp-1">
                      {transitInfo.transportMode}
                    </p>
                  </div>
                </div>

                {/* Contextual Notes / Action */}
                <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-start gap-2.5">
                    <Truck className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {selectedLocation.notes ||
                        'Direct hydraulic flatbed delivery and crane offloading available directly to this site.'}
                    </p>
                  </div>

                  {onRequestQuoteWithLocation && (
                    <button
                      onClick={() => onRequestQuoteWithLocation(selectedLocation.name, distanceKm)}
                      className="shrink-0 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
                    >
                      <span>Inquire for this Site</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
