import React, {useState} from "react";
import styled from "styled-components";
import { getSrc, StaticImage } from "gatsby-plugin-image";
import Layout from "components/Layout";
import { Headline1, MediumBody, Headline2, Headline4, LargeBody, SmallBody, Headline3 } from "../components/Text";
import { PrimaryBtn } from "../components/Buttons";
import { Jumbotron, JumboText, Row,  TitleLink, JumboImage} from "../components/Blocks";
import StyledLink from "../components/StyledLink";
import News from "../components/News";
import { navigate } from "gatsby";
import Modal from 'react-modal';
import close from "../images/icons/exit.png";
import TabbedGallery from "../components/TabbedGallery";

// configures the modal
Modal.setAppElement(`#___gatsby`);
// Because ReactModal is from a third party library, a function is needed to adapt the modal for styled components
// https://github.com/reactjs/react-modal/issues/603#issuecomment-378847885
function ReactModalAdapter({ className, ...props }) {
  const contentClassName = `${className}__content`;
  const overlayClassName = `${className}__overlay`;
  return (
      <Modal
          portalClassName={className}
          className={contentClassName}
          overlayClassName={overlayClassName}
          {...props}
      />
  )
}

const StyledBiographyModal = styled(ReactModalAdapter)`
  &__overlay {
      z-index: 100;
      position: fixed;
      top: 0px;
      left: 0px;
      right: 0px;
      bottom: 0px;
      background-color: rgba(255, 255, 255, 0.9);
  }
  &__content {
    width: '100%';
    height: '100%';
    position: absolute;
    top: 10vw;
    left: 10vw;
    right: 10vw;
    bottom: 10vw;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    border-radius: 4px;
    outline: none;
    border: 1px solid black;
    background: rgb(246, 246, 246);
    display: flex;
    flex-direction: column;
  }
`

const ModalHeader = styled.div`
  position: sticky;
  top: 0;
  display: grid;
  grid-template-columns: min-content auto min-content;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: 
    "personImage personName close"
    "personImage personPosition .";
  height: 20%;
  width: 100%;
  background-color: white;
  border-bottom: 2px solid #2F2D34;
  padding: 20px;
  box-sizing: border-box;
`

const ModalPersonImg = styled.img`
  max-width: 90px;
  width: 90px;
  grid-area: personImage;
  border-radius: 50%;
  border: 1px solid black;
  align-self: center;
  margin-right: 20px;
`

const ModalPersonName = styled(Headline3)`
  grid-area: personName;
  align-self: flex-end;
  margin: 0;
`

const ModalPersonPosition = styled(SmallBody)`
  grid-area: personPosition;
  align-self: flex-start;
`

