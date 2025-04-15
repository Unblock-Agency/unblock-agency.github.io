import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import "../styles/Testimonials.css";

const testimonialData = [
  {
    name: "Mark Naufel",
    quote: "Aritro is an effective project manager. He led a team of developers in developing this platform which will help improve the outcomes of those with developmental disabilities. It was a true joy to work with Aritro.",
    title: "Executive Director of Strategic Projects, Arizona State University",
    image: "/mark.avif"
  },
  {
    name: "Lloyd Hopkins",
    quote: "Aritro is considerate, compassionate and dedicated. He manages to foster positive discussions and bring the best out of other employees. On my team he has shown me that he is passionate about and well versed in project management, data evaluation and systems.",
    title: "Executive Director, Million Dollar Teacher Project",
    image: "/llyod.png"
  },
  {
    name: "Juan Kingsbury",
    quote: "His 100% understanding of me and my biz is what I'm still so thankful for long after our work together. If you need to save time - organize and automate your thoughts, files, projects into building something worth a damn - be smart and let Aritro help you!",
    title: "Ceo and Talent Strategist, Career Blindspot",
    image: "/juan.avif"
  }
];

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    pauseOnHover: true
  };

  return (
    <div id="testimonials">
      <h1>Testimonials</h1>
      <Slider {...settings}>
        {testimonialData.map((t, i) => (
          <div key={i}>
            <div className="testimonial-card">
              <p className="quote">“{t.quote}”</p>
              <div className='signature'>
                <img src={t.image} alt={t.name} id="testimonial-image" />
                <p className="name">– {t.name}, <span className="title">{t.title}</span></p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}