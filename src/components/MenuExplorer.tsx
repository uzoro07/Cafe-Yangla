import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuData, categories } from '../data/menuData';
import { MenuItem } from './MenuItem';

export const MenuExplorer = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const filteredItems = menuData.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-32 bg-[#0C0804] relative">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair text-[#FDFBF7] mb-6">Curated Offerings</h2>
          <div className="w-16 h-[1px] bg-[#D4A373] mx-auto" />
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 cursor-pointer ${
                activeCategory === category
                  ? 'bg-[#D4A373] text-[#0C0804]'
                  : 'bg-transparent text-[#A39F98] border border-[#2B2620] hover:border-[#D4A373]/50 hover:text-[#FDFBF7]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease:[0.16, 1, 0.3, 1] }}
              className="flex flex-col"
            >
              {filteredItems.map((item, index) => (
                <MenuItem key={item.id} item={item} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};