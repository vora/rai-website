import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import { navigate } from "gatsby";
import {
  Headline1,
  Headline2,
  MediumBody,
  SmallBody,
  Heading1,
  Heading3,
} from "../components/Text";
import { PrimaryBtn } from "../components/Buttons";
import {
  Jumbotron,
  JumboText,
  GrayPanel,
  Row,
  GridRow,
  Card,
  TitleLink,
} from "../components/Blocks";
import StyledLink from "../components/StyledLink";
import News from "../components/News";
import { StaticImage } from "gatsby-plugin-image";

/* Images */
import checkbox from "../images/icons/checkbox.png";
import corporate from "../images/icons/corporate.png";
import institution from "../images/icons/institution.png";
import community from "../images/icons/community.png";

const CheckRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 10px 0px;
  min-height: 44px;

  @media screen and (max-width: 350px) {
    img {
      display: none;
    }
  }
`;

const CheckContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%:
`;

function Membership() {
  return (
    <Layout title="Membership">
      <Jumbotron style={{ marginBottom: "0px" }}>
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
          placeholder="tracedSVG"
          className="member-image"
          style={{ marginLeft: "150px" }}
        />
      </Jumbotron>
      <Jumbotron style={{ marginBottom: "0px" }}>
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
        <br />
        <GridRow auto first>
          <Card>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={corporate} alt="Corporate" />
              <div style={{ marginLeft: "20px" }}>
                <Heading3 style={{ marginBottom: "0" }}>Corporate</Heading3>
                <MediumBody style={{ marginBottom: "0" }}>
                  Public and private corporations
                </MediumBody>
              </div>
            </div>
            <CheckContainer>
              <CheckRow>
                <img src={checkbox} alt="Checkbox" />
                <SmallBody
                  style={{
                    marginLeft: "10px",
                    fontSize: "14px",
                    lineHeight: "20px",
                    marginBottom: "0",
                  }}
                >
                  Participation in monthly webinars from key AI subject matter
                  experts
                </SmallBody>
              </CheckRow>
              <CheckRow>
                <img src={checkbox} alt="Checkbox" />
                <SmallBody
                  style={{
                    marginLeft: "10px",
                    fontSize: "14px",
                    lineHeight: "20px",
                    marginBottom: "0",
                  }}
                >
                  Access to AI Global resources and tools
                </SmallBody>
              </CheckRow>
              <CheckRow>
                <img src={checkbox} alt="Checkbox" />
                <SmallBody
                  style={{
                    marginLeft: "10px",
                    fontSize: "14px",
                    lineHeight: "20px",
                    marginBottom: "0",
                  }}
                >
                  Direct connection with subject matter experts and service
                  providers
                </SmallBody>
              </CheckRow>
              <CheckRow>
                <img src={checkbox} alt="Checkbox" />
                <SmallBody
                  style={{
                    marginLeft: "10px",
                    fontSize: "14px",
                    lineHeight: "20px",
                    marginBottom: "0",
                  }}
                >
                  Industry-specific regulatory guidance and support
                </SmallBody>
              </CheckRow>
            </CheckContainer>

            <PrimaryBtn
              dark
              onClick={() => navigate("/certification")}
              style={{ alignSelf: "center" }}
            >
              Become a Corporate Member
            </PrimaryBtn>
          </Card>
          <Card>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={institution} alt="Institution" />
              <div style={{ marginLeft: "20px" }}>
                <Heading3 style={{ marginBottom: "0" }}>Institution</Heading3>
                <MediumBody style={{ marginBottom: "0" }}>
                  Nonprofits, academic institutions, and government
                </MediumBody>
              </div>
            </div>
            <CheckContainer>
              <CheckRow>
                <img src={checkbox} alt="Checkbox" />
                <SmallBody
                  style={{
                    marginLeft: "10px",
                    fontSize: "14px",
                    lineHeight: "20px",
                    marginBottom: "0",
                  }}
                >
                  Participation in monthly webinars from key AI subject matter
                  experts
                </SmallBody>
              </CheckRow>
              <CheckRow>
                <img src={checkbox} alt="Checkbox" />
                <SmallBody
                  style={{
                    marginLeft: "10px",
                    fontSize: "14px",
                    lineHeight: "20px",
                    marginBottom: "0",
                  }}
                >
                  Access to AI Global resources and tools
                </SmallBody>
              </CheckRow>
              <CheckRow>
                <img src={checkbox} alt="Checkbox" />
                <SmallBody
                  style={{
                    marginLeft: "10px",
                    fontSize: "14px",
                    lineHeight: "20px",
                    marginBottom: "0",
                  }}
                >
                  Direct connection with subject matter experts and service
                  providers
                </SmallBody>
              </CheckRow>
              <CheckRow>
                <img src={checkbox} alt="Checkbox" />
                <SmallBody
                  style={{
                    marginLeft: "10px",
                    fontSize: "14px",
                    lineHeight: "20px",
                    marginBottom: "0",
                  }}
                >
                  Industry-specific regulatory guidance and support
                </SmallBody>
              </CheckRow>
            </CheckContainer>

            <PrimaryBtn
              dark
              onClick={() => navigate("/certification")}
              style={{ alignSelf: "center" }}
            >
              Become an Institution Member
            </PrimaryBtn>
          </Card>
          <Card>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={community} alt="Community" />
              <div style={{ marginLeft: "20px" }}>
                <Heading3 style={{ marginBottom: "0" }}>Community</Heading3>
                <MediumBody style={{ marginBottom: "0" }}>
                  Individual members
                </MediumBody>
              </div>
            </div>
            <CheckContainer>
              <CheckRow>
                <img src={checkbox} alt="Checkbox" />
                <SmallBody
                  style={{
                    marginLeft: "10px",
                    fontSize: "14px",
                    lineHeight: "20px",
                    marginBottom: "0",
                  }}
                >
                  Participation in monthly webinars from key AI subject matter
                  experts
                </SmallBody>
              </CheckRow>
              <CheckRow>
                <img src={checkbox} alt="Checkbox" />
                <SmallBody
                  style={{
                    marginLeft: "10px",
                    fontSize: "14px",
                    lineHeight: "20px",
                    marginBottom: "0",
                  }}
                >
                  Access to AI Global resources and tools
                </SmallBody>
              </CheckRow>
              <CheckRow>
                <img src={checkbox} alt="Checkbox" />
                <SmallBody
                  style={{
                    marginLeft: "10px",
                    fontSize: "14px",
                    lineHeight: "20px",
                    marginBottom: "0",
                  }}
                >
                  Direct connection with subject matter experts and service
                  providers
                </SmallBody>
              </CheckRow>
            </CheckContainer>
            <a
              className="kindful-donate-btn"
              id="kindful-donate-btn-d1727a32-6c93-4808-a281-897960739db5"
            >
              Become a Community Member
            </a>{" "}
          </Card>
        </GridRow>
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

export default Membership;
