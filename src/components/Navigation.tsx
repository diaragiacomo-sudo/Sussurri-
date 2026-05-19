/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Home, BookOpen, User, Sparkles, Heart, Info, ChevronRight, LayoutDashboard } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function Navigation() {
  const location = useLocation();

  const navItems = [
    { icon: <Home className="w-5 h-5" />, label: "Home", path: "/" },
    { icon: <BookOpen className="w-5 h-5" />, label: "Fiabe", path: "/fiabe" },
    { icon: <User className="w-5 h-5" />, label: "Personaggi", path: "/personaggi" },
    { icon: <Sparkles className="w-5 h-5" />, label: "Nuove storie", path: "/nuove" },
    { icon: <Heart className="w-5 h-5" />, label: "Preferiti", path: "/preferiti" },
    { icon: <LayoutDashboard className="w-5 h-5" />, label: "Dashboard", path: "/dashboard" },
  ];

  return (
    <div className="relative w-full max-w-6xl mx-auto mb-16">
      {/* Background illustration for the menu area - as requested */}
      <div className="absolute -inset-x-12 -top-12 -bottom-20 pointer-events-none opacity-90 hidden md:block z-0 overflow-hidden rounded-[4rem]">
        <img 
          src="https://img.freepik.com/free-vector/cartoon-kids-playing-playground-background_23-2148154148.jpg?w=1200" 
          alt="Playground background" 
          className="w-full h-full object-cover blur-[2px] opacity-20"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a103c] via-transparent to-[#1a103c]"></div>
      </div>

      <nav className="relative z-10 bg-white/95 backdrop-blur-md rounded-full shadow-2xl p-2 flex flex-wrap items-center justify-center gap-2 border border-white/30">
        {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`
            flex items-center gap-3 px-8 py-4 rounded-full cursor-pointer transition-all duration-300 text-lg
            ${location.pathname === item.path 
              ? 'bg-[#fceef2] text-[#e87da5] font-bold shadow-sm ring-1 ring-[#f299b1]' 
              : 'hover:bg-purple-50 text-[#3c1e87]/70 font-bold'}
          `}
        >
          <span className="opacity-80">{item.icon}</span>
          <span>{item.label}</span>
          {(item.label === "Fiabe" || item.label === "Personaggi" || item.label === "Nuove storie") && <ChevronRight className="w-4 h-4 translate-y-[2px] opacity-40" />}
        </Link>
      ))}
      </nav>
    </div>
  );
}
