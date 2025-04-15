import '../styles/Contact.css';

export default function Contact() {
    return (
        <div id='contact'>
            <h1>Contact Us</h1>
            <h3>You can schedule a call below or reach us at&nbsp;
                <a id="email" href="mailto:hi@unblock.agency">hi@unblock.agency</a>
            </h3>
            <iframe
                src="https://calendly.com/aritrom/30min"
                width="1024px"
                height="600px"
                style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '1rem', margin: '2.2rem 0'}}
            ></iframe>
        </div>

    )
};