import { useRef, useEffect } from "react";
import "./styles/WhatIDo.css";

const WhatIDo = () => {
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);

  useEffect(() => {
    const handleClick = (clicked, sibling) => {
      clicked.classList.toggle("what-content-active");
      sibling.classList.toggle("what-sibling");
    };

    const card1 = card1Ref.current;
    const card2 = card2Ref.current;

    const handler1 = () => handleClick(card1, card2);
    const handler2 = () => handleClick(card2, card1);

    card1?.addEventListener("click", handler1);
    card2?.addEventListener("click", handler2);

    return () => {
      card1?.removeEventListener("click", handler1);
      card2?.removeEventListener("click", handler2);
    };
  }, []);

  return (
    <div className="whatido-section">
      <div className="section-container">
        <h3 className="title">What I Do</h3>
        <div className="whatido-container">
          <div className="what-content what-noTouch" ref={card1Ref}>
            <div className="what-content-inner">
              <h2 className="do-h2">FULL STACK</h2>
              <h2 className="hat-h2">DEVELOPMENT</h2>
              <div className="what-content-flex">
                <h5>React, Next.js, Node.js, Nest.js, WordPress, PHP, Laravel</h5>
                <h5>MongoDB, MySQL, PostgreSQL, Redis, AWS (EC2, S3, Lambda, RDS)</h5>
              </div>
              <div className="what-arrow">&#8599;</div>
            </div>
            <svg className="what-border" viewBox="0 0 100 100" preserveAspectRatio="none">
              <rect x="0.5" y="0.5" width="99" height="99" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.3" strokeDasharray="2,2" />
            </svg>
          </div>
          <div className="what-content what-noTouch" ref={card2Ref}>
            <div className="what-content-inner">
              <h2 className="do-h2">CLOUD &</h2>
              <h2 className="hat-h2">INTEGRATIONS</h2>
              <div className="what-content-flex">
                <h5>AWS Architecture, CI/CD, Docker, Payment Gateways (Stripe, PayPal)</h5>
                <h5>Third-party APIs, UberEats, DoorDash, Deliveroo, MenuLog integrations</h5>
              </div>
              <div className="what-arrow">&#8599;</div>
            </div>
            <svg className="what-border" viewBox="0 0 100 100" preserveAspectRatio="none">
              <rect x="0.5" y="0.5" width="99" height="99" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.3" strokeDasharray="2,2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
