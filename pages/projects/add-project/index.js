import { Fragment, useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import FooterSection from "../../../components/footer-section/footer-section.component";
import AddProjectSection from "../../../components/add-project-section/add-project-section.component";

const AddProjectPage = () => {
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
      <AddProjectSection />
      <FooterSection />
    </Fragment>
  );
};

export default AddProjectPage;
