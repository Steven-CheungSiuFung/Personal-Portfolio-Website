import { Fragment, useEffect } from "react";
import { gsap } from "gsap/dist/gsap";

import { projectData } from "../../data/data";

import ProjectsSection from "../../components/projects-section/projects-section.component";
import FooterSection from "../../components/footer-section/footer-section.component";

const AllProjectsPage = ({ projectData }) => {
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
      <ProjectsSection projectData={projectData} />
      <FooterSection />
    </Fragment>
  );
};

export default AllProjectsPage;

export const getStaticProps = async () => {
  return {
    props: {
      projectData: projectData,
    },
  };
};
