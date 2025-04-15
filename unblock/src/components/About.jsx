import '../styles/About.css';
import { Scale, HeartHandshake, Target } from 'lucide-react';

export default function About() {
  return (
    <div id='about'>
      <div id="about-wrap">
        <h1 id='about-title'>About Us</h1>
        <h3 id='title-p'>
          We equip startups with project management and expertise, enabling high-performing teams before the need for full-time project managers, and ensure our clients align with our values to maintain service quality.
        </h3>
        <div id="about-container">
          <div className='eee-title'>
            <HeartHandshake size={50} color='#2563EB' />
            <h2>
              Empathy
            </h2>
          </div>
          <p className='about-p'>
            To create exceptional software, we cultivate empathy in every team member, fostering deep understanding and connection with all system actors, including clients, developers, and stakeholders.
          </p>
          <div className='eee-title'>
            <Scale size={50} color='#2563EB' />
            <h2>
              Equity
            </h2>
          </div>
          <p className='about-p'>
            Fairness and impartiality are the foundation of all our client and team interactions, driving our commitment to valuing every idea and collaboratively building exceptional products.
          </p>
          <div className='eee-title'>
            <Target size={50} color='#2563EB' />
            <h2>
              Efficacy
            </h2>
          </div>
          <p className='about-p'>
            In our projects, we construct exceptional teams, embracing agility for effective feature prioritization and regular stakeholder feedback to create outstanding software products.
          </p>
        </div>
        <div id='mission'>
          <h2>Our Mission</h2>
          <p>
            Our mission is clear: to empower early-stage startups with agile project management solutions that prioritize the well-being of every team member. We believe that building high-performing teams doesn't have to come at the cost of individual health and fulfillment.
          </p>
          <p>
            Our commitment is to help startups thrive by fostering a culture that values efficiency, equity, and efficacy while preventing burnout. We understand the unique challenges faced by startups and are dedicated to providing the support and guidance needed to achieve success without compromise.
          </p>
        </div>
        <div id='vision'>
          <h2>Our Vision</h2>
          <p>
            We envision a world where software companies worldwide undergo a transformative shift, becoming compassionate and highly efficient workplaces.
          </p>
          <p>
            In this future, software teams collaborate seamlessly, powered by deep-seated values of respect, empathy, and consideration. We imagine teams that are not only highly productive but also deeply connected, recognizing the unique contributions of each team member.
          </p>
          <p>
            We aim to pave the way for this transformation by equipping startups with innovative tools, practices, and strategies. Our vision is to revolutionize software companies into compassionate and efficient workplaces worldwide.
          </p>
        </div>
      </div>
    </div >
  );
}