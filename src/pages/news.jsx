import React from "react";
import Layout from "../components/Layout";
import { Heading } from '@/components/Heading'
import {
  Headline2,
  MediumBody,
  UpperCaption,
  Headline4,
  BlankLink,
} from "../components/Text";
import {
  Jumbotron,
  JumboText,
  Row,
  Divider,
  TitleLink,
} from "../components/Blocks";
import News from "../components/News";
import StyledLink from "../components/StyledLink";
import { StaticImage } from "gatsby-plugin-image";

function NewsPage() {
  return (
    <Layout title="News">
      <Row small>
        <Heading as="h1">In the News</Heading>
      </Row>
      <Jumbotron style={{ marginBottom: "0px" }} gray>
        <JumboText>
          <UpperCaption>FEATURED ARTICLE</UpperCaption>
          <Headline2>
            Independent Certification <br />
            Working Group Launched <br />
            for Advancing Ethical <br />
            and Responsible AI
          </Headline2>
          <MediumBody>
            Implement AI in a responsible and ethical way with our Responsible
            AI <br />
            certification, the first independent, accredited program of its
            kind, developed
            <br /> in partnership with the World Economic Forum and Schwartz.
          </MediumBody>
          <br />
          <StyledLink text="Read Article" link="/news/81585ab8-5582-4fe7" />
        </JumboText>
        <StaticImage
          src="../images/rai-icons/Badge.png"
          alt="News"
          placeholder="tracedSVG"
          className="member-image"
        />
      </Jumbotron>
      <Row style={{ paddingBottom: "0" }}>
        <BlankLink href="/news/0d66369d-f8e1-4e9e">
          <Headline4>
            2020 AI Global Awards Recognize Standout Global Leaders in
            Responsible and Ethical AI
          </Headline4>
        </BlankLink>
        <MediumBody style={{ marginBottom: "20px" }}>
          Annual awards program honors standout organizations and individuals
          promoting and applying responsible use of artificial intelligence{" "}
        </MediumBody>
        <UpperCaption>DECEMBER 29, 2020</UpperCaption>
        <Divider />
      </Row>
      <Row style={{ paddingBottom: "0" }}>
        <BlankLink href="/news/b131fff2-8806-485d">
          <Headline4>Introducing: Where in the World is AI? Map</Headline4>
        </BlankLink>
        <MediumBody style={{ marginBottom: "20px" }}>
          Interactive web visualization raises awareness on helpful and harmful
          applications of AI worldwide
        </MediumBody>
        <UpperCaption>NOVEMBER 7, 2020</UpperCaption>
        <Divider />
      </Row>
      <Row style={{ paddingBottom: "0" }}>
        <BlankLink href="/news/16b4c33c-808e-4200">
          <Headline4>
            Independent Review Guidelines for Responsible AI
          </Headline4>
        </BlankLink>
        <MediumBody style={{ marginBottom: "20px" }}>
          Learn about the steps AI Practitioners and Regulators can do to
          incorporate review guidelines
        </MediumBody>
        <UpperCaption>OCTOBER 31, 2020</UpperCaption>
        <Divider />
        <br />
        <br />
      </Row>
      <Row gray>
        <TitleLink>
          <Headline2>More News</Headline2>
        </TitleLink>
        <News />
      </Row>
    </Layout>
  );
}

export default NewsPage;
