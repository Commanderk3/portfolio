import { useEffect, useRef, useState } from "react";

const Skills = () => {
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
    </div>
  );
};

export const ScrollSlideIn = () => {
  const slideRef = useRef(null);
  const sectionRef = useRef(null);
  const [translateX, setTranslateX] = useState(-100); // Start off-screen (100%)

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const slide = slideRef.current;
      if (!section || !slide) return;

      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollY = window.scrollY + window.innerHeight;

      if (scrollY > sectionTop) {
        const progress = Math.min(1, (scrollY - sectionTop) / sectionHeight);
        const newTranslateX = -(1 - progress) * 100;
        setTranslateX(newTranslateX);
      } else {
        setTranslateX(-100); // Reset if not in view
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <Skills />
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
            <div className="bento-box" style={{  marginLeft: "10%", marginRight: "2%"}}>
              <h3>L A N G U A G E S</h3>
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
            <div className="bento-box" style={{  marginLeft: "2%", marginRight: "10%"}}>
              <h3>F R A M E W O R K S</h3>
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
        <div className="bento-box-2">
          <h2>Databases</h2>
          <ul className="database">
            <li>
              <i class="devicon-mysql-original colored"></i>
            </li>
            <li>
              <i class="devicon-mongodb-plain colored"></i>
            </li>
          </ul>
        </div>
        <div className="bento-box-2">
          <h3>Tools</h3>
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
