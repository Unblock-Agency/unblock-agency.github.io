import React from "react";

export default function PilotHero() {
  return (
    <section
      id="pilot-hero"
      className="scroll-mt-36 w-full bg-white px-6 sm:px-8 lg:px-12 min-h-screen flex items-center"
    >
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
        {/* Image */}
        <figure className="w-full md:w-1/2">
          <img
            src="/happy.png"
            alt="Pilot Program"
            className="w-full h-auto rounded-md shadow-md"
          />
        </figure>
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <header className="space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
              Join the Pilot Program
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              For a limited time, Unblock Agency is offering a 6‑month pilot program to select startups. In exchange for detailed feedback and a testimonial, we’re providing our full suite of project management services free of charge.
            </p>
          </header>
          <div className="mt-8">
            <a
              href="https://calendly.com/aritro-unblockagency/pilot-program?embed_domain=www.unblockagency.com&embed_type=Inline&hide_gdpr_banner=1&month=2025-04"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <button className="cursor-pointer bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors">
                Contact Us
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
