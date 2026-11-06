import { ProcessStep, MachineItem, GraniteProduct, GalleryItem, StoneFinish } from '../types';

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 'step-01',
    stepNumber: '01',
    title: 'Quarrying',
    shortDesc: 'Granite is extracted from natural stone quarries.',
    fullDesc: 'The granite journey begins in geological stone formations where natural bedrock is carefully excavated using controlled drilling, diamond wire sawing, and hydraulic wedging techniques to maintain rock integrity.',
    image: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1200&q=80',
    keyAspects: ['Geological strata assessment', 'Diamond wire saw extraction', 'Structural integrity preservation'],
    equipment: 'Hydraulic Drills & Diamond Wire Saws',
    duration: 'Stage 1'
  },
  {
    id: 'step-02',
    stepNumber: '02',
    title: 'Block Extraction',
    shortDesc: 'Large granite blocks are separated and prepared for transportation.',
    fullDesc: 'Massive monolithic stone masses are segmented into uniform, rectangular quarry blocks. Each raw block is weighed, dimensioned, and evaluated for grain homogeneity and color uniformity before clearing.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    keyAspects: ['Squaring raw block boundaries', 'Flaw & fissure ultrasonic testing', 'Standard dimensional grading'],
    equipment: 'Heavy Hydraulic Splitters & Derrick Cranes',
    duration: 'Stage 2'
  },
  {
    id: 'step-03',
    stepNumber: '03',
    title: 'Transportation',
    shortDesc: 'The blocks are safely transported to the processing facility.',
    fullDesc: 'Heavy-duty multi-axle industrial haulers and gantry crane staging areas safely transport multi-ton raw granite blocks from the quarry to the processing plant yard with rigorous safety fastenings.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    keyAspects: ['Heavy-load balanced rigging', 'Plant stockyard logistics', 'Systematic block categorization'],
    equipment: 'Multi-axle Transporters & 50-Ton Gantry Cranes',
    duration: 'Stage 3'
  },
  {
    id: 'step-04',
    stepNumber: '04',
    title: 'Cutting',
    shortDesc: 'Large blocks are cut into slabs using specialized cutting machinery.',
    fullDesc: 'Raw blocks are loaded into multi-blade gang saws and diamond multi-wire saws. Computerized cutting parameters slice monolithic blocks into calibrated slabs ranging from 18mm to 30mm thickness.',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80',
    keyAspects: ['Continuous coolant lubrication', 'Diamond segment matrix blades', 'Micro-gauge thickness calibration'],
    equipment: 'Diamond Gang Saws & Multi-Blade Block Cutters',
    duration: 'Stage 4'
  },
  {
    id: 'step-05',
    stepNumber: '05',
    title: 'Surface Processing',
    shortDesc: 'The granite surface is processed to achieve the required thickness and texture.',
    fullDesc: 'Slabs undergo automated calibration, resin treatment for natural micro-porosity reinforcement, and thermal or abrasive surface dressing depending on the specified architectural finish.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    keyAspects: ['Automated thickness leveling', 'Reinforcement backing mesh application', 'Texture pre-conditioning'],
    equipment: 'Calibration Heads & Multi-Head Surface Treaters',
    duration: 'Stage 5'
  },
  {
    id: 'step-06',
    stepNumber: '06',
    title: 'Polishing',
    shortDesc: 'Polishing machines create a smooth and attractive surface finish.',
    fullDesc: 'Sequential multi-head polishing lines with descending abrasive grit sequences (from coarse 60 grit to ultra-fine 3000 grit and buffing heads) reveal deep crystal clarity and natural luster.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    keyAspects: ['Sequential 16 to 20 head polishing line', 'Mirror-gloss surface reflectivity', 'Natural vein contrast enhancement'],
    equipment: 'Continuous Automatic Polishing Lines',
    duration: 'Stage 6'
  },
  {
    id: 'step-07',
    stepNumber: '07',
    title: 'Edge Finishing',
    shortDesc: 'Edges are accurately cut and finished according to requirements.',
    fullDesc: 'Precision CNC bridge saws and edge chamfering machines fabricate bullnose, bevel, ogee, pencil edge, and custom architectural joint profiles to exact millimetric tolerances.',
    image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80',
    keyAspects: ['Laser-guided edge cutting', 'Complex profile chamfering & profiling', 'Zero-chip clean corner edging'],
    equipment: 'CNC Bridge Saws & Edge Profile Polishers',
    duration: 'Stage 7'
  },
  {
    id: 'step-08',
    stepNumber: '08',
    title: 'Quality Inspection',
    shortDesc: 'Finished products are inspected for dimensions, surface quality and finishing.',
    fullDesc: 'Trained stone technologists rigorously inspect slab flatness, diagonal squareness, gloss degree (using digital gloss meters), color consistency, and absence of micro-fractures before sign-off.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    keyAspects: ['Digital optical gloss verification', 'Diagonal & planar tolerance check', 'Color shade uniformity batching'],
    equipment: 'Optical Gloss Meters & Laser Measuring Gauges',
    duration: 'Stage 8'
  },
  {
    id: 'step-09',
    stepNumber: '09',
    title: 'Packaging & Dispatch',
    shortDesc: 'Completed products are safely packed and prepared for transportation.',
    fullDesc: 'Finished granite slabs and architectural pieces are interleaved with protective foam sheeting, secured in treated fumigated wooden A-frames or crates, and prepared for safe transit.',
    image: 'https://images.unsplash.com/photo-1586528116493-a029325540fa?auto=format&fit=crop&w=1200&q=80',
    keyAspects: ['Heavy-duty fumigated wooden A-frames', 'Shock-absorbing protective corner guards', 'Weather-sealed container stuffing'],
    equipment: 'Overhead Vacuum Lifters & Automated Strapping Systems',
    duration: 'Stage 9'
  }
];

