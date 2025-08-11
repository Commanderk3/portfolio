import { Fragment } from "react";
import { Background } from "./components/Background"
import { About } from "./components/About"
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
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </Fragment>
  );
};