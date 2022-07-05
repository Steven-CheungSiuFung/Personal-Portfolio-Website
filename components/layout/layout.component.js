import { Fragment } from "react";
import { useRouter } from "next/router";
const Layout = ({ children }) => {
  const router = useRouter();
  const currentPath = router.pathname;
  return (
    <Fragment>
      {!(currentPath === "/three-d") && <div>Navigation bar</div>}
      <main>{children}</main>
    </Fragment>
  );
};

export default Layout;
