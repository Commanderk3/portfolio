import { Fragment } from "react";
import { Background } from "./components/Background"
import { About } from "./components/About"
import { Projects } from "./components/Projects"
import { Skills } from "./components/Skills"
import { ScrollSlideIn } from "./components/ScrollSlideIn"
export const App = () => {
  return (
    <Fragment>
      <Background />
      <About />
      <Projects />
      <ScrollSlideIn />
    </Fragment>
  );
};