const ModalClose = styled.button`
  grid-area: close;
  flex: 1;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: white;
  :hover {
    opacity: .6;
  }
`

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
`

const AboutPeopleGrid = styled.div`
  flex: 1;
  display: grid; 
  padding: 2vw 0;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: min-content;
  /* justify-content: flex-start; */
  gap: 2vw;
  @media screen and (max-width: 1190px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
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
  cursor: pointer;
  :hover {
    opacity: .6;
  }
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

const MembersHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`
const MembersHeadline = styled(Headline2)`
  width:  min-content;
  margin-right: auto;
`

const MembersGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-auto-rows: min-content;
  gap: 20px;
`

const MemberImgContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
`

const MemberImg = styled.img`
  flex: 1;
  width: auto;
  max-width: 100%;
  object-fit: contain;
  padding: 10px;
  box-sizing: border-box;
`

const FellowshipDescription =styled.div`
  padding: 10px;
  flex: 1;
  text-align: left;
  margin: 3px;
`;

function BiographyModal(props){
  return(
    <StyledBiographyModal
      isOpen={props.isOpen}
      onRequestClose={() => props.handler(false)}
    >
      <ModalHeader>
        <ModalPersonImg src={props.person.img}></ModalPersonImg>
        <ModalPersonName>{props.person.name}</ModalPersonName>
        <ModalPersonPosition>{props.person.position}</ModalPersonPosition>
        <ModalClose onClick={() => props.handler(false)}>
          <img src={close} alt="close"></img>
        </ModalClose>
      </ModalHeader>
      <ModalContent>
        <MediumBody>
          <strong>
            {props.person.introduction}
          </strong>
        </MediumBody>
        <br/>
        <MediumBody>
          {props.person.biography}
        </MediumBody>
      </ModalContent>
  </StyledBiographyModal>
  );
}

function About(props) {
  // modal logic
  const [modalOpen, setModalOpen] = useState(false);
  const [modalPerson, setModalPerson] = useState({})

  function modalHandler(value){
    console.log("value: ", value)
    setModalOpen(value)
  }

  function openModal(person){
    setModalPerson(person)
    modalHandler(true)
  }
  
  function filterTypes(type){
    return membersList.filter((member) => member.type == type)
  }

  const boardList = [
    {name: "Manoj Hello", position: "Board Chair", img: "../images/pictures/bike-1.png", introduction: "Manoj Hello is the Executive Chairman of CognitiveScale and a founding managing director of The Entrepreneurs’ Fund IV, a $100m seed fund focused exclusively on the cognitive computing and machine intelligence market with eight active investments.", biography: "MH Previously, he was IBM’s first general manager of IBM Watson (2011-14), where his team built the world’s first cognitive systems for healthcare, retail, and financial services. He received the IBM Chairman’s award for Watson commercialization and helped with the formation of Watson Business Group in January 2014 with a $1B investment from IBM. Prior to IBM, he successfully founded, scaled, and sold two venture-backed software companies within a five-year span. Webify, an emerging leader in industry-specific SOA middleware, was acquired by IBM in 2006, and Exterprise, a business process collaboration company, was purchased by Commerce One in 2001. Saxena also serves as Chairman for The Federal Reserve Bank of Dallas, San Antonio Branch and the Saxena Family Foundation. Holder of nine software patents. An avid auto racing enthusiast, he has completed track, endurance and auto rally races around the world including 24-day Singapore-Malaysia-Thailand-Burma race, a 19-day Trans-America race, and a 10-day Madrid to Marrakesh race. Saxena holds a masters degree in business administration from Michigan State University, and a masters in management sciences from the Birla Institute of Technology & Science in Pilani, India."},
    {name: "Bob", position: "The Builder", img: "../images/pictures/bike-1.png", introduction: "Bob the builder is the Executive Chairman of CognitiveScale and a founding managing director of The Entrepreneurs’ Fund IV, a $100m seed fund focused exclusively on the cognitive computing and machine intelligence market with eight active investments.", biography: "BB Previously, he was IBM’s first general manager of IBM Watson (2011-14), where his team built the world’s first cognitive systems for healthcare, retail, and financial services. He received the IBM Chairman’s award for Watson commercialization and helped with the formation of Watson Business Group in January 2014 with a $1B investment from IBM. Prior to IBM, he successfully founded, scaled, and sold two venture-backed software companies within a five-year span. Webify, an emerging leader in industry-specific SOA middleware, was acquired by IBM in 2006, and Exterprise, a business process collaboration company, was purchased by Commerce One in 2001. Saxena also serves as Chairman for The Federal Reserve Bank of Dallas, San Antonio Branch and the Saxena Family Foundation. Holder of nine software patents. An avid auto racing enthusiast, he has completed track, endurance and auto rally races around the world including 24-day Singapore-Malaysia-Thailand-Burma race, a 19-day Trans-America race, and a 10-day Madrid to Marrakesh race. Saxena holds a masters degree in business administration from Michigan State University, and a masters in management sciences from the Birla Institute of Technology & Science in Pilani, India."},
    {name: "Manoj Saxena1", position: "Board Chair", img: "../images/pictures/bike-1.png", introduction: "Manoj Saxena is the Executive Chairman of CognitiveScale and a founding managing director of The Entrepreneurs’ Fund IV, a $100m seed fund focused exclusively on the cognitive computing and machine intelligence market with eight active investments.", biography: "Previously, he was IBM’s first general manager of IBM Watson (2011-14), where his team built the world’s first cognitive systems for healthcare, retail, and financial services. He received the IBM Chairman’s award for Watson commercialization and helped with the formation of Watson Business Group in January 2014 with a $1B investment from IBM. Prior to IBM, he successfully founded, scaled, and sold two venture-backed software companies within a five-year span. Webify, an emerging leader in industry-specific SOA middleware, was acquired by IBM in 2006, and Exterprise, a business process collaboration company, was purchased by Commerce One in 2001. Saxena also serves as Chairman for The Federal Reserve Bank of Dallas, San Antonio Branch and the Saxena Family Foundation. Holder of nine software patents. An avid auto racing enthusiast, he has completed track, endurance and auto rally races around the world including 24-day Singapore-Malaysia-Thailand-Burma race, a 19-day Trans-America race, and a 10-day Madrid to Marrakesh race. Saxena holds a masters degree in business administration from Michigan State University, and a masters in management sciences from the Birla Institute of Technology & Science in Pilani, India."},
    {name: "Manoj Saxena2", position: "Board Chair", img: "../images/pictures/bike-1.png", introduction: "Manoj Saxena is the Executive Chairman of CognitiveScale and a founding managing director of The Entrepreneurs’ Fund IV, a $100m seed fund focused exclusively on the cognitive computing and machine intelligence market with eight active investments.", biography: "Previously, he was IBM’s first general manager of IBM Watson (2011-14), where his team built the world’s first cognitive systems for healthcare, retail, and financial services. He received the IBM Chairman’s award for Watson commercialization and helped with the formation of Watson Business Group in January 2014 with a $1B investment from IBM. Prior to IBM, he successfully founded, scaled, and sold two venture-backed software companies within a five-year span. Webify, an emerging leader in industry-specific SOA middleware, was acquired by IBM in 2006, and Exterprise, a business process collaboration company, was purchased by Commerce One in 2001. Saxena also serves as Chairman for The Federal Reserve Bank of Dallas, San Antonio Branch and the Saxena Family Foundation. Holder of nine software patents. An avid auto racing enthusiast, he has completed track, endurance and auto rally races around the world including 24-day Singapore-Malaysia-Thailand-Burma race, a 19-day Trans-America race, and a 10-day Madrid to Marrakesh race. Saxena holds a masters degree in business administration from Michigan State University, and a masters in management sciences from the Birla Institute of Technology & Science in Pilani, India."},
    {name: "Manoj Saxena3", position: "Board Chair", img: "../images/pictures/bike-1.png", introduction: "Manoj Saxena is the Executive Chairman of CognitiveScale and a founding managing director of The Entrepreneurs’ Fund IV, a $100m seed fund focused exclusively on the cognitive computing and machine intelligence market with eight active investments.", biography: "Previously, he was IBM’s first general manager of IBM Watson (2011-14), where his team built the world’s first cognitive systems for healthcare, retail, and financial services. He received the IBM Chairman’s award for Watson commercialization and helped with the formation of Watson Business Group in January 2014 with a $1B investment from IBM. Prior to IBM, he successfully founded, scaled, and sold two venture-backed software companies within a five-year span. Webify, an emerging leader in industry-specific SOA middleware, was acquired by IBM in 2006, and Exterprise, a business process collaboration company, was purchased by Commerce One in 2001. Saxena also serves as Chairman for The Federal Reserve Bank of Dallas, San Antonio Branch and the Saxena Family Foundation. Holder of nine software patents. An avid auto racing enthusiast, he has completed track, endurance and auto rally races around the world including 24-day Singapore-Malaysia-Thailand-Burma race, a 19-day Trans-America race, and a 10-day Madrid to Marrakesh race. Saxena holds a masters degree in business administration from Michigan State University, and a masters in management sciences from the Birla Institute of Technology & Science in Pilani, India."},
    {name: "Manoj Saxena4", position: "Board Chair", img: "../images/pictures/bike-1.png", introduction: "Manoj Saxena is the Executive Chairman of CognitiveScale and a founding managing director of The Entrepreneurs’ Fund IV, a $100m seed fund focused exclusively on the cognitive computing and machine intelligence market with eight active investments.", biography: "Previously, he was IBM’s first general manager of IBM Watson (2011-14), where his team built the world’s first cognitive systems for healthcare, retail, and financial services. He received the IBM Chairman’s award for Watson commercialization and helped with the formation of Watson Business Group in January 2014 with a $1B investment from IBM. Prior to IBM, he successfully founded, scaled, and sold two venture-backed software companies within a five-year span. Webify, an emerging leader in industry-specific SOA middleware, was acquired by IBM in 2006, and Exterprise, a business process collaboration company, was purchased by Commerce One in 2001. Saxena also serves as Chairman for The Federal Reserve Bank of Dallas, San Antonio Branch and the Saxena Family Foundation. Holder of nine software patents. An avid auto racing enthusiast, he has completed track, endurance and auto rally races around the world including 24-day Singapore-Malaysia-Thailand-Burma race, a 19-day Trans-America race, and a 10-day Madrid to Marrakesh race. Saxena holds a masters degree in business administration from Michigan State University, and a masters in management sciences from the Birla Institute of Technology & Science in Pilani, India."},
    {name: "Manoj Saxena5", position: "Board Chair", img: "../images/pictures/bike-1.png", introduction: "Manoj Saxena is the Executive Chairman of CognitiveScale and a founding managing director of The Entrepreneurs’ Fund IV, a $100m seed fund focused exclusively on the cognitive computing and machine intelligence market with eight active investments.", biography: "Previously, he was IBM’s first general manager of IBM Watson (2011-14), where his team built the world’s first cognitive systems for healthcare, retail, and financial services. He received the IBM Chairman’s award for Watson commercialization and helped with the formation of Watson Business Group in January 2014 with a $1B investment from IBM. Prior to IBM, he successfully founded, scaled, and sold two venture-backed software companies within a five-year span. Webify, an emerging leader in industry-specific SOA middleware, was acquired by IBM in 2006, and Exterprise, a business process collaboration company, was purchased by Commerce One in 2001. Saxena also serves as Chairman for The Federal Reserve Bank of Dallas, San Antonio Branch and the Saxena Family Foundation. Holder of nine software patents. An avid auto racing enthusiast, he has completed track, endurance and auto rally races around the world including 24-day Singapore-Malaysia-Thailand-Burma race, a 19-day Trans-America race, and a 10-day Madrid to Marrakesh race. Saxena holds a masters degree in business administration from Michigan State University, and a masters in management sciences from the Birla Institute of Technology & Science in Pilani, India."},
    {name: "Manoj Saxena6", position: "Board Chair", img: "../images/pictures/bike-1.png", introduction: "Manoj Saxena is the Executive Chairman of CognitiveScale and a founding managing director of The Entrepreneurs’ Fund IV, a $100m seed fund focused exclusively on the cognitive computing and machine intelligence market with eight active investments.", biography: "Previously, he was IBM’s first general manager of IBM Watson (2011-14), where his team built the world’s first cognitive systems for healthcare, retail, and financial services. He received the IBM Chairman’s award for Watson commercialization and helped with the formation of Watson Business Group in January 2014 with a $1B investment from IBM. Prior to IBM, he successfully founded, scaled, and sold two venture-backed software companies within a five-year span. Webify, an emerging leader in industry-specific SOA middleware, was acquired by IBM in 2006, and Exterprise, a business process collaboration company, was purchased by Commerce One in 2001. Saxena also serves as Chairman for The Federal Reserve Bank of Dallas, San Antonio Branch and the Saxena Family Foundation. Holder of nine software patents. An avid auto racing enthusiast, he has completed track, endurance and auto rally races around the world including 24-day Singapore-Malaysia-Thailand-Burma race, a 19-day Trans-America race, and a 10-day Madrid to Marrakesh race. Saxena holds a masters degree in business administration from Michigan State University, and a masters in management sciences from the Birla Institute of Technology & Science in Pilani, India."},
    {name: "Manoj Saxena7", position: "Board Chair", img: "../images/pictures/bike-1.png", introduction: "Manoj Saxena is the Executive Chairman of CognitiveScale and a founding managing director of The Entrepreneurs’ Fund IV, a $100m seed fund focused exclusively on the cognitive computing and machine intelligence market with eight active investments.", biography: "Previously, he was IBM’s first general manager of IBM Watson (2011-14), where his team built the world’s first cognitive systems for healthcare, retail, and financial services. He received the IBM Chairman’s award for Watson commercialization and helped with the formation of Watson Business Group in January 2014 with a $1B investment from IBM. Prior to IBM, he successfully founded, scaled, and sold two venture-backed software companies within a five-year span. Webify, an emerging leader in industry-specific SOA middleware, was acquired by IBM in 2006, and Exterprise, a business process collaboration company, was purchased by Commerce One in 2001. Saxena also serves as Chairman for The Federal Reserve Bank of Dallas, San Antonio Branch and the Saxena Family Foundation. Holder of nine software patents. An avid auto racing enthusiast, he has completed track, endurance and auto rally races around the world including 24-day Singapore-Malaysia-Thailand-Burma race, a 19-day Trans-America race, and a 10-day Madrid to Marrakesh race. Saxena holds a masters degree in business administration from Michigan State University, and a masters in management sciences from the Birla Institute of Technology & Science in Pilani, India."},
  ];
  const advisorList = [
    {name: "Manoj Saxena the Advisor", position: "Board Chair", img: "../images/pictures/bike-1.png", introduction: "Manoj Saxena is the Executive Chairman of CognitiveScale and a founding managing director of The Entrepreneurs’ Fund IV, a $100m seed fund focused exclusively on the cognitive computing and machine intelligence market with eight active investments.", biography: "Previously, he was IBM’s first general manager of IBM Watson (2011-14), where his team built the world’s first cognitive systems for healthcare, retail, and financial services. He received the IBM Chairman’s award for Watson commercialization and helped with the formation of Watson Business Group in January 2014 with a $1B investment from IBM. Prior to IBM, he successfully founded, scaled, and sold two venture-backed software companies within a five-year span. Webify, an emerging leader in industry-specific SOA middleware, was acquired by IBM in 2006, and Exterprise, a business process collaboration company, was purchased by Commerce One in 2001. Saxena also serves as Chairman for The Federal Reserve Bank of Dallas, San Antonio Branch and the Saxena Family Foundation. Holder of nine software patents. An avid auto racing enthusiast, he has completed track, endurance and auto rally races around the world including 24-day Singapore-Malaysia-Thailand-Burma race, a 19-day Trans-America race, and a 10-day Madrid to Marrakesh race. Saxena holds a masters degree in business administration from Michigan State University, and a masters in management sciences from the Birla Institute of Technology & Science in Pilani, India."},
    {name: "1Manoj Saxena", position: "Board Chair", img: "../images/pictures/bike-1.png", introduction: "Manoj Saxena is the Executive Chairman of CognitiveScale and a founding managing director of The Entrepreneurs’ Fund IV, a $100m seed fund focused exclusively on the cognitive computing and machine intelligence market with eight active investments.", biography: "Previously, he was IBM’s first general manager of IBM Watson (2011-14), where his team built the world’s first cognitive systems for healthcare, retail, and financial services. He received the IBM Chairman’s award for Watson commercialization and helped with the formation of Watson Business Group in January 2014 with a $1B investment from IBM. Prior to IBM, he successfully founded, scaled, and sold two venture-backed software companies within a five-year span. Webify, an emerging leader in industry-specific SOA middleware, was acquired by IBM in 2006, and Exterprise, a business process collaboration company, was purchased by Commerce One in 2001. Saxena also serves as Chairman for The Federal Reserve Bank of Dallas, San Antonio Branch and the Saxena Family Foundation. Holder of nine software patents. An avid auto racing enthusiast, he has completed track, endurance and auto rally races around the world including 24-day Singapore-Malaysia-Thailand-Burma race, a 19-day Trans-America race, and a 10-day Madrid to Marrakesh race. Saxena holds a masters degree in business administration from Michigan State University, and a masters in management sciences from the Birla Institute of Technology & Science in Pilani, India."},
    {name: "2Manoj Saxena", position: "Board Chair", img: "../images/pictures/bike-1.png", introduction: "Manoj Saxena is the Executive Chairman of CognitiveScale and a founding managing director of The Entrepreneurs’ Fund IV, a $100m seed fund focused exclusively on the cognitive computing and machine intelligence market with eight active investments.", biography: "Previously, he was IBM’s first general manager of IBM Watson (2011-14), where his team built the world’s first cognitive systems for healthcare, retail, and financial services. He received the IBM Chairman’s award for Watson commercialization and helped with the formation of Watson Business Group in January 2014 with a $1B investment from IBM. Prior to IBM, he successfully founded, scaled, and sold two venture-backed software companies within a five-year span. Webify, an emerging leader in industry-specific SOA middleware, was acquired by IBM in 2006, and Exterprise, a business process collaboration company, was purchased by Commerce One in 2001. Saxena also serves as Chairman for The Federal Reserve Bank of Dallas, San Antonio Branch and the Saxena Family Foundation. Holder of nine software patents. An avid auto racing enthusiast, he has completed track, endurance and auto rally races around the world including 24-day Singapore-Malaysia-Thailand-Burma race, a 19-day Trans-America race, and a 10-day Madrid to Marrakesh race. Saxena holds a masters degree in business administration from Michigan State University, and a masters in management sciences from the Birla Institute of Technology & Science in Pilani, India."},
    {name: "3Manoj Saxena", position: "Board Chair", img: "../images/pictures/bike-1.png", introduction: "Manoj Saxena is the Executive Chairman of CognitiveScale and a founding managing director of The Entrepreneurs’ Fund IV, a $100m seed fund focused exclusively on the cognitive computing and machine intelligence market with eight active investments.", biography: "Previously, he was IBM’s first general manager of IBM Watson (2011-14), where his team built the world’s first cognitive systems for healthcare, retail, and financial services. He received the IBM Chairman’s award for Watson commercialization and helped with the formation of Watson Business Group in January 2014 with a $1B investment from IBM. Prior to IBM, he successfully founded, scaled, and sold two venture-backed software companies within a five-year span. Webify, an emerging leader in industry-specific SOA middleware, was acquired by IBM in 2006, and Exterprise, a business process collaboration company, was purchased by Commerce One in 2001. Saxena also serves as Chairman for The Federal Reserve Bank of Dallas, San Antonio Branch and the Saxena Family Foundation. Holder of nine software patents. An avid auto racing enthusiast, he has completed track, endurance and auto rally races around the world including 24-day Singapore-Malaysia-Thailand-Burma race, a 19-day Trans-America race, and a 10-day Madrid to Marrakesh race. Saxena holds a masters degree in business administration from Michigan State University, and a masters in management sciences from the Birla Institute of Technology & Science in Pilani, India."},
    {name: "4Manoj Saxena", position: "Board Chair", img: "../images/pictures/bike-1.png", introduction: "Manoj Saxena is the Executive Chairman of CognitiveScale and a founding managing director of The Entrepreneurs’ Fund IV, a $100m seed fund focused exclusively on the cognitive computing and machine intelligence market with eight active investments.", biography: "Previously, he was IBM’s first general manager of IBM Watson (2011-14), where his team built the world’s first cognitive systems for healthcare, retail, and financial services. He received the IBM Chairman’s award for Watson commercialization and helped with the formation of Watson Business Group in January 2014 with a $1B investment from IBM. Prior to IBM, he successfully founded, scaled, and sold two venture-backed software companies within a five-year span. Webify, an emerging leader in industry-specific SOA middleware, was acquired by IBM in 2006, and Exterprise, a business process collaboration company, was purchased by Commerce One in 2001. Saxena also serves as Chairman for The Federal Reserve Bank of Dallas, San Antonio Branch and the Saxena Family Foundation. Holder of nine software patents. An avid auto racing enthusiast, he has completed track, endurance and auto rally races around the world including 24-day Singapore-Malaysia-Thailand-Burma race, a 19-day Trans-America race, and a 10-day Madrid to Marrakesh race. Saxena holds a masters degree in business administration from Michigan State University, and a masters in management sciences from the Birla Institute of Technology & Science in Pilani, India."},
    {name: "5Manoj Saxena", position: "Board Chair", img: "../images/pictures/bike-1.png", introduction: "Manoj Saxena is the Executive Chairman of CognitiveScale and a founding managing director of The Entrepreneurs’ Fund IV, a $100m seed fund focused exclusively on the cognitive computing and machine intelligence market with eight active investments.", biography: "Previously, he was IBM’s first general manager of IBM Watson (2011-14), where his team built the world’s first cognitive systems for healthcare, retail, and financial services. He received the IBM Chairman’s award for Watson commercialization and helped with the formation of Watson Business Group in January 2014 with a $1B investment from IBM. Prior to IBM, he successfully founded, scaled, and sold two venture-backed software companies within a five-year span. Webify, an emerging leader in industry-specific SOA middleware, was acquired by IBM in 2006, and Exterprise, a business process collaboration company, was purchased by Commerce One in 2001. Saxena also serves as Chairman for The Federal Reserve Bank of Dallas, San Antonio Branch and the Saxena Family Foundation. Holder of nine software patents. An avid auto racing enthusiast, he has completed track, endurance and auto rally races around the world including 24-day Singapore-Malaysia-Thailand-Burma race, a 19-day Trans-America race, and a 10-day Madrid to Marrakesh race. Saxena holds a masters degree in business administration from Michigan State University, and a masters in management sciences from the Birla Institute of Technology & Science in Pilani, India."},
    {name: "6Manoj Saxena", position: "Board Chair", img: "../images/pictures/bike-1.png", introduction: "Manoj Saxena is the Executive Chairman of CognitiveScale and a founding managing director of The Entrepreneurs’ Fund IV, a $100m seed fund focused exclusively on the cognitive computing and machine intelligence market with eight active investments.", biography: "Previously, he was IBM’s first general manager of IBM Watson (2011-14), where his team built the world’s first cognitive systems for healthcare, retail, and financial services. He received the IBM Chairman’s award for Watson commercialization and helped with the formation of Watson Business Group in January 2014 with a $1B investment from IBM. Prior to IBM, he successfully founded, scaled, and sold two venture-backed software companies within a five-year span. Webify, an emerging leader in industry-specific SOA middleware, was acquired by IBM in 2006, and Exterprise, a business process collaboration company, was purchased by Commerce One in 2001. Saxena also serves as Chairman for The Federal Reserve Bank of Dallas, San Antonio Branch and the Saxena Family Foundation. Holder of nine software patents. An avid auto racing enthusiast, he has completed track, endurance and auto rally races around the world including 24-day Singapore-Malaysia-Thailand-Burma race, a 19-day Trans-America race, and a 10-day Madrid to Marrakesh race. Saxena holds a masters degree in business administration from Michigan State University, and a masters in management sciences from the Birla Institute of Technology & Science in Pilani, India."},
    {name: "7Manoj Saxena", position: "Board Chair", img: "../images/pictures/bike-1.png", introduction: "Manoj Saxena is the Executive Chairman of CognitiveScale and a founding managing director of The Entrepreneurs’ Fund IV, a $100m seed fund focused exclusively on the cognitive computing and machine intelligence market with eight active investments.", biography: "Previously, he was IBM’s first general manager of IBM Watson (2011-14), where his team built the world’s first cognitive systems for healthcare, retail, and financial services. He received the IBM Chairman’s award for Watson commercialization and helped with the formation of Watson Business Group in January 2014 with a $1B investment from IBM. Prior to IBM, he successfully founded, scaled, and sold two venture-backed software companies within a five-year span. Webify, an emerging leader in industry-specific SOA middleware, was acquired by IBM in 2006, and Exterprise, a business process collaboration company, was purchased by Commerce One in 2001. Saxena also serves as Chairman for The Federal Reserve Bank of Dallas, San Antonio Branch and the Saxena Family Foundation. Holder of nine software patents. An avid auto racing enthusiast, he has completed track, endurance and auto rally races around the world including 24-day Singapore-Malaysia-Thailand-Burma race, a 19-day Trans-America race, and a 10-day Madrid to Marrakesh race. Saxena holds a masters degree in business administration from Michigan State University, and a masters in management sciences from the Birla Institute of Technology & Science in Pilani, India."},
    {name: "8Manoj Saxena", position: "Board Chair", img: "../images/pictures/bike-1.png", introduction: "Manoj Saxena is the Executive Chairman of CognitiveScale and a founding managing director of The Entrepreneurs’ Fund IV, a $100m seed fund focused exclusively on the cognitive computing and machine intelligence market with eight active investments.", biography: "Previously, he was IBM’s first general manager of IBM Watson (2011-14), where his team built the world’s first cognitive systems for healthcare, retail, and financial services. He received the IBM Chairman’s award for Watson commercialization and helped with the formation of Watson Business Group in January 2014 with a $1B investment from IBM. Prior to IBM, he successfully founded, scaled, and sold two venture-backed software companies within a five-year span. Webify, an emerging leader in industry-specific SOA middleware, was acquired by IBM in 2006, and Exterprise, a business process collaboration company, was purchased by Commerce One in 2001. Saxena also serves as Chairman for The Federal Reserve Bank of Dallas, San Antonio Branch and the Saxena Family Foundation. Holder of nine software patents. An avid auto racing enthusiast, he has completed track, endurance and auto rally races around the world including 24-day Singapore-Malaysia-Thailand-Burma race, a 19-day Trans-America race, and a 10-day Madrid to Marrakesh race. Saxena holds a masters degree in business administration from Michigan State University, and a masters in management sciences from the Birla Institute of Technology & Science in Pilani, India."},
  ];  
  const expertAdvisorList = [
    {name: "Manoj Saxena the Expert", position: "Board Chair", img: "../images/pictures/bike-1.png", introduction: "Manoj Saxena is the Executive Chairman of CognitiveScale and a founding managing director of The Entrepreneurs’ Fund IV, a $100m seed fund focused exclusively on the cognitive computing and machine intelligence market with eight active investments.", biography: "Previously, he was IBM’s first general manager of IBM Watson (2011-14), where his team built the world’s first cognitive systems for healthcare, retail, and financial services. He received the IBM Chairman’s award for Watson commercialization and helped with the formation of Watson Business Group in January 2014 with a $1B investment from IBM. Prior to IBM, he successfully founded, scaled, and sold two venture-backed software companies within a five-year span. Webify, an emerging leader in industry-specific SOA middleware, was acquired by IBM in 2006, and Exterprise, a business process collaboration company, was purchased by Commerce One in 2001. Saxena also serves as Chairman for The Federal Reserve Bank of Dallas, San Antonio Branch and the Saxena Family Foundation. Holder of nine software patents. An avid auto racing enthusiast, he has completed track, endurance and auto rally races around the world including 24-day Singapore-Malaysia-Thailand-Burma race, a 19-day Trans-America race, and a 10-day Madrid to Marrakesh race. Saxena holds a masters degree in business administration from Michigan State University, and a masters in management sciences from the Birla Institute of Technology & Science in Pilani, India."},
    {name: "1Manoj Saxena", position: "Board Chair", img: "../images/pictures/bike-1.png", introduction: "Manoj Saxena is the Executive Chairman of CognitiveScale and a founding managing director of The Entrepreneurs’ Fund IV, a $100m seed fund focused exclusively on the cognitive computing and machine intelligence market with eight active investments.", biography: "Previously, he was IBM’s first general manager of IBM Watson (2011-14), where his team built the world’s first cognitive systems for healthcare, retail, and financial services. He received the IBM Chairman’s award for Watson commercialization and helped with the formation of Watson Business Group in January 2014 with a $1B investment from IBM. Prior to IBM, he successfully founded, scaled, and sold two venture-backed software companies within a five-year span. Webify, an emerging leader in industry-specific SOA middleware, was acquired by IBM in 2006, and Exterprise, a business process collaboration company, was purchased by Commerce One in 2001. Saxena also serves as Chairman for The Federal Reserve Bank of Dallas, San Antonio Branch and the Saxena Family Foundation. Holder of nine software patents. An avid auto racing enthusiast, he has completed track, endurance and auto rally races around the world including 24-day Singapore-Malaysia-Thailand-Burma race, a 19-day Trans-America race, and a 10-day Madrid to Marrakesh race. Saxena holds a masters degree in business administration from Michigan State University, and a masters in management sciences from the Birla Institute of Technology & Science in Pilani, India."},
  ];  
  const leadershipList = [
    {name: "Manoj Saxena the Leader", position: "Board Chair", img: "../images/pictures/bike-1.png", introduction: "Manoj Saxena is the Executive Chairman of CognitiveScale and a founding managing director of The Entrepreneurs’ Fund IV, a $100m seed fund focused exclusively on the cognitive computing and machine intelligence market with eight active investments.", biography: "Previously, he was IBM’s first general manager of IBM Watson (2011-14), where his team built the world’s first cognitive systems for healthcare, retail, and financial services. He received the IBM Chairman’s award for Watson commercialization and helped with the formation of Watson Business Group in January 2014 with a $1B investment from IBM. Prior to IBM, he successfully founded, scaled, and sold two venture-backed software companies within a five-year span. Webify, an emerging leader in industry-specific SOA middleware, was acquired by IBM in 2006, and Exterprise, a business process collaboration company, was purchased by Commerce One in 2001. Saxena also serves as Chairman for The Federal Reserve Bank of Dallas, San Antonio Branch and the Saxena Family Foundation. Holder of nine software patents. An avid auto racing enthusiast, he has completed track, endurance and auto rally races around the world including 24-day Singapore-Malaysia-Thailand-Burma race, a 19-day Trans-America race, and a 10-day Madrid to Marrakesh race. Saxena holds a masters degree in business administration from Michigan State University, and a masters in management sciences from the Birla Institute of Technology & Science in Pilani, India."},
    {name: "1Manoj Saxena", position: "Board Chair", img: "../images/pictures/bike-1.png", introduction: "Manoj Saxena is the Executive Chairman of CognitiveScale and a founding managing director of The Entrepreneurs’ Fund IV, a $100m seed fund focused exclusively on the cognitive computing and machine intelligence market with eight active investments.", biography: "Previously, he was IBM’s first general manager of IBM Watson (2011-14), where his team built the world’s first cognitive systems for healthcare, retail, and financial services. He received the IBM Chairman’s award for Watson commercialization and helped with the formation of Watson Business Group in January 2014 with a $1B investment from IBM. Prior to IBM, he successfully founded, scaled, and sold two venture-backed software companies within a five-year span. Webify, an emerging leader in industry-specific SOA middleware, was acquired by IBM in 2006, and Exterprise, a business process collaboration company, was purchased by Commerce One in 2001. Saxena also serves as Chairman for The Federal Reserve Bank of Dallas, San Antonio Branch and the Saxena Family Foundation. Holder of nine software patents. An avid auto racing enthusiast, he has completed track, endurance and auto rally races around the world including 24-day Singapore-Malaysia-Thailand-Burma race, a 19-day Trans-America race, and a 10-day Madrid to Marrakesh race. Saxena holds a masters degree in business administration from Michigan State University, and a masters in management sciences from the Birla Institute of Technology & Science in Pilani, India."},
  ];  
  const membersList = [{src: "algora.png", type: "gc"}, {src: "argo-design.png", type: "tsp"},{src: "algora.png", type: "gngo"}, {src: "argo-design.png", type: "ua"},{src: "algora.png", type: "gc"}, {src: "argo-design.png", type:"gs"},{src: "algora.png", type: "gc"}, {src: "argo-design.png", type: "n"},{src: "algora.png"}, {src: "argo-design.png"}]

  return (
    <Layout title="About RAIL">
      <Jumbotron>
        <JumboText>
          <Headline1>About RAI</Headline1>
          <MediumBody>
            AI Global is a non-profit organization building tangible governance
            tools for trustworthy, safe, and fair Artificial Intelligence (AI).
            Through a first-of-its-kind certification system that qualifies AI
            systems, we support practitioners as they navigate the complex
            landscape of creating Responsible AI. <br /> Feedback generated from
            these systems will in turn inform AI policymakers, enabling
            technologies that improve the social and economic well-being of
            society. AI Global brings extensive experience in responsible AI
            policy and is uniquely positioned to partner with organizations
            across public and private sectors to guide and inform responsible AI
            governance around the world.
          </MediumBody>
        </JumboText>
        {/* <JumboImage className="hero-image">
          <StaticImage
            src="../images/pictures/about/jumboforeground.png"
            style={{
              position: "absolute",
              zIndex: "4",
              right: "0",
              top: "180px",
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
              top: "180px",
            }}
            width={1177}
            height={618}
            alt="jumbo background"
          />
        </JumboImage> */}
      </Jumbotron>
      <Row style={{backgroundColor: "#f6f6f6", paddingBottom: 0}}>
          <Headline2>
            Governance Board
          </Headline2>
          <AboutPeopleGrid>
            {
              boardList.map((board) => {
                return (
                  <>
                    <PersonContainer onClick={() => openModal(board)}> 
                      <img
                        src={board.img}
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
                  </>
              );
              })
            }
          </AboutPeopleGrid>
        </Row>
        <Row style={{backgroundColor: "#f6f6f6", paddingBottom: 0}}>
          <Headline2>
            Advisors
          </Headline2>
          <AboutPeopleGrid>
            {
              advisorList.map((advisor) => {
                return (
                  <>
                    <PersonContainer onClick={() => openModal(advisor)}> 
                      <img
                        src={advisor.img}
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
                  </>
              );
              })
            }
          </AboutPeopleGrid>
        </Row>
        <Row style={{backgroundColor: "#f6f6f6", paddingBottom: 0}}>
          <Headline2>
            Expert Advisors
          </Headline2>
          <AboutPeopleGrid>
            {
              expertAdvisorList.map((expertAdvisor) => {
                return (
                  <>
                    <PersonContainer onClick={() => openModal(expertAdvisor)}> 
                      <img
                        src={expertAdvisor.img}
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
                        {expertAdvisor.name}
                      </PersonName>
                      <PersonPosition>
                        {expertAdvisor.position}
                      </PersonPosition>
                    </PersonContainer>
                  </>
              );
              })
            }
          </AboutPeopleGrid>
        </Row>
        <Row style={{backgroundColor: "#f6f6f6"}}>
          <Headline2>
            Leadership
          </Headline2>
          <AboutPeopleGrid>
            {
              leadershipList.map((leadership) => {
                return (
                  <>
                    <PersonContainer onClick={() => openModal(leadership)}> 
                      <img
                        src={leadership.img}
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
                        {leadership.name}
                      </PersonName>
                      <PersonPosition>
                        {leadership.position}
                      </PersonPosition>
                    </PersonContainer>
                  </>
              );
              })
            }
          </AboutPeopleGrid>
          <BiographyModal
            isOpen={modalOpen}
            onRequestClose={() => modalHandler(false)}
            handler={modalHandler}
            person={modalPerson}
          >
          </BiographyModal>
        </Row>
      <Row>
        <MembersHeader>
          <MembersHeadline>
            Members
          </MembersHeadline>
        </MembersHeader>
        <Headline4>Global Corporations</Headline4>
        <MembersGrid>
          {
            filterTypes("gc").map((partner) => {
                return (
                  <MemberImgContainer>
                    <MemberImg 
                      src={"../../partner-logos/" + partner.src}
                    >
                    </MemberImg>
                  </MemberImgContainer>
                );
          })}
        </MembersGrid>
        <Headline4>Tech and Service Providers</Headline4>
        <MembersGrid>
          {
            filterTypes("tsp").map((partner) => {
                return (
                  <MemberImgContainer>
                    <MemberImg 
                      src={"../../partner-logos/" + partner.src}
                    >
                    </MemberImg>
                  </MemberImgContainer>
                );
          })}
        </MembersGrid>
        <Headline4>Government and NGOs</Headline4>
        <MembersGrid>
          {
            filterTypes("gngo").map((partner) => {
                return (
                  <MemberImgContainer>
                    <MemberImg 
                      src={"../../partner-logos/" + partner.src}
                    >
                    </MemberImg>
                  </MemberImgContainer>
                );
          })}
        </MembersGrid>
        <Headline4>Universities and Academia</Headline4>
        <MembersGrid>
          {
            filterTypes("ua").map((partner) => {
                return (
                  <MemberImgContainer>
                    <MemberImg 
                      src={"../../partner-logos/" + partner.src}
                    >
                    </MemberImg>
                  </MemberImgContainer>
                );
          })}
        </MembersGrid>
      </Row>
      <Row style={{backgroundColor: "#f6f6f6"}}>
        <FellowshipDescription>
          <Headline4>Responsible AI Fellowship Program invites multidisciplinary teams of students and professionals to tackle real-world challenges.</Headline4>
          <MediumBody>This program will support multidisciplinary teams of students and professionals selected from various universities and businesses to work on real-world responsible AI challenges and opportunities. Projects are sourced from AI Global Members and external clients who play an important role in structuring project deliverables. Fellows work with domain experts in AI, data science, human-centric design, law, and regulatory policy. Fellows receive training in research skills and data collection, analysis, and presentation to deliver a work product that meets client needs.
            <br/><br/>
            <StyledLink text="Get Started" link="/fellowship" />
          </MediumBody>
        </FellowshipDescription>
      </Row>
      <Row
        dark
        style={{
          margin: "120px 115px",
          textAlign: "center",
          alignItems: "center"
        }}
      >
        <Headline2 style={{ color: "white" }}>Get Involved</Headline2>
        <LargeBody
          style={{
            color: "white",
            marginBottom: "50px",
          }}
        >
          For more information, please email us at certification@ai-global.org,
          or <strong>sign up</strong> to
          <br /> become a member of AI Global. You can also join our mailing
          list to stay informed on the progress.
        </LargeBody>

        <PrimaryBtn onClick={() => navigate("/membership")}>
          Become a Member{" "}
        </PrimaryBtn>
      </Row>
      <Row gray>
        <TitleLink>
          <Headline2>
            News
          </Headline2>
          <StyledLink text="More News" link="/news" />
        </TitleLink>
        <News/>
      </Row>
    </Layout>
  );
}

export default About;