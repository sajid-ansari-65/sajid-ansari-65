import { MdOutlineArrowOutward } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section" id="contact">
      <div className="section-container">
        <h3 className="title">Get In Touch</h3>

        <div className="contact-container">
          <div className="contact-box">
            <h4>Connect</h4>
            <a href="https://www.linkedin.com/in/iamsajidansari/" target="_blank" rel="noreferrer" className="contact-link">
              LinkedIn &mdash; iamsajidansari <MdOutlineArrowOutward />
            </a>
            <div className="contact-info">
              <p>B.Tech in Information Technology</p>
              <p>UKA Tarsadia University (2012 - 2016)</p>
            </div>
          </div>

          <div className="contact-box">
            <h4>Social</h4>
            <div className="contact-socials">
              <a href="https://github.com/sajid-ansari-65" target="_blank" rel="noreferrer">
                GitHub <MdOutlineArrowOutward />
              </a>
              <a href="https://www.linkedin.com/in/iamsajidansari/" target="_blank" rel="noreferrer">
                LinkedIn <MdOutlineArrowOutward />
              </a>
              <a href="https://x.com/iamsajid_ansari" target="_blank" rel="noreferrer">
                Twitter / X <MdOutlineArrowOutward />
              </a>
              <a href="mailto:sajidansari0605@gmail.com">
                Email <MdOutlineArrowOutward />
              </a>
            </div>
          </div>

          <div className="contact-box contact-footer">
            <h4>Designed & Developed by</h4>
            <p>Mohammad Sajid Ansari &copy; 2026</p>
            <p className="contact-location">Surat, Gujarat, India</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