export const MACHINERY_DATA: MachineItem[] = [
  {
    id: 'block-cutter',
    name: 'Block Cutting Machine',
    tagline: 'High-Torque Primary Block Reduction',
    description: 'Used for cutting large granite blocks into manageable sections and uniform building slabs.',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80',
    specs: {
      capacity: 'Blocks up to 3.8m x 2.2m x 2.0m',
      precision: '± 0.5 mm tolerance',
      bladeType: 'Heavy Diamond Segmented Circular Blades (up to 3000mm)',
      automation: 'PLC Dual-Axis Microprocessor Control',
      operationalRole: 'Primary rough block reduction & slicing'
    },
    features: [
      'Multi-blade configuration for simultaneous multi-pass cutting',
      'Integrated high-pressure water cooling and lubrication circuit',
      'Heavy cast-iron bridge ensuring vibration-free stability',
      'Automated step-down cutting speed regulation'
    ]
  },
  {
    id: 'gang-saw',
    name: 'Gang Saw',
    tagline: 'Mass Slab Production from Large Blocks',
    description: 'Used for producing multiple granite slabs simultaneously from large raw quarried blocks.',
    image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=800&q=80',
    specs: {
      capacity: 'Up to 80-100 continuous parallel diamond blades',
      precision: '± 0.3 mm thickness consistency across full slab',
      bladeType: 'Diamond Steel Tensioned Gang Blades',
      automation: 'Automated Hydraulic Blade Tensioning System',
      operationalRole: 'High-volume uniform slab slicing'
    },
    features: [
      'Simultaneous slicing of entire 40-ton blocks into 2cm or 3cm slabs',
      'Advanced flywheel harmonic balancing system',
      'Low blade deflection under maximum mechanical pressure',
      'Optimized continuous downfeed mechanism'
    ]
  },
  {
    id: 'bridge-cutter',
    name: 'Bridge Cutting Machine',
    tagline: 'Laser-Guided Precision Dimensioning',
    description: 'Used for accurate cutting of granite slabs and customized pieces to exact architectural specifications.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    specs: {
      capacity: 'Slabs up to 3.5m length x 2.0m width',
      precision: '± 0.2 mm optical accuracy',
      bladeType: 'Diamond Continuous Rim & Segmented Disc',
      automation: '5-Axis CNC / Laser Positioning Interface',
      operationalRole: 'Finished sizing, mitering, and custom shaping'
    },
    features: [
      '0° to 90° motorized tilting head for perfect 45° miter cuts',
      '360° rotating motorized vacuum worktable',
      'Laser line projection for real-time cut preview',
      'Touchscreen CNC CAD/CAM direct blueprint import'
    ]
  },
  {
    id: 'polishing-machine',
    name: 'Polishing Machine',
    tagline: 'Multi-Head Automatic Surface Finishing',
    description: 'Used to create smooth, glossy and refined surface finishes across large format granite slabs.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    specs: {
      capacity: '16 to 20 Independent Oscillating Polishing Heads',
      precision: 'Gloss rating above 95° GU (Gloss Units)',
      bladeType: 'Diamond Resin & Magnesite Abrasive Bricks',
      automation: 'Optical Slab Contour Auto-Scanning Sensor',
      operationalRole: 'Surface leveling, honing, and ultra-high gloss buffing'
    },
    features: [
      'Automatic pneumatic head pressure compensation',
      'Slab profile recognition to prevent edge chipping',
      'Variable speed conveyor belt for controlled dwell time',
      'Even crystal sheen with zero swirl or haze marks'
    ]
  },
  {
    id: 'edge-cutter',
    name: 'Edge Cutting Machine',
    tagline: 'Architectural Edge Profiling & Shaping',
    description: 'Used for accurate edge shaping, bullnosing, beveling, and finishing according to custom requirements.',
    image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80',
    specs: {
      capacity: 'Thickness range 15mm to 100mm edges',
      precision: '± 0.1 mm bevel & curve contouring',
      bladeType: 'Formed Profile Diamond Wheels & Polishing Pads',
      automation: 'Continuous Flow Linear Edge Polisher',
      operationalRole: 'Edge profile shaping, chamfering & polishing'
    },
    features: [
      'Multiple edge styles: Straight bevel, Demi-bullnose, Full bullnose, Dupont',
      'Calibrated water coolant manifold on each spindle',
      'Automated bottom and top chamfering heads',
      'Mirror finish on slab perimeter identical to surface gloss'
    ]
  },
  {
    id: 'surface-finisher',
    name: 'Surface Finishing Machine',
    tagline: 'Texturing, Flaming & Leathering Systems',
    description: 'Used for achieving specific surface textures and architectural finishes such as flamed, bush-hammered and leathered surfaces.',
    image: 'https://images.unsplash.com/photo-1590487988256-9ed24133863e?auto=format&fit=crop&w=800&q=80',
    specs: {
      capacity: 'High-temperature flaming & pneumatic texturing',
      precision: 'Controlled uniform micro-roughness depth',
      bladeType: 'Tungsten Carbide Rollers & Oxy-Propane Torches',
      automation: 'Automated Multi-Torch Robotic Arm Control',
      operationalRole: 'Anti-slip and tactile architectural finishes'
    },
    features: [
      'Controlled thermal flaming for slip-resistant exterior paving',
      'Diamond antique brush system for silky leathered texture',
      'Pneumatic bush hammering for rustic acoustic and facade panels',
      'Integrated water quench spray for rapid thermal stabilization'
    ]
  },
  {
    id: 'material-handling',
    name: 'Material Handling Equipment',
    tagline: 'Heavy-Duty Safe Stone Logistics',
    description: 'Used for safely moving heavy granite blocks and delicate finished slabs throughout the facility.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    specs: {
      capacity: 'Overhead Gantry: 45 Tons / Vacuum Lifters: 1500 kg',
      precision: 'Zero-drop pneumatic fail-safe safety redundancy',
      bladeType: 'Non-marking polyurethane suction pads',
      automation: 'Wireless Pendant & Radio Remote Operation',
      operationalRole: 'Safe slab rotation, loading, and container dispatch'
    },
    features: [
      'Twin-girder heavy indoor/outdoor overhead cranes',
      'Multi-pad vacuum lifters with 90° motorized tilting',
      'C-clamp slab grab lifters with rubberized gripping jaws',
      'Heavy-duty motorized transfer carts between processing bays'
    ]
  }
];

