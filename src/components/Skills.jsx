import "../styles/skills.css";

import { useEffect, useRef, useState } from "react";

export const Skills = () => {
  const skillsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <div className="skills" ref={skillsRef}>
      <div className={`skills-title ${isVisible ? "slide-in" : ""}`}>
        Expertise
      </div>
      <div className="bento-grid">
        {/* Languages Section */}
        <div className="bento-box">
          <h3>Languages</h3>
          <div className="bento-split">
            <ul>
              <li>
                <i class="devicon-html5-plain colored"></i>
                <span>HTML</span>
              </li>
              <li>
                <i class="devicon-css3-plain colored"></i>
                <span>CSS</span>
              </li>
              <li>
                <i class="devicon-javascript-plain colored"></i>
                <span>JavaScript</span>
              </li>
              <li>
                <i class="devicon-c-original colored"></i>
                <span>C</span>
              </li>
              <li>
                <i class="devicon-cplusplus-plain colored"></i>
                <span>C++</span>
              </li>
              <li>
                <i class="devicon-python-plain colored"></i>
                <span>Python</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Frameworks */}
        <div className="bento-box">
          <h3>Frameworks</h3>
          <ul className="framework">
            <li>
              <i class="devicon-react-original colored"></i>
              <span>React</span>
            </li>
            <li>
              <i class="devicon-express-original"></i>
              <span>Express</span>
            </li>
          </ul>
        </div>

        {/* Databases */}
        <div className="bento-box">
          <h3>Databases</h3>
          <ul className="database">
            <li>
              <i class="devicon-mysql-original colored"></i>
              <span>MySQL</span>
            </li>
            <li>
              <i class="devicon-mongodb-plain colored"></i>
              <span>MongoDB</span>
            </li>
          </ul>
        </div>

        {/* Tools */}
        <div className="bento-box">
          <h3>Tools</h3>
          <ul className="tools">
            <li>
              <i class="devicon-nodejs-plain colored"></i>
              <span>Node.js</span>
            </li>
            <li>
              <i class="devicon-git-plain colored"></i>
              <span>Git</span>
            </li>
            <li>
              <i class="devicon-github-original"></i>
              <span>GitHub</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
