import React, { useRef } from "react";
import styled from "styled-components";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { StaticImage } from "gatsby-plugin-image";

/* Font colors*/
const carbon = "#2f2d34";
const blanco = "#ffffff";

const MediumBody = styled.p`
  font-style: normal;
  font-weight: ${(props) => (props.bold ? "bold" : "300")};
  font-size: 18px;
  line-height: 28px;
  color: ${(props) => (props.dark ? blanco : carbon)};
  border-left: ${(props) => (props.bordered ? "3px solid " + carbon : "none")};
  padding-left: ${(props) => (props.bordered ? "20px" : "0")};
  @media screen and (max-width: 600px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

const Heading3 = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  margin: 0px 0px 20px 0px;
  color: ${(props) => (props.dark ? blanco : carbon)};
`;

const SlideContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 0px 0px 0px;
`;
const ButtonContainer = styled.div`
  display: flex;
  width: 75px;
  align-self: flex-end;
  justify-content: space-between;
  margin-top: 10px;
`;
const Views = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  min-height: 390px;
  @media screen and (max-width: 1190px) {
    min-height: 500px;
  }

  @media screen and (max-width: 950px) {
    .view:nth-of-type(2){
      display: none;
    }
    
  }

`;
const View = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 42%;
  padding: 40px;
  border: 1px solid ${carbon};

  @media screen and (max-width: 950px){
    width: 90%;
  }
