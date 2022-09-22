import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import Layout from "../components/layout/layout.component";
import "../styles/globals.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Head>
          <title>Steven Cheung</title>
          <link rel="shortcut icon" href="/logo.png" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;
