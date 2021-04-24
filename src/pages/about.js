import React from "react";
import styled from "styled-components";
import { getSrc, StaticImage } from "gatsby-plugin-image";
import Layout from "components/Layout";
import { Headline1, MediumBody, Headline2, Headline4, LargeBody, SmallBody } from "../components/Text";
import { JumboContainer, JumboText } from "../components/Jumbotron";
import { FullWidthContainer } from "../components/FullWidthContainer";
import { PrimaryBtn } from "../components/Buttons";

const JumboPicture = styled.div`
  position: relative;
  flex: 1;
`

const AboutPeopleContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  margin: ${props => `2vw ${props.theme.pageMargin}`};
  background-color: ${props => props.theme.color.mediumLight};
`

const AboutPeopleGrid = styled.div`
  flex: 1;
  display: grid; 
  padding: 2vw 0;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: min-content;
  /* justify-content: flex-start; */
  gap: 2vw;
`

const PersonContainer = styled.div`
  display: grid;
  width: fit-content;
  white-space: nowrap;
  grid-template-columns: fit-content auto;
  grid-template-rows: min-content min-content;
  grid-template-areas: 
    "personImage personName"
    "personImage personPosition";
`

const PersonImage = styled(StaticImage)`
  place-self: center;
  grid-area: personImage;
  width: 70px;
  height: 70px;
  border-radius: 50%;
`

const PersonName = styled(Headline4)`
  grid-area: personName;
  margin: 0;
`

const PersonPosition = styled(MediumBody)`
  grid-area: personPosition;
  margin: 0;
`

const PartnersContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  margin: 2vw 0;
`

const PartnerHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

const PartnerHeadline = styled(Headline2)`
  width:  min-content;
  margin-right: auto;
`

const PartnerLink = styled(LargeBody)`
  justify-self: flex-end;
  width: min-content;
  height: min-content;
  border-bottom: ${props => props.selected ? `1px solid black` : ""};
  color: ${props => props.selected ? props.theme.color.dark : props.theme.color.mediumDark};
  margin-left: 20px;
  font-weight: bold;
` 

const PartnerGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-auto-rows: min-content;
  gap: 20px;
`

const PartnerImgContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
`

const PartnerImg = styled.img`
  flex: 1;
  width: auto;
  max-width: 100%;
  object-fit: contain;
  padding: 10px;
  box-sizing: border-box;
`

const CertificationContainer = styled.div`
  background-color: #2f2d34;
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 80px;
  padding: 5% 4%;
  flex-direction: column;
`;

const TextHeadline = styled(Headline2)`
  color: #FFFFFF;
`;

const BodyCopy = styled(MediumBody)`
  color: #FFFFFF;
  margin-bottom: 50px;
`;

const MoreNewsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "title link";
  grid-auto-rows: min-content;
  gap: 20px;
  background-color: #f6f6f6;
  margin: ${props => `2vw ${props.theme.pageMargin}`};
`

const MoreNewsTitle = styled.h2`
  grid-area: title;
  font-style: normal;
  font-weight: bold;
  font-size: 44px;
  line-height: 52px;
  margin-bottom: 1vw;
`

const MoreNewsLink = styled.a`
  text-decoration: none;
  color: ${props => props.theme.color.text};
  justify-self: flex-end;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`

const MoreNewsArticle = styled.div`
  border-top: 1px solid #2F2D34;
  padding: 1vw 0;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  
  :hover {
    opacity: .6;
  }
  `

const MoreNewsArticleHeadline = styled(MediumBody)`
  font-weight: bold;
  margin-bottom: 0.5vw;
`

const MoreNewsArticleDate = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #797B80;
`

