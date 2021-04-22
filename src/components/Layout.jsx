import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "styles/Themes";
import { Helmet } from "react-helmet";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles.css";

const Content = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 400vh;
  max-height: 400vh;
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
        </Helmet>
        <Navbar />
        <Content>{children}</Content>
        <Footer />
      </ThemeProvider>
    </Wrapper>
  );
}

export default Layout;
