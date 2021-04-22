import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import { navigate } from "gatsby";
import {
  Headline1,
  MediumBody,
  Heading1,
  LargeBody,
  Headline2
} from "../components/Text";
import { PrimaryBtn } from "../components/Buttons";
import {
  Jumbotron,
  JumboText,
  JumboImage,
  GrayPanel,
  Row,
  Divider,
  Grid,
  GridRow,
  GridContainer,
} from "../components/Blocks";
import StyledLink from "../components/StyledLink";
import News from "../components/News";
import { StaticImage } from "gatsby-plugin-image";

function IndexPage() {
  return (
    <Layout title="Home">
      <Jumbotron>
        <JumboText>
          <Headline1>
            Working Together <br /> for AI We Can Trust
          </Headline1>
          <MediumBody>
            Artificial Intelligence holds great potential and great peril. As
            practitioners <br /> and stakeholders, our choice is to build a
            future that either will — or will <br /> not — be trusted by
            everyone. The Responsible AI Institute is working to <br /> define
            responsible AI with practical tools and expert guidance on data
            <br />
            rights, privacy, security, explainability, and fairness.
          </MediumBody>
          <br />
          <PrimaryBtn dark onClick={() => navigate("/certification")}>
            Learn About RAI Certification
          </PrimaryBtn>
        </JumboText>
        <JumboImage className="hero-image">
          <StaticImage
            src="../images/pictures/patient-1.png"
            style={{
              position: "absolute",
              zIndex: "3",
              left: "80px",
              top: "134px",
            }}
            width={1479}
            height={709}
            alt="patient-1"
          />
          <StaticImage
            src="../images/pictures/patient-2.png"
            style={{
              position: "absolute",
              zIndex: "2",
              right: "0px",
              top: "162px",
            }}
            width={1177}
            height={618}
            alt="patient-2"
          />
          <StaticImage
            src="../images/pictures/patient-3.png"
            style={{
              position: "absolute",
              zIndex: "1",
              left: "0px",
              top: "125px",
            }}
            width={1530}
            height={734}
            alt="patient-3"
          />
        </JumboImage>
      </Jumbotron>
      <Jumbotron gray>
        <JumboImage className="hero-image" first>
          <StaticImage
            src="../images/pictures/woman-1.png"
            style={{
              position: "absolute",
              zIndex: "4",
              left: "-106px",
              top: "808px",
            }}
            width={1487}
            height={714}
            alt="woman-1"
          />
          <StaticImage
            src="../images/pictures/woman-2.png"
            style={{
              position: "absolute",
              zIndex: "3",
              left: "-284px",
              top: "826px",
              opacity: "0.7",
            }}
            width={1312}
            height={737}
            alt="woman-2"
          />
          <StaticImage
            src="../images/pictures/woman-4.png"
            style={{
              position: "absolute",
              zIndex: "2",
              left: "-99px",
              top: "800px",
              opacity: "0.3",
            }}
            width={1433}
            height={687}
            alt="woman-3"
          />
          <StaticImage
            src="../images/pictures/woman-3.png"
            style={{
              position: "absolute",
              zIndex: "1",
              left: "-97px",
              top: "802px",
              opacity: "0.1",
            }}
            width={1538}
            height={738}
            alt="woman-4"
          />
        </JumboImage>
        <JumboText right>
          <Headline1>
            AI Offers <br /> Incredible Promise.
          </Headline1>
          <MediumBody>
            AI is, without hyperbole, poised to reshape the world as we know it.
            It is <br />
            expected to add more than $15 trillion to the global economy by
            2030, <br /> sparking significant change across industries. By 2022,
            over 60% of <br />
            companies will have implemented machine learning, big data
            analytics, and <br />
            related AI tools into their operations. As we navigate the
            intricacies of a <br />
            technology already integrated into many of our systems, it is vital
            we do so
            <br /> through focused, practical lenses.
          </MediumBody>
          <br />
          <PrimaryBtn dark onClick={() => navigate("/membership")}>
            Become a Member
          </PrimaryBtn>
        </JumboText>
      </Jumbotron>
      <Jumbotron>
        <JumboText>
          <Headline1>
            AI's Power <br /> Needs Guardrails.
          </Headline1>
          <MediumBody>
            When not designed in a thoughtful and responsible manner, AI systems{" "}
            <br />
            can be biased, insecure, and not compliant with existing laws, even
            going <br />
            so far as to violate human rights. AI presents significant risk of
            financial
            <br /> and reputational harm for companies that haven't thought
            through their <br />
            strategies and roadmaps.
          </MediumBody>
          <MediumBody>
            More so than any technology we’ve yet encountered, it is imperative
            that <br />
            AI systems be designed and managed in a responsible way.
          </MediumBody>
          <br />
          <PrimaryBtn dark onClick={() => navigate("/tools")}>
            Tools
          </PrimaryBtn>
        </JumboText>
        <GrayPanel>
          <Heading1>
            A Framework of <br />
            Trust Is Imperative
          </Heading1>
          <MediumBody bordered>
            In 2017, a Palestinian man was arrested for posting ‘Good morning’
            on his Facebook page after the site’s{" "}
            <strong>
              AI-powered translation service mistakenly translated the phrase
            </strong>{" "}
            into “hurt them” in English or “attack them” in Hebrew.
          </MediumBody>
          <MediumBody bordered>
            A Florida county sheriff’s office is{" "}
            <strong>
              combining academic data with highly sensitive health department
              data
            </strong>{" "}
            to label specific children as possible criminals.
          </MediumBody>
          <MediumBody bordered>
            A 25-year old Detroit man was arrested for felony theft{" "}
            <strong>
              after the city’s facial recognition software misidentified him, a
              common racial bias
            </strong>{" "}
            mistake made when AI isn’t designed responsibly.
          </MediumBody>
          <MediumBody>
            These examples are jarring and only a sampling of the thousands of
            similar cases — but they don’t negate the incredible potential of
            this powerful technology. The right tools and guidance can turn
            situations like these into great benefits for humanity.
          </MediumBody>
        </GrayPanel>
      </Jumbotron>
      <Jumbotron dark style={{ justifyContent: "center" }}>
        <StaticImage
          src="../images/rai-icons/rail-badge-white.png"
          style={{ alignSelf: "flex-start", marginleft: "10%" }}
        />
        <JumboText>
          <Heading1 dark>
            The World's First Independent, <br />
            Accredited Certification Program <br />
            for Responsible AI
          </Heading1>
          <LargeBody dark>
            Based on the highest ethical principles, RAI <br /> certification,
            currently in development, marks the <br />
            accreditation of AI systems the world can trust.
          </LargeBody>
          <LargeBody dark>
            Developed under the Global AI Action Alliance for the <br />
            World Economic Forum (WEF), along with a diverse <br /> community of
            leading experts, RAIL certification is <br />
            based on objective assessments of fairness, bias,
            <br />
            explainability, and other concrete metrics of responsibly <br />{" "}
            built AI systems. The Schwartz Reisman Institute for <br />
            Technology and Society (SRI) at University of Toronto is
            <br /> serving as a business partner on the development
            <br /> phase of the initiative.
          </LargeBody>
          <LargeBody dark>
            The result will be a measurable, independent,
            <br /> authoritative certification program working across
            <br /> sectors and across regions around the world.
          </LargeBody>
          <br />
          <PrimaryBtn onClick={() => navigate("/certification")}>
            Learn More
          </PrimaryBtn>
        </JumboText>
      </Jumbotron>
      <Row>
        <Headline2>
          Help Fulfill the <br />
          Promise of Responsible AI
        </Headline2>
        <LargeBody>
          Working together, we can create AI systems the world can trust.
        </LargeBody>
        <MediumBody>
          Join visionary private, public, and academic leaders as we promote
          open, ethical AI.
        </MediumBody>
        <br />
        <PrimaryBtn dark onClick={() => navigate("/membership")}>
          Get Involved
        </PrimaryBtn>
      </Row>
      <Row>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Headline2>Members</Headline2>
          <StyledLink text="All Members" link="/about" />
        </div>
        <Divider />
        <Grid>
          <GridRow>
            <GridContainer>
              <StaticImage
                src="../images/new-partner-logos/ut-austin.png"
                alt="UT Austin"
                quality={100}
                width={179}
                height={50}
              />
            </GridContainer>
            <GridContainer>
              <StaticImage
                src="../images/new-partner-logos/cognitive-scale.png"
                alt="Cognitive Scale"
                quality={100}
                width={209}
                height={35}
              />
            </GridContainer>
            <GridContainer>
              <StaticImage
                src="../images/new-partner-logos/pwc.png"
                alt="PWC"
                quality={100}
                width={173}
                height={146}
              />
            </GridContainer>
            <GridContainer>
              <StaticImage
                src="../images/new-partner-logos/microsoft.png"
                alt="Microsoft"
                quality={100}
                width={204}
                height={69}
              />
            </GridContainer>
          </GridRow>
          <GridRow>
            <GridContainer>
              <StaticImage
                src="../images/new-partner-logos/mila.png"
                alt="Mila"
                quality={100}
                width={168}
                height={68}
              />
            </GridContainer>
            <GridContainer>
              <StaticImage
                src="../images/new-partner-logos/data-world.png"
                alt="data.world"
                quality={100}
                width={240}
                height={52.51}
              />
            </GridContainer>
            <GridContainer>
              <StaticImage
                src="../images/new-partner-logos/argo-design.png"
                alt="Argo Design"
                quality={100}
                width={240}
                height={160}
              />
            </GridContainer>
            <GridContainer>
              <StaticImage
                src="../images/new-partner-logos/jackson.png"
                alt="Jackson"
                quality={100}
                width={240}
                height={160}
              />
            </GridContainer>
          </GridRow>
          <GridRow>
            <GridContainer>
              <StaticImage
                src="../images/new-partner-logos/oproma.png"
                alt="Oproma"
                quality={100}
                width={215}
                height={86}
              />
            </GridContainer>
            <GridContainer>
              <StaticImage
                src="../images/new-partner-logos/prudence-ai.png"
                alt="Prudence AI"
                quality={100}
                width={240}
                height={32.6}
              />
            </GridContainer>
            <GridContainer>
              <StaticImage
                src="../images/new-partner-logos/oceanis.png"
                alt="Oceanis"
                quality={100}
                width={218}
                height={45}
              />
            </GridContainer>
            <GridContainer>
              <StaticImage
                src="../images/new-partner-logos/hypergiant.png"
                alt="Hypergiant"
                quality={100}
                width={144}
                height={64}
              />
            </GridContainer>
          </GridRow>
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
          <Headline2>Responsible AI <br/> Institute in the News</Headline2>
          <StyledLink text="More News" link="/" />
        </div>
        <News />
      </Row>
    </Layout>
  );
}

export default IndexPage;
