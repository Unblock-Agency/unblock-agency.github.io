import React from 'react';
import { Repeat, TrendingUp, Users2, AlertTriangle, Activity, BarChart4, PartyPopper } from 'lucide-react';

export default function Deliverables() {
  const deliverablesData = [
    {
      title: "Regular Sprint Cycles:",
      description: "Continuous improvement via two sprints per month.",
      icon: <Repeat className="w-10 h-10 text-black" />,
    },
    {
      title: "Capacity and Goal Tracking:",
      description: "Ongoing monitoring and goal alignment to maximize productivity.",
      icon: <TrendingUp className="w-10 h-10 text-black" />,
    },
    {
      title: "Role Clarity and Team Norms:",
      description: "Clearly defined roles and guidelines for effective teamwork.",
      icon: <Users2 className="w-10 h-10 text-black" />,
    },
    {
      title: "Conflict Resolution:",
      description: "Proactive measures to reduce conflict and enhance communication.",
      icon: <AlertTriangle className="w-10 h-10 text-black" />,
    },
    {
      title: "User Feedback Integration:",
      description: "Iterate based on real user input for continuous product improvement.",
      icon: <Activity className="w-10 h-10 text-black" />,
    },
    {
      title: "Team Performance Metrics:",
      description: "Regular assessments to ensure sustainable high performance and morale.",
      icon: <BarChart4 className="w-10 h-10 text-black" />,
    },
    {
      title: "Celebration of Success:",
      description: "Recognize achievements and promote a positive team culture.",
      icon: <PartyPopper className="w-10 h-10 text-black" />,
    },
  ];

  // Calculate invisible placeholders needed to complete the final grid row (3 columns)
  const remainder = deliverablesData.length % 3;
  const placeholders = remainder === 1 ? 2 : remainder === 2 ? 1 : 0;

  return (
    <section
      id="deliverables-container"
      className="scroll-mt-36 w-full bg-white px-6 sm:px-8 lg:px-12 py-20 sm:py-24 lg:py-32"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        <header className="text-center space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Key Deliverables
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Our pilot program offers a comprehensive suite of deliverables designed to optimize team performance and drive success.
          </p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {deliverablesData.map((item, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-2">
                <strong>{item.title}</strong>
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
          {Array.from({ length: placeholders }).map((_, idx) => (
            <div key={`placeholder-${idx}`} className="invisible"></div>
          ))}
        </div>
      </div>
    </section>
  );
}
