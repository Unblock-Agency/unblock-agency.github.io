import { FaLinkedin } from 'react-icons/fa';
import "../styles/Team.css"

export default function Team() {
  return (
    <div id="team">
      <h1>Our Team</h1>
      <div id="team-container">
        <div className="team-member">
          <div className="photo-container">
            <img src="/aritro.jpg" alt="Aritro Majumdar" className="team-photo" />
          </div>
          <div className='name'>
            <h3>Aritro Majumdar</h3>
            <a href="https://linkedin.com/in/aritro-majumdar/" className="circle-link">
              <FaLinkedin size={20} />
            </a>
          </div>
          <p>Founder and Principal Consultant</p>
        </div>
        <div className="team-member">
          <div className="photo-container">
            <img src="/kasra.jpeg" alt="Kasra Bahrehmand" className="team-photo" />
          </div>
          <div className='name'>
            <h3>Kasra Bahrehmand</h3>
            <a href="https://linkedin.com/in/kasra-bahrehmand/" className="circle-link">
              <FaLinkedin size={20} />
            </a>
          </div>
          <p>Principal Software Engineer</p>
        </div>
        <div className="team-member">
          <div className="photo-container">
            <img src="/ari.jpg" alt="Ari Abrams" className="team-photo" />
          </div>
          <div className='name'>
            <h3>Ari Abrams</h3>
            <a href="https://linkedin.com/in/ciolfi-abrams/" className="circle-link">
              <FaLinkedin size={20} />
            </a>
          </div>
          <p>Principal Marketing Strategist</p>
        </div>
      </div>
    </div>
  );
}