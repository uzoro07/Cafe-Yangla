import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/formatCurrency';
import { generateWhatsAppLink } from '../utils/whatsappOrder';

export const CartDrawer = () => {
  const { cart, isCartOpen, toggleCart, updateQuantity, cartTotal } = useCart();

  const handleCheckout = () => {
    if (cart.length === 0) return;
    const link = generateWhatsAppLink(cart, cartTotal);
    window.open(link, '_blank');
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 cursor-pointer"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full md:w-[450px] bg-[#15110D] border-l border-[#2B2620] z-50 flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-[#2B2620]">
              <h2 className="text-2xl font-playfair text-[#FDFBF7] flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-[#D4A373]" />
                Your Order
              </h2>
              <button
                onClick={toggleCart}
                className="p-2 text-[#A39F98] hover:text-white transition-colors rounded-full hover:bg-white/5 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-[#A39F98] space-y-4">
                  <ShoppingBag className="w-12 h-12 opacity-20" />
                  <p className="font-inter">Your cart is empty</p>
                  <button
                    onClick={toggleCart}
                    className="text-[#D4A373] hover:text-[#CBA052] underline underline-offset-4 cursor-pointer"
                  >
                    Explore Menu
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-4 items-start">
                      <div className="flex-1">
                        <h4 className="text-[#FDFBF7] font-medium mb-1">{item.name}</h4>
                        <p className="text-[#D4A373] text-sm">{formatCurrency(item.price)}</p>
                      </div>
                      
                      <div className="flex items-center gap-3 bg-black/40 rounded-full border border-[#2B2620] p-1">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center rounded-full text-[#A39F98] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-medium w-4 text-center text-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center rounded-full text-[#A39F98] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-[#2B2620] bg-[#0C0804]">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[#A39F98]">Total</span>
                  <span className="text-2xl font-playfair text-[#FDFBF7]">
                    {formatCurrency(cartTotal)}
                  </span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full py-4 bg-[#D4A373] text-black font-medium tracking-wide rounded-full hover:bg-[#CBA052] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  Order via WhatsApp
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};