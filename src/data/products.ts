
import { Product } from '../contexts/CartContext';

export const products: Product[] = [
  {
    id: "1",
    name: "DJI Mavic 3 Pro",
    price: 2199,
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
    id: "2",
    name: "DJI Mini 3",
    price: 759,
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
    id: "3",
    name: "FPV Racing Drone X1",
    price: 899,
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
    id: "4",
    name: "DJI Matrice 300 RTK",
    price: 13999,
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
    id: "5",
    name: "DJI Mini SE",
    price: 299,
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
    id: "6",
    name: "DJI Air 3",
    price: 1549,
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
    id: "7",
    name: "Surveillance Pro X5",
    price: 3299,
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
    id: "8",
    name: "AgroMapper 450",
    price: 8999,
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
  }
];
