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
} from "../components/Blocks";
import StyledLink from "../components/StyledLink";
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
            What’s in a name? <br />
            AI Global is now <br />
            Responsible AI Institute
          </Headline2>
          <MediumBody>
            New name, new branding, newly restored conviction in our message.
            <br />
            Introducing Responsible AI Institute, or RAI.
          </MediumBody>
          <br />
          <StyledLink text="Read Blog" link="/blog/308ea1d8-a7fa-11eb" />
        </JumboText>
        <StaticImage
          src="../images/rai-icons/rai-circle.png"
          alt="News"
          placeholder="tracedSVG"
          className="member-image"
        />
      </Jumbotron>
      <Row style={{ paddingBottom: "0" }}>
        <BlankLink href="/blog/347460a4-4a02-4337">
          <Headline4>
            A consensus is emerging: AI regulation must be a global effort
            that’s values-driven, risk-based, and evidence-informed
          </Headline4>
        </BlankLink>
        <MediumBody style={{ marginBottom: "20px" }}>
          Learn about the future of AI regulation.
        </MediumBody>
        <UpperCaption>NOVEMBER 31, 2020</UpperCaption>
        <Divider />
      </Row>
      <Row style={{ paddingBottom: "0" }}>
        <BlankLink href="/blog/e99bd457-2035-49f9">
          <Headline4>
            A Snapshot from our working groups: Q&amp;A with Allison Cohen on
            the importance of Independent Review
          </Headline4>
        </BlankLink>
        <MediumBody style={{ marginBottom: "20px" }}>
          We had a short interview with Allison Cohen, a member of our RAI
          Certification Beta working group, about the need for independent
          review in AI development.
        </MediumBody>
        <UpperCaption>APRIL 26, 2021</UpperCaption>
        <Divider />
      </Row>
      <Row style={{ paddingBottom: "0" }}>
        <BlankLink href="/blog/46513dc1-f1b3-410e">
          <Headline4>
            Independent Certification Working Group Launched for Advancing
            Ethical and Responsible AI
          </Headline4>
        </BlankLink>
        <MediumBody style={{ marginBottom: "20px" }}>
          The World Economic Forum, AI Global, and the Schwartz Reisman
          Institute join forces to create an independent and practical
          certification program for algorithmic decisioning systems
        </MediumBody>
        <UpperCaption>DECEMBER 1, 2020</UpperCaption>
        <Divider />
      </Row>
      <br />
    </Layout>
  );
}

export default Blog;
