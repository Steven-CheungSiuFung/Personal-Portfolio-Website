import { Fragment, useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { getProjectsPreview } from "../lib/db-utils/db-project";

import { projectData, skillsData } from "../data/data";

import GreetingSection from "../components/greeting-section/greeting-section.component";
import SkillsSection from "../components/skills-section/skills-section.component";
import ProjectsSection from "../components/projects-section/projects-section.component";
import AboutMeSection from "../components/about-me-section/about-me-section.component";
import FooterSection from "../components/footer-section/footer-section.component";

const HomePage = ({ projectData, skillsData }) => {
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
      <SkillsSection skillsData={skillsData} />
      <ProjectsSection projectData={projectData} />
      <AboutMeSection />
      <FooterSection />
    </Fragment>
  );
};

export default HomePage;

export const getStaticProps = async () => {
  try {
    const projectsData = await getProjectsPreview();
    return {
      props: {
        projectData: projectsData,
        skillsData: skillsData,
      },
      revalidate: 60 * 60 * 24 * 3,
    };
  } catch (error) {
    console.log(error);
  }
};
