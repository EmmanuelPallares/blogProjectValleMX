import React from "react";
import "../public/css/styles.css";
import "../styles/globals.scss";
import { Layout } from "../components";
import "react-clock/dist/Clock.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
