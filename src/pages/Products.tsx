
import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { products } from '../data/products';
import SearchBar from '../components/SearchBar';
import ProductSkeleton from '../components/ProductSkeleton';
import { useLoading } from '../hooks/useLoading';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { isLoading, startLoading, stopLoading } = useLoading(true);

  const categories = ['all', ...Array.from(new Set(products.map(p => p.category)))];

  // Simulate loading for better UX
  useEffect(() => {
    startLoading();
    const timer = setTimeout(() => {
      stopLoading();
    }, 800);
    return () => clearTimeout(timer);
  }, [selectedCategory, sortBy]);

  const filteredAndSearchedProducts = useMemo(() => {
    let filtered = products.filter(product => 
      selectedCategory === 'all' || product.category === selectedCategory
    );

    if (searchQuery.trim()) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });
  }, [selectedCategory, sortBy, searchQuery]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
          Our Drone Collection
        </h1>
        <p className="text-xl text-slate-600 mb-6">
          Explore our complete range of professional and recreational drones
        </p>
        
        {/* Search Bar */}
        <div className="mb-6">
          <SearchBar onSearch={setSearchQuery} />
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="flex-1">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map(category => (
                <SelectItem key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex-1">
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger>
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Name</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Results Count */}
      {searchQuery && !isLoading && (
        <div className="mb-4">
          <p className="text-slate-600">
            Found {filteredAndSearchedProducts.length} result{filteredAndSearchedProducts.length !== 1 ? 's' : ''} for "{searchQuery}"
          </p>
        </div>
      )}

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {isLoading ? (
          // Show skeleton loading
          Array.from({ length: 6 }).map((_, index) => (
            <ProductSkeleton key={index} />
          ))
        ) : (
          // Show actual products
          filteredAndSearchedProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <Badge variant="destructive">Out of Stock</Badge>
                  </div>
                )}
              </div>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <Badge variant="secondary">{product.category}</Badge>
                </div>
                <p className="text-slate-600 mb-4 line-clamp-2">{product.description}</p>
                
                <div className="space-y-2 mb-4 text-sm text-slate-600">
                  <div className="flex justify-between">
                    <span>Flight Time:</span>
                    <span>{product.specs.flightTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Range:</span>
                    <span>{product.specs.range}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">
                    ${product.price.toLocaleString()}
                  </span>
                  <Button asChild disabled={!product.inStock}>
                    <Link to={`/products/${product.id}`}>
                      {product.inStock ? 'View Details' : 'Out of Stock'}
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {filteredAndSearchedProducts.length === 0 && !isLoading && (
        <div className="text-center py-12">
          <p className="text-xl text-slate-600">
            {searchQuery ? `No products found for "${searchQuery}"` : 'No products found in this category.'}
          </p>
          {searchQuery && (
            <Button 
              variant="outline" 
              onClick={() => setSearchQuery('')}
              className="mt-4"
            >
              Clear Search
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default Products;
