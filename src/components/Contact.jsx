import { useState, useEffect } from "react";

export const Contact = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const TimeHandler = () => {
      const now = new Date();
      const localTime = now.toLocaleTimeString();
      setTime(localTime);
    };
    setInterval(() => {
      TimeHandler();
    }, 1000);
  }, []);

  return (
    <div className="contact">
      <div className="name-title">DIWANGSHU KAKOTY</div>
      <div className="contact-container">
        <div>
          <div className="time">
            <span className="label">Local time —</span>
            <span className="value">{time}</span>
          </div>
          <div className="endline">Made with love and React in Chennai, India</div>
        </div>

        <div className="contact-content">
          <ul>
            <li onClick={() => window.open("mailto:diwangshukakoty@gmail.com")}>
              <span>Email</span>
              <span className="arrow">↗</span>
            </li>
            <li onClick={() => window.open("https://github.com/Commanderk3")}>
              <span>GitHub</span>
              <span className="arrow">↗</span>
            </li>
          </ul>
          <ul>
            <li onClick={() => window.open("https://www.linkedin.com/in/diwangshu-kakoty/")}>
              <span>LinkedIn</span>
              <span className="arrow">↗</span>
            </li>
            <li>
              <span>Twitter</span>
              <span className="arrow">↗</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
