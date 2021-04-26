import React from "react";
import Layout from "../components/Layout";
import { navigate } from "gatsby";
import {
  Headline1,
  MediumBody,
  Heading1,
  LargeBody,
  Headline2,
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
  TitleLink,
} from "../components/Blocks";
import StyledLink from "../components/StyledLink";
import News from "../components/News";
import Slideshow from "../components/Slideshow";
import { StaticImage } from "gatsby-plugin-image";

function Index() {
  return (
    <Layout title="Home">
      <Jumbotron top>
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
            placeholder="tracedSVG"
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
            placeholder="tracedSVG"
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
            placeholder="tracedSVG"
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
            placeholder="tracedSVG"
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
            placeholder="tracedSVG"
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
            placeholder="tracedSVG"
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
            placeholder="tracedSVG"
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
            Learn More
          </PrimaryBtn>
        </JumboText>
      </Jumbotron>
      <Jumbotron text>
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
            Programs and Tools
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
      <Jumbotron dark style={{ justifyContent: "center" }} text>
        <StaticImage
          className="jumbo-image"
          src="../images/rai-icons/rai-badge.png"
          style={{ alignSelf: "flex-start", marginleft: "10%", order: "3" }}
          placeholder="tracedSVG"
          alt="RAI Badge"
        />
        <JumboText style={{ order: "4" }} className="jumbo-text">
          <Heading1 dark>
            The World's First Independent, <br />
            Accredited Certification Program <br />
            for Responsible AI
          </Heading1>
          <LargeBody dark>
            RAI Certification is a symbol of trust that an AI system
            <br /> has been designed, built, and deployed in line with the{" "}
            <br />
            five OECD Principles on Artificial Intelligence to promote
            <br /> use of AI that is innovative and trustworthy and that <br />
            respects human rights and societal values.
          </LargeBody>
          <LargeBody dark>
            We use our five categories of responsible AI
            <br /> (explainability, fairness, accountability, robustness, and{" "}
            <br />
            data quality) as parameters for the different credit
            <br /> elements within the RAI Certification rating system.
          </LargeBody>
          <br />
          <PrimaryBtn onClick={() => navigate("/certification")}>
            Learn More
          </PrimaryBtn>
        </JumboText>
      </Jumbotron>
      <Row>
        <Headline2>Help Advance Trusted AI</Headline2>
        <LargeBody>
          Working together, we can create AI systems the world can trust.
        </LargeBody>
        <Slideshow />
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
        <TitleLink>
          <Headline2>Members &amp; Partners</Headline2>
          <StyledLink text="Members" link="/about" />
        </TitleLink>
        <Divider />
        <Grid>
          <GridRow first>
            <GridContainer>
              <StaticImage
                src="../images/members-logos/altaml.png"
                alt="Alta ML"
                quality={100}
                placeholder="blurred"
              />
            </GridContainer>
            <GridContainer>
              <StaticImage
                src="../images/members-logos/anthem.png"
                alt="Anthem"
                quality={100}
                placeholder="blurred"
              />
            </GridContainer>
            <GridContainer>
              <StaticImage
                src="../images/members-logos/cognitive-scale.png"
                alt="Cognitive Scale"
                quality={100}
                placeholder="blurred"
              />
            </GridContainer>
            <GridContainer>
              <StaticImage
                src="../images/members-logos/jackson.png"
                alt="Jackson"
                quality={100}
                placeholder="blurred"
              />
            </GridContainer>
          </GridRow>
          <GridRow>
            <GridContainer>
              <StaticImage
                src="../images/partner-logos/alberta.png"
                alt="University of Alberta"
                quality={100}
                placeholder="blurred"
              />
            </GridContainer>
            <GridContainer>
              <StaticImage
                src="../images/partner-logos/algora.png"
                alt="Algora"
                quality={100}
                placeholder="blurred"
              />
            </GridContainer>
            <GridContainer>
              <StaticImage
                src="../images/partner-logos/amex.png"
                alt="American Express"
                quality={100}
                placeholder="blurred"
              />
            </GridContainer>
            <GridContainer>
              <StaticImage
                src="../images/partner-logos/argo-design.png"
                alt="Argo Design"
                quality={100}
                placeholder="blurred"
              />
            </GridContainer>
          </GridRow>
          <GridRow>
            <GridContainer>
              <StaticImage
                src="../images/partner-logos/beacon.png"
                alt="Beacon"
                quality={100}
                placeholder="blurred"
              />
            </GridContainer>
            <GridContainer>
              <StaticImage
                src="../images/partner-logos/cio.png"
                alt="CIO"
                quality={100}
                placeholder="blurred"
              />
            </GridContainer>
            <GridContainer>
              <StaticImage
                src="../images/partner-logos/cips.png"
                alt="CIPS"
                quality={100}
                placeholder="blurred"
              />
            </GridContainer>
            <GridContainer>
              <StaticImage
                src="../images/partner-logos/ut-austin.png"
                alt="UT Austin"
                quality={100}
                placeholder="blurred"
              />
            </GridContainer>
          </GridRow>
          <GridRow>
            <GridContainer>
              <StaticImage
                src="../images/partner-logos/deloitte.png"
                alt="Deloitte"
                quality={100}
                placeholder="blurred"
              />
            </GridContainer>
            <GridContainer>
              <StaticImage
                src="../images/partner-logos/ey.png"
                alt="EY"
                quality={100}
                placeholder="blurred"
              />
            </GridContainer>
            <GridContainer>
              <StaticImage
                src="../images/partner-logos/hypergiant.png"
                alt="Hypergiant"
                quality={100}
                placeholder="blurred"
              />
            </GridContainer>
            <GridContainer>
              <StaticImage
                src="../images/partner-logos/microsoft.png"
                alt="Microsoft"
                quality={100}
                placeholder="blurred"
              />
            </GridContainer>
          </GridRow>
          <GridRow>
            <GridContainer>
              <StaticImage
                src="../images/partner-logos/mila.png"
                alt="Mila"
                quality={100}
                placeholder="blurred"
              />
            </GridContainer>
            <GridContainer>
              <StaticImage
                src="../images/partner-logos/montreal.png"
                alt="Montreal"
                quality={100}
                placeholder="blurred"
              />
            </GridContainer>
            <GridContainer>
              <StaticImage
                src="../images/partner-logos/oceanis.png"
                alt="Oceanis"
                quality={100}
                placeholder="blurred"
              />
            </GridContainer>
            <GridContainer>
              <StaticImage
                src="../images/partner-logos/oproma.png"
                alt="Oproma"
                quality={100}
                placeholder="blurred"
              />
            </GridContainer>
          </GridRow>
          <GridRow>
            <GridContainer>
              <StaticImage
                src="../images/partner-logos/oxford-brooks.png"
                alt="Oxford Brooks"
                quality={100}
                placeholder="blurred"
              />
            </GridContainer>
            <GridContainer>
              <StaticImage
                src="../images/partner-logos/prudence-ai.png"
                alt="Prudence AI"
                quality={100}
                placeholder="blurred"
              />
            </GridContainer>
            <GridContainer>
              <StaticImage
                src="../images/partner-logos/pwc.png"
                alt="PWC"
                quality={100}
                placeholder="blurred"
              />
            </GridContainer>
            <GridContainer>
              <StaticImage
                src="../images/partner-logos/queens.png"
                alt="Queens"
                quality={100}
                placeholder="blurred"
              />
            </GridContainer>
          </GridRow>
          <GridRow>
            <GridContainer>
              <StaticImage
                src="../images/partner-logos/rai.png"
                alt="R/AI"
                quality={100}
                placeholder="blurred"
              />
            </GridContainer>
            <GridContainer>
              <StaticImage
                src="../images/partner-logos/saxena-foundatoin.png"
                alt="Saxena Foundation"
                quality={100}
                placeholder="blurred"
              />
            </GridContainer>
            <GridContainer>
              <StaticImage
                src="../images/partner-logos/toronto.png"
                alt="University of Toronto"
                quality={100}
                placeholder="blurred"
              />
            </GridContainer>
            <GridContainer>
              <StaticImage
                src="../images/partner-logos/sri.png"
                alt="SRI"
                quality={100}
                placeholder="blurred"
              />
            </GridContainer>
          </GridRow>
          <GridRow>
            <GridContainer>
              <StaticImage
                src="../images/partner-logos/strauss-center.png"
                alt="Strauss Center"
                quality={100}
                placeholder="blurred"
              />
            </GridContainer>
          </GridRow>
        </Grid>
        <LargeBody>Learn more about our work and partnerships.</LargeBody>
        <br />
        <PrimaryBtn dark onClick={() => navigate("/membership")}>
          Become a Member
        </PrimaryBtn>
      </Row>
      <Row gray>
        <TitleLink>
          <Headline2>Responsible AI News</Headline2>
          <StyledLink text="More News" link="/news" />
        </TitleLink>
        <News />
      </Row>
    </Layout>
  );
}

export default Index;
