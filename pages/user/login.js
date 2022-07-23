import { Fragment, useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import AuthSection from "../../components/auth-section/auth-section.component";
import FooterSection from "../../components/footer-section/footer-section.component";

const LoginPage = () => {
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
      <AuthSection />
      <FooterSection />
    </Fragment>
  );
};

export default LoginPage;
