import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import { navigate } from "gatsby";
import {
  Headline1,
  Headline2,
  MediumBody,
  Heading1,
  Heading2,
  Heading3,
} from "../components/Text";
import { PrimaryBtn } from "../components/Buttons";
import {
  Jumbotron,
  JumboText,
  GrayPanel,
  Row,
  Grid,
  Card,
} from "../components/Blocks";
import StyledLink from "../components/StyledLink";
import News from "../components/News";
import { StaticImage } from "gatsby-plugin-image";

function Membership() {
  return (
    <Layout title="Membership">
      <Jumbotron>
        <JumboText>
          <Headline1>
            Join Visionary Leaders <br />
            Working Together for <br />
            AI We Can Trust
          </Headline1>
          <MediumBody>
            RAI is defining responsible AI with an independent, authoritative
            certification <br />
            program, and practical guidance on data rights, privacy, security,{" "}
            <br />
            explainability, and fairness in AI systems.
          </MediumBody>
          <MediumBody>
            We help our members navigate the complex landscape of responsible
            AI, <br />
            with practical tools to guide the development of human-centric AI
            systems.
          </MediumBody>
        </JumboText>
        <StaticImage
          src="../images/rai-icons/rai-circle.png"
          alt="RAI"
          style={{ marginLeft: "150px" }}
        />
      </Jumbotron>
      <Jumbotron>
        <GrayPanel>
          <Headline2>
            RAI is at the Forefront of
            <br />
            Putting Responsible AI <br />
            Principles into Action
          </Headline2>
          <MediumBody>
            We recognize there are growing concerns and a lack of trust with the
            accelerated
            <br /> adoption of AI in society. We are dedicated to promoting
            development of <br />
            responsible and trustworthy AI systems. Through a diverse community
            of leading <br />
            experts, including industry practitioners, policy makers,
            regulators, consumers, and <br />
            academia, RAII has a unique and vital perspective on how to affect
            real change in <br />
            both government and industry.
          </MediumBody>
          <MediumBody bold>
            Join visionary private, public, and academic leaders as we promote
            <br />
            open, ethical AI.
          </MediumBody>
        </GrayPanel>
        <JumboText small>
          <Heading1>RAI Members:</Heading1>
          <MediumBody bordered>
            Gain access to expertise, principles, and <br />
            practical tools to guide development of <br /> responsible AI
            systems.
          </MediumBody>
          <MediumBody bordered>
            Inform AI regulatory conversations at
            <br /> a broader scale.
          </MediumBody>
          <MediumBody bordered>
            Support the leading organization <br />
            developing independent and authoritative
            <br /> AI Governance tools.
          </MediumBody>
        </JumboText>
      </Jumbotron>
      <Row>
        <Headline2>Membership Levels</Headline2>
        <MediumBody>
          We help our members navigate the complex landscape of responsible AI
          with practical
          <br /> tools and expert guidance. Here’s how to join our efforts.
        </MediumBody>
        <Grid cards>
          <Card>
            <div style={{ display: "flex", alignItems: "center" }}>
              <StaticImage src="../images/icons/corporate-icon.png" />
              <div style={{ marginLeft: "20px" }}>
                <Heading3 style={{ marginBottom: "0" }}>Enterprise</Heading3>
                <MediumBody style={{ marginBottom: "0" }}>
                  $50,000 /yr
                </MediumBody>
              </div>
            </div>
          </Card>
          <Card>
            <div style={{ display: "flex", alignItems: "center" }}>
              <StaticImage src="../images/icons/corporate-icon.png" />
              <div style={{ marginLeft: "20px" }}>
                <Heading3 style={{ marginBottom: "0" }}>Corporate</Heading3>
                <MediumBody style={{ marginBottom: "0" }}>
                  $25,000 /yr
                </MediumBody>
              </div>
            </div>
          </Card>
          <Card>
            <div style={{ display: "flex", alignItems: "center" }}>
              <StaticImage src="../images/icons/startup-icon.png" />
              <div style={{ marginLeft: "20px" }}>
                <Heading3 style={{ marginBottom: "0" }}>Startup/Nonprofit</Heading3>
                <MediumBody style={{ marginBottom: "0" }}>
                  $10,000 /yr
                </MediumBody>
              </div>
            </div>
          </Card>
        </Grid>
      </Row>
      <Row gray>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            marginBottom: "40px",
          }}
        >
          <Headline2>News</Headline2>
          <StyledLink text="More News" link="/" />
        </div>
        <News />
      </Row>
    </Layout>
  );
}

export default Membership;
