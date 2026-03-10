import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { MenuItemType } from '../data/menuData';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/formatCurrency';

interface MenuItemProps {
  item: MenuItemType;
  index: number;
}

export const MenuItem: React.FC<MenuItemProps> = ({ item, index }) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease:[0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col py-6 border-b border-[#2B2620] hover:bg-white/[0.02] transition-colors rounded-xl px-4 -mx-4"
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-end gap-3 w-full">
          <div className="flex items-center gap-3">
            <h3 className="text-xl font-playfair text-[#FDFBF7] group-hover:text-[#D4A373] transition-colors whitespace-nowrap">
              {item.name}
            </h3>
            <div className={`w-3 h-3 shrink-0 rounded-sm border flex items-center justify-center ${item.isVeg ? 'border-green-500' : 'border-red-500'}`}>
              <div className={`w-1.5 h-1.5 rounded-full ${item.isVeg ? 'bg-green-500' : 'bg-red-500'}`} />
            </div>
          </div>
          <div className="flex-1 border-b-[2px] border-dotted border-[#2B2620] mb-1.5 opacity-50" />
          <span className="text-lg font-inter text-[#FDFBF7] whitespace-nowrap">
            {formatCurrency(item.price)}
          </span>
        </div>
        
        <div className="flex items-start justify-between gap-4">
          <p className="text-[#A39F98] text-sm font-light leading-relaxed pr-8 flex-1">
            {item.description}
          </p>
          <button
            onClick={() => addToCart(item)}
            className="w-10 h-10 shrink-0 rounded-full border border-[#2B2620] flex items-center justify-center text-[#A39F98] hover:text-[#0C0804] hover:bg-[#D4A373] hover:border-[#D4A373] transition-all duration-300 cursor-pointer"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};