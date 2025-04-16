import React from 'react';

export default function Deliverables() {
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
            Our pilot program delivers a range of outcomes designed to elevate your team’s performance.
          </p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-2xl font-semibold mb-2"><strong>Regular Sprint Cycles:</strong></h3>
            <p className="text-gray-600">
              Continuous improvement through two sprints each month.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-2xl font-semibold mb-2"><strong>Capacity and Goal Tracking:</strong></h3>
            <p className="text-gray-600">
              Ongoing monitoring and goal alignment to maximize productivity.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-2xl font-semibold mb-2"><strong>Role Clarity and Team Norms:</strong></h3>
            <p className="text-gray-600">
              Clearly defined roles for effective collaboration.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-2xl font-semibold mb-2"><strong>Conflict Resolution:</strong></h3>
            <p className="text-gray-600">
              Proactive methods to minimize friction and resolve issues.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-2xl font-semibold mb-2"><strong>User Feedback Integration:</strong></h3>
            <p className="text-gray-600">
              Iterative improvements based on real user insights.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-2xl font-semibold mb-2"><strong>Team Performance Metrics:</strong></h3>
            <p className="text-gray-600">
              Regular assessments to ensure sustainable, high-performance results.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition self-center">
            <h3 className="text-2xl font-semibold mb-2"><strong>Celebration of Success:</strong></h3>
            <p className="text-gray-600">
              Recognizing achievements to foster a positive team culture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
