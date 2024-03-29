import { Fragment, useEffect } from "react";
import { gsap } from "gsap/dist/gsap";

import { getProjectDetials } from "../../lib/db-utils/db-project";

import ProjectDetialsSection from "../../components/project-details-section/project-details-section.component";
import FooterSection from "../../components/footer-section/footer-section.component";

const ProjectDetailPage = ({ project, projectId }) => {
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
      <ProjectDetialsSection projectData={project} projectId={projectId} />
      <FooterSection />
    </Fragment>
  );
};

export default ProjectDetailPage;

export const getStaticProps = async (context) => {
  const { params } = context;
  const projectId = params.projectId;
  const projectData = await getProjectDetials(projectId);

  if (!projectData) {
    return { notFound: true };
  }

  return {
    props: {
      project: projectData,
      projectId: projectId,
    },
    revalidate: 60 * 60 * 24 * 3,
  };
};

export const getStaticPaths = () => {
  return {
    paths: [
      { params: { projectId: "2d803aef-fa07-41fd-9eaf-0c1a2b954316" } },
      { params: { projectId: "cc5982de-b41f-4a67-8ae7-7af59a85b6ab" } },
      { params: { projectId: "d26b755c-af96-4e35-89d7-bcef56c7ab53" } },
    ],
    fallback: "blocking",
  };
};
