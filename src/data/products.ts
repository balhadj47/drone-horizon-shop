
import { Product } from '../contexts/CartContext';

export const products: Product[] = [
  {
    id: "1",
    name: "SkyMaster Pro 4K",
    price: 1299,
    image: "/placeholder.svg",
    category: "Professional",
    description: "Professional-grade drone with 4K camera and advanced stabilization. Perfect for aerial photography and videography professionals.",
    specs: {
      flightTime: "30 minutes",
      range: "7 km",
      camera: "4K 60fps",
      weight: "1.2 kg"
    },
    inStock: true
  },
  {
    id: "2",
    name: "AeroScout Beginner",
    price: 299,
    image: "/placeholder.svg",
    category: "Beginner",
    description: "Easy-to-fly drone perfect for beginners. Features one-button takeoff and landing with built-in safety features.",
    specs: {
      flightTime: "15 minutes",
      range: "500 m",
      camera: "1080p 30fps",
      weight: "0.5 kg"
    },
    inStock: true
  },
  {
    id: "3",
    name: "RacingBolt X1",
    price: 899,
    image: "/placeholder.svg",
    category: "Racing",
    description: "High-speed racing drone built for competitive flying. Ultra-lightweight with advanced maneuverability.",
    specs: {
      flightTime: "8 minutes",
      range: "1 km",
      camera: "720p 120fps",
      weight: "0.3 kg"
    },
    inStock: true
  },
  {
    id: "4",
    name: "CargoLift Heavy",
    price: 2499,
    image: "/placeholder.svg",
    category: "Commercial",
    description: "Industrial-grade drone for cargo delivery and heavy payload transport. Built for commercial applications.",
    specs: {
      flightTime: "45 minutes",
      range: "15 km",
      camera: "4K 30fps",
      weight: "5.2 kg"
    },
    inStock: true
  },
  {
    id: "5",
    name: "MiniHover Compact",
    price: 199,
    image: "/placeholder.svg",
    category: "Mini",
    description: "Ultra-portable mini drone that fits in your pocket. Perfect for indoor flying and travel photography.",
    specs: {
      flightTime: "12 minutes",
      range: "100 m",
      camera: "1080p 30fps",
      weight: "0.2 kg"
    },
    inStock: false
  },
  {
    id: "6",
    name: "StormChaser Pro",
    price: 1799,
    image: "/placeholder.svg",
    category: "Professional",
    description: "Weather-resistant drone designed for extreme conditions. Features enhanced wind resistance and waterproof camera.",
    specs: {
      flightTime: "35 minutes",
      range: "10 km",
      camera: "4K 60fps",
      weight: "1.8 kg"
    },
    inStock: true
  }
];
