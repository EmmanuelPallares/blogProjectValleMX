import React from "react";

import "../styles/globals.css";
import { Layout, Mentoring } from "../components";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Mentoring />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
