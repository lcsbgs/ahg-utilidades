'use client';

import { use } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import products from '../../data/products';
import { formatCurrency } from '../../utils/format';

interface Props {
  params: Promise<{ id: string }>;
}

export default function ProductPage({ params }: Props) {
  const resolvedParams = use(params);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === resolvedParams.id);
  
  if (!product) {
    notFound();
  }

  const phoneNumber = '5554984330548'; // WhatsApp number
  const whatsappMessage = encodeURIComponent(
    `Olá! Tenho interesse no produto "${product.name}" (${quantity}x) - Total: R$ ${formatCurrency(product.price * quantity)}`
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

  // Mock additional images for gallery
  const productImages = [
    product.image || '/placeholder-furniture.jpg',
    product.image || '/placeholder-furniture-2.jpg',
    product.image || '/placeholder-furniture-3.jpg',
  ];

  // Related products
  const relatedProducts = products
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 3);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-blue-50 to-green-50">
      {/* Header Spacer */}
      <div className="h-20"></div>

      <div className="container mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/#inicio" className="hover:text-pink-500 transition-colors">
            Início
          </Link>
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
          <Link href="/#produtos" className="hover:text-blue-500 transition-colors">
            Produtos
          </Link>
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
          <span className="text-gray-800 font-medium">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-white rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={productImages[selectedImage]}
                alt={product.name}
                width={600}
                height={600}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                priority
              />
            </div>

            {/* Image Thumbnails */}
            <div className="grid grid-cols-3 gap-3">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden transition-all duration-300 ${
                    selectedImage === index 
                      ? 'ring-4 ring-pink-400 shadow-lg scale-105' 
                      : 'ring-2 ring-gray-200 hover:ring-blue-300'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} - Vista ${index + 1}`}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 text-sm font-medium bg-gradient-to-r from-pink-100 to-blue-100 text-gray-700 rounded-full">
                  Artesanal
                </span>
                {product.category && (
                  <span className="px-3 py-1 text-sm font-medium bg-green-100 text-green-700 rounded-full">
                    {product.category}
                  </span>
                )}
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                {product.name}
              </h1>
              
              <div className="flex items-baseline gap-4">
                <span className="text-4xl font-bold text-gray-900">
                  R$ {formatCurrency(product.price)}
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Sobre este produto</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {product.description}
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                Este móvel é cuidadosamente construído à mão por nossos artesãos experientes, 
                utilizando técnicas tradicionais combinadas com design contemporâneo. 
                Cada peça é única e pode apresentar pequenas variações naturais da madeira, 
                garantindo a exclusividade do seu móvel.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Características</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-3 p-3 bg-white/60 rounded-lg">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Acabamento premium</span>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-white/60 rounded-lg">
                  <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Produto artesanal</span>
                </div>
              </div>
            </div>

            {/* Quantity and CTA */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-gray-700 font-medium">Quantidade:</span>
                <div className="flex items-center border-2 border-gray-200 rounded-lg overflow-hidden">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 transition-colors font-semibold"
                  >
                    -
                  </button>
                  <span className="px-6 py-2 bg-white font-semibold min-w-[60px] text-center">
                    {quantity}
                  </span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 transition-colors font-semibold"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Total Price */}
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 space-y-4">
                <div className="flex justify-between items-center text-lg">
                  <span className="text-gray-600">Subtotal ({quantity}x):</span>
                  <span className="font-bold text-gray-800">R$ {formatCurrency(product.price * quantity)}</span>
                </div>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>Frete:</span>
                  <span>Gratuito*</span>
                </div>
                <hr className="border-gray-200" />
                <div className="flex justify-between items-center text-xl font-bold">
                  <span className="text-gray-800">Total:</span>
                  <span className="text-gray-900">R$ {formatCurrency(product.price * quantity)}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-base"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  Comprar
                </a>
                
                <a
                  href={`mailto:vendas@ahgutilidades.com.br?subject=Orçamento%20personalizado%20-%20${encodeURIComponent(product.name)}&body=Olá,%0D%0A%0D%0AGostaria de solicitar um orçamento personalizado para o produto:%0D%0A%0D%0AProduto: ${encodeURIComponent(product.name)}%0D%0AQuantidade: ${quantity}%0D%0A%0D%0AAtenciosamente.`}
                  className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:bg-gray-50 text-center text-base"
                >
                  Orçamento
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-20">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-12">
              

              {/* Care Instructions */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  Cuidados
                </h3>
                <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Limpe com pano seco ou levemente úmido, sempre no sentido das fibras da madeira</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Evite produtos químicos agressivos ou abrasivos</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Mantenha longe da exposição direta ao sol para preservar a cor</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Aplique cera ou óleo para madeira a cada 6 meses para manter o brilho</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Proteja de umidade excessiva e variações bruscas de temperatura</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Produtos Relacionados
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <Link key={relatedProduct.id} href={`/produtos/${relatedProduct.id}`}>
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
                    <div className="relative h-48 bg-gray-200">
                      <Image
                        src={relatedProduct.image || '/placeholder-furniture.jpg'}
                        alt={relatedProduct.name}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors">
                        {relatedProduct.name}
                      </h4>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {relatedProduct.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-gray-900">
                          R$ {formatCurrency(relatedProduct.price)}
                        </span>
                        <span className="text-sm text-pink-600 font-medium group-hover:underline">
                          Ver detalhes →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}