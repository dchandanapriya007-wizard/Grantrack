export interface ProcessStep {
  id: string;
  stepNumber: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  keyAspects: string[];
  equipment: string;
  duration?: string;
}

export interface MachineItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  specs: {
    capacity: string;
    precision: string;
    bladeType?: string;
    automation: string;
    operationalRole: string;
  };
  features: string[];
}

export interface GraniteProduct {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  dimensions: string;
  thickness: string;
  finishesAvailable: string[];
  recommendedUses: string[];
  highlights: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Quarry' | 'Granite Blocks' | 'Cutting' | 'Machinery' | 'Polishing' | 'Finished Products';
  image: string;
  description: string;
  aspectRatio?: 'landscape' | 'portrait' | 'square';
}

export interface StoneFinish {
  id: string;
  name: string;
  description: string;
  texture: string;
  image: string;
  bestFor: string;
  slipResistance: string;
  reflectivity: string;
}

export interface LocationItem {
  id: string;
  name: string;
  category: 'factory' | 'project' | 'custom' | 'warehouse' | 'port';
  address: string;
  lat: number;
  lng: number;
  tag?: string;
  contactPerson?: string;
  phone?: string;
  notes?: string;
  isCustom?: boolean;
}

