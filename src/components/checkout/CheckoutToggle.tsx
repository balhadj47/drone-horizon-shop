
import React from 'react';

interface CheckoutToggleProps {
  isGuest: boolean;
  onToggle: (isGuest: boolean) => void;
}

const CheckoutToggle = ({ isGuest, onToggle }: CheckoutToggleProps) => {
  return (
    <div className="flex gap-4 text-sm">
      <button
        type="button"
        onClick={() => onToggle(true)}
        className={`px-3 py-1 rounded ${isGuest ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
      >
        Guest Checkout
      </button>
      <button
        type="button"
        onClick={() => onToggle(false)}
        className={`px-3 py-1 rounded ${!isGuest ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
      >
        Create Account
      </button>
    </div>
  );
};

export default CheckoutToggle;
