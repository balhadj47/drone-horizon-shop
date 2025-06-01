
import React, { useState, useMemo, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Filter } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { products } from '../data/products';
import { useLoading } from '../hooks/useLoading';
import { Product } from '../contexts/CartContext';
import ProductsHeader from '../components/ProductsHeader';
import ProductsMainFilters from '../components/ProductsMainFilters';
import ProductsGrid from '../components/ProductsGrid';
import ProductFilters from '../components/ProductFilters';
import QuickViewModal from '../components/QuickViewModal';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 15000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  const [filtersOpen, setFiltersOpen] = useState<boolean>(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  
  const { isLoading, startLoading, stopLoading } = useLoading(true);

  const categories = ['all', ...Array.from(new Set(products.map(p => p.category)))];

  // Simulate loading for better UX
  useEffect(() => {
    startLoading();
    const timer = setTimeout(() => {
      stopLoading();
    }, 800);
    return () => clearTimeout(timer);
  }, [selectedCategory, sortBy, selectedCategories, priceRange, inStockOnly]);

  const filteredAndSearchedProducts = useMemo(() => {
    let filtered = products.filter(product => {
      // Category filter
      const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
      
      // Advanced category filters
      const advancedCategoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
      
      // Price range filter
      const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
      
      // Stock filter
      const stockMatch = !inStockOnly || product.inStock;
      
      return categoryMatch && advancedCategoryMatch && priceMatch && stockMatch;
    });

    // Search filter
    if (searchQuery.trim()) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort
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
  }, [selectedCategory, sortBy, searchQuery, priceRange, selectedCategories, inStockOnly]);

  const handleCategoryChange = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleClearFilters = () => {
    setPriceRange([0, 15000]);
    setSelectedCategories([]);
    setInStockOnly(false);
    setSelectedCategory('all');
    setSearchQuery('');
  };

  const handleQuickView = (product: Product, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setQuickViewProduct(product);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <ProductsHeader onSearch={setSearchQuery} />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden mb-4">
            <Collapsible open={filtersOpen} onOpenChange={setFiltersOpen}>
              <CollapsibleTrigger asChild>
                <Button variant="outline" className="w-full">
                  <Filter className="mr-2 h-4 w-4" />
                  Filters
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-4">
                <ProductFilters
                  priceRange={priceRange}
                  onPriceRangeChange={setPriceRange}
                  selectedCategories={selectedCategories}
                  onCategoryChange={handleCategoryChange}
                  inStockOnly={inStockOnly}
                  onInStockChange={setInStockOnly}
                  onClearFilters={handleClearFilters}
                  categories={categories}
                />
              </CollapsibleContent>
            </Collapsible>
          </div>

          {/* Desktop Filters */}
          <div className="hidden lg:block">
            <ProductFilters
              priceRange={priceRange}
              onPriceRangeChange={setPriceRange}
              selectedCategories={selectedCategories}
              onCategoryChange={handleCategoryChange}
              inStockOnly={inStockOnly}
              onInStockChange={setInStockOnly}
              onClearFilters={handleClearFilters}
              categories={categories}
            />
          </div>
        </div>

        {/* Products Content */}
        <div className="lg:col-span-3">
          <ProductsMainFilters
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            sortBy={sortBy}
            onSortChange={setSortBy}
            categories={categories}
          />

          {/* Results Count */}
          {searchQuery && !isLoading && (
            <div className="mb-4">
              <p className="text-slate-600">
                Found {filteredAndSearchedProducts.length} result{filteredAndSearchedProducts.length !== 1 ? 's' : ''} for "{searchQuery}"
              </p>
            </div>
          )}

          <ProductsGrid
            products={filteredAndSearchedProducts}
            isLoading={isLoading}
            searchQuery={searchQuery}
            onQuickView={handleQuickView}
            onClearFilters={handleClearFilters}
          />
        </div>
      </div>

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </div>
  );
};

export default Products;
