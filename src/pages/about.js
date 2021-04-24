import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "components/Layout";
import { Headline1, MediumBody, Headline2, Headline4 } from "../components/Text";
import { JumboContainer, JumboText } from "../components/Jumbotron";
import { FullWidthContainer } from "../components/FullWidthContainer";

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
  border-top: 1px solid black;
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

const Name = styled(Headline4)`
  grid-area: personName;
  margin: 0;
`

const PersonPosition = styled(MediumBody)`
  grid-area: personPosition;
  margin: 0;
`

const MembersContainer = styled.div`
  
`

function About(props) {

  const boardList = [{name: "Manoj Saxena", position: "Board Chair"},{name: "Manoj Saxena1", position: "Board Chair"},{name: "Manoj Saxena", position: "Board Chair"},{name: "Manoj Saxena", position: "Board Chair"},{name: "Manoj Saxena", position: "Board Chair"},{name: "Manoj Saxena", position: "Board Chair"}]
  const advisorList = [{name: "Manoj Saxena", position: "Board Chair"},{name: "Manoj Saxena", position: "Board Chair"},{name: "Manoj Saxena", position: "Board Chair"},{name: "Manoj Saxena", position: "Board Chair"},{name: "Manoj Saxena", position: "Board Chair"},{name: "Manoj Saxena", position: "Board Chair"}]

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
            {/* <StaticImage
              src="../images/pictures/about/jumboforeground.png"
              style={{
                position: "absolute",
                zIndex: "4",
                right: "0",
                top: "134px",
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
                top: "162px",
              }}
              width={1177}
              height={618}
              alt="jumbo background"
            /> */}
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
                    <Name>
                      Manoj Sacxa
                    </Name>
                    <PersonPosition>
                      Board Member
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
              advisorList.map((advisorList) => {
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
                    <Name>
                      Manoj Sacxa
                    </Name>
                    <PersonPosition>
                      Board Member
                    </PersonPosition>
                  </PersonContainer>
              );
              })
            }
          </AboutPeopleGrid>
        </AboutPeopleContainer>
      </FullWidthContainer>

    </Layout>
  );
}

export default About;
