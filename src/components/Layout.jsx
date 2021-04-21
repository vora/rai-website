import React from "react";
import styled, { ThemeProvider} from "styled-components";
import { lightTheme } from "styles/Themes"
import { Helmet } from "react-helmet";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles.css";

const Content = styled.div`
  margin: ${props => `117px ${props.theme.pageMargin} 0px ${props.theme.pageMargin}`};
  max-width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 400vh;

  @media screen and (max-width: 800px) {
    margin-top: 75px;
  }

  @media screen and (max-width: 585px) {
    margin: 35px 35px 45px 35px;
  }
`;

function Layout({ children, title }) {
  console.log(title);
  return (
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
      <Footer/>
    </ThemeProvider>
  );
}

export default Layout;
