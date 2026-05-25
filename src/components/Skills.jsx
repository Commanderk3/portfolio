import "../styles/skills.css";

const skillGroups = [
  {
    title: "Languages",
    className: "skill-card-yellow",
    items: [
      { label: "C", icon: "devicon-c-original colored" },
      { label: "C++", icon: "devicon-cplusplus-plain colored" },
      { label: "Java", icon: "devicon-java-plain colored" },
      { label: "Python", icon: "devicon-python-plain colored" },
      { label: "JavaScript", icon: "devicon-javascript-plain colored" },
      { label: "TypeScript", icon: "devicon-typescript-plain colored" },
    ],
  },
  {
    title: "Frameworks / Tools",
    className: "skill-card-red",
    items: [
      { label: "Spring Boot", icon: "devicon-spring-original colored" },
      { label: "React", icon: "devicon-react-original colored" },
      { label: "Node.js", icon: "devicon-nodejs-plain colored" },
      { label: "Express", icon: "devicon-express-original" },
      { label: "MongoDB", icon: "devicon-mongodb-plain colored" },
      { label: "Django", icon: "devicon-django-plain" },
      { label: "LangChain" },
      { label: "FastAPI", icon: "devicon-fastapi-plain colored" },
      { label: "Git", icon: "devicon-git-plain colored" },
      { label: "GitHub", icon: "devicon-github-original" },
      { label: "Docker", icon: "devicon-docker-plain colored" },
      { label: "Kubernetes", icon: "devicon-kubernetes-plain colored" },
      { label: "Terraform", icon: "devicon-terraform-plain colored" },
      { label: "Ansible", icon: "devicon-ansible-plain colored" },
    ],
  },
  {
    title: "CS Fundamentals",
    className: "skill-card-green",
    items: [
      { label: "Data Structures and Algorithms" },
      { label: "DBMS" },
      { label: "Operating Systems" },
      { label: "Object-Oriented Programming" },
      { label: "Computer Networks" },
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2 className="skills-title">Skills</h2>
      <p className="skills-intro">
        A practical toolkit across systems programming, full-stack development,
        cloud-native tooling, and computer science fundamentals.
      </p>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article key={group.title} className={`skill-card ${group.className}`}>
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item.label}>
                  {item.icon ? <i className={item.icon} aria-hidden="true" /> : null}
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};
