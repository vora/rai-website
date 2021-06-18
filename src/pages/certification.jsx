import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { Heading } from "@/components/Heading";
import { CallToAction } from "@/blocks/CallToAction";
import Layout from "../components/Layout";
import {
  Headline2,
  Headline4,
  MediumBody,
  LargeBody,
  Heading1,
} from "../components/OldText";
import {
  Jumbotron,
  JumboText,
  JumboImage,
  GrayPanel,
  Row,
} from "../components/Blocks";
import certification from "../images/rai-content/Certification.png";

const RectangleImg = styled.img`
  width: 100%;
  object-fit: fill;
`;

const BorderTitle = styled.p`
  border-left: 3px solid #2f2d34;
  padding-left: 20px;
`;

const PDFButton = styled.a`
  background: #2f2d34 !important;
  color: #ffffff !important;
  font-style: normal !important;
  font-weight: 500 !important;
  font-size: 18px !important;
  line-height: 28px !important;
  text-align: center !important;
  width: fit-content !important;
  padding: 14px 30px 14px 30px !important;
  cursor: pointer !important;
  border: none !important;
  margin-bottom: 12px !important;
  text-decoration: none;
  align-self: center;
`;
function Certification() {
  return (
    <Layout title="Certification">
      <Jumbotron>
        <JumboText>
          <Heading as="h1">
            RAI Certification
            <br /> Beta
          </Heading>
          <MediumBody>
            <strong>
              The world’s first independent, accredited certification program of
              its kind.
            </strong>
            <br />
            Developed under the Global AI Action Alliance for the World Economic
            <br /> Forum (WEF), along with a diverse community of leading
            experts, RAI
            <br /> certification is based on objective assessments of fairness,
            bias,
            <br /> explainability, and other concrete metrics of responsibly
            built AI
            <br /> systems.
          </MediumBody>
          <br />
        </JumboText>
        <JumboImage className="hero-image">
          <StaticImage
            src="../images/rai-icons/Badge.png"
            style={{
              position: "absolute",
              zIndex: "2",
              right: "170px",
              top: "281px",
            }}
            width={337}
            height={337}
            alt="badge-1"
            placeholder="tracedSVG"
          />
          <StaticImage
            src="../images/pictures/mask-1.png"
            style={{
              position: "absolute",
              zIndex: "1",
              right: "0px",
              top: "200px",
            }}
            width={919}
            height={500}
            alt="patient-2"
          />
        </JumboImage>
      </Jumbotron>
      <Row
        dark
        style={{
          alignContent: "center",
          alignItems: "center",
          padding: "100px 100px",
        }}
      >
        <RectangleImg src={certification} alt="certification" width="100%" />
      </Row>
      <Jumbotron>
        <JumboText>
          <Headline2>Why RAI Certification?</Headline2>
          <MediumBody>
            <strong>RAI Certification Allows for:</strong>
            <br />
            <br />
            Recognizing, preparing for, and mitigating potential harmful effects
            of
            <br />
            data and algorithm bias from blackbox AI.
            <br />
            Improving explainability to build customer trust and build
            competitive
            <br /> advantage with your AI systems.
            <br />
            Ensuring legal compliance and ethical alignment of your AI with your
            <br /> values and improve overall AI governance.
            <br />
            Addressing stakeholder expectations towards your company’s
            <br />
            behavior and corporate social responsibility.
            <br />
            Avoiding reputational damage by increasing the transparency and
            <br />
            explainability of AI decision making processes.
            <br />
            Leveraging our RAI community to solve AI trust problems and
            <br />
            improve the performance and quality of your AI systems.
            <br />
          </MediumBody>
          <br />
          <PDFButton href="/Whitepaper.pdf">
            Read the RAI Certification Whitepaper
          </PDFButton>
        </JumboText>
        <GrayPanel>
          <Heading1>
            RAI Certification Beta areas
            <br /> of focus
          </Heading1>
          <LargeBody style={{ marginBottom: "40px" }}>
            <BorderTitle>Fair Lending</BorderTitle>
            <br />
            <BorderTitle>Fraud Detection</BorderTitle>
            <br />
            <BorderTitle>Automated Diagnosis and Treatment</BorderTitle>
            <br />
            <BorderTitle>Health Recommendation Systems</BorderTitle>
            <br />
            <BorderTitle>Automated Human Resources</BorderTitle>
          </LargeBody>
        </GrayPanel>
      </Jumbotron>
      <Row
        style={{
          padding: "20px",
          borderColor: "black",
          borderStyle: "solid",
          borderWidth: "1px",
          marginLeft: "4%",
          marginRight: "4%",
          marginBottom: "80px",
        }}
      >
        <Headline4>Join a RAI Certification Working Group</Headline4>
        <MediumBody>
          Recognizing that a project of this magnitude needs to be built by the
          community for the benefit of the community, we launched the RAI
          Certification Working Group December 2020 with WEF and SRI. Following
          the kick-off, we had an outpouring of support and interest in this
          work which led to numerous discussions with technical, data,
          governance, ethics, and industry experts. As such, we’ve created not
          one, but five working groups based on our areas of focus: Fair
          Lending, Fraud Detection, Automated Diagnosis and Treatment, and
          Automated Hiring.
        </MediumBody>
        <div
          style={{
            width: "100%",
            textAlign: "center",
            paddingTop: "20px",
            paddingBottom: "20px",
          }}
        >
          <a
            className="kindful-donate-btn"
            style={{ textDecoration: "none", color: "#ffffff" }}
            href="https://docs.google.com/forms/d/e/1FAIpQLSfE9qxtg9k8GIei-GeDmpnxQwDsHD9kaATPqnZRlmVaL3ypPg/viewform?usp=sf_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join a working group
          </a>
        </div>
      </Row>
      <div style={{ margin: "var(--space--xxlarge) 0" }}>
        <CallToAction
          title="Get Involved"
          action={{
            title: "Become a member",
            url: "/membership",
          }}
          content={{
            raw: `{
              "data":{},
              "content":[
                {
                  "data":{},
                  "content":[
                    {
                      "data":{},
                      "content":[
                        {
                          "data":{},
                          "marks":[],
                          "value":"For more information, please email us at ",
                          "nodeType":"text"
                        },
                        {
                          "nodeType":"hyperlink",
                          "content":[
                            {
                              "nodeType":"text",
                              "value":"admin@responsible.ai",
                              "marks":[],
                              "data":{}
                            }
                          ],
                          "data":{
                            "uri":"mailto:admin@responsible.ai"
                          }
                        },
                        {
                          "data":{},
                          "marks":[],
                          "value":", or ",
                          "nodeType":"text"
                        },
                        {
                          "nodeType":"hyperlink",
                          "content":[
                            {
                              "nodeType":"text",
                              "value":"sign up",
                              "marks":[],
                              "data":{}
                            }
                          ],
                          "data":{
                            "uri":"/membership"
                          }
                        },
                        {
                          "data":{},
                          "marks":[],
                          "value":" to become a member of RAI. You can also join our mailing list to stay informed on the progress.",
                          "nodeType":"text"
                        }
                      ],
                      "nodeType":"paragraph"
                    }
                  ],
                  "nodeType":"paragraph"
                }
              ],
              "nodeType":"document"
            }`,
          }}
        />
      </div>
    </Layout>
  );
}

export default Certification;
