
import React from 'react';
import SearchBar from './SearchBar';

interface ProductsHeaderProps {
  onSearch: (query: string) => void;
}

const ProductsHeader = ({ onSearch }: ProductsHeaderProps) => {
  return (
    <div className="mb-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
        Our Drone Collection
      </h1>
      <p className="text-xl text-slate-600 mb-6">
        Explore our complete range of professional and recreational drones
      </p>
      
      {/* Search Bar */}
      <div className="mb-6">
        <SearchBar onSearch={onSearch} />
      </div>
    </div>
  );
};

export default ProductsHeader;