function About(props) {

  const boardList = [{name: "Manoj Saxena", position: "Board Chair"},{name: "Manoj Saxena1", position: "Board Chair"},{name: "Manoj Saxena", position: "Board Chair"},{name: "Manoj Saxena", position: "Board Chair"},{name: "Manoj Saxena", position: "Board Chair"},{name: "Manoj Saxena", position: "Board Chair"}]
  const advisorList = [{name: "Manoj Saxena", position: "Board Chair"},{name: "Manoj Saxena", position: "Board Chair"},{name: "Manoj Saxena", position: "Board Chair"},{name: "Manoj Saxena", position: "Board Chair"},{name: "Manoj Saxena", position: "Board Chair"},{name: "Manoj Saxena", position: "Board Chair"}]
  const memberList = [{src: "algora.png"}, {src: "argo-design.png"},{src: "algora.png"}, {src: "argo-design.png"},{src: "algora.png"}, {src: "argo-design.png"},{src: "algora.png"}, {src: "argo-design.png"},{src: "algora.png"}, {src: "argo-design.png"}]
  const newsList = []

  for (let i = 0; i < 6; i++){
    newsList.push(
      <MoreNewsArticle>
        <MoreNewsArticleHeadline>
          2020 AI Global Awards Recognize Standout Global Leaders in Responsible and Ethical AI
        </MoreNewsArticleHeadline>
        <SmallBody>
          MAR 31
        </SmallBody>
      </MoreNewsArticle>
    )
  }

  return (
    <Layout title="About RAIL">
        <JumboContainer>
          <JumboText>
            <Headline1>
              About RAI
            </Headline1>
            <MediumBody>
            AI Global is a non-profit organization building tangible governance tools for trustworthy, safe, and fair Artificial Intelligence (AI). Through a first-of-its-kind certification system that qualifies AI systems, we support practitioners as they navigate the complex landscape of creating Responsible AI. <br/> Feedback generated from these systems will in turn inform AI policymakers, enabling technologies that improve the social and economic well-being of society. AI Global brings extensive experience in responsible AI policy and is uniquely positioned to partner with organizations across public and private sectors to guide and inform responsible AI governance around the world.
            </MediumBody>
          </JumboText>
            <StaticImage
              src="../images/pictures/about/jumboforeground.png"
              style={{
                position: "absolute",
                zIndex: "4",
                right: "0",
              }}
              width={1479}
              height={709}
              alt="jumbo foreground"
            />
            <StaticImage
              src="../images/pictures/about/jumbobackground.png"
              style={{
                position: "absolute",
                zIndex: "3",
                right: "0",
              }}
              width={1177}
              height={618}
              alt="jumbo background"
            />
      </JumboContainer>
      <FullWidthContainer>
        <AboutPeopleContainer>
          <Headline2>
            Board
          </Headline2>
          <AboutPeopleGrid>
            {
              boardList.map((board) => {
                return (
                  <PersonContainer>
                    <StaticImage
                      src="../images/pictures/bike-1.png"
                      style={{
                        gridArea: "personImage",
                        placeSelf: "center",
                        borderRadius: "50%",
                        border: "1px solid black",
                        marginRight: "1.25vw"
                      }}
                      width={70}
                      height={70}
                    />
                    {/* <PersonImage src="../images/pictures/about/jumboforeground.png"/> */}
                    <PersonName>
                      {board.name}
                    </PersonName>
                    <PersonPosition>
                      {board.position}
                    </PersonPosition>
                  </PersonContainer>
              );
              })
            }
          </AboutPeopleGrid>
        </AboutPeopleContainer>
        <AboutPeopleContainer>
          <Headline2>
            Advisors
          </Headline2>
          <AboutPeopleGrid>
          {
              advisorList.map((advisor) => {
                return (
                  <PersonContainer>
                    <StaticImage
                      src="../images/pictures/bike-1.png"
                      style={{
                        gridArea: "personImage",
                        placeSelf: "center",
                        borderRadius: "50%",
                        border: "1px solid black",
                        marginRight: "1.25vw"
                      }}
                      width={70}
                      height={70}
                    />
                    {/* <PersonImage src="../images/pictures/about/jumboforeground.png"/> */}
                    <PersonName>
                      {advisor.name}
                    </PersonName>
                    <PersonPosition>
                      {advisor.position}
                    </PersonPosition>
                  </PersonContainer>
              );
              })
            }
          </AboutPeopleGrid>
        </AboutPeopleContainer>
      </FullWidthContainer>
      <PartnersContainer>
        <PartnerHeader>
          <PartnerHeadline>
            Members
          </PartnerHeadline>
          <PartnerLink selected>
            Members
          </PartnerLink>
          <PartnerLink>
            Contributers
          </PartnerLink>
          <PartnerLink>
            Affliates
          </PartnerLink>
        </PartnerHeader>
        <PartnerGrid>
          {
            // I HAVE NO IDEA HOW IMGS WORK WITH GATSBY
            memberList.map((member) => {
              return (
                <PartnerImgContainer>
                  <PartnerImg 
                    src={"../../partner-logos/" + member.src}
                  >
                  </PartnerImg>
                </PartnerImgContainer>
              );
            })
          }
        </PartnerGrid>
      </PartnersContainer>
      <CertificationContainer>
        <TextHeadline style={{ color: "#FFFFFF"}}>
          Get Involved
        </TextHeadline>
        <BodyCopy style={{ color: "#FFFFFF"}}>
          For more information, please email us at certification@ai-global.org, or sign up to become a member of AI Global. You can also join our mailing list to stay informed on the progress.
        </BodyCopy>
        <PrimaryBtn>Become a Member </PrimaryBtn>
      </CertificationContainer>
      <FullWidthContainer>
          <MoreNewsContainer>
            <MoreNewsTitle>
              More News
            </MoreNewsTitle>
            <MoreNewsLink>
              More News ➡
            </MoreNewsLink>
            {newsList}
          </MoreNewsContainer>
      </FullWidthContainer>
    </Layout>
  );
}

export default About;
