import Footer from '../components/Footer';
import Contact from '../components/Contact';
import PilotNavbar from '../components/PilotNavbar';
import '../styles/PilotProgram.css';
import { HashLink } from 'react-router-hash-link';
import {
  FaRegClock, FaUserClock, FaComments,
  FaExclamationTriangle, FaSyncAlt,
  FaBullseye, FaUserCog, FaBalanceScale,
  FaCommentDots, FaChartLine, FaRegSmileBeam
} from 'react-icons/fa';


export default function PilotProgram() {
  return (
    <div>
      <PilotNavbar id="pilot-navbar" />
      <div id="pilot-program">
        <div id="pilot-hero">
          <div id="pilot-hero-content">
            <img id="pilot-hero-img" src='/happy.png'></img>
            <div id="pilot-hero-text">
              <h1 id="pilot-hero-title">Launch With Us</h1>
              <p>
                For a limited time, Unblock Agency is offering a 6-month pilot program to select startups.
                In exchange for detailed feedback and a testimonial, we’re providing our full suite of project management services free of charge.
              </p>
              <HashLink to="#pilot-contact" smooth>
                <button>Contact Us</button>
              </HashLink>
            </div>
          </div>
        </div>
        <div id="wte">
          <h1>
            What to Expect
          </h1>
          <div id="wte-dash">
            <div className='wte-card'>
              <div className='wte-card-title'>
                <FaRegClock size={60} />
                <h3>
                  A System That Delivers Software On Time
                </h3>
              </div>
              <p>
                No more guessing when your product will be ready. We build a system around your team that ensures predictable delivery without unnecessary delays.
              </p>
            </div>
            <div className='wte-card'>
              <div className='wte-card-title'>
                <FaUserClock size={60} />
                <h3>Free Yourself from Tech Meetings</h3>
              </div>
              <p>
                You don’t need to manage engineers or sit through hours of technical discussions. Show up for a 1-2 hour review every two weeks, give feedback, and focus on growing your business.
              </p>
            </div>
            <div className='wte-card'>
              <div className='wte-card-title'>
                <FaComments size={60} />
                <h3>More Efficient, Less Miscommunication</h3>
              </div>
              <p>
                A structured team moves faster and avoids costly mistakes. You’ll see improved delivery speed, better alignment, and fewer breakdowns due to miscommunication.
              </p>
            </div>
            <div className='wte-card'>
              <div className='wte-card-title'>
                <FaExclamationTriangle size={60} />
                <h3>Avoid Mistakes & Delays</h3>
              </div>
              <p>
                Waiting means risking late software, poor quality, and an overwhelmed team that might quit. Get ahead of these problems before they slow your business down.
              </p>
            </div>
          </div>
        </div>
        <div id="deliverables">
          <h1>Key Deliverables</h1>
          <div id="deliverables-container">
            <div className='deliverable-card'>
              <div className='deliverable-card-title'>
                <FaSyncAlt size={60}></FaSyncAlt>
                <h3>
                  <strong>Regular Sprint Cycles</strong>
                </h3>
              </div>
              <p>
                Continuous improvement via planning, reviews, and retrospectives, with two sprints per month.
              </p>
            </div>
            <div className='deliverable-card'>
              <div className='deliverable-card-title'>
                <FaBullseye size={60} />
                <h3>
                  <strong>Capacity and Goal Tracking</strong>
                </h3>
              </div>

              <p>
                Ongoing adjustments to ensure alignment and capacity are optimized.
              </p>
            </div>
            <div className='deliverable-card'>
              <div className='deliverable-card-title'>
                <FaUserCog size={60}></FaUserCog>
                <h3>
                  <strong>Role Clarity and Team Norms</strong>
                </h3>
              </div>
              <p>
                Detailed reports on team roles and responsibilities for better collaboration.
              </p>
            </div>
            <div className='deliverable-card'>
              <div className='deliverable-card-title'>
                <FaBalanceScale size={60} />
                <h3>
                  <strong>Conflict<br></br>Resolution</strong>
                </h3>
              </div>
              <p>
                Effective systems in place to ensure healthy team dynamics.
              </p>
            </div>
            <div className='deliverable-card'>
              <div className='deliverable-card-title'>
                <FaCommentDots size={60}></FaCommentDots>
                <h3>
                  <strong>User Feedback Integration</strong>
                </h3>
              </div>
              <p>
                Improved product development based on end-user feedback.
              </p>
            </div>
            <div className='deliverable-card'>
              <div className='deliverable-card-title'>
                <FaChartLine size={60}></FaChartLine>
                <h3>
                  <strong>Team Performace and Well-Being Metrics</strong>
                </h3>
              </div>
              <p>
                Insights into team efficiency and morale, ensuring sustainable, high-performance levels.
              </p>
            </div>
            <div className='deliverable-card'>
              <div className='deliverable-card-title'>
                <FaRegSmileBeam size={60}></FaRegSmileBeam>
                <h3>
                  <strong>Celebration of Success</strong>
                </h3>
              </div>
              <p>
                Continuous focus on team morale and well-being.
              </p>
            </div>
          </div>
        </div>
        <div id="pilot-contact">
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  );
}