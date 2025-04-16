import React from 'react';
import { Clock, Users2, CheckCircle, AlertTriangle } from 'lucide-react';

export default function WhatToExpect() {
   return (
      <section
         id="wte"
         className="scroll-mt-36 w-full bg-gray-50 px-6 sm:px-8 lg:px-12 py-20 sm:py-24 lg:py-32"
      >
         <div className="max-w-6xl mx-auto space-y-16 text-center">
            <header className="space-y-4">
               <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
                  What to Expect
               </h2>
               <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                  Discover the transformation our pilot program offers with dedicated support, agile processes, and strategic insights.
               </p>
            </header>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
               <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                  <div className="flex items-center justify-center mb-4">
                     <Clock className="w-10 h-10 text-black" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">Deliver On Time</h3>
                  <p className="text-gray-600">
                     No more guessing when your product will be ready – our process ensures predictable delivery.
                  </p>
               </div>
               <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                  <div className="flex items-center justify-center mb-4">
                     <Users2 className="w-10 h-10 text-black" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">Reduce Tech Meetings</h3>
                  <p className="text-gray-600">
                     Save time and focus on growing your business while we handle the technical details.
                  </p>
               </div>
               <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                  <div className="flex items-center justify-center mb-4">
                     <CheckCircle className="w-10 h-10 text-black" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">Efficient &amp; Clear</h3>
                  <p className="text-gray-600">
                     Enhance team alignment and clarity with our structured project management.
                  </p>
               </div>
               <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                  <div className="flex items-center justify-center mb-4">
                     <AlertTriangle className="w-10 h-10 text-black" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">Avoid Delays</h3>
                  <p className="text-gray-600">
                     Prevent costly delays and mistakes with our proactive and adaptive approach.
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
}
