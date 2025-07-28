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
      <ScrollSlideIn />
    </div>
  );
};

const ScrollSlideIn = () => {
  const slideRef = useRef(null);
  const sectionRef = useRef(null);
  const [translateX, setTranslateX] = useState(-100);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const slide = slideRef.current;
      if (!section || !slide) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        const visibleHeight = windowHeight - rect.top;
        const progress = Math.min(1, visibleHeight / rect.height);
        const newTranslateX = -(1 - progress) * 100;
        setTranslateX(newTranslateX);
      } else {
        setTranslateX(-100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="slider-parent">
        <div
          className="slider-container"
          ref={sectionRef}
          style={{
            backgroundColor: "white",
            position: "relative",
            display: "flex",
          }}
        >
          <div
            ref={slideRef}
            className="slide-box"
            style={{
              transform: `translateX(${translateX}%)`,
              left: "0",
              zIndex: "3",
            }}
          >
            <div
              className="bento-box"
              style={{ marginLeft: "6%", marginRight: "2%" }}
            >
              <h2>L A N G U A G E S</h2>
              <div className="bento-split">
                <ul>
                  <li>
                    <i class="devicon-html5-plain colored"></i>
                  </li>
                  <li>
                    <i class="devicon-css3-plain colored"></i>
                  </li>
                  <li>
                    <i class="devicon-javascript-plain colored"></i>
                  </li>
                  <li>
                    <i class="devicon-c-original colored"></i>
                  </li>
                  <li>
                    <i class="devicon-cplusplus-plain colored"></i>
                  </li>
                  <li>
                    <i class="devicon-python-plain colored"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            style={{
              width: "50%",
              height: "500px",
              zIndex: "2",
              backgroundColor: "white",
            }}
          ></div>

          <div
            ref={slideRef}
            className="slide-box"
            style={{ transform: `translateX(${translateX}%)`, left: "50%" }}
          >
            <div
              className="bento-box"
              style={{
                marginLeft: "2%",
                marginRight: "6%",
                backgroundColor: "#ff3e3e",
              }}
            >
              <h2>F R A M E W O R K S</h2>
              <ul className="framework">
                <li>
                  <i class="devicon-react-original colored"></i>
                </li>
                <li>
                  <i class="devicon-express-original"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="skills-2">
        <div className="bento-box-2" style={{ backgroundColor: "#5b8f67" }}>
          <h2>D A T A B A S E</h2>
          <ul className="database">
            <li>
              <i class="devicon-mysql-original colored"></i>
            </li>
            <li>
              <i class="devicon-mongodb-plain colored"></i>
            </li>
          </ul>
        </div>
        <div className="bento-box-2" style={{ backgroundColor: "#ffc1f5" }}>
          <h2>T O O L S</h2>
          <ul className="tools">
            <li>
              <i class="devicon-nodejs-plain colored"></i>
            </li>
            <li>
              <i class="devicon-git-plain colored"></i>
            </li>
            <li>
              <i class="devicon-github-original"></i>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
