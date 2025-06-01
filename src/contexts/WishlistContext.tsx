
import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Product } from './CartContext';

interface WishlistState {
  items: Product[];
}

interface WishlistContextType {
  state: WishlistState;
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
}

type WishlistAction = 
  | { type: 'ADD_TO_WISHLIST'; payload: Product }
  | { type: 'REMOVE_FROM_WISHLIST'; payload: string };

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

const initialState: WishlistState = { items: [] };

const wishlistReducer = (state: WishlistState, action: WishlistAction): WishlistState => {
  console.log('Wishlist reducer action:', action.type, action.payload);
  
  switch (action.type) {
    case 'ADD_TO_WISHLIST':
      if (state.items.some(item => item.id === action.payload.id)) {
        return state;
      }
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case 'REMOVE_FROM_WISHLIST':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
    default:
      return state;
  }
};

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  console.log('WishlistProvider rendering');
  
  const [state, dispatch] = useReducer(wishlistReducer, initialState);

  const addToWishlist = (product: Product) => {
    console.log('Adding to wishlist:', product);
    dispatch({ type: 'ADD_TO_WISHLIST', payload: product });
  };

  const removeFromWishlist = (productId: string) => {
    console.log('Removing from wishlist:', productId);
    dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: productId });
  };

  const isInWishlist = (productId: string) => {
    const result = state.items.some(item => item.id === productId);
    console.log('isInWishlist check for', productId, ':', result);
    return result;
  };

  const contextValue = {
    state,
    addToWishlist,
    removeFromWishlist,
    isInWishlist
  };

  console.log('WishlistProvider context value:', contextValue);

  return (
    <WishlistContext.Provider value={contextValue}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  console.log('useWishlist hook called');
  
  const context = useContext(WishlistContext);
  if (!context) {
    console.error('useWishlist must be used within a WishlistProvider');
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  
  console.log('useWishlist returning context:', context);
  return context;
};
