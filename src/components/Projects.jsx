const projects = [
  {
    name: "CodeX: Multiplayer Coding Battle Platform",
    description:
      "Real-time 1v1 algorithmic battle platform with sub-100ms matchmaking, WebSocket-based code sync, and real-time match-state updates.",
    stack: "React, Node.js, WebSocket, Redis, MongoDB",
  },
  {
    name: "BuildItAI - AI Website Generator",
    description:
      "Lovable-inspired platform that generates complete websites from natural language prompts using Planner, Builder, and Debugger agents.",
    stack: "TypeScript, React, Tailwind CSS, Node.js, MongoDB",
  },
  {
    name: "A Thug's Ascension - Indie Video Game",
    description:
      "Worked as a 3D and animation artist from 2019 to release, with the game launched on Steam on January 18, 2024.",
    stack: "3D Art, Animation, Production",
    links: [
      { label: "Website", href: "https://www.moonwalkgames.net/ata" },
      {
        label: "Steam",
        href: "https://store.steampowered.com/app/2391950/A_Thugs_Ascension/",
      },
    ],
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-content">
        <ul className="project-list">
          {projects.map((project) => (
            <li key={project.name}>
              <div className="project-details">
                <h3 className="project-names">{project.name}</h3>
                <p>{project.description}</p>
                <p className="project-stack">
                  <strong>Stack:</strong> {project.stack}
                </p>
              </div>
              {project.links ? (
                <div className="button-container">
                  {project.links.map((link) => (
                    <button
                      key={link.href}
                      className="project-button"
                      onClick={() =>
                        window.open(link.href, "_blank", "noopener,noreferrer")
                      }
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
