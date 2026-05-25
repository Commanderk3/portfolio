import { Fragment } from "react";
import { Background } from "./components/Background"
import { About } from "./components/About"
import { Education } from "./components/Education"
import { Projects } from "./components/Projects"
import { Skills } from "./components/Skills"
import { Experience } from "./components/Experience"
import { Contact } from "./components/Contact"
import { Navbar } from "./components/Navbar";
export const App = () => {
  return (
    <Fragment>
      <Background />
      <Navbar />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </Fragment>
  );
};
