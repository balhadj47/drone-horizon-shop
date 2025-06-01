
import { Product } from '../contexts/CartContext';

export const products: Product[] = [
  // Photography Category
  {
    id: "1",
    name: "DJI Mavic 3 Pro",
    price: 1799,
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500&h=500&fit=crop",
    category: "Photography",
    description: "The DJI Mavic 3 Pro features a Hasselblad camera with 4/3 CMOS sensor, delivering stunning 5.1K video and 20MP photos with exceptional detail and color accuracy.",
    specs: {
      flightTime: "43 minutes",
      range: "15 km",
      camera: "5.1K 50fps",
      weight: "0.9 kg"
    },
    inStock: true
  },
  {
    id: "9",
    name: "DJI Inspire 3",
    price: 13499,
    image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=500&h=500&fit=crop",
    category: "Photography",
    description: "Professional cinematography drone with full-frame 8K camera, 360° obstacle sensing, and centimeter-level RTK positioning for Hollywood-quality productions.",
    specs: {
      flightTime: "28 minutes",
      range: "15 km",
      camera: "8K 75fps",
      weight: "4.2 kg"
    },
    inStock: true
  },
  {
    id: "10",
    name: "Autel EVO Lite+",
    price: 899,
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=500&h=500&fit=crop",
    category: "Photography",
    description: "6K camera drone with 1-inch CMOS sensor, intelligent flight modes, and advanced obstacle avoidance for professional aerial photography.",
    specs: {
      flightTime: "40 minutes",
      range: "12 km",
      camera: "6K 30fps",
      weight: "0.83 kg"
    },
    inStock: true
  },

  // Entry Level Category
  {
    id: "2",
    name: "DJI Mini 3",
    price: 619,
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=500&h=500&fit=crop",
    category: "Entry Level",
    description: "Ultra-lightweight and compact drone perfect for beginners. Features intelligent flight modes, 4K HDR video, and enhanced wind resistance for stable flights.",
    specs: {
      flightTime: "38 minutes",
      range: "10 km",
      camera: "4K 30fps",
      weight: "0.25 kg"
    },
    inStock: true
  },
  {
    id: "11",
    name: "Ryze Tello",
    price: 89,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop",
    category: "Entry Level",
    description: "Perfect starter drone for kids and beginners. Easy to fly with smartphone app control, HD video recording, and programmable flight patterns.",
    specs: {
      flightTime: "13 minutes",
      range: "0.1 km",
      camera: "720p 30fps",
      weight: "0.08 kg"
    },
    inStock: true
  },
  {
    id: "12",
    name: "Holy Stone HS720E",
    price: 199,
    image: "https://images.unsplash.com/photo-1546776230-bb5f6139ff0a?w=500&h=500&fit=crop",
    category: "Entry Level",
    description: "Beginner-friendly drone with 4K camera, GPS return home, follow me mode, and intuitive controls for new pilots.",
    specs: {
      flightTime: "23 minutes",
      range: "1 km",
      camera: "4K 30fps",
      weight: "0.65 kg"
    },
    inStock: true
  },

  // Racing Category
  {
    id: "3",
    name: "FPV Racing Drone X1",
    price: 739,
    image: "https://images.unsplash.com/photo-1546776230-bb5f6139ff0a?w=500&h=500&fit=crop",
    category: "Racing",
    description: "High-speed FPV racing drone built for competitive flying. Carbon fiber frame with powerful brushless motors for ultimate performance and agility.",
    specs: {
      flightTime: "8 minutes",
      range: "1.5 km",
      camera: "1080p 120fps",
      weight: "0.35 kg"
    },
    inStock: true
  },
  {
    id: "13",
    name: "iFlight Nazgul5 V2",
    price: 159,
    image: "https://images.unsplash.com/photo-1508614732287-89596d3d129a?w=500&h=500&fit=crop",
    category: "Racing",
    description: "Professional racing quadcopter frame kit with carbon fiber construction, optimized for speed and agility in competitive FPV racing.",
    specs: {
      flightTime: "6 minutes",
      range: "2 km",
      camera: "FPV Only",
      weight: "0.42 kg"
    },
    inStock: true
  },
  {
    id: "14",
    name: "EMAX Tinyhawk III",
    price: 99,
    image: "https://images.unsplash.com/photo-1521405924368-64c5b84bec60?w=500&h=500&fit=crop",
    category: "Racing",
    description: "Micro FPV racing drone perfect for indoor racing and learning. Durable design with protective propeller guards and easy repairs.",
    specs: {
      flightTime: "4 minutes",
      range: "0.5 km",
      camera: "25mW VTX",
      weight: "0.035 kg"
    },
    inStock: true
  },

  // Ultra-Portable Category
  {
    id: "5",
    name: "DJI Mini SE",
    price: 249,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop",
    category: "Ultra-Portable",
    description: "Entry-level mini drone that's perfect for beginners. Ultra-portable design with 2.7K camera and simplified flight controls for easy operation.",
    specs: {
      flightTime: "30 minutes",
      range: "4 km",
      camera: "2.7K 30fps",
      weight: "0.24 kg"
    },
    inStock: false
  },
  {
    id: "15",
    name: "DJI Mini 4K",
    price: 299,
    image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=500&h=500&fit=crop",
    category: "Ultra-Portable",
    description: "Ultra-compact drone with 4K camera and 3-axis gimbal. Weighs under 249g, no registration required in many countries.",
    specs: {
      flightTime: "31 minutes",
      range: "10 km",
      camera: "4K 30fps",
      weight: "0.249 kg"
    },
    inStock: true
  },
  {
    id: "16",
    name: "Potensic Atom SE",
    price: 179,
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500&h=500&fit=crop",
    category: "Ultra-Portable",
    description: "Lightweight foldable drone with 4K camera, GPS positioning, and one-key return. Perfect for travel and casual aerial photography.",
    specs: {
      flightTime: "32 minutes",
      range: "6 km",
      camera: "4K 25fps",
      weight: "0.249 kg"
    },
    inStock: true
  },

  // Professional Category
  {
    id: "6",
    name: "DJI Air 3",
    price: 1269,
    image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=500&h=500&fit=crop",
    category: "Professional",
    description: "Dual-camera drone with Medium Tele and Wide-Angle cameras. Features omnidirectional obstacle sensing and 46-minute flight time for extended aerial photography.",
    specs: {
      flightTime: "46 minutes",
      range: "18 km",
      camera: "4K 60fps",
      weight: "0.72 kg"
    },
    inStock: true
  },
  {
    id: "17",
    name: "Skydio 2+",
    price: 999,
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=500&h=500&fit=crop",
    category: "Professional",
    description: "AI-powered autonomous drone with advanced computer vision. Exceptional obstacle avoidance and subject tracking for professional cinematography.",
    specs: {
      flightTime: "27 minutes",
      range: "6 km",
      camera: "4K 60fps",
      weight: "0.775 kg"
    },
    inStock: true
  },

  // Surveillance Category
  {
    id: "7",
    name: "Surveillance Pro X5",
    price: 2699,
    image: "https://images.unsplash.com/photo-1508614732287-89596d3d129a?w=500&h=500&fit=crop",
    category: "Surveillance",
    description: "Advanced surveillance drone with thermal imaging and night vision capabilities. Perfect for security monitoring and search operations.",
    specs: {
      flightTime: "40 minutes",
      range: "12 km",
      camera: "4K + Thermal",
      weight: "1.2 kg"
    },
    inStock: true
  },
  {
    id: "18",
    name: "Autel EVO Max 4T",
    price: 4999,
    image: "https://images.unsplash.com/photo-1521405924368-64c5b84bec60?w=500&h=500&fit=crop",
    category: "Surveillance",
    description: "Professional surveillance drone with thermal, wide-angle, zoom, and laser rangefinder cameras. Anti-jamming technology and rugged design.",
    specs: {
      flightTime: "42 minutes",
      range: "20 km",
      camera: "8K + Thermal",
      weight: "2.7 kg"
    },
    inStock: true
  },

  // Agriculture Category
  {
    id: "4",
    name: "DJI Matrice 300 RTK",
    price: 11499,
    image: "https://images.unsplash.com/photo-1521405924368-64c5b84bec60?w=500&h=500&fit=crop",
    category: "Agriculture",
    description: "Industrial-grade drone platform designed for enterprise applications. Features dual-operator control, advanced AI capabilities, and weather resistance.",
    specs: {
      flightTime: "55 minutes",
      range: "15 km",
      camera: "Interchangeable",
      weight: "6.3 kg"
    },
    inStock: true
  },
  {
    id: "8",
    name: "AgroMapper 450",
    price: 7399,
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500&h=500&fit=crop",
    category: "Agriculture",
    description: "Specialized agricultural drone with crop monitoring sensors, GPS mapping, and automated flight patterns for precision farming.",
    specs: {
      flightTime: "60 minutes",
      range: "20 km",
      camera: "Multispectral",
      weight: "3.5 kg"
    },
    inStock: true
  },
  {
    id: "19",
    name: "DJI Agras T40",
    price: 14999,
    image: "https://images.unsplash.com/photo-1508614732287-89596d3d129a?w=500&h=500&fit=crop",
    category: "Agriculture",
    description: "Agricultural spraying drone with 40L tank capacity, precision spraying system, and terrain-following radar for crop protection.",
    specs: {
      flightTime: "20 minutes",
      range: "7 km",
      camera: "FPV + Mapping",
      weight: "24.5 kg"
    },
    inStock: true
  }
];
