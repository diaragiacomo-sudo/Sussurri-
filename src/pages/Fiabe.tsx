/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Navigation } from '../components/Navigation';
import { Book, Sparkles, Star } from 'lucide-react';
import { useStories } from '../hooks/useStories';
import { StoryCard } from '../components/StoryCard';

export default function Fiabe() {
  const { stories, toggleLike } = useStories();

  return (
    <div className="min-h-screen bg-[#1a103c] text-white p-4 md:p-8 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="absolute bg-white rounded-full w-1 h-1" style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }} />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-12">
          <Navigation />
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mt-8"
          >
            <h1 className="text-5xl font-script text-white mb-4">La Biblioteca delle Fiabe</h1>
            <p className="text-purple-200 max-w-2xl mx-auto text-lg italic">
              "Ogni libro è una porta, ogni storia una nuova avventura."
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stories.map((story) => (
            <StoryCard 
              key={story.id} 
              title={story.title} 
              description={story.description} 
              images={story.images} 
              liked={story.liked}
              onLike={() => toggleLike(story.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
