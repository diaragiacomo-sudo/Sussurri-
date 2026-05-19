/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Story } from '../types';

const INITIAL_STORIES: Story[] = [
  {
    id: '1',
    title: "Cappuccetto Rosso",
    description: "Una storia di astuzia e coraggio.",
    images: ["https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=400&h=300&auto=format&fit=crop"],
    liked: true,
    category: "Bosco Incantato",
  },
  {
    id: '2',
    title: "La Sirenetta",
    description: "Il sogno di un cuore curioso.",
    images: ["https://images.unsplash.com/photo-1582967788606-a171c1080cb0?q=80&w=400&h=300&auto=format&fit=crop"],
    liked: false,
    category: "Mare Magico",
  },
  {
    id: '3',
    title: "La Bella e la Bestia",
    description: "L'amore che vince ogni magia.",
    images: ["https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=400&h=300&auto=format&fit=crop"],
    liked: false,
    category: "Castelli e Principi",
  },
  {
    id: '4',
    title: "Il Brutto Anatroccolo",
    description: "Scopri la bellezza che c'è in te.",
    images: ["https://images.unsplash.com/photo-1555620263-d3701f7450ad?q=80&w=400&h=300&auto=format&fit=crop"],
    liked: false,
    category: "Bosco Incantato",
  },
];

export function useStories() {
  const [stories, setStories] = useState<Story[]>(() => {
    const saved = localStorage.getItem('sussurri_stories');
    if (!saved) return INITIAL_STORIES;
    
    // Migration check: if old data has 'image' instead of 'images'
    const parsed = JSON.parse(saved);
    return parsed.map((s: any) => ({
      ...s,
      images: s.images || [s.image]
    }));
  });

  useEffect(() => {
    localStorage.setItem('sussurri_stories', JSON.stringify(stories));
  }, [stories]);

  const addStory = (story: Omit<Story, 'id' | 'liked'>) => {
    const newStory: Story = {
      ...story,
      id: crypto.randomUUID(),
      liked: false,
    };
    setStories([...stories, newStory]);
  };

  const updateStory = (id: string, updates: Partial<Story>) => {
    setStories(stories.map(s => s.id === id ? { ...s, ...updates } : s));
  };

  const deleteStory = (id: string) => {
    setStories(stories.filter(s => s.id !== id));
  };

  const toggleLike = (id: string) => {
    setStories(stories.map(s => s.id === id ? { ...s, liked: !s.liked } : s));
  };

  return { stories, addStory, updateStory, deleteStory, toggleLike };
}
