import { Link } from "react-router-dom";
import '../styles/Pilot.css';

export default function Pilot() {
  return (
    <div id="pilot">
      <div id="pilot-container">
        <img id="pilot-img" src="/Kanban.png"></img>
        <div id="pilot-description">
          <h1 id="title">Join Our Pilot Program</h1>
          <p id="pilot-p">
            We're selecting 5 companies to receive our agile services, free of charge, in exchange for feedback and a testimonial. Let's build a resilient team with Unblock Agency.
          </p>
          <Link to="/pilot">
            <button >Learn More About the Pilot</button>
          </Link>
        </div>
      </div>
    </div>
  );
}