import React from 'react';

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
                  <h3 className="text-2xl font-semibold mb-3">Deliver On Time</h3>
                  <p className="text-gray-600">
                     Our process ensures predictable delivery without delays.
                  </p>
               </div>
               <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                  <h3 className="text-2xl font-semibold mb-3">Reduce Tech Meetings</h3>
                  <p className="text-gray-600">
                     Save time by letting us handle the technical details while you focus on growth.
                  </p>
               </div>
               <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                  <h3 className="text-2xl font-semibold mb-3">Efficient &amp; Clear</h3>
                  <p className="text-gray-600">
                     Enhance team alignment and clarity with our structured process.
                  </p>
               </div>
               <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                  <h3 className="text-2xl font-semibold mb-3">Avoid Delays</h3>
                  <p className="text-gray-600">
                     Our proactive approach prevents costly delays.
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
}
