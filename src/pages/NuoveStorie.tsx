/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Navigation } from '../components/Navigation';
import { Sparkles, Calendar, Zap } from 'lucide-react';

export default function NuoveStorie() {
  return (
    <div className="min-h-screen bg-[#1a103c] text-white p-4 md:p-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-12">
          <Navigation />
          <motion.div className="text-center mt-8">
            <h1 className="text-5xl font-script text-white mb-4">Nuove Arrivate</h1>
            <p className="text-purple-200 text-lg italic">"Ogni settimana un nuovo soffio di magia."</p>
          </motion.div>
        </div>

        <div className="bg-white/10 backdrop-blur-xl p-12 rounded-[4rem] border border-white/20 shadow-2xl flex flex-col items-center text-center">
           <Zap className="w-20 h-20 text-yellow-300 mb-8 animate-pulse" />
           <h2 className="text-3xl font-bold mb-6">Prossimamente nel Regno...</h2>
           <p className="text-purple-200 text-xl max-w-2xl leading-relaxed">
             I nostri scrittori magici stanno intingendo le penne nella polvere di stelle. 
             A breve potrai leggere: <br />
             <span className="text-pink-300 font-bold italic mt-4 block text-2xl">"Il Segreto del Lago d'Argento"</span>
           </p>
           
           <div className="mt-12 flex items-center gap-4 bg-[#ec82a5] px-8 py-4 rounded-2xl shadow-lg">
             <Calendar className="w-6 h-6" />
             <span className="font-bold">Nuova uscita prevista: Lunedì</span>
           </div>
        </div>
      </div>
    </div>
  );
}
