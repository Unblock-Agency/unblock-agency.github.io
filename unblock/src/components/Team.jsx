import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

const teamMembers = [
  {
    id: 1,
    name: "Aritro Majumdar",
    title: "Founder and Principal Consultant",
    image: "/aritro.jpg",
    linkedin: "https://www.linkedin.com/in/aritro-majumdar",
  },
  {
    id: 2,
    name: "Kasra Bahrehmand",
    title: "Principal Software Engineer",
    image: "/kasra.jpeg",
    linkedin: "https://www.linkedin.com/in/kasra-bahrehmand",
  },
  {
    id: 3,
    name: "Ari Abrams",
    title: "Principal Marketing Strategist",
    image: "/ari.jpg",
    linkedin: "https://www.linkedin.com/in/ciolfi-abrams",
  },
];

export default function Team() {
  return (
    <section
      id="team"
      className="scroll-mt-36 w-full bg-white px-6 sm:px-8 lg:px-12 py-20 sm:py-24 lg:py-32"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        <header className="text-center space-y-6">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Our Team
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 font-medium leading-relaxed max-w-3xl mx-auto">
            We are a dedicated group of professionals committed to driving innovation and excellence.
          </p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map(member => (
            <div key={member.id} className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer">
              <img
                src={member.image}
                alt={member.name}
                className={
                  member.id === 2
                    ? "w-full h-64 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105 object-[50%_25%]"
                    : "w-full h-64 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                }
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-sm text-gray-200">{member.title}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 text-white hover:text-blue-400 cursor-pointer"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}