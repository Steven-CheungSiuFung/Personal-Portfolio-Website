import { Fragment } from "react";
import { useRouter } from "next/router";

import NavigationBar from "../navigation-bar/navigation-bar.component";
import BackgroundAnimate from "../background-animate/background-animate.component";
const Layout = ({ children }) => {
  const router = useRouter();
  const currentPath = router.pathname;
  return (
    <Fragment>
      {!(currentPath === "/three-d") && <NavigationBar />}
      <main>{children}</main>
      {!(currentPath === "/three-d") && <BackgroundAnimate />}
    </Fragment>
  );
};

export default Layout;
