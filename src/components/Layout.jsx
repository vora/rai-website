import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "styles/Themes";
import { Helmet } from "react-helmet";
import { withPrefix } from "gatsby";
import Navbar from "./Navbar";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { WebsiteBanner } from '@/components/WebsiteBanner'

const Content = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
`;

function Layout({ children, title }) {
  return (
    <ThemeProvider theme={lightTheme}>
      <Helmet>
        <title>RAI | {title || "Responsible AI"}</title>
        <meta
          name="description"
          content="The Responsbile Artificial Intelligence Institute (RAI) is the premier organization seeking to bring repsonsibility to the exploding field of AI."
        />
        <script
          src={withPrefix("kindful.js")}
          data-embed-id="d1727a32-6c93-4808-a281-897960739db5"
          data-lookup-type="jquery-selector"
          data-lookup-value="#kindful-donate-btn-d1727a32-6c93-4808-a281-897960739db5"
        />
      </Helmet>
      <WebsiteBanner />
      <Navigation />
      <Content>{children}</Content>
      <Footer />
    </ThemeProvider>
  );
}

export default Layout;
