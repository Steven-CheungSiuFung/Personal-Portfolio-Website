import { Fragment, useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import FooterSection from "../../../components/footer-section/footer-section.component";
import AddProjectSection from "../../../components/add-project-section/add-project-section.component";

const AddProjectDetialsPage = ({ projectId }) => {
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
      <AddProjectSection projectId={projectId} />
      <FooterSection />
    </Fragment>
  );
};

export default AddProjectDetialsPage;

export const getServerSideProps = (context) => {
  const { params } = context;
  const projectId = params.projectId;
  return {
    props: {
      projectId: projectId,
    },
  };
};
