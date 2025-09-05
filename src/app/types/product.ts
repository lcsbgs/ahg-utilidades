export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  category?: string;
  inStock?: boolean;
  featured?: boolean;
}

export type ProductCategory = 
  | 'Mesas'
  | 'Cadeiras' 
  | 'Estantes'
  | 'Camas'
  | 'Armários'
  | 'Sofás'
  | 'Decoração';