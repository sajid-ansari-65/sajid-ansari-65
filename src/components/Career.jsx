import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section" id="career">
      <div className="section-container">
        <h2 className="career-heading title">Career</h2>

        <div className="career-current">
          <h3 className="title">Senior / Lead Web Developer</h3>
          <h4>
            at <a href="https://www.guzmanygomez.com/" target="_blank" rel="noreferrer">Guzman y Gomez</a>,
            building enterprise ordering systems and admin panels for 200+ restaurant locations across Australia.
          </h4>
        </div>

        <div className="career-timeline">
          <div className="career-line"></div>

          <div className="career-item">
            <div className="career-info-box">
              <h3>Guzman y Gomez</h3>
              <p>Senior / Lead Web Developer</p>
              <p className="career-detail">Full-stack development, Node.js, Nest.js, React, WordPress. Built ordering systems integrated with UberEats, DoorDash, MenuLog, Deliveroo.</p>
            </div>
            <div className="career-date-box">
              <span>2020 &mdash; Present</span>
              <span>Australia (Remote)</span>
            </div>
            <div className="career-dot"></div>
          </div>

          <div className="career-item">
            <div className="career-info-box">
              <h3>Uplers</h3>
              <p>Senior WordPress Developer</p>
              <p className="career-detail">WordPress site development, custom themes & plugins, Figma-to-WordPress implementation.</p>
            </div>
            <div className="career-date-box">
              <span>2020 &mdash; 2021</span>
              <span>Remote</span>
            </div>
            <div className="career-dot"></div>
          </div>

          <div className="career-item">
            <div className="career-info-box">
              <h3>CodeWorks Consulting</h3>
              <p>Senior PHP Developer</p>
              <p className="career-detail">E-commerce platforms, WooCommerce, RESTful APIs, mentoring junior developers.</p>
            </div>
            <div className="career-date-box">
              <span>2019 &mdash; 2020</span>
              <span>Surat, India</span>
            </div>
            <div className="career-dot"></div>
          </div>

          <div className="career-item">
            <div className="career-info-box">
              <h3>Lanet Team Software</h3>
              <p>PHP Developer</p>
              <p className="career-detail">WordPress, WooCommerce, Laravel development. Built MuscleBox, Digital Workshop Center, Upfit, Fritz and Rose.</p>
            </div>
            <div className="career-date-box">
              <span>2018 &mdash; 2021</span>
              <span>Surat, India</span>
            </div>
            <div className="career-dot"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
