import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import {
  Headline1,
  Headline2,
  MediumBody,
  SmallBody,
  Heading1,
  Heading3,
  UpperCaption,
  Headline4,
  BlankLink,
} from "../components/Text";
import {
  Jumbotron,
  JumboText,
  GrayPanel,
  Row,
  GridRow,
  Card,
  TitleLink,
  Divider,
} from "../components/Blocks";
import { PrimaryBtn } from "../components/Buttons";
import StyledLink from "../components/StyledLink";
import News from "../components/News";
import { StaticImage } from "gatsby-plugin-image";

function Blog() {
  return (
    <Layout title="Blog">
      <Row small>
        <Headline1>Blog</Headline1>
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
          <StyledLink text="Read Blog" link="/page" />
        </JumboText>
        <StaticImage
          src="../images/pictures/news.png"
          alt="News"
          placeholder="tracedSVG"
          className="member-image"
        />
      </Jumbotron>
      <Row style={{ paddingBottom: "0" }}>
        <BlankLink href="/page">
          <Headline4>
            Headline Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit
          </Headline4>
        </BlankLink>
        <MediumBody style={{ marginBottom: "20px" }}>
          Implement AI in an ethical way with our Responsible AI certification.
        </MediumBody>
        <UpperCaption>MAR 31</UpperCaption>
        <Divider />
      </Row>
      <Row style={{ paddingBottom: "0" }}>
        <BlankLink href="/page">
          <Headline4>
            Headline Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit
          </Headline4>
        </BlankLink>
        <MediumBody style={{ marginBottom: "20px" }}>
          Implement AI in an ethical way with our Responsible AI certification.
        </MediumBody>
        <UpperCaption>MAR 31</UpperCaption>
        <Divider />
      </Row>
      <Row style={{ paddingBottom: "0" }}>
        <BlankLink href="/page">
          <Headline4>
            Headline Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit
          </Headline4>
        </BlankLink>
        <MediumBody style={{ marginBottom: "20px" }}>
          Implement AI in an ethical way with our Responsible AI certification.
        </MediumBody>
        <UpperCaption>MAR 31</UpperCaption>
        <Divider />
      </Row>
      <Row style={{ paddingBottom: "0" }}>
        <BlankLink href="/page">
          <Headline4>
            Headline Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit
          </Headline4>
        </BlankLink>
        <MediumBody style={{ marginBottom: "20px" }}>
          Implement AI in an ethical way with our Responsible AI certification.
        </MediumBody>
        <UpperCaption>MAR 31</UpperCaption>
        <Divider />
      </Row>
      <Row style={{ textAlign: "center" }}>
        <PrimaryBtn dark>Load more Stories</PrimaryBtn>
      </Row>
    </Layout>
  );
}

export default Blog;