`;

function Slideshow() {
  const slideRef = useRef();
  const properties = {
    autoplay: true,
    arrows: false,
    transitionDuration: 500,
    duration: 7500,
    Easing: "ease-in",
  };

  const back = () => {
    slideRef.current.goBack();
  };

  const next = () => {
    slideRef.current.goNext();
  };

  return (
    <SlideContainer>
      <Slide ref={slideRef} {...properties}>
        <Views>
          <View className="view">
            <MediumBody>
              "We’re delighted to be working with RAI toward an independent and
              community-developed AI certification program. RAI will provide
              organizations the right guard rails not only to preserve trust and
              avoid harm, but also enable organizations to innovate and drive
              better societal outcomes with AI.”
            </MediumBody>
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
              <StaticImage
                src="../images/testimonials/wef.png"
                placeholder="blurred"
                alt="WEF"
              />
              <div style={{ marginLeft: "20px" }}>
                <Heading3 style={{ marginBottom: "0" }}>Mark Caine</Heading3>
                <MediumBody>Lead AI and ML, WEF</MediumBody>
              </div>
            </div>
          </View>
          <View className="view">
            <MediumBody>
              "The continued emergence of Artificial Intelligence (AI)
              technologies presents an exciting opportunity for Anthem to
              explore the development of next-generation products and services.
              As one of the initial charter members of RAI, we are thrilled to
              see this community grow through active collaboration and are
              pleased to provide our insights and expertise by participating in
              the RAI Certification beta pilot.”
            </MediumBody>
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
              <StaticImage
                src="../images/testimonials/anthem.png"
                placeholder="blurred"
                alt="Anthem"
              />
              <div style={{ marginLeft: "20px" }}>
                <Heading3 style={{ marginBottom: "0" }}>Rajeev Ronaki</Heading3>
                <MediumBody>SVP and CDO, Anthem</MediumBody>
              </div>
            </div>
          </View>
        </Views>
        <Views>
          <View className="view">
            <MediumBody>
              “Failing to operationalize AI in a responsible and ethical manner
              is a threat to the bottom line. At IBM we have a long-standing
              commitment to building trustworthy technologies and we are
              delighted to be partnering with RAI as a partner and board
              advisor”.
            </MediumBody>
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
              <StaticImage
                src="../images/testimonials/ibm.png"
                placeholder="blurred"
                alt="IBM"
              />
              <div style={{ marginLeft: "20px" }} className="info">
                <Heading3 style={{ marginBottom: "0" }}>Seth Dobrin</Heading3>
                <MediumBody>Global Chief AI Officer, IBM</MediumBody>
              </div>
            </div>
          </View>
          <View className="view">
            <MediumBody>
              “Without trust, artificial intelligence cannot deliver on its
              potential value. Independent Certification such as the RAI
              Certification help strengthen governance and controls to build
              user trust and accelerate adoption and business impact of AI. As a
              recent addition to RAI’s advisory board, I look forward to
              bringing my expertise and global perspective to the important work
              underway at RAI Institute.”
            </MediumBody>
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
              <StaticImage
                src="../images/testimonials/ey.png"
                placeholder="blurred"
                alt="EY"
              />
              <div style={{ marginLeft: "20px" }}>
                <Heading3 style={{ marginBottom: "0" }}>Cathy Cobey</Heading3>
                <MediumBody>Global Trusted AI Leader, EY</MediumBody>
              </div>
            </div>
          </View>
        </Views>
        <Views>
          <View className="view">
            <MediumBody>
              “We are delighted to collaborate with organizations such as RAI in
              creating best practices in the complex field of responsible AI,
              and encourage the development of credible, independently-validated
              processes for certifying AI systems.”
            </MediumBody>
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
              <StaticImage
                src="../images/testimonials/wef.png"
                placeholder="blurred"
                alt="WEF"
              />
              <div style={{ marginLeft: "20px" }}>
                <Heading3 style={{ marginBottom: "0" }}>
                  Kay Firth-Butterfield
                </Heading3>
                <MediumBody>Head of AI and Machine Learning, WEF</MediumBody>
              </div>
            </div>
          </View>
          <View className="view">
            <MediumBody>
              “The close working relationship between CIPS and Responsible AI
              Institute is imperative to allow both organizations to enrich
              their members with the right toolset to further responsible AI. As
              the risks of data security increases in tandem with the growth of
              AI systems, we must use these tangible tools to ethically succeed
              in this rapidly changing landscape.”
            </MediumBody>
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
              <StaticImage
                src="../images/testimonials/cips.png"
                placeholder="blurred"
                alt="CIPS"
              />
              <div style={{ marginLeft: "20px" }}>
                <Heading3 style={{ marginBottom: "0" }}>Greg Lane</Heading3>
                <MediumBody>
                  CEO, Canadian Information Procesing Society
                </MediumBody>
              </div>
            </div>
          </View>
        </Views>
        <Views>
          <View className="view">
            <MediumBody>
              "We don’t think Banking can work in an environment without trust.
              Independent certification programs like the one from RAI Institute
              help technical and business leaders develop the appropriate
              safeguards for use of data and AI in an ethical and trusted
              manner.”
            </MediumBody>
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
              <StaticImage
                src="../images/testimonials/hsbc.png"
                placeholder="blurred"
                alt="HSBC"
              />
              <div style={{ marginLeft: "20px" }}>
                <Heading3 style={{ marginBottom: "0" }}>Gavin Munroe</Heading3>
                <MediumBody>
                  Global CIO for Wealth and Personal Banking, HSBC
                </MediumBody>
              </div>
            </div>
          </View>
          <View className="view">
            <MediumBody>
              “AI presents a new breed of significant financial and reputation
              risk for companies. CIOs, C-suite executives, and boards must ask
              tough questions about responsible use of data and machine learning
              technology and help their organizations implement new responsible
              AI guardrails and independent AI certifications like the one being
              provided by Responsible AI Institute”.
            </MediumBody>
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
              <StaticImage
                src="../images/testimonials/amex.png"
                placeholder="blurred"
                alt="American Express"
              />
              <div style={{ marginLeft: "20px" }}>
                <Heading3 style={{ marginBottom: "0" }}>Suraj Madnani</Heading3>
                <MediumBody>Chief Product Owner, American Express</MediumBody>
              </div>
            </div>
          </View>
        </Views>
        <Views>
          <View className="view">
            <MediumBody>
              “RAI Certification provides the guardrails for use of AI and data
              in an ethical and responsible manner. Partnering with RAI
              Institute to build an independent and trusted Responsible AI
              Certification system helps our customers accelerate adoption and
              impact from AI systems.”
            </MediumBody>
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
              <StaticImage
                src="../images/testimonials/cognitive-scale.png"
                placeholder="blurred"
                alt="Cognitive Scale"
              />
              <div style={{ marginLeft: "20px" }}>
                <Heading3 style={{ marginBottom: "0" }}>Matt Sanchez</Heading3>
                <MediumBody>Founder and CTO, Cognitive Scale</MediumBody>
              </div>
            </div>
          </View>
        </Views>
      </Slide>
      <ButtonContainer>
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            back();
          }}
        >
          <StaticImage
            src="../images/icons/left-arrow.svg"
            placeholder="blurred"
          />
        </a>
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            next();
          }}
        >
          <StaticImage
            src="../images/icons/right-arrow.svg"
            placeholder="blurred"
          />
        </a>
      </ButtonContainer>
    </SlideContainer>
  );
}

export default Slideshow;
