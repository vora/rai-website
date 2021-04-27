import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import {
  Jumbotron,
  JumboText,
  JumboImage,
  Row,
  Divider,
  Grid,
  GridRow,
} from "../components/Blocks";
import StyledLink from "../components/StyledLink";
import {
  Headline1,
  Headline2,
  Headline4,
  Headline5,
  MediumBody,
  SmallBody,
} from "../components/Text";

import portal from "../images/rai-icons/Portal.png";
import map from "../images/rai-icons/map.png";
import course from "../images/rai-icons/game.png";
import designassistant from "../images/rai-icons/design-assistant-banner.png";
import fellowImg from "../images/rai-icons/Fellowship.png";
import webindarImg from "../images/rai-icons/webinar.png";
import calendar from "../images/rai-icons/calendar.png";
import cert from "../images/rai-icons/certification-banner.png";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 40px;
  max-width: 100%;
  text-align: center;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;
export const ItemContainer = styled.div`
  width: 28%;
  text-align: center;
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid black;
  @media screen and (max-width: 1000px) {
    width: 48%;
  }

  @media screen and (max-width: 585px) {
    width: 40%;
  }
`;

// padding: 10px;
const ItemIcon = styled.div`
  flex: 4;
  margin-right: 22;
`;
//   padding: 0px 10px 0px 10px;

const ItemDescription = styled.div`
  flex: 25;
  margin-left: 22px;
  text-align: left;
`;

const RectangleContainer = styled.div`
  width: 100%;
  display: flex;
  place-items: center;
  margin-bottom: 20px;
`;

const RectangleImg = styled.img`
  width: 100%;
  object-fit: contain;
`;
// margin: 38px;
const Item = styled.div`
  padding: 20px;
  flex: 1;
  text-align: center;
  border: 1px solid black;
`;

