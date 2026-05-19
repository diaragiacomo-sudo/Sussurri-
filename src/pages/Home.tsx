/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from "motion/react";
import { 
  BookOpen, 
  Sparkles, 
  ChevronRight, 
  Star,
  ShieldCheck,
  Zap,
  Ban,
  RefreshCw,
  Search
} from "lucide-react";
import { useStories } from '../hooks/useStories';
import { Navigation } from '../components/Navigation';
import { StoryCard } from '../components/StoryCard';

const CATEGORIES = [
  { name: "Bosco Incantato", icon: "🌳", color: "text-green-500" },
  { name: "Regno delle Fate", icon: "🧚", color: "text-pink-400" },
  { name: "Mare Magico", icon: "🌊", color: "text-blue-400" },
  { name: "Castelli e Principi", icon: "🏰", color: "text-purple-400" },
  { name: "Avventure Leggendarie", icon: "⚔️", color: "text-orange-400" },
];

export default function Home() {
  const { stories, toggleLike } = useStories();

  return (
    <div className="min-h-screen bg-[#1a103c] overflow-x-hidden relative pb-20 selection:bg-pink-300 selection:text-white">
      {/* Background Elements - The Magical World */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Deep Sky Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a103c] via-[#2d1b69]/40 to-[#3c1e87]/60"></div>

        {/* Stars - More density and twinkle */}
        {[...Array(120)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            initial={{ opacity: Math.random() }}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 2 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 5 }}
            className="absolute bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              boxShadow: '0 0 8px rgba(255,255,255,0.8)'
            }}
          />
        ))}

        {/* Layered Magical Clouds */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-40">
          <motion.div 
            animate={{ x: [-30, 30, -30], y: [-15, 15, -15] }} 
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-[5%] left-[5%] w-[40rem] h-96 bg-purple-500/20 blur-[120px] rounded-full"
          />
          <motion.div 
            animate={{ x: [30, -30, 30], y: [15, -15, 15] }} 
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-[15%] right-[10%] w-[50rem] h-[30rem] bg-pink-500/15 blur-[150px] rounded-full"
          />
          {/* Puffy White Clouds */}
          <motion.div 
            animate={{ x: [-100, 100], opacity: [0, 0.4, 0] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute top-[10%] left-[20%] w-96 h-48 bg-white/20 blur-3xl rounded-full"
          />
          <motion.div 
            animate={{ x: [100, -100], opacity: [0, 0.3, 0] }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute top-[30%] right-[15%] w-[30rem] h-64 bg-white/10 blur-3xl rounded-full"
          />
        </div>

        {/* Castle in the distance (Top Right) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.8, scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute top-[-2%] right-[-5%] w-[40%] max-w-[550px] aspect-square z-0"
        >
          <img 
            src="https://img.icons8.com/isometric/512/castle.png" 
            alt="Castle" 
            className="w-full h-full object-contain filter drop-shadow-[0_0_80px_rgba(255,100,255,0.4)] brightness-[1.1] contrast-125"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Hanging Lanterns precisely like the image */}
        <motion.div 
          animate={{ rotate: [-5, 5, -5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-[28%] z-10 origin-top hidden md:block"
        >
          <div className="w-[2px] h-36 bg-gradient-to-b from-white/10 to-white/30 mx-auto"></div>
          <div className="w-10 h-10 bg-yellow-200 blur-2xl absolute top-36 left-1/2 -translate-x-1/2 opacity-60"></div>
          <img 
            src="https://cdn-icons-png.flaticon.com/512/3233/3233516.png" 
            alt="Lantern" 
            className="w-14 h-14 relative z-10 filter brightness-125 saturate-150 drop-shadow-[0_0_20px_rgba(255,245,150,0.7)]"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Foreground Forest Floor and Decorations */}
        <div className="absolute bottom-0 left-0 w-full h-[35%] pointer-events-none">
          {/* Soft Hill Gradients */}
          <div className="absolute bottom-0 w-full h-64 bg-gradient-to-t from-[#1b1a3b] via-[#2d1b69]/40 to-transparent"></div>
          
          {/* Rabbit (Bottom Left) */}
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, type: "spring" }}
            className="absolute bottom-8 left-[8%] z-30 w-40 h-40"
          >
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-4 bg-black/30 blur-md rounded-full"></div>
            <img 
              src="https://cdn-icons-png.flaticon.com/512/4322/4322992.png" 
              alt="Rabbit" 
              className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
              referrerPolicy="no-referrer"
            />
            {/* Small Glowing Mushroon */}
            <motion.img 
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3, repeat: Infinity }}
              src="https://cdn-icons-png.flaticon.com/512/3570/3570223.png" 
              alt="Mushroom" 
              className="absolute -bottom-2 -left-6 w-14 h-14 filter drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Fox (Bottom Right) */}
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.1, type: "spring" }}
            className="absolute bottom-8 right-[8%] z-30 w-40 h-40"
          >
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-4 bg-black/30 blur-md rounded-full"></div>
            <img 
              src="https://cdn-icons-png.flaticon.com/512/3468/3468306.png" 
              alt="Fox" 
              className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Glowing Purple/Blue Flowers precisely like the image spread */}
          {[...Array(14)].map((_, i) => (
            <motion.div
              key={`flower-${i}`}
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ duration: 3 + Math.random() * 2, repeat: Infinity }}
              className="absolute z-20"
              style={{
                bottom: `${Math.random() * 15 + 4}%`,
                left: `${12 + i * 6}%`,
              }}
            >
              <img 
                src="https://cdn-icons-png.flaticon.com/512/3389/3389018.png" 
                alt="flower" 
                className="w-12 h-12 filter drop-shadow-[0_0_12px_rgba(168,85,247,0.8)]"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Moon - Top Left, Smiling exactly like the image */}
      <div className="absolute top-10 left-10 z-10">
        <motion.div 
          animate={{ scale: [1, 1.05, 1], rotate: [0, 3, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          <div className="absolute -inset-12 bg-yellow-100/10 blur-[60px] rounded-full"></div>
          <img 
            src="https://cdn-icons-png.flaticon.com/512/3305/3305781.png" 
            alt="Smiling Moon" 
            className="w-48 h-48 drop-shadow-[0_0_50px_rgba(255,245,150,0.6)] saturate-[1.2]"
            referrerPolicy="no-referrer"
          />
          {/* Small twinkling stars near moon */}
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5], rotate: 45 }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-4 right-8 text-yellow-100/90"
          >
            <Star className="w-12 h-12 fill-current drop-shadow-[0_0_15px_white]" />
          </motion.div>
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            className="absolute bottom-10 left-4 text-yellow-50"
          >
            <Star className="w-6 h-6 fill-current" />
          </motion.div>
        </motion.div>
      </div>

      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 pt-12 relative z-20">

        
        {/* Header / Logo Section - THE CLOUD */}
        <div className="text-center mb-16 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative"
          >
             {/* Multi-layered Animated Clouds for the Logo Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[140%] -z-10 flex items-center justify-center pointer-events-none">
              <motion.div 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute w-[80%] h-full bg-white/20 blur-[60px] rounded-full"
              ></motion.div>
              <motion.div 
                animate={{ scale: [1, 1.1, 1], x: [0, 10, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute top-0 left-0 w-48 h-32 bg-white/30 blur-3xl rounded-full"
              ></motion.div>
              <motion.div 
                animate={{ scale: [1, 1.08, 1], x: [0, -15, 0] }}
                transition={{ duration: 7, repeat: Infinity }}
                className="absolute bottom-0 right-0 w-56 h-40 bg-white/25 blur-3xl rounded-full"
              ></motion.div>
              <div className="absolute w-[90%] h-[80%] bg-white/10 backdrop-blur-sm rounded-[6rem] shadow-[0_0_100px_rgba(255,255,255,0.1)] border border-white/20"></div>
              
              {/* Hanging Stars from Cloud */}
              <div className="absolute -bottom-10 left-1/4 flex flex-col items-center">
                <div className="w-[1px] h-8 bg-white/20"></div>
                <motion.div animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 4, repeat: Infinity }} className="text-yellow-200">
                  <Star className="w-4 h-4 fill-current drop-shadow-[0_0_5px_rgba(253,224,71,0.8)]" />
                </motion.div>
              </div>
              <div className="absolute -bottom-16 right-1/3 flex flex-col items-center">
                <div className="w-[1px] h-14 bg-white/20"></div>
                <motion.div animate={{ rotate: [0, -20, 20, 0] }} transition={{ duration: 5, repeat: Infinity }} className="text-yellow-200">
                  <Star className="w-5 h-5 fill-current drop-shadow-[0_0_5px_rgba(253,224,71,0.8)]" />
                </motion.div>
              </div>
            </div>

            <h1 className="text-7xl md:text-9xl font-script text-[#4a2c8a] drop-shadow-[0_4px_8px_rgba(255,255,255,0.4)] mb-2 relative z-10 selection:bg-pink-200">
              Sussurri Incantati
            </h1>

            {/* Ribbon/Banner below logo */}
            <div className="relative mt-6 flex flex-col items-center">
              <div className="relative">
                 {/* Ribbon wings */}
                 <div className="absolute -left-20 top-2 w-20 h-14 bg-[#e66c98] -z-10 rounded-l-2xl transform shadow-lg"></div>
                 <div className="absolute -right-20 top-2 w-20 h-14 bg-[#e66c98] -z-10 rounded-r-2xl transform shadow-lg"></div>
                 <div className="absolute -left-12 top-10 w-8 h-8 bg-[#b84d72] -z-20 transform -rotate-12"></div>
                 <div className="absolute -right-12 top-10 w-8 h-8 bg-[#b84d72] -z-20 transform rotate-12"></div>
                 
                 <div className="bg-gradient-to-r from-[#f299b1] via-[#eb82a8] to-[#f299b1] px-12 py-4 rounded-xl shadow-[0_15px_35px_rgba(235,130,168,0.5)] border-2 border-white/30 relative overflow-hidden group">
                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                   <p className="text-white text-lg md:text-2xl font-bold tracking-tight px-6 drop-shadow-md">
                     Racconti di fiabe incantate per bambini
                   </p>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Navigation Section with children as background - wrapped in component now */}
        <div className="mb-10 w-full flex justify-center">
            <Navigation />
        </div>

        {/* Hero Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          {/* Main Hero Card - Matching the image color exactly */}
          <div className="lg:col-span-8 bg-[#2d1b69]/40 backdrop-blur-sm rounded-[3rem] p-1 shadow-2xl border border-white/10">
            <div className="bg-[#2d1b69] w-full h-full rounded-[2.8rem] p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center gap-8">
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-pink-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="flex-1 text-center md:text-left relative z-10">
                <motion.h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-white drop-shadow-md">
                  Lasciati trasportare <br />
                  <span className="text-white">in un mondo di magia</span> <br />
                  e meraviglia!
                </motion.h2>
                <p className="text-indigo-100 text-lg mb-8 max-w-sm leading-relaxed">
                  Scopri storie incantate che parlano di coraggio, amicizia e sogni.
                </p>
                <button className="bg-[#ec82a5] hover:bg-[#e67097] text-white font-bold py-4 px-12 rounded-full shadow-lg shadow-pink-500/30 flex items-center justify-center gap-2 group transition-all text-xl">
                  Scopri le fiabe
                  <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                </button>
              </div>
              
              <div className="flex-1 w-full max-w-[450px] relative z-20">
                <div className="absolute -inset-16 bg-yellow-300 blur-[100px] opacity-20 animate-pulse"></div>
                {/* Illustration precisely like the image: Dragon + Girl reading */}
                <div className="relative group/hero">
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="relative z-10 scale-125"
                  >
                    <img 
                      src="https://cdn-icons-png.flaticon.com/512/3389/3389081.png" 
                      alt="Magical Book" 
                      className="w-full h-full object-contain filter drop-shadow-[0_20px_80px_rgba(255,100,255,0.5)]"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-yellow-400 opacity-0 group-hover/hero:opacity-20 blur-[60px] rounded-full transition-opacity"></div>
                  </motion.div>
                  {/* Floating magic elements around the book */}
                  <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -top-12 -left-8 text-yellow-300">
                    <Sparkles className="w-12 h-12 drop-shadow-[0_0_15px_rgba(253,224,71,0.8)]" />
                  </motion.div>
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute -bottom-8 -right-4 opacity-70">
                    <Sparkles className="w-16 h-16 text-indigo-300" />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 bg-white rounded-[3rem] p-8 shadow-2xl relative overflow-hidden group border border-purple-100">
            <h3 className="text-[#3c1e87] text-2xl font-bold mb-8 flex items-center gap-2">
              Scegli il tuo mondo
            </h3>
            <div className="space-y-5">
              {CATEGORIES.map((cat, idx) => (
                <div key={idx} className="flex items-center justify-between p-2 hover:bg-purple-50 rounded-2xl cursor-pointer group/item transition-all border-b border-purple-50 last:border-0 pb-4">
                  <div className="flex items-center gap-5">
                    <span className="text-4xl filter drop-shadow-sm">{cat.icon}</span>
                    <span className="text-[#4a2c8a] font-bold text-lg">{cat.name}</span>
                  </div>
                  <Sparkles className="w-5 h-5 text-yellow-400 opacity-60" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Stories Section */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-10 w-full">
             <div className="flex items-center gap-6">
              <Sparkles className="text-indigo-400 w-8 h-8 opacity-60" />
              <h3 className="text-4xl font-bold text-white tracking-wide">
                Fiabe in evidenza
              </h3>
              <Sparkles className="text-indigo-400 w-8 h-8 opacity-60" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {stories.slice(0, 4).map((story) => (
              <StoryCard 
                key={story.id} 
                title={story.title} 
                description={story.description} 
                images={story.images} 
                liked={story.liked}
                onLike={() => toggleLike(story.id)}
              />
            ))}
            
            {/* Daily Story / Owl Highlight precisely like the image */}
            <div className="lg:col-span-1 bg-gradient-to-b from-[#34208a] to-[#251566] rounded-[3rem] p-8 relative overflow-hidden border border-white/10 group shadow-2xl flex flex-col items-center text-center">
              <p className="text-indigo-100 text-lg font-medium mb-6 italic leading-snug">
                "Una nuova fiaba <br /> ti aspetta ogni giorno!"
              </p>
              <div className="w-32 h-32 mb-8 relative">
                <div className="absolute inset-0 bg-yellow-200/20 blur-3xl animate-pulse"></div>
                <img 
                  src="https://img.icons8.com/isometric/512/owl.png" 
                  alt="Owl" 
                  className="w-full h-full object-contain relative z-10 transform group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <button className="w-full bg-[#ec82a5] hover:bg-[#e67097] text-white font-bold py-4 px-6 rounded-[1.5rem] flex items-center justify-center gap-2 transition-all shadow-lg transform active:scale-95 group/btn">
                Leggi ora
                <Sparkles className="w-5 h-5 group-hover/btn:rotate-12 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Footer Features Bar */}
        <div className="bg-[#2d1b69]/60 backdrop-blur-md border border-white/10 rounded-full py-8 md:py-6 px-12 flex flex-wrap items-center justify-between gap-8 mt-16">
          <FeatureItem icon={<ShieldCheck className="w-8 h-8 text-white opacity-80" />} text="Sicuro per i bambini" />
          <FeatureItem icon={<Zap className="w-8 h-8 text-white opacity-80" />} text="Storie originali" />
          <FeatureItem icon={<Ban className="w-8 h-8 text-white opacity-80" />} text="Senza pubblicità" />
          <FeatureItem icon={<RefreshCw className="w-8 h-8 text-white opacity-80" />} text="Aggiornamenti ogni settimana" />
        </div>
      </div>

      <button className="fixed bottom-8 right-8 w-16 h-16 bg-white text-purple-900 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-transform z-50">
        <Search className="w-8 h-8" />
      </button>
    </div>
  );
}

function FeatureItem({ icon, text }: { icon: any, text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="p-2 bg-white/10 rounded-xl">{icon}</div>
      <span className="text-white font-medium text-sm md:text-base">{text}</span>
    </div>
  );
}
