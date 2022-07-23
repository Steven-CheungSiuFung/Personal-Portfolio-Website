import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import Layout from "../components/Layout/layout.component";
import "../styles/globals.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Head>
          <title>Steven Station</title>
          <link rel="shortcut icon" href="/logo.png" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;

/*****  2D and 3D Portfolio *****/

/*** 2D Page ==> The normal 2D portfolio ***/
// - Greeting
// - Skills
// - Projects
// - About Me
// -optional- learning path
// -optional- resources

/*** 3D Page ==> The 3D portfolio game just for fun ***/
// - Sci-fi theme
// - A star ship ==> user can control the ship fly around the space
// - Planets ==> projects
// - Satelites ==> tech stack

/**** Architecture and Core Components ****/
// <ContextProvider>
// <NavigationBar />
// <Head />
//
// "/" ==> HomePage ==> 2D portfolio home page { Static-site generation }
//           ||=> Greetings ==> Return the greeting section
//           ||=> Skills ==> Return a list of all the tech that have been used
//           ||=> ProjectsList ==> Return a list of previews for main projects
//           ||=> AboutMe => Return the about me section
//
// "/projects" ==> AllProjectsPage ==> Show all projects { Static-site generation }
//                   ||=> ProjectsList ==> Return a list of previews for all projects
//
// "/projects/[projectId]" ==> ProjectDetailPage ==> The project detail page { Static-site generation || Server-side rendering }
//
// "/three-d" ==> ThreeDWorld ==> 3D porfolio
//
// <Footer />
// </ContextProvider>
