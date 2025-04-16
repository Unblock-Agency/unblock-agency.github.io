import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonialsData = [
  {
    name: "Mark Naufel",
    quote:
      "Aritro is an effective project manager. He led a team of developers in developing this platform which will help improve the outcomes of those with developmental disabilities. It was a true joy to work with Aritro.",
    title: "Executive Director of Strategic Projects, Arizona State University",
    image: "/mark.avif",
  },
  {
    name: "Juan Kingsbury",
    quote:
      "His 100% understanding of me and my biz is what I'm still so thankful for long after our work together. If you need to save time – organize and automate your thoughts, files, projects into building something worth a damn – be smart and let Aritro help you!",
    title: "CEO and Talent Strategist, Career Blindspot",
    image: "/juan.avif",
  },
  {
    name: "Llyod Hopkins",
    quote:
      "Aritro is considerate, compassionate and dedicated. He manages to foster positive discussions and bring the best out of other employees. On my team he has shown me that he is passionate about and well versed in project management, data evaluation and systems.",
    title: "Executive Director, Million Dollar Teacher Project",
    image: "/llyod.png",
  }
];

export default function Testimonials() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <section
      id="testimonials"
      className="scroll-mt-36 w-full bg-white px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <header className="space-y-3">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Testimonials
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Real feedback from dynamic leaders who partnered with us to bring clarity, speed, and compassion to their teams.
          </p>
        </header>
        <Slider {...settings}>
          {testimonialsData.map((t, idx) => (
            <div key={idx} className="p-4">
              <article className="cursor-pointer bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  {/* Left Column: Image */}
                  <div className="md:w-1/3 bg-gray-100 flex items-center justify-center p-4">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                  </div>
                  {/* Right Column: Quote & Details */}
                  <div className="md:w-2/3 p-4 flex flex-col justify-center">
                    <p className="text-base sm:text-lg italic text-gray-700 mb-3">
                      "{t.quote}"
                    </p>
                    <div className="flex flex-col items-center">
                      <h3 className="text-xl font-bold text-gray-900">{t.name}</h3>
                      <p className="text-xs sm:text-sm text-gray-500">{t.title}</p>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
