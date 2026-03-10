import React, { createContext, useContext, useState, ReactNode, useCallback, useMemo } from 'react';
import { MenuItemType } from '../data/menuData';

export interface CartItem extends MenuItemType {
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  isCartOpen: boolean;
  addToCart: (item: MenuItemType) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  cartTotal: number;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = useCallback((item: MenuItemType) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setIsCartOpen(true);
  },[]);

  const removeFromCart = useCallback((id: string) => {
    setCart(prev => prev.filter(i => i.id !== id));
  },[]);

  const updateQuantity = useCallback((id: string, quantity: number) => {
    if (quantity <= 0) {
      setCart(prev => prev.filter(i => i.id !== id));
      return;
    }
    setCart(prev => prev.map(i => i.id === id ? { ...i, quantity } : i));
  },[]);

  const clearCart = useCallback(() => setCart([]),[]);
  const toggleCart = useCallback(() => setIsCartOpen(prev => !prev),[]);

  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  const value = useMemo(() => ({
    cart, isCartOpen, addToCart, removeFromCart, updateQuantity, clearCart, toggleCart, cartTotal, cartCount
  }),[cart, isCartOpen, addToCart, removeFromCart, updateQuantity, clearCart, toggleCart, cartTotal, cartCount]);

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};