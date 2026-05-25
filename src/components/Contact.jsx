import { useEffect, useState } from "react";

const contactLinks = [
  {
    label: "Email",
    value: "diwangshukakoty@gmail.com",
    href: "mailto:diwangshukakoty@gmail.com",
  },
  { label: "Phone", value: "+91 9784237669", href: "tel:+919784237669" },
  {
    label: "GitHub",
    value: "github.com/Commanderk3",
    href: "https://github.com/Commanderk3",
    external: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/diwangshu-kakoty",
    href: "https://www.linkedin.com/in/diwangshu-kakoty/",
    external: true,
  },
];

export const Contact = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const localTime = new Date().toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setTime(localTime);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="contact" className="contact">
      <h2 className="name-title">DIWANGSHU KAKOTY</h2>
      <div className="contact-container">
        <div>
          <div className="time">
            <span className="label">Local time -</span>
            <span className="value">{time} IST</span>
          </div>
          <p className="endline">
            Open to impactful software engineering roles, open-source
            collaboration, and product-focused AI projects.
          </p>
        </div>

        <div className="contact-content">
          <ul>
            {contactLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                >
                  <span className="contact-label">{link.label}</span>
                  <span className="contact-value">{link.value}</span>
                  <span className="arrow">-&gt;</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
