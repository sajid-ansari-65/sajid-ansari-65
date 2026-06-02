import "./styles/Landing.css";

const Landing = () => {
  return (
    <section className="landing-section">
      <div className="landing-container">
        <div className="landing-intro">
          <h2>Hello! I'm</h2>
          <h1>SAJID ANSARI</h1>
        </div>
        <div className="landing-info">
          <h3 className="landing-h2-info">Senior Full Stack Developer</h3>
          <div className="landing-info-h2">
            <h2 className="landing-h2-1">WordPress</h2>
            <span>&</span>
            <h2 className="landing-h2-2">Cloud Expert</h2>
          </div>
        </div>
      </div>
      <div className="landing-gradient-top"></div>
      <div className="landing-gradient-bottom"></div>
    </section>
  );
};

export default Landing;
