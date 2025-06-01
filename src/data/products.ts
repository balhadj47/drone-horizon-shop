
import { Product } from '../contexts/CartContext';

export const products: Product[] = [
  // Consumer Drones Category
  {
    id: "1",
    name: "DJI Mini 4 Pro",
    price: 759,
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500&h=500&fit=crop",
    category: "Consumer Drones",
    description: "Compact drone with 4K camera, obstacle avoidance sensors, and weighs under 249g for easy travel and no registration required in most countries.",
    specs: {
      flightTime: "34 minutes",
      range: "20 km",
      camera: "4K 60fps",
      weight: "0.249 kg"
    },
    inStock: true
  },
  {
    id: "2",
    name: "DJI Air 3",
    price: 1059,
    image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=500&h=500&fit=crop",
    category: "Consumer Drones",
    description: "Dual-camera drone with Medium Tele and Wide-Angle cameras, 46-minute flight time, and advanced subject tracking capabilities.",
    specs: {
      flightTime: "46 minutes",
      range: "18 km",
      camera: "4K 60fps",
      weight: "0.72 kg"
    },
    inStock: true
  },
  {
    id: "3",
    name: "Autel EVO Nano+",
    price: 649,
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=500&h=500&fit=crop",
    category: "Consumer Drones",
    description: "Affordable compact drone with 50MP camera, obstacle sensors, and intelligent flight modes perfect for hobbyists and casual users.",
    specs: {
      flightTime: "28 minutes",
      range: "10 km",
      camera: "4K 30fps",
      weight: "0.249 kg"
    },
    inStock: true
  },

  // Professional Drones Category
  {
    id: "4",
    name: "DJI Mavic 3 Pro",
    price: 1499,
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500&h=500&fit=crop",
    category: "Professional Drones",
    description: "Triple camera system including telephoto lens, Hasselblad main camera, and 43-minute flight time for professional cinematography and surveying.",
    specs: {
      flightTime: "43 minutes",
      range: "15 km",
      camera: "5.1K 50fps",
      weight: "0.9 kg"
    },
    inStock: true
  },
  {
    id: "5",
    name: "Autel EVO II Pro V3",
    price: 1299,
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=500&h=500&fit=crop",
    category: "Professional Drones",
    description: "Professional drone with 6K camera, long-range transmission capabilities, and advanced flight performance for industrial applications.",
    specs: {
      flightTime: "40 minutes",
      range: "15 km",
      camera: "6K 30fps",
      weight: "1.19 kg"
    },
    inStock: true
  },
  {
    id: "6",
    name: "DJI Inspire 3",
    price: 11249,
    image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=500&h=500&fit=crop",
    category: "Professional Drones",
    description: "Cinema-level drone with full-frame 8K camera, RTK positioning, and professional cinematography features for Hollywood productions.",
    specs: {
      flightTime: "28 minutes",
      range: "15 km",
      camera: "8K 75fps",
      weight: "4.2 kg"
    },
    inStock: true
  },

  // FPV & Racing Drones Category
  {
    id: "7",
    name: "DJI Avata 2",
    price: 989,
    image: "https://images.unsplash.com/photo-1546776230-bb5f6139ff0a?w=500&h=500&fit=crop",
    category: "FPV & Racing Drones",
    description: "Built-in propeller guards, 4K stabilized camera, and compatibility with Goggles 3 for immersive FPV flying experience.",
    specs: {
      flightTime: "23 minutes",
      range: "13.2 km",
      camera: "4K 60fps",
      weight: "0.377 kg"
    },
    inStock: true
  },
  {
    id: "8",
    name: "iFlight Nazgul Evoque F5",
    price: 289,
    image: "https://images.unsplash.com/photo-1508614732287-89596d3d129a?w=500&h=500&fit=crop",
    category: "FPV & Racing Drones",
    description: "Bind-and-fly racing quadcopter with top-tier performance, carbon fiber frame, and optimized for competitive FPV racing.",
    specs: {
      flightTime: "6 minutes",
      range: "2 km",
      camera: "FPV Only",
      weight: "0.42 kg"
    },
    inStock: true
  },

  // Accessories Category
  {
    id: "9",
    name: "DJI RC 2 Controller",
    price: 299,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop",
    category: "Accessories",
    description: "Advanced remote controller with built-in screen, enhanced transmission range, and compatibility with multiple DJI drone models.",
    specs: {
      flightTime: "N/A",
      range: "18 km",
      camera: "N/A",
      weight: "0.6 kg"
    },
    inStock: true
  },
  {
    id: "10",
    name: "ND Filter Kit - Mini 4 Pro",
    price: 89,
    image: "https://images.unsplash.com/photo-1521405924368-64c5b84bec60?w=500&h=500&fit=crop",
    category: "Accessories",
    description: "Professional ND filter set for DJI Mini 4 Pro including ND4, ND8, ND16, and ND32 filters for perfect exposure control.",
    specs: {
      flightTime: "N/A",
      range: "N/A",
      camera: "Filter Set",
      weight: "0.02 kg"
    },
    inStock: true
  },
  {
    id: "11",
    name: "ND Filter Kit - Mavic 3",
    price: 149,
    image: "https://images.unsplash.com/photo-1521405924368-64c5b84bec60?w=500&h=500&fit=crop",
    category: "Accessories",
    description: "Professional ND filter collection for DJI Mavic 3 series including multiple density options for cinematic footage.",
    specs: {
      flightTime: "N/A",
      range: "N/A",
      camera: "Filter Set",
      weight: "0.05 kg"
    },
    inStock: true
  },
  {
    id: "12",
    name: "ND Filter Kit - Avata",
    price: 69,
    image: "https://images.unsplash.com/photo-1521405924368-64c5b84bec60?w=500&h=500&fit=crop",
    category: "Accessories",
    description: "Specialized ND filter kit for DJI Avata FPV drone to enhance video quality during high-speed flights.",
    specs: {
      flightTime: "N/A",
      range: "N/A",
      camera: "Filter Set",
      weight: "0.015 kg"
    },
    inStock: true
  },
  {
    id: "13",
    name: "Fly More Kit - Mini 4 Pro",
    price: 329,
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500&h=500&fit=crop",
    category: "Accessories",
    description: "Complete accessory bundle with extra batteries, charging hub, carrying case, and propellers for extended flight sessions.",
    specs: {
      flightTime: "Extended",
      range: "N/A",
      camera: "N/A",
      weight: "0.8 kg"
    },
    inStock: true
  },
  {
    id: "14",
    name: "Fly More Kit - Mavic 3",
    price: 549,
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500&h=500&fit=crop",
    category: "Accessories",
    description: "Professional accessory package including multiple batteries, charger hub, ND filters, and protective case for Mavic 3 series.",
    specs: {
      flightTime: "Extended",
      range: "N/A",
      camera: "N/A",
      weight: "1.5 kg"
    },
    inStock: true
  },
  {
    id: "15",
    name: "DJI Goggles 3",
    price: 799,
    image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=500&h=500&fit=crop",
    category: "Accessories",
    description: "Latest FPV goggles with micro-OLED screens, head tracking, and ultra-low latency for immersive drone flying experience.",
    specs: {
      flightTime: "2.5 hours",
      range: "13.2 km",
      camera: "N/A",
      weight: "0.42 kg"
    },
    inStock: true
  },
  {
    id: "16",
    name: "Propeller Guards - Universal",
    price: 39,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop",
    category: "Accessories",
    description: "Protective propeller guards compatible with multiple drone models for safer indoor flying and collision protection.",
    specs: {
      flightTime: "N/A",
      range: "N/A",
      camera: "N/A",
      weight: "0.1 kg"
    },
    inStock: true
  }
];
