import type { Product } from '../types/product';

const products: Product[] = [
  {
    id: 'armario-mtg',
    name: 'Armário MTG',
    description: 'Armário MTG com acabamento artesanal e design exclusivo.',
    price: 199.9,
    image: '/images/items/armario-mtg/MTG Armario 000 Raio AHG 001.PNG',
  },
  {
    id: 'armario-onix',
    name: 'Armário Ônix',
    description: 'Armário Ônix sofisticado, perfeito para ambientes modernos.',
    price: 249.9,
    image: '/images/items/armario-onix/MTG Armario Onix_1.PNG',
  },
  {
    id: 'outro-armario',
    name: 'Outro Armário',
    description: 'Outro modelo de armário artesanal, versátil e elegante.',
    price: 179.9,
    image: '/images/items/outro-armario/MTG Armario 000 AHG_1.PNG',
  },
];

export default products;
