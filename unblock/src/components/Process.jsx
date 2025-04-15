import '../styles/Process.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaClipboardCheck, FaUsersCog,
          FaComments, FaSitemap, FaUserFriends,
          FaRegSmileBeam
        } from 'react-icons/fa';


export default function Process() {

  function NextArrow({ onClick }) {
    return <button className="slider-arrow next" onClick={onClick}><ChevronRight size={24} /></button>;
  }

  function PrevArrow({ onClick }) {
    return <button className="slider-arrow prev" onClick={onClick}><ChevronLeft size={24} /></button>;
  }
  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };


  return (
    <div id="process">
      <h1 id="process-title">Our Process</h1>
      <Slider {...settings}>
        <div key={0} className="process-card">
          <div className='process-card-title'>
            <FaClipboardCheck size={60}></FaClipboardCheck>
            <h2>
              Initial Assessment and Sprint Setup
            </h2>
          </div>
          <h3>Milestone:</h3>
          <p>
            Complete baseline assessment, establish goals and sub-goals, and initiate the first two sprint cycles.
          </p>
          <h3>Outcome:</h3>
          <p>
            Clear understanding of team dynamics, initial capacity allocation, and alignment on goals, with the team starting their first sprint cycle.
          </p>
        </div>
        <div key={2} className="process-card">
          <div className='process-card-title'>
            <FaUsersCog size={60}></FaUsersCog>
            <h2>
              Roles, Responsibilities, and Sprint Optimization
            </h2>
          </div>
          <h3>Milestone:</h3>
          <p>
            Finalize roles and responsibilities, refine team cadence, and continue optimizing sprints.
          </p>
          <h3>Outcome:</h3>
          <p>
            The team has clarity on roles, regular cadence is established, and ongoing feedback ensures continuous improvement of the sprint process.
          </p>
        </div>
        <div key={2} className="process-card">
          <div className='process-card-title'>
            <FaComments size={60}></FaComments>
            <h2>
              Conflict Resolution and Continuous Feedback Integration
            </h2>
          </div>
          <h3>Milestone:</h3>
          <p>
            Strengthen conflict resolution mechanisms and integrate continuous feedback.
          </p>
          <h3>Outcome:</h3>
          <p>
            Improved communication, fewer conflicts, and more effective feedback loops that increase team cohesion and productivity.
          </p>
        </div>
        <div key={3} className="process-card">
          <div className='process-card-title'>
            <FaSitemap size={60}></FaSitemap>
            <h2>
              Strategic Planning and Leadership Alignment
            </h2>
          </div>
          <h3>Milestone:</h3>
          <p>
            Facilitate future planning, ensure leadership alignment, and further optimize sprints.
          </p>
          <h3>Outcome:</h3>
          <p>
            Teams and leaders are aligned on long-term goals, with tools and techniques in place for scaling their processes in the future.
          </p>
        </div>
        <div key={4} className="process-card">
          <div className='process-card-title'>
            <FaUserFriends size={60}></FaUserFriends>
            <h2>
              User Interaction, Ideation, and Product Feedback
            </h2>
          </div>
          <h3>Milestone:</h3>
          <p>
            Enhance team interactions with end-users and focus on ideation and product feedback.
          </p>
          <h3>Outcome:</h3>
          <p>
            A deeper connection to end-users, better user-centered design decisions, and a team that is empowered to innovate based on user needs.
          </p>
        </div>
        <div key={5} className="process-card">
          <div className='process-card-title'>
            <FaRegSmileBeam size={60}></FaRegSmileBeam>
            <h2>
              Celebration, Well-Being, and Final Review
            </h2>
          </div>
          <h3>Milestone:</h3>
          <p>
            Celebrate achievements, conduct a final health check, and review program outcomes.
          </p>
          <h3>Outcome:</h3>
          <p>
            A thriving, high-performing team with a strong culture of well-being, celebrating success, and equipped with a strategic roadmap for long-term growth.
          </p>
        </div>
      </Slider>
    </div>
  );
}