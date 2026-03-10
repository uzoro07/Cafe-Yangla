export type MenuItemType = {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  isVeg: boolean;
  image?: string;
};

export const menuData: MenuItemType[] =[
  // MAINS
  { 
    id: 'm1', 
    name: 'Signature Ramen', 
    price: 350, 
    description: 'Authentic ramen bowl with rich broth and fresh toppings.', 
    category: 'Mains', 
    isVeg: false,
    image: 'https://images.pexels.com/photos/17593649/pexels-photo-17593649.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  { 
    id: 'm2', 
    name: 'Garlic Butter Prawns', 
    price: 450, 
    description: 'Fresh prawns tossed in garlic butter and herbs.', 
    category: 'Mains', 
    isVeg: false,
    image: 'https://images.pexels.com/photos/725997/pexels-photo-725997.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  { 
    id: 'm3', 
    name: 'Yangla Special Pizza', 
    price: 400, 
    description: 'Voted best in town! Wood-fired with premium toppings.', 
    category: 'Mains', 
    isVeg: true,
    image: 'https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  { 
    id: 'm4', 
    name: 'Creamy Alfredo Pasta', 
    price: 320, 
    description: 'Rich and creamy pasta served with garlic bread.', 
    category: 'Mains', 
    isVeg: true,
    image: 'https://images.pexels.com/photos/5639532/pexels-photo-5639532.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  
  // BEVERAGES
  { 
    id: 'b1', 
    name: 'Green Iced Tea', 
    price: 180, 
    description: 'Refreshing iced green tea with a hint of mint.', 
    category: 'Beverages', 
    isVeg: true,
    image: 'https://images.pexels.com/photos/6249729/pexels-photo-6249729.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  { 
    id: 'b2', 
    name: 'Classic Cold Coffee', 
    price: 220, 
    description: 'Rich espresso blended with milk and ice cream.', 
    category: 'Beverages', 
    isVeg: true,
    image: 'https://images.pexels.com/photos/4790062/pexels-photo-4790062.jpeg?auto=compress&cs=tinysrgb&w=600'
  },

  // DESSERTS (SWEETS)
  { 
    id: 'd1', 
    name: 'Classic Tiramisu', 
    price: 280, 
    description: 'Coffee-soaked ladyfingers layered with creamy mascarpone.', 
    category: 'Desserts', 
    isVeg: true,
    image: 'https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  { 
    id: 'd2', 
    name: 'New York Cheesecake', 
    price: 300, 
    description: 'Rich, dense, and creamy slice of heaven with a graham crust.', 
    category: 'Desserts', 
    isVeg: true,
    image: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  { 
    id: 'd3', 
    name: 'Molten Lava Cake', 
    price: 250, 
    description: 'Warm chocolate cake with a gooey, melting chocolate center.', 
    category: 'Desserts', 
    isVeg: true,
    image: 'https://images.pexels.com/photos/3998950/pexels-photo-3998950.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];

export const categories = ['Mains', 'Beverages', 'Desserts'];