import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PilotProgram from './pages/PilotProgram';

export default function App() {
  return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/pilot" element={<PilotProgram />} />
      </Routes>
  );
}