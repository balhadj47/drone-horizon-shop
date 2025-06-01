import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Eye, Heart, ShoppingCart, Filter } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { products } from '../data/products';
import { useCart } from '../contexts/CartContext';
import { useWishlist } from '../contexts/WishlistContext';
import SearchBar from '../components/SearchBar';
import ProductSkeleton from '../components/ProductSkeleton';
import ProductFilters from '../components/ProductFilters';
import QuickViewModal from '../components/QuickViewModal';
import { useLoading } from '../hooks/useLoading';
import { toast } from '@/hooks/use-toast';
import { Product } from '../contexts/CartContext';

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
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

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

  const handleQuickAddToCart = (product: Product, quantity: number = 1, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Add multiple quantities at once
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    toast({
      title: "Added to cart",
      description: `${quantity} x ${product.name} added to your cart.`,
    });
  };

  const handleWishlistToggle = (product: Product, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
      toast({
        title: "Removed from wishlist",
        description: `${product.name} has been removed from your wishlist.`,
      });
    } else {
      addToWishlist(product);
      toast({
        title: "Added to wishlist",
        description: `${product.name} has been added to your wishlist.`,
      });
    }
  };

  const handleQuickView = (product: Product, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setQuickViewProduct(product);
  };

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
          {/* Basic Filters */}
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
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {isLoading ? (
              Array.from({ length: 6 }).map((_, index) => (
                <ProductSkeleton key={index} />
              ))
            ) : (
              filteredAndSearchedProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    
                    {/* Quick Action Buttons */}
                    <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button
                        size="icon"
                        variant="secondary"
                        className="h-8 w-8"
                        onClick={(e) => handleQuickView(product, e)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="secondary"
                        className={`h-8 w-8 ${isInWishlist(product.id) ? 'text-red-600' : ''}`}
                        onClick={(e) => handleWishlistToggle(product, e)}
                      >
                        <Heart className={`h-4 w-4 ${isInWishlist(product.id) ? 'fill-current' : ''}`} />
                      </Button>
                    </div>

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
                      <div className="flex gap-2">
                        {/* Quantity Selector with Add to Cart */}
                        <div className="flex items-center border rounded-md">
                          <Button 
                            size="sm"
                            variant="ghost"
                            className="px-2 h-8"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              const qtyInput = e.currentTarget.parentElement?.querySelector('input') as HTMLInputElement;
                              if (qtyInput && parseInt(qtyInput.value) > 1) {
                                qtyInput.value = (parseInt(qtyInput.value) - 1).toString();
                              }
                            }}
                            disabled={!product.inStock}
                          >
                            -
                          </Button>
                          <input 
                            type="number" 
                            min="1" 
                            max="10" 
                            defaultValue="1"
                            className="w-12 text-center border-0 focus:ring-0 h-8 text-sm"
                            onClick={(e) => e.stopPropagation()}
                            disabled={!product.inStock}
                          />
                          <Button 
                            size="sm"
                            variant="ghost"
                            className="px-2 h-8"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              const qtyInput = e.currentTarget.parentElement?.querySelector('input') as HTMLInputElement;
                              if (qtyInput && parseInt(qtyInput.value) < 10) {
                                qtyInput.value = (parseInt(qtyInput.value) + 1).toString();
                              }
                            }}
                            disabled={!product.inStock}
                          >
                            +
                          </Button>
                        </div>
                        <Button 
                          size="sm"
                          onClick={(e) => {
                            const qtyInput = e.currentTarget.parentElement?.querySelector('input') as HTMLInputElement;
                            const quantity = qtyInput ? parseInt(qtyInput.value) : 1;
                            handleQuickAddToCart(product, quantity, e);
                          }}
                          disabled={!product.inStock}
                        >
                          <ShoppingCart className="h-4 w-4 mr-1" />
                          Add
                        </Button>
                        <Button asChild size="sm" variant="outline" disabled={!product.inStock}>
                          <Link to={`/products/${product.id}`}>
                            Details
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>

          {filteredAndSearchedProducts.length === 0 && !isLoading && (
            <div className="text-center py-12">
              <p className="text-xl text-slate-600">
                {searchQuery ? `No products found for "${searchQuery}"` : 'No products found matching your filters.'}
              </p>
              <Button 
                variant="outline" 
                onClick={handleClearFilters}
                className="mt-4"
              >
                Clear All Filters
              </Button>
            </div>
          )}
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
