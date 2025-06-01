
import React, { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Filter } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { useProducts } from '../hooks/useProducts';
import { useCategories } from '../hooks/useCategories';
import ProductsHeader from '../components/ProductsHeader';
import ProductsMainFilters from '../components/ProductsMainFilters';
import ProductsGrid from '../components/ProductsGrid';
import ProductFilters from '../components/ProductFilters';
import QuickViewModal from '../components/QuickViewModal';
import { Product } from '../hooks/useProducts';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  const [filtersOpen, setFiltersOpen] = useState<boolean>(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const { data: products = [], isLoading } = useProducts();
  const { data: categories = [] } = useCategories();

  // Convert category names for compatibility with existing filter logic
  const categoryNames = ['all', ...categories.map(cat => cat.name)];

  const filteredAndSearchedProducts = useMemo(() => {
    let filtered = products.filter(product => {
      // Category filter
      const categoryMatch = selectedCategory === 'all' || product.category?.name === selectedCategory;
      
      // Advanced category filters
      const advancedCategoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category?.name || '');
      
      // Price range filter
      const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
      
      // Stock filter
      const stockMatch = !inStockOnly || product.in_stock;
      
      return categoryMatch && advancedCategoryMatch && priceMatch && stockMatch;
    });

    // Search filter
    if (searchQuery.trim()) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (product.category?.name || '').toLowerCase().includes(searchQuery.toLowerCase())
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
  }, [products, selectedCategory, sortBy, searchQuery, priceRange, selectedCategories, inStockOnly]);

  const handleCategoryChange = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleClearFilters = () => {
    setPriceRange([0, 2000]);
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

  // Convert database product to legacy format for compatibility
  const convertedProducts = filteredAndSearchedProducts.map(product => ({
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    category: product.category?.name || 'Unknown',
    image: product.image_url || '/placeholder.svg',
    inStock: product.in_stock,
    specs: {
      flightTime: product.specifications?.max_flight_time || 'N/A',
      range: product.specifications?.range || 'N/A',
      camera: product.specifications?.camera_resolution || 'N/A',
      weight: product.specifications?.weight || 'N/A'
    }
  }));

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
                  categories={categoryNames}
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
              categories={categoryNames}
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
            categories={categoryNames}
          />

          {/* Results Count */}
          {searchQuery && !isLoading && (
            <div className="mb-4">
              <p className="text-slate-600">
                Found {convertedProducts.length} result{convertedProducts.length !== 1 ? 's' : ''} for "{searchQuery}"
              </p>
            </div>
          )}

          <ProductsGrid
            products={convertedProducts}
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
