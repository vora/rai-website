import React from "react";
import Layout from "../components/Layout";
import {
  Headline1,
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
import { PrimaryBtn } from "../components/Buttons";
import StyledLink from "../components/StyledLink";
import News from "../components/News";
import { StaticImage } from "gatsby-plugin-image";

function Page() {
  return (
    <Layout title="Example Page">
      <Row small>
        <Headline1>
          Independent Certification Working Group Launched for Advancing Ethical
          and Responsible AI
        </Headline1>
        <br />
        <Divider />
        <div class="s9-widget-wrapper"></div>
      </Row>
      <Row gray>
        <TitleLink>
          <Headline2>News</Headline2>
          <StyledLink text="More News" link="/news" />
        </TitleLink>
        <News />
      </Row>
    </Layout>
  );
}

export default Page;
