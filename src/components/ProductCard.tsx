"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '../types/product';
import { formatCurrency } from '../utils/format';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleInterestClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const message = encodeURIComponent(
      `Olá! Tenho interesse no produto "${product.name}" de R$ ${formatCurrency(product.price)}`
    );
    
    const phoneNumber = '5554984330548'; // WhatsApp number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Link href={`/produtos/${product.id}`} className="block">
      <div 
        className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Container */}
        <div className="relative h-64 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              style={{ objectFit: 'cover' }}
              className="w-full h-full transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 25vw"
              priority={true}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              <div className="text-center">
                <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                </svg>
                <p className="text-sm font-medium">{product.name}</p>
              </div>
            </div>
          )}
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Quick action badge */}
          <div className={`absolute top-4 right-4 transform transition-all duration-300 ${
            isHovered ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
          }`}>
            <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
              <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Title and Category */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-pink-100 to-blue-100 text-gray-700 rounded-full">
                Artesanal
              </span>
              {product.category && (
                <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">
                  {product.category}
                </span>
              )}
            </div>
            <h3 className="text-xl font-bold text-gray-800 group-hover:text-pink-600 transition-colors duration-200 line-clamp-1">
              {product.name}
            </h3>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
            {product.description}
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-1">
            <span className="inline-flex items-center gap-1 text-xs text-gray-500">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Madeira sustentável
            </span>
          </div>

          {/* Price and Action */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div>
              <span className="text-2xl font-bold text-gray-900">
                R$ {formatCurrency(product.price)}
              </span>
              <p className="text-xs text-gray-500 mt-1">À vista</p>
            </div>
            
            <button 
              onClick={handleInterestClick}
              className="group/btn bg-gradient-to-r from-pink-200 via-blue-200 to-green-200 hover:from-pink-300 hover:via-blue-300 hover:to-green-300 text-gray-800 font-semibold py-2.5 px-5 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg text-sm"
            >
              <span className="flex items-center gap-2">
                Interesse
                <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;