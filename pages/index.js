import { Fragment, useEffect } from "react";
import { gsap } from "gsap/dist/gsap";

import GreetingSection from "../components/greeting-section/greeting-section.component";
import SkillsSection from "../components/skills-section/skills-section.component";
import ProjectsSection from "../components/projects-section/projects-section.component";
import AboutMeSection from "../components/about-me-section/about-me-section.component";
import BackgroundAnimate from "../components/background-animate/background-animate.component";

const HomePage = () => {
  useEffect(() => {
    gsap.from("section", {
      backgroundColor: "rgba(0, 0, 0, 0)",
      duration: 1,
    });
    gsap.to("section", {
      backgroundColor: "rgba(0, 210, 255, 0.1)",
      duration: 1,
    });
  }, []);
  return (
    <Fragment>
      <GreetingSection />
      <SkillsSection />
      <ProjectsSection />
      <AboutMeSection />
      <BackgroundAnimate />
    </Fragment>
  );
};

export default HomePage;
