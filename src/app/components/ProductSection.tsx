"use client";

import ProductCard from './ProductCard';
import products from '../data/products';
import { useState } from 'react';

const ProductSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Get unique categories from products
  const categories = ['all', ...Array.from(new Set(products.map(product => product.category ?? '').filter(Boolean)))] as string[];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section id="produtos" className="py-20 bg-gradient-to-br from-pink-50 via-blue-50 to-green-50 flex items-center justify-center min-h-screen">
      <div className="container mx-auto px-6 flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full mb-4">
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-600">Nossos Produtos</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Coleção
            <span className="block bg-gradient-to-r from-pink-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
              Exclusiva
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Cada peça é cuidadosamente projetada e construída à mão, combinando 
            técnicas tradicionais com design contemporâneo para criar móveis únicos.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-pink-200 via-blue-200 to-green-200 text-gray-800 shadow-lg'
                  : 'bg-white/60 backdrop-blur-sm text-gray-600 hover:bg-white/80 shadow-md'
              }`}
            >
              {category === 'all' ? 'Todos' : category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-600 mb-2">Nenhum produto encontrado</h3>
            <p className="text-gray-500">Tente selecionar uma categoria diferente</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Não encontrou o que procurava?
            </h3>
            <p className="text-gray-600 mb-6">
              Criamos móveis personalizados sob medida para o seu espaço. 
              Entre em contato e vamos tornar sua visão realidade.
            </p>
            <button className="bg-gradient-to-r from-pink-200 via-blue-200 to-green-200 hover:from-pink-300 hover:via-blue-300 hover:to-green-300 text-gray-800 font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Solicitar Orçamento Personalizado
            </button>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-pink-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-1/2 right-20 w-24 h-24 bg-blue-200 rounded-full opacity-20 animate-float-delayed"></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-green-200 rounded-full opacity-20 animate-float"></div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-180deg); }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default ProductSection;