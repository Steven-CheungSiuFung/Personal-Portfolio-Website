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
  };
};

export const getStaticPaths = () => {
  return {
    paths: [
      { params: { projectId: "6323da2b787b88ce10b41a6d" } },
      { params: { projectId: "6322de42676557211142c009" } },
      { params: { projectId: "6322a2b6676557211142bffe" } },
      { params: { projectId: "62d0076510c82e8cde9a3a52" } },
    ],
    fallback: "blocking",
  };
};

// export const getServerSideProps = async (context) => {
//   const { params } = context;
//   const projectId = params.projectId;

//   const projectData = await getProjectDetials(projectId);

//   if (!projectData) {
//     return { notFound: true };
//   }

//   return {
//     props: {
//       project: projectData,
//       projectId: projectId,
//     },
//   };
// };
