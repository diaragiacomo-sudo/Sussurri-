/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Lock, User, Sparkles, BookOpen } from 'lucide-react';
import { Navigation } from '../components/Navigation';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Credenziali semplici per la demo
    if (username === 'admin' && password === 'magia123') {
      localStorage.setItem('sussurri_auth', 'true');
      navigate('/dashboard');
    } else {
      setError('Credenziali incantate errate! Riprova con saggezza.');
    }
  };

  return (
    <div className="min-h-screen bg-[#1a103c] text-white p-4 md:p-8 relative overflow-hidden">
      {/* Background stars */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        {[...Array(30)].map((_, i) => (
          <div key={i} className="absolute bg-white rounded-full w-1 h-1" style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }} />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <Navigation />

        <div className="flex flex-col items-center justify-center mt-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/10 backdrop-blur-xl p-10 rounded-[3rem] border border-white/20 w-full max-w-md shadow-2xl"
          >
            <div className="flex flex-col items-center mb-8">
              <div className="bg-gradient-to-br from-pink-500 to-purple-600 p-4 rounded-full shadow-lg mb-4">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-display text-white">Accesso Guardiano</h2>
              <p className="text-purple-200 text-sm">Inserisci le chiavi del regno</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-indigo-200 ml-1">Username</label>
                <div className="relative">
                  <input 
                    type="text" 
                    className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 pl-12 text-white focus:outline-none focus:ring-2 focus:ring-pink-400 focus:bg-white/20 transition-all"
                    placeholder="Nome guardiano (es: admin)"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-300 w-5 h-5" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-indigo-200 ml-1">Password</label>
                <div className="relative">
                  <input 
                    type="password" 
                    className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 pl-12 text-white focus:outline-none focus:ring-2 focus:ring-pink-400 focus:bg-white/20 transition-all"
                    placeholder="Parola magica (es: magia123)"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-300 w-5 h-5" />
                </div>
              </div>

              {error && (
                <motion.p 
                  initial={{ opacity: 0, x: -10 }} 
                  animate={{ opacity: 1, x: 0 }}
                  className="text-red-300 text-sm italic text-center"
                >
                  {error}
                </motion.p>
              )}

              <button 
                type="submit"
                className="w-full bg-[#ec82a5] hover:bg-[#e67097] text-white font-bold py-4 rounded-2xl shadow-lg transition-transform active:scale-95 flex items-center justify-center gap-2"
              >
                Apri il Libro <BookOpen className="w-5 h-5" />
              </button>
            </form>
          </motion.div>

          <footer className="mt-8 text-purple-300 text-sm flex items-center gap-2">
             <Sparkles className="w-4 h-4" />
             Accesso riservato agli amministratori del bosco
          </footer>
        </div>
      </div>
    </div>
  );
}
