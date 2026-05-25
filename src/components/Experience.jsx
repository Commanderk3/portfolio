const experienceItems = [
  {
    title: "Google Summer of Code 2025 - Contributor (Sugar Labs)",
    duration: "June 2025 - August 2025",
    description:
      "Built AI mentor agents using a RAG pipeline with FastAPI and JavaScript, deployed on AWS to support 1,000+ active students in the Sugar Labs ecosystem.",
  },
  {
    title: "Google Summer of Code 2026 - Mentor (Sugar Labs)",
    duration: "Ongoing",
    description:
      "Guiding contributors on project planning, architecture decisions, and code reviews for next-generation open-source projects.",
  },
  {
    title: "Open Source Contributions - Music Blocks",
    duration: "Community Contributions",
    description:
      "Authored 150+ Jest test cases, fixed 10+ critical bugs, and shipped 5+ features across the Music Blocks codebase.",
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h2 className="experience-title">Experience</h2>
      <div className="experience-content">
        <div className="experience-list">
          {experienceItems.map((item) => (
            <article key={item.title} className="experience-item">
              <h3>{item.title}</h3>
              <p className="experience-duration">{item.duration}</p>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
