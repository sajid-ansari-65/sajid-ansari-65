import { useState, useCallback } from "react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import "./styles/Work.css";

const projects = [
  {
    id: "01",
    title: "GYG Online Ordering",
    category: "Enterprise Web App",
    tools: "React, Node.js, Nest.js, AWS",
    link: "https://order.guzmanygomez.com.au/",
    color: "#1a1a2e",
  },
  {
    id: "02",
    title: "GYG Resto 365 Admin",
    category: "Admin Dashboard",
    tools: "React, TypeScript, AWS, REST APIs",
    link: "https://www.guzmanygomez.com/",
    color: "#16213e",
  },
  {
    id: "03",
    title: "DollarSprout",
    category: "Finance Blog Platform",
    tools: "WordPress, PHP, SEO, Custom Theme",
    link: "https://dollarsprout.com/",
    color: "#0f3460",
  },
  {
    id: "04",
    title: "Capauth SSO",
    category: "Authentication Backend",
    tools: "Django, Python, REST API, SSO",
    link: "https://app.capabara.com/mycapabara",
    color: "#1a1a2e",
  },
];

const Work = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const navigate = useCallback(
    (direction) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrent((prev) =>
        direction === "next"
          ? (prev + 1) % projects.length
          : (prev - 1 + projects.length) % projects.length
      );
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const project = projects[current];

  return (
    <div className="work-section" id="work">
      <div className="section-container">
        <h3 className="title">Selected Work</h3>
        <div className="work-carousel">
          <div className="work-slide">
            <div className="work-info">
              <span className="work-number">{project.id}</span>
              <h2 className="work-title">{project.title}</h2>
              <p className="work-category">{project.category}</p>
              <p className="work-tools">{project.tools}</p>
            </div>
            <div
              className="work-image-container"
              style={{ backgroundColor: project.color }}
            >
              <a href={project.link} target="_blank" rel="noreferrer" className="work-link-btn">
                Visit &rarr;
              </a>
            </div>
          </div>

          <div className="work-nav">
            <button
              className="work-arrow"
              onClick={() => navigate("prev")}
              aria-label="Previous project"
            >
              <MdArrowBack />
            </button>
            <div className="work-dots">
              {projects.map((_, i) => (
                <span
                  key={i}
                  className={`work-dot ${i === current ? "work-dot-active" : ""}`}
                  onClick={() => {
                    if (!isAnimating) {
                      setIsAnimating(true);
                      setCurrent(i);
                      setTimeout(() => setIsAnimating(false), 500);
                    }
                  }}
                />
              ))}
            </div>
            <button
              className="work-arrow"
              onClick={() => navigate("next")}
              aria-label="Next project"
            >
              <MdArrowForward />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
