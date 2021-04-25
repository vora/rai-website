import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { Jumbotron, JumboText, JumboImage, Row } from "../components/Blocks";
import StyledLink from "../components/StyledLink";

import {
  Headline1,
  Headline2,
  Headline4,
  Headline5,
  MediumBody,
  SmallBody,
} from "../components/Text";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 0;
  text-align: center;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

const ItemIcon = styled.div`
  padding: 10px;
  flex: 4;
`;

const ItemDescription = styled.div`
  padding: 10px;
  flex: 25;
  text-align: left;
  margin: 3px;
`;
const Item = styled.div`
  padding: 10px;
  margin: 1.5%;
  flex: 1;
  text-align: center;
  border: 1px solid black;
`;

const Line = styled.div`
  width: 100%;
  height: 0;
  border: 1px solid #000000;
  margin: 3px;
  display: inline-block;
`;

function Tools() {
  return (
    <Layout title="Tools">
      <Jumbotron>
        <JumboText>
          <Headline1>
            The Journy to
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
            help. Our
            <br /> goal is to allow members to network through community,
            educate
            <br /> yourselves and other practitioners and students, assess your
            systems,
            <br /> and certify responsible and trustworthy AI.
          </MediumBody>
          <br />
        </JumboText>
        <JumboImage className="hero-image">
         <StaticImage
            src="../images/pictures/bike-1.png"
            style={{
              position: "absolute",
              zIndex: "2",
              left: "394px",
              top: "180px",
            }}
            width={1197}
            height={650}
            alt="bike-1"
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
          />
        </JumboImage>
      </Jumbotron>

      <Row
        style={{
          backgroundColor: "#f6f6f6",
          alignItems: "center",
        }}
      >
        <Headline2 style={{ marginBottom: "20px" }}>Network</Headline2>
        <Line />
        <Container>
          <ItemIcon>
            <a href="/calendar">
              <StaticImage
                src="../images/rai-icons/calendar.png"
                width={208}
                height={208}
                alt="calendar"
              />
            </a>
          </ItemIcon>
          <ItemDescription>
            <Headline4>
              <a href="/calendar" style={{color:"black"}}>
                {" "}
                <u>RAI Events Calendar</u>
              </a>{" "}
              connects members to the latest events in responsible AI.
            </Headline4>
            <MediumBody>
              We understand the importance in always staying on top of industry
              events and happenings, so we’ve curated a calendar of can’t-miss
              events including conferences, speaker series, awards presentations
              and more to help. This calendar is updated weekly with upcoming,
              can’t miss advance. We’ll see you there!
              <br />
              <br />
              <StyledLink text="Check it out" link="/calendar" />
            </MediumBody>
          </ItemDescription>
        </Container>
        <Line />
        <Container>
          <ItemIcon>
            <a href="/webinar">
              <StaticImage
                src="../images/rai-icons/webinar.png"
                width={208}
                height={208}
                alt="webinar"
              />
            </a>
          </ItemIcon>
          <ItemDescription>
            <Headline4>
              <a href="/webiner" style={{color:"black"}}>
                <u>Responsible AI Monthly Webinar Series</u>
              </a>
               {" "}fosters connection with key AI subject matter experts.
            </Headline4>
            <MediumBody>
              This program will enrich members with a reoccuring monthly webinar
              series with presentations from key AI subject matter experts. We
              curate our webinar topics based on the latest developments in the
              world of AI and data science, and offer networking opportunities
              both with webinar attendees and presentors.
              <br />
              <br />
              <StyledLink text="Sign up to join" link="/calendar" />
            </MediumBody>
          </ItemDescription>
        </Container>
      </Row>
      <Row>
        <Headline2 style={{ marginBottom: "20px" }}>Educate</Headline2>
        <Line style={{ marginBottom: "5px" }} />
        <Container>
          <Item>
            <a href="https://portal.ai-global.org/">
              <StaticImage
                src="../images/rai-icons/Portal.png"
                alt="Portal icon"
                width={356}
                height={160}
              />
            </a>
            <div style={{ textAlign: "left" }}>
              <Headline5>
                <a href="https://portal.ai-global.org/" style={{color:"black"}}>
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
                <br /><br/>
                <br />
                <StyledLink text="Get Started" link="https://portal.ai-global.org/" />
              </SmallBody>
            </div>
          </Item>
          <Item>
            <a href="https://map.ai-global.org/">
              <StaticImage
                src="../images/rai-icons/map.png"
                alt="map icon"
                width={356}
                height={160}
              />
            </a>
            <div style={{ textAlign: "left" }}>
              <Headline5>
                <a href="https://map.ai-global.org/" style={{color:"black"}}>
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
                <br />
                <StyledLink text="Get Started" link="https://map.ai-global.org/" />
              </SmallBody>
            </div>
          </Item>
          <Item>
            <a href="https://aiglobal.beta.trajectoryiq.com/">
              <StaticImage
                src="../images/rai-icons/e-course.png"
                alt="E-learning icon"
                width={356}
                height={160}
              />
            </a>
            <div style={{ textAlign: "left" }}>
              <Headline5>
                <a href="https://aiglobal.beta.trajectoryiq.com/" style={{color:"black"}}><u>Responsible AI E-Learning Courses</u></a>
                <br /> developed in partnership with TIQ Software
              </Headline5>
              <SmallBody>
                TIQ Software is a leader in work-integrated digital learning
                software, and together with RAI designed a course to support the
                public in answering the question, “what is artificial
                intelligence (AI)?” and to help everyone recognize how AI can be
                helpful, or harmful, if not developed responsibly.
                <br />
                <br />
                <StyledLink text="Get Started" link="https://aiglobal.beta.trajectoryiq.com/" />
              </SmallBody>
            </div>
          </Item>{" "}
        </Container>
      </Row>
      <Row
        style={{
          backgroundColor: "#f6f6f6",
          alignItems: "center",
        }}
      >
        <Headline2 style={{ marginBottom: "20px" }}>Assess</Headline2>
        <Line />
        <Container style={{ padding: "10px 0" }}>
          <ItemIcon>
            <a href="https://oproma.github.io/rai-trustindex/">
              <StaticImage
                src="../images/rai-icons/design-assistant.png"
                width={208}
                height={199}
                alt="design assisstant"
              />
            </a>
          </ItemIcon>
          <ItemDescription>
            <Headline4>
              <a href="https://oproma.github.io/rai-trustindex/" style={{color:"black"}}>
                <u>Responsible AI Design Assisstant</u>
              </a>{" "}
              assesses work in development, to anticipate problems and
              future-proof AI systems.
            </Headline4>
            <MediumBody>
              The Responsible AI Design Assistant is a virtual assessment to
              help members anticipate problems and future-proof their AI system.
              This tool brings together research and industry best practices to
              help designers, developers, and product owners keep in mind key AI
              challenges including data rights and use, privacy, security,
              explainability, fairness, bias, and robustness.
              <br />
              <br />
              <StyledLink
                text="Get Started"
                link="https://oproma.github.io/rai-trustindex/"
              />
            </MediumBody>
          </ItemDescription>
        </Container>
      </Row>
      <Row
        style={{
          alignItems: "center",
        }}
      >
        <Headline2 style={{ marginBottom: "20px" }}>Certify</Headline2>
        <Line />
        <Container style={{ padding: "10px 0" }}>
          <ItemIcon>
            <a href="/certification">
              <StaticImage
                src="../images/rai-icons/Badge.png"
                width={208}
                height={208}
                alt="RAI certification badge"
              />
            </a>
          </ItemIcon>
          <ItemDescription>
            <Headline4>
              <a href="/certification" style={{color:"black"}}>
                <u>RAI Certification Beta</u>
              </a>{" "}
              is the world’s first independent, accredited certification program
              of its kind.
            </Headline4>
            <MediumBody>
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
              <br />
              <StyledLink text="Get Started" link="/certification" />
            </MediumBody>
          </ItemDescription>
        </Container>
      </Row>
    </Layout>
  );
}

export default Tools;