export const PRODUCTS_DATA: GraniteProduct[] = [
  {
    id: 'granite-slabs',
    name: 'Granite Slabs',
    category: 'Structural & Architectural',
    description: 'Large format, calibrated premium granite slabs suitable for commercial projects, countertops, and luxury interior installations.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    dimensions: 'Lengths up to 3400mm x Heights up to 2000mm',
    thickness: '18mm, 20mm, 30mm & custom architectural gauges',
    finishesAvailable: ['Polished', 'Honed', 'Leathered', 'Flamed'],
    recommendedUses: ['Kitchen Islands', 'Commercial Foyers', 'Architectural Feature Walls', 'Conference Tables'],
    highlights: ['Bookmatched slab options', 'High flexural strength', 'Resistant to heat & scratching']
  },
  {
    id: 'kitchen-countertops',
    name: 'Kitchen Countertops',
    category: 'Interior & Residential',
    description: 'Custom-fabricated, stain-resistant kitchen countertops with precision sink cut-outs, seamless mitered aprons, and polished edges.',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
    dimensions: 'Custom bespoke project dimensions & L-shapes',
    thickness: '20mm, 30mm, 40mm laminated edges',
    finishesAvailable: ['High Gloss Polished', 'Silky Leathered / Satin', 'Honed Matte'],
    recommendedUses: ['Residential Kitchens', 'Breakfast Bars', 'Outdoor BBQ Counters', 'Hospitality Bars'],
    highlights: ['Food-safe sealed surface', 'Extreme thermal resistance', 'Custom CNC sink and cooktop cutouts']
  },
  {
    id: 'flooring',
    name: 'Flooring',
    category: 'Flooring & Paving',
    description: 'Heavy-traffic granite tiles and cut-to-size paving slabs engineered for durability, uniform jointing, and timeless visual appeal.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    dimensions: '600x600mm, 800x800mm, 600x1200mm, custom pavers',
    thickness: '15mm, 20mm, 25mm, 30mm',
    finishesAvailable: ['Polished (Indoor)', 'Honed (Medium Slip)', 'Flamed / Bush-Hammered (Exterior)'],
    recommendedUses: ['Commercial Malls', 'Airport Terminals', 'Luxury Residences', 'Public Plazas & Walkways'],
    highlights: ['High abrasion resistance', 'Zero fading from UV exposure', 'Uniform batch color matching']
  },
  {
    id: 'wall-cladding',
    name: 'Wall Cladding',
    category: 'Facades & Exterior',
    description: 'Calibrated exterior facade panels and interior feature cladding with pre-drilled mechanical anchor grooves for ventilated wall systems.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    dimensions: '600x900mm, 600x1200mm, 1000x2000mm bespoke panels',
    thickness: '20mm, 25mm, 30mm, 40mm',
    finishesAvailable: ['Honed', 'Flamed', 'Bush-Hammered', 'Polished', 'Water-Jet'],
    recommendedUses: ['Building Exterior Facades', 'Elevator Lobbies', 'Feature Accent Walls', 'Boundary Walls'],
    highlights: ['Weather and freeze-thaw resistant', 'Mechanical clamp grooving ready', 'Lightweight calibrated options']
  },
  {
    id: 'staircases',
    name: 'Staircases',
    category: 'Architectural Elements',
    description: 'Integral solid granite stair treads and risers featuring anti-slip grooves, bullnosed edges, and high-load bearing capacity.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    dimensions: 'Treads up to 1800x350mm / Risers up to 1800x180mm',
    thickness: 'Treads: 20mm, 30mm / Risers: 15mm, 20mm',
    finishesAvailable: ['Polished with Flamed Safety Strips', 'Honed Full Surface', 'Sandblasted Insets'],
    recommendedUses: ['Commercial Stairwells', 'Grand Residential Stairways', 'Exterior Landscape Steps'],
    highlights: ['Integrated brass or flamed anti-skid lines', 'Single piece jointless treads', 'High edge impact durability']
  },
  {
    id: 'window-sills',
    name: 'Window Sills',
    category: 'Architectural Details',
    description: 'Custom-cut granite window sills, thresholds, and copings with precision drip grooves to protect building facades from moisture.',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
    dimensions: 'Widths 150mm to 400mm / Lengths up to 2500mm',
    thickness: '20mm, 30mm',
    finishesAvailable: ['Polished', 'Honed', 'Flamed'],
    recommendedUses: ['Interior Window Sills', 'Exterior Parapet Copings', 'Doorway Thresholds'],
    highlights: ['Integrated bottom water-drip groove', 'Moisture-impermeable', 'Polished exposed edges']
  },
  {
    id: 'custom-pieces',
    name: 'Custom Granite Pieces',
    category: 'Bespoke Engineering',
    description: 'Precision CNC-machined architectural stones including columns, planters, vanity tops, water features, and customized monoliths.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    dimensions: 'Fully engineered per client 3D CAD/BIM drawings',
    thickness: 'Custom solid blocks & multi-laminated profiles',
    finishesAvailable: ['Combination Finishes', 'Curved Edge Profiles', 'Textured Carvings'],
    recommendedUses: ['Landscape Monuments', 'Custom Reception Desks', 'Luxury Bathroom Vanities', 'Sculptural Elements'],
    highlights: ['5-Axis CNC intricate machining', 'Custom shop drawing verification', 'Hand-finished edge detailing']
  }
];

