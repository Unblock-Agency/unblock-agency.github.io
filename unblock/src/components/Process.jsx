import React from 'react';

const steps = [
  {
    title: "Initial Assessment and Sprint Setup",
    milestone: "Complete baseline assessment, set goals, and launch the initial sprints.",
    outcome: "Establish clear team roles and a solid process foundation.",
  },
  {
    title: "Roles, Responsibilities, and Sprint Optimization",
    milestone: "Define team roles and refine the sprint process for continuous improvement.",
    outcome: "Enhanced team structure and optimized workflows.",
  },
  {
    title: "Conflict Resolution and Continuous Feedback Integration",
    milestone: "Establish robust communication channels and feedback loops.",
    outcome: "Improve team collaboration and resolve issues proactively.",
  },
  {
    title: "Strategic Planning and Leadership Alignment",
    milestone: "Facilitate leadership sessions to chart long-term vision.",
    outcome: "Align leadership and team goals for sustained success.",
  },
  {
    title: "User Interaction, Ideation, and Product Feedback",
    milestone: "Integrate user feedback into the development process.",
    outcome: "Foster user-centered innovations and continuous improvement.",
  },
  {
    title: "Celebration, Well-Being, and Final Review",
    milestone: "Review outcomes and celebrate team achievements.",
    outcome: "Boost morale and validate the process with tangible results.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="scroll-mt-36 w-full bg-white px-6 sm:px-8 lg:px-12 py-20 sm:py-24 lg:py-32"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        <header className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Our Process</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            A clear, proven approach to building better teams—without compromising your values.
          </p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <article
              key={index}
              className="cursor-pointer bg-gray-50 border border-gray-200 rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-3 text-sm text-gray-500 font-medium">
                Step {index + 1}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <div className="space-y-2 text-gray-600 text-sm leading-relaxed">
                <p><strong>Milestone:</strong> {step.milestone}</p>
                <p><strong>Outcome:</strong> {step.outcome}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
