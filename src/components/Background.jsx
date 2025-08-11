import { useState, useEffect } from "react";

export const Background = () => {

  const [hide, setHide] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 1000) {
        setHide(true);
      } else {
        setHide(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`background-wrapper ${hide ? "hidden" : ""}`}>
      <div className="scroller">
        <div className="text-strip">
          <h1 className="bloom-text">DIWANGSHU KAKOTY DIWANGSHU KAKOTY</h1>
        </div>
      </div>
      <div className="container" />
    </div>
  );
};