function Tools() {
  return (
    <Layout title="Tools">
      <Jumbotron>
        <JumboText>
          <Headline1>
            The Journey to
            <br /> Responsible AI Begins
            <br /> Here.
          </Headline1>
          <MediumBody>
            RAI is defining responsible AI with an independent, authoritative
            <br />
            certification program, and practical guidance on data rights,
            privacy,
            <br /> security, explainability, and fairness in AI systems. No
            matter where
            <br /> you are on your AI journey, our programs and services can
            help. From
            <br /> network, educate, assess, and certify, we have you covered.
          </MediumBody>
          <br />
        </JumboText>
        <JumboImage className="hero-image">
          <StaticImage
            src="../images/pictures/bike-1.png"
            style={{
              position: "absolute",
              zIndex: "2",
              right: "0px",
              top: "180px",
            }}
            width={1197}
            height={650}
            alt="bike-1"
            placeholder="tracedSVG"
          />
          <StaticImage
            src="../images/pictures/bike-2.png"
            style={{
              position: "absolute",
              zIndex: "1",
              right: "0px",
              top: "230px",
            }}
            width={1053}
            height={590}
            alt="patient-3"
            placeholder="tracedSVG"
          />
        </JumboImage>
      </Jumbotron>

      <Row
        style={{
          backgroundColor: "#f6f6f6",
          alignItems: "center",
        }}
      >
        <Headline2>Programs</Headline2>
        <Divider />
        <Container>
          <ItemIcon>
            <a href="/fellowship">
              <img src={fellowImg} width={208} height={208} alt="fellowship" />
            </a>
          </ItemIcon>
          <ItemDescription>
            <Headline4>
              <a href="/fellowship" style={{ color: "black" }}>
                <u> Responsible AI Fellowship Program (TBA)</u>
              </a>{" "}
              invites
              <br /> multidisciplinary teams of students and professionals to
              <br /> tackle real-world challenges.
            </Headline4>
            <MediumBody>
              This program will support multidisciplinary teams of students and
              professionals selected from various universities and businesses to
              work on real-world responsible AI challenges and opportunities.
              Projects are sourced from AI Global Members and external clients
              who play an important role in structuring project deliverables.
              Fellows work with domain experts in AI, data science,
              human-centric design, law, and regulatory policy. Fellows receive
              training in research skills and data collection, analysis, and
              presentation to deliver a work product that meets client needs.
              <br />
              <StyledLink text="Check it out" link="/calendar" />
            </MediumBody>
          </ItemDescription>
        </Container>
        <Divider />
        <Container>
          <ItemIcon>
            <a href="/webinar">
              <img src={webindarImg} width={208} height={208} alt="webinar" />
            </a>
          </ItemIcon>
          <ItemDescription>
            <Headline4>
              <a href="/webiner" style={{ color: "black" }}>
                <u>Responsible AI Monthly Webinar Series</u>
              </a>
              <br />
              fosters connection with key AI subject matter experts.
            </Headline4>
            <MediumBody>
              This program will enrich members with a reoccuring monthly webinar
              series with presentations from key AI subject matter experts. We
              curate our webinar topics based on the latest developments in the
              world of AI and data science, and offer networking opportunities
              both with webinar attendees and presentors.
              <br />
              <StyledLink text="Sign up to join" link="/calendar" />
            </MediumBody>
          </ItemDescription>
        </Container>
      </Row>
      <Row>
        <Headline2>Tools</Headline2>
        <Divider />
        {/* <Grid>
          <GridRow first auto> */}
          <Container>
            <Item style={{marginRight: '20px', marginBottom:'20px'}}>
              <a href="https://designassistant.responsible.ai/">
                <RectangleContainer href="https://designassistant.responsible.ai/">
                  <RectangleImg src={designassistant} alt="design assistant" />
                </RectangleContainer>
              </a>
              <div style={{ textAlign: "left" }}>
                <Headline5>
                  <a
                    href="https://designassistant.responsible.ai/"
                    style={{ color: "black" }}
                  >
                    <u>Responsible AI Design Assistant</u>
                  </a>
                  <br />
                  assesses work in development, to anticipate problems and
                  future-proof AI systems.
                </Headline5>
                <SmallBody>
                  Access research and industry best practices to assess key
                  challenges, including data rights and use, privacy, security,
                  explainability, fairness, bias, and robustness.
                  <br />
                  <br />
                  <br />
                  <br />
                  <StyledLink
                    text="Get Started"
                    link="https://designassistant.responsible.ai/"
                  />
                </SmallBody>
              </div>
            </Item>
            <Item style={{marginRight: '20px', marginBottom:'20px'}}>
              <a href="https://map.ai-global.org">
                <RectangleContainer href="https://map.ai-global.org/">
                  <RectangleImg src={map} alt="map" />
                </RectangleContainer>
              </a>
              <div style={{ textAlign: "left" }}>
                <Headline5>
                  <a
                    href="https://map.ai-global.org"
                    style={{ color: "black" }}
                  >
                    <u>Responsible AI Industry Heat Map</u>
                  </a>
                  <br />
                  provides realtime examples to where AI is currently in use.
                </Headline5>
                <SmallBody>
                  Everyone is talking about AI, but how and where is it actually
                  being used? We've mapped out examples where AI has been
                  harmful and where it's been helpful. Cases are updated weekly
                  and found from various sources such as Awful AI, Upturn, Equal
                  AI, and Charlie Pownall/CPC & Associates.
                  <br />
                  <br />
                  <StyledLink
                    text="Get Started"
                    link="https://map.ai-global.org"
                  />
                </SmallBody>
              </div>
            </Item>
            <Item style={{ marginBottom:'20px'}}>
              <a href="https://www.tiqsoftware.com/responsible-ai/">
                <RectangleContainer href="https://www.tiqsoftware.com/responsible-ai/">
                  <RectangleImg src={course} alt="networks of people icon" />
                </RectangleContainer>
              </a>
              <div style={{ textAlign: "left" }}>
                <Headline5>
                  <a
                    href="https://www.tiqsoftware.com/responsible-ai/"
                    style={{ color: "black" }}
                  >
                    <u>Responsible AI E-Learning Courses</u>
                  </a>
                  <br />
                  developed in partnership with TIQ Software.
                </Headline5>
                <SmallBody>
                  TIQ Software is a leader in work-integrated digital learning
                  software, and together with RAI designed a course to support
                  the public in answering the question, “what is artificial
                  intelligence (AI)?” and to help everyone recognize how AI can
                  be helpful, or harmful, if not developed responsibly.
                  <br />
                  <br />
                  <StyledLink
                    text="Get Started"
                    link="https://www.tiqsoftware.com/responsible-ai/"
                  />
                </SmallBody>
              </div>
            </Item>
            </Container>
            <Container style={{paddingTop:0}}>
            <Item  style={{marginRight: '20px'}}> 
              <a href="https://portal.ai-global.org/">
                <RectangleContainer href="https://portal.ai-global.org/">
                  <RectangleImg src={portal} />
                </RectangleContainer>
              </a>
              <div style={{ textAlign: "left" }}>
                <Headline5>
                  <a
                    href="https://portal.ai-global.org/"
                    style={{ color: "black" }}
                  >
                    <u>Responsible AI Community Portal</u>
                  </a>
                  <br /> provides access to a curated library of trusted
                  resources.
                </Headline5>
                <SmallBody>
                  The Community Portal is an open resource hub providing access
                  to responsible AI standards, models, government policies, open
                  datasets, and open-source software to help members better
                  navigate the AI landscape and directly connect with the
                  experts who are guiding...
                  <br />
                  <br />
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <StyledLink
                    text="Get Started"
                    link="https://portal.ai-global.org/"
                  />
                </SmallBody>
              </div>
            </Item>
            <Item  style={{marginRight: '20px'}}>
              <a href="/calendar">
                <RectangleContainer href="/calenar">
                  <RectangleImg src={calendar} />
                </RectangleContainer>
              </a>
              <div style={{ textAlign: "left" }}>
                <Headline5>
                  <a href="/calendar" style={{ color: "black" }}>
                    <u>RAI Events Calendar</u>
                  </a>
                  <br /> connects members to the latest events in responsible
                  AI.
                </Headline5>
                <SmallBody>
                  We understand the importance in always staying on top of
                  industry events and happenings, so we’ve curated a calendar of
                  can’t-miss events including conferences, speaker series,
                  awards presentations and more to help. This calendar is
                  updated weekly with upcoming, can’t miss advance.
                  <br />
                  <br />
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <StyledLink
                    text="Get Started"
                    link="/calendar"
                  />
                </SmallBody>
              </div>
            </Item>
            <Item>
              <a href="/certification">
                <RectangleContainer href="/certification">
                  <RectangleImg src={cert} alt='certification icon' />
                </RectangleContainer>
              </a>
              <div style={{ textAlign: "left" }}>
              <Headline5>
              <a href="/certification" style={{ color: "black" }}>
                <u>RAI Certification Beta</u>
              </a>{" "}
              is the world’s first independent, accredited certification program
              of its kind.
            </Headline5>
            <SmallBody>
              Developed under the Global AI Action Alliance for the World
              Economic Forum (WEF), along with a diverse community of leading
              experts, RAI Certification is based on objective assessments of
              fairness, bias, explainability, and other concrete metrics of
              responsibly built AI systems. The Schwartz Reisman Institute for
              Technology and Society (SRI) at University of Toronto is serving
              as a business partner on the development phase of the initiative.
              The result is a measurable, independent, authoritative
              certification program working across sectors and across regions
              around the world.
              <br />
              <StyledLink text="Get Started" link="/certification" />

                </SmallBody>
              </div>
            </Item>
            </Container>
        {/* <Container>
          <Item style={{ marginRight: "38px" }}>
            <a href="https://portal.ai-global.org/">
              <RectangleContainer href="https://portal.ai-global.org/">
                <RectangleImg src={portal} />
              </RectangleContainer>
            </a>
            <div style={{ textAlign: "left" }}>
              <Headline5>
                <a
                  href="https://portal.ai-global.org/"
                  style={{ color: "black" }}
                >
                  <u>Responsible AI Community Portal</u>
                </a>
                <br /> provides access to a curated library of trusted
                resources.
              </Headline5>
              <SmallBody>
                The Community Portal is an open resource hub providing access to
                responsible AI standards, models, government policies, open
                datasets, and open-source software to help members better
                navigate the AI landscape and directly connect with the experts
                who are guiding...
                <br />
                <br />
                <StyledLink
                  text="Get Started"
                  link="https://portal.ai-global.org/"
                />
              </SmallBody>
            </div>
          </Item>
          
          <Item style={{ marginRight: "38px" }}>
            <a href="https://map.ai-global.org/">
              <RectangleContainer href="https://portal.ai-global.org/">
                <RectangleImg src={map} />
              </RectangleContainer>
            </a>
            <div style={{ textAlign: "left" }}>
              <Headline5>
                <a href="https://map.ai-global.org/" style={{ color: "black" }}>
                  <u>Responsible AI Industry Heat Map</u>
                </a>
                <br /> provides realtime examples to where AI is currently in
                use.
              </Headline5>
              <SmallBody>
                Everyone is talking about AI, but how and where is it actually
                being used? We've mapped out examples where AI has been harmful
                and where it's been helpful. Cases are updated weekly and found
                from various sources such as Awful AI, Upturn, Equal AI, and
                Charlie Pownall/CPC & Associates.
                <br />
                <StyledLink
                  text="Get Started"
                  link="https://map.ai-global.org/"
                />
              </SmallBody>
            </div>
          </Item>
          <Item>
            <a href="https://aiglobal.beta.trajectoryiq.com/">
              <RectangleContainer href="https://portal.ai-global.org/">
                <RectangleImg src={course} />
              </RectangleContainer>
            </a>
            <div style={{ textAlign: "left" }}>
              <Headline5>
                <a
                  href="https://aiglobal.beta.trajectoryiq.com/"
                  style={{ color: "black" }}
                >
                  <u>Responsible AI E-Learning Courses</u>
                </a>
                <br /> developed in partnership with TIQ Software
              </Headline5>
              <SmallBody>
                TIQ Software is a leader in work-integrated digital learning
                software, and together with RAI designed a course to support the
                public in answering the question, “what is artificial
                intelligence (AI)?” and to help everyone recognize how AI can be
                helpful, or harmful, if not developed responsibly.
                <br />
                <StyledLink
                  text="Get Started"
                  link="https://aiglobal.beta.trajectoryiq.com/"
                />
              </SmallBody>
            </div>
          </Item>{" "}
        </Container> */}
      </Row>
    </Layout>
  );
}

export default Tools;
