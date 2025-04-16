import React from 'react';
import { Scale, HeartHandshake, Target } from 'lucide-react';

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-36 w-full bg-gray-50 px-6 sm:px-8 lg:px-12 py-20 sm:py-24 lg:py-32"
    >
      <div className="max-w-6xl mx-auto space-y-24">
        {/* Section Header */}
        <header className="text-center max-w-3xl mx-auto space-y-6">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            About Unblock Agency
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 font-medium leading-relaxed">
            We help early-stage startups build resilient, high-performing teams by offering agile project management—without compromising values or team wellbeing.
          </p>
        </header>
        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <article className="cursor-pointer bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-semibold mb-3">Mission</h3>
            <p className="text-gray-600 mb-3 leading-relaxed">
              <strong>Our mission is clear:</strong> To empower early-stage startups with agile project management solutions that prioritize the well-being of every team member.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong>Our commitment:</strong> Help startups thrive by fostering a culture of equity and efficiency without burnout.
            </p>
          </article>
          <article className="cursor-pointer bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-semibold mb-3">Vision</h3>
            <p className="text-gray-600 mb-3 leading-relaxed">
              <strong>We envision</strong> a world where software companies prioritize empathy and productivity in harmony.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong>We aim:</strong> To lead that transformation with the right tools and cultural practices.
            </p>
          </article>
        </div>
        {/* Values Grid */}
        <div className="grid gap-8 md:grid-cols-3 text-center">
          <article className="cursor-pointer flex flex-col items-center gap-4 p-6 sm:p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition">
            <HeartHandshake size={48} />
            <h4 className="text-xl font-semibold">Empathy</h4>
            <p className="text-gray-600 leading-relaxed">
              We build empathy across all roles to foster deeper team connection and meaningful collaboration.
            </p>
          </article>
          <article className="cursor-pointer flex flex-col items-center gap-4 p-6 sm:p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition">
            <Scale size={48} />
            <h4 className="text-xl font-semibold">Equity</h4>
            <p className="text-gray-600 leading-relaxed">
              Our work is rooted in fairness—every idea has a seat at the table, every voice matters.
            </p>
          </article>
          <article className="cursor-pointer flex flex-col items-center gap-4 p-6 sm:p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition">
            <Target size={48} />
            <h4 className="text-xl font-semibold">Efficacy</h4>
            <p className="text-gray-600 leading-relaxed">
              We help teams cut through the noise and deliver high-impact outcomes quickly and efficiently.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
