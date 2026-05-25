export const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="about-title">About</h2>
      <div className="about-content">
        <p className="about-lead">
          Hi, I am Diwangshu Kakoty. I build full-stack products and AI-powered
          systems with a focus on performance, reliability, and practical impact.
        </p>
        <p>
          I am currently pursuing Computer Science and Engineering at SRM
          Institute of Science and Technology and enjoy turning complex problems
          into clean, maintainable software. My recent work spans real-time
          systems, multi-agent AI workflows, and open-source contributions.
        </p>
        <div className="about-meta">
          <a href="mailto:diwangshukakoty@gmail.com">diwangshukakoty@gmail.com</a>
          <a href="tel:+919784237669">+91 9784237669</a>
          <a href="https://github.com/Commanderk3" target="_blank" rel="noreferrer">
            github.com/Commanderk3
          </a>
          <a
            href="https://linkedin.com/in/diwangshu-kakoty"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/diwangshu-kakoty
          </a>
        </div>
        <a className="resume-link" href="/resume.pdf" download="resume.pdf">
          Download Resume
        </a>
      </div>
    </section>
  );
};
