import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "styles/Themes";
import { Helmet } from "react-helmet";
import { withPrefix } from "gatsby";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Banner } from "@/components/Banner";
import { Navigation} from '@/components/Navigation';

const Content = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
`;

const Wrapper = ({ children, ...delegated }) => {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  return <div {...delegated}>{children}</div>;
};

function Layout({ children, title }) {
  return (
    <Wrapper>
      <ThemeProvider theme={lightTheme}>
        <Helmet>
          <title>{"RAI: " + title}</title>
          <meta
            name="description"
            content="The Responsbile Artificial Intelligence Institute (RAI) is the premier organization seeking to bring repsonsibility to the exploding field of AI."
          />
          <script
            src={withPrefix('kindful.js')}
            data-embed-id="d1727a32-6c93-4808-a281-897960739db5"
            data-lookup-type="jquery-selector"
            data-lookup-value="#kindful-donate-btn-d1727a32-6c93-4808-a281-897960739db5"
          />
        </Helmet>
        <Banner text="Looking for AI Global? You're here! AI Global is now Responsible AI Institute." />
        <Navigation />
        <Content>{children}</Content>
        <Footer />
      </ThemeProvider>
    </Wrapper>
  );
}

export default Layout;
