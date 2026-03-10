import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';

export const LocationSection = () => {
  return (
    <section id="location" className="py-32 bg-[#15110D] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair text-[#FDFBF7] mb-6">Visit Our Cafe</h2>
            <div className="w-16 h-[1px] bg-[#D4A373] mb-10" />
            
            <p className="text-[#A39F98] text-lg font-light mb-12 max-w-md leading-relaxed">
              Experience the perfect blend of delicious food and a serene atmosphere right in the heart of North Sikkim.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#D4A373]/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#D4A373]" />
                </div>
                <div>
                  <h4 className="text-[#FDFBF7] font-medium mb-1">Address</h4>
                  <p className="text-[#A39F98]">
                    Pentok, Mangan, Sikkim 737116, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#D4A373]/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#D4A373]" />
                </div>
                <div>
                  <h4 className="text-[#FDFBF7] font-medium mb-1">Phone</h4>
                  <a href="tel:+919733985732" className="text-[#A39F98] hover:text-[#D4A373] transition-colors">
                    +91 97339 85732
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#D4A373]/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[#D4A373]" />
                </div>
                <div>
                  <h4 className="text-[#FDFBF7] font-medium mb-1">Operating Hours</h4>
                  <p className="text-[#A39F98]">Mon - Sat: 9:00 AM – 9:00 PM</p>
                  <p className="text-[#A39F98]">Sun: 9:00 AM – 9:30 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href="https://maps.app.goo.gl/B1LZkACz1EG9d7Vz6"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#D4A373] text-black font-medium tracking-wide rounded-full hover:bg-[#CBA052] transition-all duration-300 flex items-center gap-2"
              >
                <MapPin className="w-4 h-4" />
                Get Directions
              </a>
              <a
                href="tel:+919733985732"
                className="px-8 py-4 bg-transparent border border-[#2B2620] text-white font-medium tracking-wide rounded-full hover:bg-white/5 transition-all duration-300 flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call The Café
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] rounded-2xl overflow-hidden border border-[#2B2620] shadow-2xl"
          >
            <iframe
              src="https://maps.google.com/maps?q=Cafe%20Yangla,%20Pentok,%20Mangan,%20Sikkim&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};