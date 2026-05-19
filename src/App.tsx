/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Fiabe from './pages/Fiabe';
import Personaggi from './pages/Personaggi';
import NuoveStorie from './pages/NuoveStorie';
import Preferiti from './pages/Preferiti';
import ChiSiamo from './pages/ChiSiamo';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      
      {/* New sections added as requested */}
      <Route path="/fiabe" element={<Fiabe />} />
      <Route path="/personaggi" element={<Personaggi />} />
      <Route path="/nuove" element={<NuoveStorie />} />
      <Route path="/preferiti" element={<Preferiti />} />
      <Route path="/chi-siamo" element={<ChiSiamo />} />

      {/* Fallback for other routes as requested by "collegamneti tutti funzionanti" */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
