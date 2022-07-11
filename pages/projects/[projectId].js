import { Fragment, useEffect } from "react";
import { gsap } from "gsap/dist/gsap";

import { projectData } from "../../data/data";

import ProjectDetialsSection from "../../components/project-details-section/project-details-section.component";
import FooterSection from "../../components/footer-section/footer-section.component";

const ProjectDetailPage = ({ project }) => {
  console.log(project);
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
  useEffect(() => {
    gsap.from("p", {
      opacity: 0,
      duration: 1,
    });
    gsap.to("p", {
      opacity: 1,
      duration: 1,
    });
  }, []);
  return (
    <Fragment>
      <ProjectDetialsSection projectData={project} />
      <FooterSection />
    </Fragment>
  );
};

export default ProjectDetailPage;

export const getStaticProps = async (context) => {
  const { params } = context;
  const projectId = params.projectId;
  const project = projectData.find(
    (project) => project.name.toLowerCase() === projectId
  );

  if (!project) {
    return { notFound: true };
  }

  return {
    props: {
      project: project,
    },
  };
};

export const getStaticPaths = async () => {
  // const pathsWithParams = projectData.map((project) => ({
  //   params: { projectId: project.name.toLowerCase() },
  // }));
  return {
    paths: [{ params: { projectId: "hotels-booking" } }],
    fallback: false,
  };
};
