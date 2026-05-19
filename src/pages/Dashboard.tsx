/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { useStories } from '../hooks/useStories';
import { Navigation } from '../components/Navigation';
import { Plus, Trash2, Edit2, Sparkles, Image as ImageIcon, X, LogOut } from 'lucide-react';

export default function Dashboard() {
  const navigate = useNavigate();
  const { stories, addStory, deleteStory } = useStories();
  const [isAdding, setIsAdding] = useState(false);
  const [newStory, setNewStory] = useState({ 
    title: '', 
    description: '', 
    images: [''], 
    category: 'Bosco Incantato' 
  });

  useEffect(() => {
    const isAuth = localStorage.getItem('sussurri_auth');
    if (!isAuth) {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('sussurri_auth');
    navigate('/login');
  };

  const handleAddImageField = () => {
    setNewStory({ ...newStory, images: [...newStory.images, ''] });
  };

  const handleImageChange = (index: number, value: string) => {
    const updatedImages = [...newStory.images];
    updatedImages[index] = value;
    setNewStory({ ...newStory, images: updatedImages });
  };

  const handleRemoveImageField = (index: number) => {
    if (newStory.images.length === 1) return;
    const updatedImages = newStory.images.filter((_, i) => i !== index);
    setNewStory({ ...newStory, images: updatedImages });
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStory.title || !newStory.images[0]) return;
    addStory({
      ...newStory,
      images: newStory.images.filter(img => img.trim() !== '')
    });
    setNewStory({ title: '', description: '', images: [''], category: 'Bosco Incantato' });
    setIsAdding(false);
  };

  return (
    <div className="min-h-screen bg-[#1a103c] text-white p-4 md:p-8 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {[...Array(30)].map((_, i) => (
          <div key={i} className="absolute bg-white rounded-full w-1 h-1" style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }} />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <Navigation />

        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 bg-white/5 p-8 rounded-[3rem] border border-white/10 backdrop-blur-sm">
          <div>
            <h1 className="text-4xl font-display text-white mb-2">Dashboard di Controllo</h1>
            <p className="text-purple-200">Gestisci le fiabe e personalizza il magico mondo di Sussurri Incantati.</p>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={handleLogout}
              className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-6 rounded-2xl flex items-center justify-center gap-2 transition-all border border-white/10"
            >
              <LogOut className="w-5 h-5" /> Esci
            </button>
            <button 
              onClick={() => setIsAdding(!isAdding)}
              className="bg-pink-500 hover:bg-pink-400 text-white font-bold py-3 px-8 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-pink-500/20"
            >
              {isAdding ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
              {isAdding ? "Annulla" : "Aggiungi Fiaba"}
            </button>
          </div>
        </header>

        {isAdding && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-[3rem] p-8 md:p-12 mb-12 text-purple-900 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-100 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 -z-10"></div>
            <h2 className="text-3xl font-bold mb-8 text-indigo-900">Crea una nuova storia incantata</h2>
            
            <form onSubmit={handleAdd} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-indigo-900 ml-1">Titolo della Fiaba</label>
                    <input 
                      type="text" 
                      className="w-full bg-purple-50 border border-purple-100 rounded-2xl px-6 py-4 text-purple-900 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all text-lg"
                      placeholder="Esempio: Il Drago Gentile"
                      value={newStory.title}
                      onChange={(e) => setNewStory({...newStory, title: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-indigo-900 ml-1">Categoria</label>
                    <select 
                      className="w-full bg-purple-50 border border-purple-100 rounded-2xl px-6 py-4 text-purple-900 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all text-lg appearance-none cursor-pointer"
                      value={newStory.category}
                      onChange={(e) => setNewStory({...newStory, category: e.target.value})}
                    >
                      <option>Bosco Incantato</option>
                      <option>Mare Magico</option>
                      <option>Castelli e Principi</option>
                      <option>Storie della Buonanotte</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-indigo-900 ml-1">Descrizione (Breve riassunto)</label>
                    <textarea 
                      className="w-full bg-purple-50 border border-purple-100 rounded-2xl px-6 py-4 text-purple-900 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all text-lg h-32 resize-none"
                      placeholder="Scrivi qui la magia..."
                      value={newStory.description}
                      onChange={(e) => setNewStory({...newStory, description: e.target.value})}
                    ></textarea>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-sm font-bold text-indigo-900 ml-1">Immagini (URL delle illustrazioni)</label>
                      <button 
                        type="button"
                        onClick={handleAddImageField}
                        className="text-pink-500 hover:text-pink-600 font-bold text-sm flex items-center gap-1"
                      >
                        <Plus className="w-4 h-4" /> Aggiungi Immagine
                      </button>
                    </div>
                    
                    <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                      {newStory.images.map((img, idx) => (
                        <div key={idx} className="flex gap-2">
                          <div className="relative flex-1">
                            <input 
                              type="text" 
                              className="w-full bg-purple-50 border border-purple-100 rounded-2xl px-6 py-4 text-purple-900 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all text-lg pl-12"
                              placeholder="https://immagine-magica.jpg"
                              value={img}
                              onChange={(e) => handleImageChange(idx, e.target.value)}
                            />
                            <ImageIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-300 w-5 h-5" />
                          </div>
                          {newStory.images.length > 1 && (
                            <button 
                              type="button"
                              onClick={() => handleRemoveImageField(idx)}
                              className="p-4 bg-red-50 text-red-500 rounded-2xl hover:bg-red-100 transition-colors"
                            >
                              <X className="w-5 h-5" />
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-8 bg-[#1a103c]/5 rounded-[2rem] border-2 border-dashed border-purple-200 flex flex-col items-center justify-center text-center">
                    {newStory.images[0] ? (
                      <img 
                        src={newStory.images[0]} 
                        alt="Preview" 
                        className="w-full h-48 object-cover rounded-2xl shadow-xl" 
                        onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400'; }}
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="flex flex-col items-center">
                        <ImageIcon className="w-16 h-16 text-purple-200 mb-4" />
                        <p className="text-purple-400 text-sm">Le immagini appariranno qui <br /> come anteprima magica</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <button 
                  type="submit"
                  className="bg-purple-900 hover:bg-purple-800 text-white font-bold py-5 px-12 rounded-2xl shadow-xl shadow-purple-900/20 transform transition-all active:scale-95 text-lg flex items-center gap-2"
                >
                  Salva nel Regno <Sparkles className="w-6 h-6 text-yellow-400" />
                </button>
              </div>
            </form>
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stories.map((story) => (
            <motion.div 
              layout
              key={story.id} 
              className="bg-white rounded-[3rem] p-4 shadow-xl border border-purple-50 group flex flex-col"
            >
              <div className="relative aspect-video rounded-[2.5rem] overflow-hidden mb-4">
                <img 
                  src={story.images[0]} 
                  alt={story.title} 
                  className="w-full h-full object-cover" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-purple-900">
                  {story.category}
                </div>
                {story.images.length > 1 && (
                  <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-white flex items-center gap-1">
                    <ImageIcon className="w-3 h-3" /> +{story.images.length - 1} foto
                  </div>
                )}
              </div>
              <div className="px-4 pb-4 flex-1">
                <h3 className="text-xl font-bold text-indigo-900 mb-2">{story.title}</h3>
                <p className="text-purple-400 text-sm italic mb-6 line-clamp-2">{story.description}</p>
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex gap-2 w-full">
                    <button className="flex-1 bg-purple-50 hover:bg-purple-100 text-purple-600 py-3 rounded-2xl transition-colors flex items-center justify-center gap-2 font-bold text-sm">
                      <Edit2 className="w-4 h-4" /> Modifica
                    </button>
                    <button 
                      onClick={() => deleteStory(story.id)}
                      className="bg-red-50 hover:bg-red-100 text-red-500 p-3 rounded-2xl transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
