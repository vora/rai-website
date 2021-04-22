import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import { Jumbotron, JumboText, JumboImage } from "../components/Blocks";
import { navigate } from "gatsby";
import { Headline1, MediumBody } from "../components/Text";
import { PrimaryBtn } from "../components/Buttons";
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
            Learn About RAIL Certification
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

      {/* <JumboContainer>
        
      </JumboContainer>
      <JumboContainer>
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
        <GrayContainer>
          <JumboText right>
            <Headline1>
              AI Offers <br /> Incredible Promise.
            </Headline1>
            <MediumBody>
              AI is, without hyperbole, poised to reshape the world as we know
              it. It is expected to add more than $15 trillion to the global
              economy by 2030, sparking significant change across industries. By
              2022, over 60% of companies will have implemented machine
              learning, big data analytics, and related AI tools into their
              operations. As we navigate the intricacies of a technology already
              integrated into many of our systems, it is vital we do so through
              focused, practical lenses.
            </MediumBody>
            <br />
            <PrimaryBtn dark onClick={() => navigate("/member")}>
              Become a Member
            </PrimaryBtn>
          </JumboText>
        </GrayContainer>
      </JumboContainer>
      <JumboContainer style={{ marginTop: "450px" }}>
        <JumboText>
          <Headline1>
            AI's Power <br /> Needs Guardrails.
          </Headline1>
          <MediumBody>
            When not designed in a thoughtful and responsible manner, AI systems{" "}
            <br />
            can be biased, insecure, and not compliant with existing laws, even
            going <br /> so far as to violate human rights. AI presents
            significant risk of financial <br /> and reputational harm for
            companies that haven't thought through their <br /> strategies and
            roadmaps.
          </MediumBody>
          <MediumBody>
            More so than any technology we’ve yet encountered, it is imperative
            that <br /> AI systems be designed and managed in a responsible way.
          </MediumBody>
          <br />
          <PrimaryBtn dark onClick={() => navigate("/tools")}>
            Tools
          </PrimaryBtn>
        </JumboText>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            right: "0",
            width: "35%",
            backgroundColor: "#f6f6f6",
            padding: "60px",
          }}
        >
          <Heading1>
            A Framework of
            <br />
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
        </div>
      </JumboContainer> */}
    </Layout>
  );
}

export default IndexPage;
