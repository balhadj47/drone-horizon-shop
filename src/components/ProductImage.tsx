
import React from 'react';

interface ProductImageProps {
  imageUrl: string | null;
  name: string;
}

const ProductImage = ({ imageUrl, name }: ProductImageProps) => {
  return (
    <div className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg overflow-hidden flex items-center justify-center p-8">
      <img 
        src={imageUrl || '/placeholder.svg'} 
        alt={name}
        className="max-w-full max-h-full object-contain"
      />
    </div>
  );
};

export default ProductImage;
