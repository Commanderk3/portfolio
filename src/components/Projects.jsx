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
          I have made begineer to intermediate projects but more advance projects are coming on its way.
          <ul className="project-list">
            <li>
              <div className="project-names">
                A Thug's Ascension - Indie Video Game{" "}
              </div>
              <div className="button-container">
                <button className="project-button" onClick={() => window.open("https://www.moonwalkgames.net/ata")}>View Site</button>
                <button className="project-button" onClick={() => window.open("https://store.steampowered.com/app/2391950/A_Thugs_Ascension/")}>Steam</button>
              </div>
            </li>
            <li>
              <div className="project-names">
                Tic Tac Toe - Human Vs AI{" "}
              </div>
              <div className="button-container">
                <button className="project-button" onClick={() => window.open("https://github.com/Commanderk3/tic-tac-toe-pwa")}>View Site</button>
                <button className="project-button" onClick={() => window.open("https://github.com/Commanderk3/tic-tac-toe-pwa")}>GitHub</button>
              </div>
            </li>
            <li>
              <div className="project-names">
                Traffic Management System{" "}
              </div>
              <div className="button-container">
                <button className="project-button" onClick={() => window.open("https://github.com/Commanderk3/dbms")}>View Site</button>
                <button className="project-button" onClick={() => window.open("https://github.com/Commanderk3/dbms")}>GitHub</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
