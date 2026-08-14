export type MenuItem = {
  id: string;
  name: string;
  category: string;
  description?: string;
  price?: number;
  oldPrice?: number;
  image: string;
  badge?: string;
  promoText?: string;
  isToppings?: boolean;
};

export const menu: MenuItem[] = [
  // ─── Combos Clásicos ───
  {
    id: 'combo-clasica',
    name: 'Combo Clásica',
    category: 'Combos Clásicos',
    description: 'Hamburguesa Clásica + Papas fritas',
    price: 20000,
    image: 'https://images.pexels.com/photos/983297/pexels-photo-983297.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'combo-2-cheese',
    name: 'Combo 2 Cheese',
    category: 'Combos Clásicos',
    description: 'Hamburguesa con doble queso + Papas fritas',
    price: 30000,
    image: 'https://images.pexels.com/photos/551991/pexels-photo-551991.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'combo-carnivora',
    name: 'Combo Carnívora',
    category: 'Combos Clásicos',
    description: 'Hamburguesa especial Carnívora + Papas fritas',
    price: 25000,
    image: 'https://images.pexels.com/photos/3228646/pexels-photo-3228646.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },

  // ─── Hamburguesas ───
  {
    id: 'doble-cheese',
    name: 'Doble Cheese',
    category: 'Hamburguesas',
    description: 'Doble carne, doble queso cheddar',
    price: 29000,
    image: 'https://images.pexels.com/photos/15010309/pexels-photo-15010309.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'hamburguesa-kid',
    name: 'Hamburguesa Kid',
    category: 'Hamburguesas',
    description: 'Ideal para los más chicos',
    price: 20000,
    image: 'https://images.pexels.com/photos/10922927/pexels-photo-10922927.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'toppings',
    name: 'Agregá tu Topping Favorito',
    category: 'Hamburguesas',
    description: 'Personalizá tu hamburguesa con estos extras',
    price: 3000,
    image: '',
    isToppings: true,
  },

  // ─── Lomitos ───
  {
    id: 'sandwich-lomito',
    name: 'Sándwich de Lomito',
    category: 'Lomitos',
    description: 'Delicioso pan tostado con lomito de primera',
    price: 20000,
    image: 'https://images.pexels.com/photos/19034914/pexels-photo-19034914.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'lomito-arabe',
    name: 'Lomito Árabe',
    category: 'Lomitos',
    description: 'Clásico lomito en pan árabe',
    price: 15000,
    image: 'https://images.pexels.com/photos/5175629/pexels-photo-5175629.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },

  // ─── Promociones ───
  {
    id: 'promo-jueves',
    name: 'Promo Jueves',
    category: 'Promociones',
    description: '2 Lomitos Árabes',
    price: 25000,
    oldPrice: 30000,
    image: 'https://images.pexels.com/photos/37322774/pexels-photo-37322774.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    badge: 'PROMO',
  },
  {
    id: 'promo-doble',
    name: 'Promo Doble',
    category: 'Promociones',
    description: '2 Doble Cheese',
    price: 45000,
    image: 'https://images.pexels.com/photos/28966660/pexels-photo-28966660.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    badge: 'PROMO',
  },
  {
    id: 'promo-gran',
    name: 'Promo de la Gran',
    category: 'Promociones',
    description: '2 Hamburguesas Carnívoras',
    price: 50000,
    image: 'https://images.pexels.com/photos/10679779/pexels-photo-10679779.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    badge: 'PROMO',
  },
];
