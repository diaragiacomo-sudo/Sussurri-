/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Navigation } from '../components/Navigation';
import { Users, Sparkles, Heart } from 'lucide-react';

const CHARACTERS = [
  { name: "Il Drago Gentile", role: "Protettore del Bosco", image: "https://cdn-icons-png.flaticon.com/512/3132/3132714.png" },
  { name: "La Fata dei Fiori", role: "Regina della Primavera", image: "https://cdn-icons-png.flaticon.com/512/2919/2919931.png" },
  { name: "Il Piccolo Gnomo", role: "Custode dei Tesori", image: "https://cdn-icons-png.flaticon.com/512/3468/3468593.png" },
  { name: "La Civetta Saggia", role: "Maestra di Notte", image: "https://img.icons8.com/isometric/512/owl.png" },
];

export default function Personaggi() {
  return (
    <div className="min-h-screen bg-[#1a103c] text-white p-4 md:p-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-12">
          <Navigation />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center mt-8"
          >
            <h1 className="text-5xl font-script text-white mb-4">I Protagonisti Magici</h1>
            <p className="text-purple-200 text-lg">Incontra gli abitanti del nostro regno incantato.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {CHARACTERS.map((char, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white/10 backdrop-blur-md p-8 rounded-[3rem] border border-white/20 text-center flex flex-col items-center shadow-xl group"
            >
              <div className="w-32 h-32 mb-6 relative">
                 <div className="absolute inset-0 bg-white/20 blur-2xl rounded-full scale-125 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                 <img src={char.image} alt={char.name} className="w-full h-full object-contain relative z-10" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">{char.name}</h3>
              <p className="text-pink-300 font-medium text-sm border-t border-white/10 mt-4 pt-4 w-full uppercase tracking-wider">{char.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
