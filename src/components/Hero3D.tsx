import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars, Sparkles } from '@react-three/drei';
import { motion } from 'framer-motion';

const FloatingParticles = () => {
  return (
    <>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <Sparkles count={100} scale={12} size={2} speed={0.4} opacity={0.2} color="#D4A373" />
    </>
  );
};

export const Hero3D = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-[#0C0804]">
      {/* 3D Background - Added dpr to optimize GPU usage and fix lag */}
      <div className="absolute inset-0 z-0 opacity-60">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]}>
          <ambientLight intensity={0.5} />
          <FloatingParticles />
        </Canvas>
      </div>

      {/* Cinematic Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-transparent to-[#0C0804]" />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease:[0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <span className="text-[#D4A373] font-inter tracking-[0.3em] text-xs md:text-sm uppercase mb-6 block">
            North Sikkim's Finest Cafe
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair text-[#FDFBF7] leading-tight mb-8">
            Taste the <br />
            <span className="italic text-white/80">Mountains</span>
          </h1>
          <p className="text-[#A39F98] font-inter text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light">
            Warm hospitality, beautiful ambiance, and the best food in Mangan. A must-visit stop for travelers.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease:[0.16, 1, 0.3, 1], delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <a
            href="#menu"
            className="px-8 py-4 bg-[#D4A373] text-black font-medium tracking-wide rounded-full hover:bg-[#CBA052] transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,163,115,0.4)]"
          >
            Explore Menu
          </a>
          <a
            href="tel:+919733985732"
            className="px-8 py-4 bg-transparent border border-white/20 text-white font-medium tracking-wide rounded-full hover:bg-white/5 transition-all duration-300"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};