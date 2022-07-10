import { Fragment, useEffect } from "react";
import { gsap } from "gsap/dist/gsap";

import { projectData } from "../data/data";

import GreetingSection from "../components/greeting-section/greeting-section.component";
import SkillsSection from "../components/skills-section/skills-section.component";
import ProjectsSection from "../components/projects-section/projects-section.component";
import AboutMeSection from "../components/about-me-section/about-me-section.component";
import BackgroundAnimate from "../components/background-animate/background-animate.component";
import FooterSection from "../components/footer-section/footer-section.component";

const HomePage = ({ projectData }) => {
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
      <ProjectsSection projectData={projectData} />
      <AboutMeSection />
      <FooterSection />
      <BackgroundAnimate />
    </Fragment>
  );
};

export default HomePage;

export const getStaticProps = async () => {
  const selectedProjects = projectData.filter((project) => project.selected);
  return {
    props: {
      projectData: selectedProjects,
    },
  };
};
