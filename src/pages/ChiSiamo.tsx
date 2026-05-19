/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Navigation } from '../components/Navigation';
import { Info, Sparkles, Star } from 'lucide-react';

export default function ChiSiamo() {
  return (
    <div className="min-h-screen bg-[#1a103c] text-white p-4 md:p-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-12">
          <Navigation />
          <motion.div className="text-center mt-8">
            <h1 className="text-5xl font-script text-white mb-4">Chi Siamo</h1>
            <p className="text-purple-200 text-lg">Il sogno dietro Sussurri Incantati.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
           <div className="space-y-8">
              <h2 className="text-4xl font-bold leading-tight">Portiamo la magia <br /> <span className="text-pink-400">direttamente nelle vostre mani.</span></h2>
              <p className="text-purple-200 text-lg leading-relaxed">
                Sussurri Incantati nasce dalla passione per il racconto. Crediamo che le storie siano il ponte tra realtà e sogno, e vogliamo offrire a ogni bambino uno spazio sicuro dove esplorare mondi lontani.
              </p>
              <div className="flex gap-6">
                <div className="p-4 bg-white/10 rounded-2xl border border-white/10 flex-1">
                   <Star className="text-yellow-400 mb-2" />
                   <div className="font-bold">Sicuro</div>
                   <div className="text-xs text-purple-300">Contenuti verificati</div>
                </div>
                <div className="p-4 bg-white/10 rounded-2xl border border-white/10 flex-1">
                   <Sparkles className="text-pink-400 mb-2" />
                   <div className="font-bold">Magico</div>
                   <div className="text-xs text-purple-300">Storie originali</div>
                </div>
              </div>
           </div>
           
           <div className="relative">
              <div className="absolute -inset-8 bg-purple-500 blur-[80px] opacity-20 rounded-full animate-pulse"></div>
              <img 
                src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=800&auto=format&fit=crop" 
                className="rounded-[3rem] shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-1000"
                alt="About us"
                referrerPolicy="no-referrer"
              />
           </div>
        </div>
      </div>
    </div>
  );
}
