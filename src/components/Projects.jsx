import { useEffect, useRef } from "react";

export const Projects = () => {
  const boxRef = useRef();
  useEffect(() => {
    const handleMouseMove = (e) => {
      const box = boxRef.current;
      const hoveredContainer = e.target.closest(".project-list");

      if (box && hoveredContainer) {
        box.style.display = "block";
        box.style.top = `${e.clientY + 10}px`;
        box.style.left = `${e.clientX + 10}px`;
      } else if (box) {
        box.style.display = "none";
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return (
    <>
      <div
        ref={boxRef}
        style={{
          position: "fixed",
          display: "none",
          backgroundColor: "#222",
          backgroundImage: "linear-gradient(45deg, #333, #222)",
          color: "white",
          padding: "8px 12px",
          borderRadius: "6px",
          pointerEvents: "none",
          zIndex: 9999,
        }}
      >
        Hello 👋
      </div>

      <div className="projects">
        <div className="projects-title">Projects</div>
        <div className="projects-content">
          Lorem ipsum dolor sit amet... (repeat this a lot to test scrolling).
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          voluptatibus veritatis maxime necessitatibus perferendis magni
          eveniet, nobis molestiae cum commodi quas iste, numquam quasi.
          Repellat dignissimos facilis fuga quaerat officia.
          <ul className="project-list">
            <li>
              <div className="project-names">
                Project 1 - Lorem ipsum dolor sit amet consectetur{" "}
              </div>
              <div className="button-container">
                <button className="project-button">View Site</button>
                <button className="project-button">GitHub</button>
              </div>
            </li>
            <li>
              <div className="project-names">
                Project 2 - Lorem ipsum dolor sit amet consectetur{" "}
              </div>
              <div className="button-container">
                <button className="project-button">View Site</button>
                <button className="project-button">GitHub</button>
              </div>
            </li>
            <li>
              <div className="project-names">
                Project 3 - Lorem ipsum dolor sit amet consectetur{" "}
              </div>
              <div className="button-container">
                <button className="project-button">View Site</button>
                <button className="project-button">GitHub</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
