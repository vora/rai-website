import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import {
  Headline1,
  Headline2,
  MediumBody,
  UpperCaption,
  Headline4,
  BlankLink,
} from "../components/Text";
import { Jumbotron, JumboText, Row, Divider, TitleLink } from "../components/Blocks";
import { PrimaryBtn } from "../components/Buttons";
import News from "../components/News";
import StyledLink from "../components/StyledLink";
import { StaticImage } from "gatsby-plugin-image";

const ShareContainer = styled.div`
    margin: 40px 0px;
    display: flex;
    min-width: 30%;
    justify-content: space-between;
`
function Page() {
  return (
    <Layout title="Example Article">
      <Row>
        <Headline1>
          Independent Certification Working Group Launched for Advancing Ethical
          and Responsible AI
        </Headline1>
        <br />
        <Divider />
        <ShareContainer>
          <UpperCaption>MARCH 31, 2021</UpperCaption>
        </ShareContainer>
        <div style={{ width: "100%", textAlign: "center" }}>
          <StaticImage
            src="../images/pictures/large-news.png"
            alt="News"
            placeholder="tracedSVG"
          />
        </div>
        <br />
        <MediumBody bold>
          The World Economic Forum, AI Global, and the Schwartz Reisman
          Institute join forces to create an independent and practical
          certification program for algorithmic decisioning systems
        </MediumBody>
        <MediumBody>
          <strong>Austin, Texas and Toronto, Ontario (1 December 2020)</strong>{" "}
          – The World Economic Forum (WEF), AI Global, and the Schwartz Reisman
          Institute for Technology and Society (SRI) at the University of
          Toronto today announced the launch of a working group to lead the
          development of a globally recognized certification program for the
          responsible and trusted use of algorithmic decisioning and artificial
          intelligence (AI) systems.
        </MediumBody>
        <MediumBody>
          This working group will bring together a diverse community of leading
          experts across industry practitioners, policy makers, regulators,
          consumers, and academia, aimed at creating practical tools for the
          development of responsible AI systems, as well as measurable
          assessments for fairness, bias, explainability and other metrics of
          responsibly built AI systems.
        </MediumBody>
      </Row>
      <Row gray>
        <TitleLink>
          <Headline2>More News</Headline2>
          <StyledLink text="More News" link="/news" />
        </TitleLink>
        <News />
      </Row>
    </Layout>
  );
}

export default Page;
