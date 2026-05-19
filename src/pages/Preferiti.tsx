/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Navigation } from '../components/Navigation';
import { Heart, Sparkles } from 'lucide-react';
import { useStories } from '../hooks/useStories';
import { StoryCard } from '../components/StoryCard';

export default function Preferiti() {
  const { stories, toggleLike } = useStories();
  const likedStories = stories.filter(s => s.liked);

  return (
    <div className="min-h-screen bg-[#1a103c] text-white p-4 md:p-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-12">
          <Navigation />
          <motion.div className="text-center mt-8">
            <h1 className="text-5xl font-script text-white mb-4">I Miei Tesori</h1>
            <p className="text-purple-200 text-lg">Le fiabe che hai custodito nel tuo cuore.</p>
          </motion.div>
        </div>

        {likedStories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {likedStories.map((story) => (
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
        ) : (
          <div className="bg-white/5 border border-white/10 p-20 rounded-[3rem] text-center flex flex-col items-center">
            <Heart className="w-16 h-16 text-white/20 mb-6" />
            <p className="text-purple-300 text-xl italic">Non hai ancora salvato nessuna fiaba tra i tesori.</p>
            <button className="mt-8 text-pink-400 font-bold hover:underline">Scopri le storie</button>
          </div>
        )}
      </div>
    </div>
  );
}