export const STONE_FINISHES: StoneFinish[] = [
  {
    id: 'polished',
    name: 'Polished Finish',
    description: 'Ultra-smooth, high-gloss surface that highlights the vibrant crystal colors, mineral depth, and rich patterns of natural granite.',
    texture: 'Mirror-like smooth & highly reflective',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80',
    bestFor: 'Countertops, luxury indoor flooring, elevator lobbies, interior walls',
    slipResistance: 'Low when wet (Recommended for interior)',
    reflectivity: '90° - 98° Gloss Units'
  },
  {
    id: 'honed',
    name: 'Honed (Matte) Finish',
    description: 'Satin-smooth surface with minimal reflection, providing a contemporary, understated appearance and comfortable tactile feel.',
    texture: 'Velvety smooth, non-reflective matte',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
    bestFor: 'Modern kitchens, commercial pathways, bathroom flooring, wall cladding',
    slipResistance: 'Moderate',
    reflectivity: '10° - 25° Gloss Units'
  },
  {
    id: 'flamed',
    name: 'Flamed (Thermal) Finish',
    description: 'Created by exposing the stone to intense high-temperature flame, causing surface crystals to burst into a rough, slip-resistant texture.',
    texture: 'Naturally textured, rustic & rugged',
    image: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=600&q=80',
    bestFor: 'Exterior plazas, swimming pool surrounds, driveways, outdoor stair treads',
    slipResistance: 'Excellent (R11 to R12 rating)',
    reflectivity: 'Zero glare'
  },
  {
    id: 'leathered',
    name: 'Leathered (Antique) Finish',
    description: 'Diamond-tipped abrasive brushes create a soft, pebbled surface texture that preserves the stone’s natural contours with a subtle sheen.',
    texture: 'Wavy, tactile, soft orange-peel feel',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80',
    bestFor: 'Granite bar tops, vanity tops, designer kitchen islands, living spaces',
    slipResistance: 'High (Hides fingerprints & water spots)',
    reflectivity: 'Soft satin luster'
  },
  {
    id: 'bush-hammered',
    name: 'Bush-Hammered Finish',
    description: 'Produced using mechanical pneumatic hammers with pyramid points, yielding an evenly distributed rough texture with high slip resistance.',
    texture: 'Uniformly pitted, stone masonry look',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80',
    bestFor: 'Heavy outdoor walkways, architectural facades, curb stones, landscape features',
    slipResistance: 'Maximum (R13 rating)',
    reflectivity: 'Matte textured'
  },
  {
    id: 'lapato',
    name: 'Lapato / Semi-Polished Finish',
    description: 'A selective polishing technique that polishes high points while leaving valleys textured, creating an intriguing contrast of sheen and grip.',
    texture: 'Dual micro-texture with sparkling highs',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80',
    bestFor: 'High-end retail flooring, luxury reception zones, covered patios',
    slipResistance: 'Balanced high grip',
    reflectivity: 'Selective luster highlights'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Natural Quarry Excavation',
    category: 'Quarry',
    image: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=900&q=80',
    description: 'Deep extraction bench with diamond wire saw lines cutting massive virgin stone layers.',
    aspectRatio: 'landscape'
  },
  {
    id: 'gal-2',
    title: 'Multi-Ton Raw Granite Blocks',
    category: 'Granite Blocks',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=900&q=80',
    description: 'Derrick crane staging yard holding seasoned raw blocks sorted by grain structure.',
    aspectRatio: 'portrait'
  },
  {
    id: 'gal-3',
    title: 'Multi-Blade Gang Saw In Operation',
    category: 'Cutting',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=900&q=80',
    description: 'High-speed diamond blade gang saw slicing a monolithic 35-ton block with water coolant.',
    aspectRatio: 'landscape'
  },
  {
    id: 'gal-4',
    title: '5-Axis CNC Bridge Saw',
    category: 'Machinery',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80',
    description: 'Precision computerized bridge saw profiling custom mitered edges and sink apertures.',
    aspectRatio: 'landscape'
  },
  {
    id: 'gal-5',
    title: 'Automated Slab Polishing Line',
    category: 'Polishing',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80',
    description: 'Multi-head continuous automated polishing line imparting mirror crystal sheen.',
    aspectRatio: 'portrait'
  },
  {
    id: 'gal-6',
    title: 'Calibrated Black Galaxy Slabs',
    category: 'Finished Products',
    image: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=900&q=80',
    description: 'Finished slabs sorted and tagged ready for container loading and project distribution.',
    aspectRatio: 'landscape'
  },
  {
    id: 'gal-7',
    title: 'Architectural Stone Cladding Yard',
    category: 'Finished Products',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80',
    description: 'Custom grooved facade panels tested for seamless dry jointing alignment.',
    aspectRatio: 'portrait'
  },
  {
    id: 'gal-8',
    title: 'Gantry Crane Block Handling',
    category: 'Machinery',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80',
    description: 'Heavy overhead gantry crane moving blocks between cutting and washing bays.',
    aspectRatio: 'landscape'
  },
  {
    id: 'gal-9',
    title: 'Diamond Blade Edge Profiler',
    category: 'Cutting',
    image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=900&q=80',
    description: 'Specialized diamond tool profile bit shaping double bullnose perimeter edge.',
    aspectRatio: 'landscape'
  }
];
