import { Link } from "react-router-dom";

export default function Pilot() {
  return (
    <section
      id="pilot"
      className="scroll-mt-36 w-full bg-white px-6 sm:px-8 lg:px-12 py-20 sm:py-24 lg:py-32 min-h-screen flex items-center"
    >
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <header className="space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
              Join Our Pilot Program
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We're selecting 5 companies to receive our agile services, free of charge, in exchange for feedback and a testimonial. Let's build a resilient team with Unblock Agency.
            </p>
          </header>
          <div className="mt-8">
            <Link to="/pilot" className="cursor-pointer">
              <button className="cursor-pointer bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors">
                Learn More About the Pilot
              </button>
            </Link>
          </div>
        </div>
        {/* Image */}
        <figure className="w-full md:w-1/2">
          <img
            src="/Kanban.png"
            alt="Kanban board mockup"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </figure>
      </div>
    </section>
  );
}
