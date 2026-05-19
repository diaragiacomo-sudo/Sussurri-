/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Heart } from "lucide-react";
import React from "react";

interface StoryCardProps {
  title: string;
  description: string;
  images: string[];
  liked: boolean;
  onLike?: () => void;
  id?: string;
  key?: React.Key;
}

export function StoryCard({ title, description, images, liked, onLike }: StoryCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -12 }}
      className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-purple-50 group h-full flex flex-col p-1"
    >
      <div className="bg-white h-full rounded-[2.3rem] overflow-hidden flex flex-col">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img 
            src={images[0]} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-4 left-4 right-4 flex justify-end">
            <button 
              onClick={(e) => {
                e.preventDefault();
                onLike?.();
              }}
              className={`p-3 rounded-full backdrop-blur-md transition-all active:scale-90 shadow-lg ${liked ? 'bg-[#ec82a5] text-white' : 'bg-white/90 text-[#ec82a5] hover:bg-white'}`}
            >
              <Heart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
            </button>
          </div>
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <h4 className="text-[#3c1e87] font-bold text-xl mb-2 leading-tight">{title}</h4>
          <p className="text-purple-300 text-base leading-relaxed line-clamp-2 font-medium">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
