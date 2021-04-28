import React, { useState } from "react";
import styled from "styled-components";
import {  StaticImage } from "gatsby-plugin-image";
import Layout from "components/Layout";
import {
  Headline1,
  MediumBody,
  Headline2,
  Headline4,
} from "../components/Text";
import {
  Jumbotron,
  JumboText,
  Row,
  TitleLink,
  JumboImage,
  Divider,
  Grid,
  GridRow,
  GridContainer,
} from "../components/Blocks";
import StyledLink from "../components/StyledLink";
import News from "../components/News";
import Modal from "react-modal";
import close from "../images/icons/exit.png";
import GetInvolved from "../components/GetInvolved";

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
  );
}

const StyledBiographyModal = styled(ReactModalAdapter)`
  &__overlay {
    z-index: 100;
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: rgba(245, 245, 245, 0.9);
  }
  &__content {
    width: "100%";
    height: "100%";
    position: absolute;
    top: 8vw;
    left: 10vw;
    right: 10vw;
    bottom: 8vw;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    border-radius: 4px;
    outline: none;
    background: rgb(246, 246, 246);
    display: flex;
    flex-direction: column;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
`;

const ModalHeader = styled.div`
  position: sticky;
  top: 0;
  display: grid;
  grid-template-columns: min-content auto min-content;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "personImage personName close"
    "personImage personPosition .";
  height: 30%;
  width: 100%;
  background-color: white;
  border-bottom: 2px solid #2f2d34;
  padding: 40px;
  box-sizing: border-box;
`;

const ModalPersonImg = styled.img`
  max-width: 90px;
  width: 90px;
  grid-area: personImage;
  border-radius: 50%;
  border: 1px solid black;
  align-self: center;
  margin-right: 20px;
`;

const ModalPersonName = styled.div`
  font-family: Libre Caslon Text;
  font-style: normal;
  font-weight: bold;
  font-size: 32x;
  line-height: 40px;
  letter-spacing: -0.02em;
  margin: 0px 0px 20px 0px;
  @media screen and (max-width: 600px) {
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.02em;
  }
  grid-area: personName;
  align-self: flex-end;
  margin: 0;
`;

const ModalPersonPosition = styled(MediumBody)`
  grid-area: personPosition;
  align-self: flex-start;
`;

const ModalClose = styled.button`
  grid-area: close;
  flex: 1;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: white;
  :hover {
    opacity: 0.6;
  }
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
`;

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
`;

const PersonContainer = styled.div`
  display: grid;
  width: fit-content;
  white-space: nowrap;
  grid-template-columns: fit-content auto;
  grid-template-rows: min-content min-content;
  grid-template-areas:
    "personImage personName"
    "personImage personPosition";
  align-items: center;
  cursor: pointer;
  :hover {
    opacity: 0.6;
  }
`;

const PersonName = styled(Headline4)`
  grid-area: personName;
  margin: 0 0 0 10px;
`;

const PersonPosition = styled(MediumBody)`
  grid-area: personPosition;
  margin: 0 0 0 10px;
`;

const MembersHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;
const MembersHeadline = styled(Headline2)`
  width: min-content;
  margin-right: auto;
`;

const FellowshipDescription = styled.div`
  padding: 10px;
  flex: 1;
  text-align: left;
  margin: 3px;
`;

function BiographyModal(props) {
  return (
    <StyledBiographyModal
      isOpen={props.isOpen}
      onRequestClose={() => props.handler(false)}
    >
      <ModalHeader>
        {/* <ModalPersonImg src={props.person.img}></ModalPersonImg> */}
        <ModalPersonName style={{fontSize: "32px"}}>{props.person.name}</ModalPersonName>
        <ModalPersonPosition>{props.person.position}</ModalPersonPosition>
        <ModalClose onClick={() => props.handler(false)}>
          <img src={close} alt="close"></img>
        </ModalClose>
      </ModalHeader>
      <ModalContent>
        <MediumBody>
          <strong>{props.person.introduction}</strong>
        </MediumBody>
        <br />
        <MediumBody>{props.person.biography}</MediumBody>
      </ModalContent>
    </StyledBiographyModal>
  );
}

function About(props) {
  // modal logic
  const [modalOpen, setModalOpen] = useState(false);
  const [modalPerson, setModalPerson] = useState({});

  function modalHandler(value) {
    console.log("value: ", value);
    setModalOpen(value);
  }

  function openModal(person) {
    setModalPerson(person);
    modalHandler(true);
  }

  return (
    <Layout title="About">
      <Jumbotron>
        <JumboText>
          <Headline1>About RAI</Headline1>
          <MediumBody>
            RAI is a non-profit organization building tangible <br /> governance
            tools for trustworthy, safe, and fair Artificial <br />
            Intelligence (AI). Through a first-of-its-kind certification system
            <br />
            that qualifies AI systems, we support practitioners as they
            <br /> navigate the complex landscape of creating Responsible AI.
            <br />
            <br />
            Feedback generated from these systems will in turn inform AI
            <br />
            policymakers, enabling technologies that improve the social <br />
            and economic well-being of society. RAI brings extensive
            <br />
            experience in responsible AI policy and is uniquely positioned to
            <br />
            partner with organizations across public and private sectors to
            <br />
            guide and inform responsible AI governance around the world.
          </MediumBody>
          <br />
        </JumboText>
        <JumboImage className="hero-image">
          <StaticImage
            src="../images/pictures/about/about-1.png"
            style={{
              position: "absolute",
              zIndex: "2",
              left: "25px",
              top: "115px",
            }}
            width={1494}
            height={718}
            alt="bike-1"
            placeholder="tracedSVG"
          />
          <StaticImage
            src="../images/pictures/about/about-2.png"
            style={{
              position: "absolute",
              zIndex: "1",
              left: "-37px",
              top: "129px",
            }}
            width={1494}
            height={717}
            alt="patient-3"
            placeholder="tracedSVG"
          />
        </JumboImage>
      </Jumbotron>
      <Row style={{ backgroundColor: "#f6f6f6", paddingBottom: 0 }}>
        <Headline2>Governance Board</Headline2>
        <Divider />
        <AboutPeopleGrid>
          <PersonContainer
            onClick={() =>
              openModal({
                name: "Manoj Saxena",
                position: "Board Chair",
                img: "../images/pictures/bike-1.png",
                introduction:
                  "Executive Chairman, CognitiveScale; MD, The Entrepreneurs’ Fund; Chairman, Federal Reserve Bank of Dallas/San Antonio; Former General Manager, IBM Watson.",
                biography:
                  "Manoj Saxena is the Executive Chairman of CognitiveScale and a founding managing director of The Entrepreneurs’ Fund IV, a $100m seed fund focused exclusively on the cognitive computing and machine intelligence market with eight active investments. Previously, he was IBM’s first general manager of IBM Watson (2011-14), where his team built the world’s first cognitive systems for healthcare, retail, and financial services. He received the IBM Chairman’s award for Watson commercialization and helped with the formation of Watson Business Group in January 2014 with a $1B investment from IBM. Prior to IBM, he successfully founded, scaled, and sold two venture-backed software companies within a five-year span. Webify, an emerging leader in industry-specific SOA middleware, was acquired by IBM in 2006, and Exterprise, a business process collaboration company, was purchased by Commerce One in 2001. Saxena also serves as Chairman for The Federal Reserve Bank of Dallas, San Antonio Branch and the Saxena Family Foundation. Holder of nine software patents. An avid auto racing enthusiast, he has completed track, endurance and auto rally races around the world including 24-day Singapore-Malaysia-Thailand-Burma race, a 19-day Trans-America race, and a 10-day Madrid to Marrakesh race. Saxena holds a masters degree in business administration from Michigan State University, and a masters in management sciences from the Birla Institute of Technology & Science in Pilani, India.",
              })
            }
          >
            <StaticImage
              src="../images/people/manoj.png"
              alt="Manoj Saxena"
              quality={100}
              height={84}
              width={84}
            />
            <PersonName>Manoj Saxena</PersonName>
            <PersonPosition>Board Chair</PersonPosition>
          </PersonContainer>
          <PersonContainer
            onClick={() =>
              openModal({
                name: "Matt Sanchez",
                position: "Board Member",
                img: "../images/pictures/bike-1.png",
                introduction: "Founder and Chief Technology Officer",
                biography:
                  "Matt Sanchez is a serial entrepreneur, innovator, and technology leader.  As the Founder and Chief Technology Officer at CognitiveScale he leads products and technology including the award-winning Cortex platform. Matt is focused on changing the way AI works - from being just an opaque set of algorithms to becoming a safe, transparent, and trusted augmented intelligence that enhances human potential and creates measurable business outcomes.  As the technology visionary for the company, he has led the development of the world's 4th largest AI patent portfolio and has helped clients realize the business value of Trusted AI across financial services, healthcare, and digital commerce industries. Before founding CognitiveScale, Matt was the leader of IBM Watson Labs and led the development of IBM Watson powered solutions in the financial services and healthcare industries. Before joining IBM, Matt was Chief Architect and employee #3 at Webify, which was acquired by IBM in 2006. Matt earned his BS degree in Computer Science from the University of Texas at Austin in 2000.",
              })
            }
          >
            <StaticImage
              src="../images/people/matt.png"
              alt="Matt Sanchez"
              quality={100}
              height={84}
              width={84}
            />
            <PersonName>Matt Sanchez</PersonName>
            <PersonPosition>Board Member</PersonPosition>
          </PersonContainer>
          <PersonContainer
            onClick={() =>
              openModal({
                name: "Miram Vogel",
                position: "Board Member",
                img: "../images/pictures/bike-1.png",
                introduction: "President and CEO of EqualAI",
                biography:
                  "Miriam is the President and CEO of EqualAI, a non-profit that was created to address and reduce unconscious bias in artificial intelligence (AI).  Miriam is also a Senior Advisor to WestExec Advisors and teaches Technology Law and Policy at Georgetown University Law Center.Previously, Miriam served in U.S. government leadership, including positions in the three branches of federal government. Most recently, she served as Associate Deputy Attorney General, where she advised the Attorney General and the Deputy Attorney General (DAG) on a broad range of legal, policy and operational issues. Under the direction of DAG Sally Yates, Miriam led the creation and development of the Implicit Bias Training for Federal Law Enforcement. Miriam also spearheaded the Department’s Intellectual Property (IP) efforts to identify and dismantle IP theft domestically and internationally and worked with the DAG to manage Department divisions’ multibillion-dollar budgets, resolve high-level challenges, and represent the Department in briefings for White House, Congressional and GAO staff on policy initiatives and oversight matters. Miriam served in the White House in two Administrations, most recently as the Acting Director of Justice and Regulatory Affairs. She led the President's Equal Pay Task Force to promote equality in the workplace. She also advised White House leadership on regulatory, women, economic, food safety and LGBT policy and a wide array of criminal justice matters. Prior to serving in the Obama administration, Miriam was Associate General Counsel at Dana-Farber Cancer Institute and practiced entertainment/corporate transactional law at Sheppard Mullin in Los Angeles. Miriam began her legal career as a federal clerk in Denver, Colorado after graduating from Georgetown University Law Center and is a third generation alumna from the University of Michigan.  She currently resides in Chevy Chase, MD with her husband and two daughters. ",
              })
            }
          >
            <StaticImage
              src="../images/people/miram.png"
              alt="Miram Vogel"
              quality={100}
              height={84}
              width={84}
            />
            <PersonName>Miram Vogel</PersonName>
            <PersonPosition>Board Member</PersonPosition>
          </PersonContainer>
          <PersonContainer
            onClick={() =>
              openModal({
                name: "Michael E. Stewart",
                position: "Board Member",
                img: "../images/pictures/bike-1.png",
                introduction: "Founder, Chairmen, and CEO of Lucid.AI",
                biography:
                  "Founding Visionary of AIAustin, Michael has been an Austin-based AI entrepreneur and technology innovator for almost 30 years. During that time, he witnessed the critical importance played by public/private structures like MCC, Sematech, and others in fostering the right climate and support infrastructures in Austin for the growth of leading-edge technologies here. Working with and alongside those organizations helped shape Michael’s Founding-vision behind creating “AI-Austin” to help make the incredible city of Austin, TX the epicenter of Artificial Intelligence globally.• As far back as the late 1980’s, Michael served as a principal systems design specialist for the U.S. and other national governments, pioneering systems integration strategies and scaled architectures of next-generation knowledge computing and autonomous software agent systems, starting with one of his earlier companies and its work with the MCC Research Consortium in Austin and other organizations globally. Over the ensuing years, Michael has been leading the creation of innovative integrations of web-based and AI-related technologies in Austin and around the world, and is now the Chairman/CEO and Founder of Austin-based Lucid Holdings, Inc. In addition to its successful deployments of AI solutions for global clients, Lucid was the first AI company in the world to create a public-facing Ethics Advisory Panel (EAP) comprised of renowned thought-leaders. Lucid’s deep ethical perspective and knowledge in the intersections of AI with such issues has led to collaborations and work with many national and uber-national governmental entities, academics, non-profits, and other global organizations in leading this incredibly important challenge.",
              })
            }
          >
            <StaticImage
              src="../images/people/michael.png"
              alt="Michael E. Stewart"
              quality={100}
              height={84}
              width={84}
            />
            <PersonName>Michael E. Stewart</PersonName>
            <PersonPosition>Board Member</PersonPosition>
          </PersonContainer>
          <PersonContainer
            onClick={() =>
              openModal({
                name: "Dr. Joydeep Ghosh",
                position: "Board Member",
                img: "../images/pictures/bike-1.png",
                introduction: "Chief Scientific Officer, Cognitive Scale",
                biography:
                  "Dr. Joydeep Ghosh (PhD ’88) is the Chief Scientific Officer at CognitiveScale, responsible for shaping corporate vision, influencing technology strategy, overseeing algorithmic science, and positioning the company for growth in the coming months and years. Dr. Ghosh is also the Schlumberger Centennial Chair Professor at the University of Texas (UT), Austin with appointments across multiple colleges involved in the theory, design and application of AI-related technologies and systems. He is the founder-director of UT-MINDS, considered among the top academic groups worldwide researching full-stack Machine Intelligence and Decision Systems. Dr. Ghosh has authored over 500 peer-reviewed publications related to data and knowledge driven insights, won 16 Best Paper awards, chaired or keynoted at top data mining and machine learning conferences, and led numerous successful projects for industry and government over the past 30 years.",
              })
            }
          >
            <StaticImage
              src="../images/people/joydeep.png"
              alt="Dr. Joydeep Ghosh"
              quality={100}
            />
            <PersonName>Dr. Joydeep Ghosh</PersonName>
            <PersonPosition>Board Member</PersonPosition>
          </PersonContainer>
        </AboutPeopleGrid>
      </Row>
      <Row style={{ backgroundColor: "#f6f6f6", paddingBottom: 0 }}>
        <Headline2>Advisors</Headline2>
        <Divider />
        <AboutPeopleGrid>
          <PersonContainer
            onClick={() =>
              openModal({
                name: "Rajeev Ronanki",
                position: "Advisor",
                img: "../images/pictures/bike-1.png",
                introduction:
                  "Senior Vice President, Chief Digital Officer at Anthem, Inc.",
                biography:
                  "Rajeev Ronanki serves as Senior Vice President, Chief Digital Officer at Anthem, Inc. He is leading the transformation of Anthem to become a digital/AI-first enterprise through driving the vision, strategy, and execution of Anthem’s Digital, Artificial Intelligence (AI), Exponential Technology, and Innovation Portfolios. Through these efforts, Ronanki is enabling Anthem to harness the power of AI and data to better understand healthcare consumers and provide tailored, personalized care. His experience spans over 20 years of innovation-driven industry and social change across healthcare and technology. Prior to joining Anthem, Ronanki was a Partner at Deloitte Consulting, LLC where he established and led Deloitte’s Life Sciences and Healthcare Advanced Analytics, Artificial Intelligence, and Innovation practices. Additionally, he was instrumental in shaping Deloitte’s blockchain and cryptocurrency solutions and authored pieces on various exponential technology topics. Ronanki also led Deloitte’s strategic partnerships across a wide range of innovation programs, such as doc.ai, Singularity University, Exponential Conference Series, and MIT Media Labs, that seek to evangelize disruptive technologies like artificial intelligence, blockchain, and precision medicine. Ronanki obtained a Bachelor’s Degree in Mechanical Engineering from Osmania University in India and a Master’s Degree in Computer Science from the University of Pennsylvania.",
              })
            }
          >
            <StaticImage
              src="../images/people/rajeev.png"
              alt="Rajeev Ronanki"
              quality={100}
              height={84}
              width={84}
            />{" "}
            <PersonName>Rajeev Ronanki</PersonName>
            <PersonPosition>Advisor</PersonPosition>
          </PersonContainer>
          <PersonContainer
            onClick={() =>
              openModal({
                name: "Suraj Madnani",
                position: "Advisor",
                img: "../images/pictures/bike-1.png",
                introduction:
                  "Product and Technology Executive, American Express",
                biography:
                  "Suraj Madnani is a product and technology executive at American Express driving innovation and digital transformation. Currently, Suraj is the VP/Head of the Risk Products. In this role, he serves as the Chief Product Owner of risk products and platforms and is responsible their strategy and development. These platforms leverage cutting-edge technology and artificial intelligence and have helped transform the culture of risk management. Under Suraj’s leadership, the team has won awards in innovation and filed several patents. He is also a speaker on transformational AI. Prior to this role, Suraj was the Director of product development and engineering responsible for building American Express’ Commercial Lending Platform, the foundation for business loan products. He launched Merchant Financing, the company’s first off-card product and Working Capital Terms, a patented payments and loan solution. Both products were American Express’ top priorities and accounted for new revenue streams. Before joining American Express, Suraj spent 11 years at IBM in roles of increasing responsibility in strategy and technology consulting and served Fortune 100 clients. At the end of his tenure with IBM, he was a Program Director and General Manager responsible for delivery of turnkey initiatives, a multimillion dollar P&L and management of a global team. Suraj started his career with GE where he worked as a software engineer and then worked briefly at a boutique software product company as a team lead before joining IBM. Suraj has a bachelor’s degree in Electrical Engineering from the University of Pune, India and an MBA from the Kellogg School of Management at Northwestern University. ",
              })
            }
          >
            <StaticImage
              src="../images/people/suraj.png"
              alt="Suraj Madnani"
              quality={100}
              height={84}
              width={84}
            />{" "}
            <PersonName>Suraj Madnani</PersonName>
            <PersonPosition>Advisor</PersonPosition>
          </PersonContainer>
          <PersonContainer
            onClick={() =>
              openModal({
                name: "Dr. Bhatt Vadlamani",
                position: "Advisor",
                img: "../images/pictures/bike-1.png",
                introduction:
                  "VP of Enterprise Architecture, Jackson Enterprise Technologies",
                biography:
                  "Dr. Bhatt Vadlamani is serving as VP of Enterprise Architecture at Jackson Enterprise Technologies, the U.S. based technology arm of the global insurance giant, Prudential Plc. In that capacity, he drives the Business Process Engineering Center of Excellence and the AI Center of Excellence that deliver data-driven insights to business teams at the speed of business to succeed in its digital ecosystem. Dr. Vadlamani served as a Member of the G-20/B-20 Digitalization Task Forces during 2017-2018 as a subject matter expert on Digital Economy and holds a US Patent on Gamification of Analytics for digital marketing. He is a Certified ITIL V3 Expert in operationalizing digital technologies. He has over three decades of experience in orchestrating Digital Transformations in large enterprises including Sun Microsystems, eBay, Disney, and Blue Shield of California by delivering innovative services including Digital Health, Cloud Platforms, High Performance Computing, Digital Analytics, and Digital Twin Organization to govern the deployment of digital products and AI models in global enterprises in ethical manner. He has published in scholarly journals including Strategic Management Journal and International Journal of Technology Management. He did his Ph.D. in Strategic Management and M.S. in Analytics from Stern School of Business at New York University, M.B.A. in Strategic Management from Indian Institute of Management at Ahmedabad, and B.S. in Computer Science from Indian Institute of Technology at Delhi.",
              })
            }
          >
            <StaticImage
              src="../images/people/bhatt.png"
              alt="Dr. Bhatt Vadlamani"
              quality={100}
            />{" "}
            <PersonName>Dr. Bhatt Vadlamani</PersonName>
            <PersonPosition>Advisor</PersonPosition>
          </PersonContainer>
          <PersonContainer
            onClick={() =>
              openModal({
                name: "Gavin Munroe",
                position: "Advisor",
                img: "../images/pictures/bike-1.png",
                introduction:
                  "Global Chief Information officer (CIO) for Retail Banking and Wealth Management (RBWM), HSBC",
                biography:
                  "Gavin Munroe is the HSBC Global Chief Information officer (CIO) for Retail Banking and Wealth Management (RBWM) overseeing all Technology aspects of RBWM globally across all markets. As the CIO for RBWM he works in close partnership with the different business lines of Retail Banking, Wealth Management, Insurance and Asset Management to deliver sustainable solutions that balance cost, risk and regulatory demands, while driving the digital transformation journey with the ability to rapidly innovate within RBWM. Gavin has a proven track record of delivering technology solutions at global scale, managing and building global teams, and leading large transformation programs aligned to business goals and strategies. Based in London at HSBC’s global headquarters in Canary Wharf, Gavin has more than 20 years of the financial industry experience. He joined HSBC in November 2018 from Merrill Lynch/Bank of America where he was the Machine Learning (ML) CIO accountable for driving the digitization of ML technology. At Bank of America / Merrill Lynch he held a number of senior roles, most notability head of global consumer products (card, deposit, mortgage) and CIO for Wealth Management Technology teams. He oversaw the transformation of the wealth function, digitizing and modernizing its capability to drive growth. Prior to that, he worked for Synechron as MD of Asia Pac, a specialist provider of business technology solutions for capital markets, insurance and mortgage banking, leading their expansion into Asia Pacific. he also held the positions of CIO Saxon, a subsidiary of Morgan Stanley and Head of Technology for the West Coast USA for Wachovia. Gavin graduated at the University of Port Elizabeth, South Africa and has a Bachelor of Science Degree, with dual majors in both Computer Science and Physics.",
              })
            }
          >
            <StaticImage
              src="../images/people/gavin.png"
              alt="Gavin Munroe"
              quality={100}
              height={84}
              width={84}
            />{" "}
            <PersonName>Gavin Munroe</PersonName>
            <PersonPosition>Advisor</PersonPosition>
          </PersonContainer>
          <PersonContainer
            onClick={() =>
              openModal({
                name: "Cameron Davies",
                position: "Advisor",
                img: "../images/pictures/bike-1.png",
                introduction: "SVP Corporate Decisions Sciences, NBCUniversal",
                biography:
                  "Cameron Davies is the SVP, Corporate Decisions Sciences for NBCUniversal responsible for the overall development and execution of the NBCU data and advanced analytics strategies designed to further NBCU priorities and support evolving business models. This includes areas such as defining and leading the overall NBCU Data Strategy, Forecasting, Content Efficacy, Pricing and Yield Management, Machine Learning, and advanced AI practices. Prior to joining NBCUniversal in 2013, Cameron spent over 18 years at Disney developing and leading advanced analytical teams for a variety of business areas including Disney Parks and Resorts, Media Networks, Walt Disney Studios, Disney Interactive, and Disney Consumer Products. His final role was Sr. Director and GM, Management Science and Integration, leading the internal COE for Advanced Analytics. In this role he worked closely with executives across the enterprise to deliver advanced analytics tools to drive business priorities. Prior to joining Disney he spent time as a Professor of Business/Finance for Pensacola Christian College. Cameron has an MBA and Master of Accountancy (MACC) from the University of West Florida and a BS Business Administration/Accounting from Pensacola Christian College.",
              })
            }
          >
            <StaticImage
              src="../images/people/cameron.png"
              alt="Cameron Davies"
              quality={100}
              height={84}
              width={84}
            />{" "}
            <PersonName>Cameron Davies</PersonName>
            <PersonPosition>Advisor</PersonPosition>
          </PersonContainer>
          <PersonContainer
            onClick={() =>
              openModal({
                name: "Cathy Cobey",
                position: "Advisor",
                img: "../images/pictures/bike-1.png",
                introduction:
                  "Global Trusted AI Advisory Leader, Ernst and Young LLP",
                biography:
                  "Drawing on 25 years as a technology risk advisor, Cathy is the Global Trusted AI Advisory Leader at Ernst and Young LLP. She leads a global team that considers the ethical and control implications of artificial intelligence and autonomous systems. Cathy leverages her unique background as a CPA and her involvement with the EY Climate Change & Sustainability practice to consider the full spectrum of technological and societal implications in intelligent automation development.  Cathy serves on a number of technical advisory committees to develop industry and regulatory standards for emerging technology",
              })
            }
          >
            <StaticImage
              src="../images/people/cathy.png"
              alt="Cathy Cobey"
              quality={100}
              height={84}
              width={84}
            />{" "}
            <PersonName>Cathy Cobey</PersonName>
            <PersonPosition>Advisor</PersonPosition>
          </PersonContainer>
          <PersonContainer
            onClick={() =>
              openModal({
                name: "Seth Dobrin",
                position: "Advisor",
                img: "../images/pictures/bike-1.png",
                introduction: "Global Chief AI Officer, IBM",
                biography:
                  "Seth Dobrin is the vice president and chief data officer for IBM Analytics, where he is responsible for the transformation of the analytics business operations using data and analytics, influencing IBM Analytics offerings to meet the needs of CDOs, and providing his perspective and experiences to clients. Seth has spent his career scaling and combining existing technologies to address previously intractable problems at scale. Previously, he led the data science transformation of a Fortune 500 company, as well as the company’s Agile transformation and their shift to the cloud, and oversaw efforts to leverage the data science transformation to drive new business models to create new revenue streams, along with the optimization of existing processes. He has served as a member of the advisory board for IBM’s Spark Technology Center, is a founding member of the International Society of Chief Data Officers, and has been a prolific panelist at the East and West Chief Data Officer Summits. Seth holds a PhD in genetics from Arizona State University, where he focused on the application of statistical and molecular genetics toward the elucidation of the causes of neuropsychiatric disorders. In these efforts, he was involved in some of the first applications of machine learning to large-scale genetic analysis.",
              })
            }
          >
            <StaticImage
              src="../images/people/seth.png"
              alt="Seth Dobrin"
              quality={100}
              height={84}
              width={84}
            />{" "}
            <PersonName>Seth Dobrin</PersonName>
            <PersonPosition>Advisor</PersonPosition>
          </PersonContainer>
          <PersonContainer
            onClick={() =>
              openModal({
                name: "Alex Benay",
                position: "Advisor",
                img: "../images/pictures/bike-1.png",
                introduction:
                  "Global Lead, Government Azure Strategy, Microsoft",
                biography:
                  "Alex Benay is an avid user of technology and he often voices the importance of taking risks, failing fast and challenging the status quo when it comes to technological innovation, especially in the government. Benay believes in the strength of social media channels to communicate to Canadians and engage them on shaping the way forward. He also uses social media as an outlet to offer a running commentary on the big initiatives and projects he’s involved in. Benay is not your typical executive! At Microsoft, Benay is making digital government a reality by helping lead the company’s global government cloud strategy. In his previous role as Partner of Digital and Government Solutions at KPMG AI, Benay helped the firms’ public sector clients effectively implement key digital technologies and solutions such as Artificial Intelligence (including ethical AI), Blockchain, Cloud computing, Data Security and Privacy, Digital Identification, Digital Integrity and Assurance. In his previous role as Canada’s CIO, Benay was responsible for a broad portfolio with a budget of $6 billion, 17 thousand employees and countless vendors. With technology and change as constants, Benay balanced the needs of government information systems with the demands of an increasingly dynamic, digitally-savvy and on-demand population. His previous roles have included that of President and Chief Executive Officer of the Canada Science and Technology Museums Corporation, and Vice-President, Government Affairs and Business Development at OpenText, Canada’s largest software company. Benay’s authored a few books including:  “Canadian Failures: Stories of Building toward Success”. He brings together successful Canadians such as astronauts and gold medal athletes to explore how failure got them to where they are today, in an effort to remove the national stigma surrounding the term ‘to fail’. He’s also released “Government Digital: The Quest to Regain Public Trust” that will lay down a blueprint for digital change for other governments and organizations.",
              })
            }
          >
            <StaticImage
              src="../images/people/alex.png"
              alt="Alex Benay"
              quality={100}
              height={84}
              width={84}
            />{" "}
            <PersonName>Alex Benay</PersonName>
            <PersonPosition>Advisor</PersonPosition>
          </PersonContainer>
          <PersonContainer
            onClick={() =>
              openModal({
                name: "Doreen Lorenzo",
                position: "Advisor",
                img: "../images/pictures/bike-1.png",
                introduction:
                  "Assistant Dean at University of Texas, School of Design and Creative Technology",
                biography:
                  "Doreen Lorenzo is a successful leader of global creative firms; as the former president of frog design and Quirky she has advised companies on design and innovation issues for decades. In September of 2017 she was appointed Assistant Dean of the new School of Design and Creative Technologies at The University of Texas at Austin. It has since become the fastest growing school in the College of Fine Arts. She is a co-founder of mobile video insights firm Vidlet, as well as a board member and advisor to several other companies. Five years ago she became a columnist for Fast Company Co.Design writing a monthly column called Designing Women. Doreen was honored that Texas Monthly profiled her as one of 15 Innovators Reshaping Texas.",
              })
            }
          >
            <StaticImage
              src="../images/people/doreen.png"
              alt="Doreen Lorenzo"
              quality={100}
              height={84}
              width={84}
            />{" "}
            <PersonName>Doreen Lorenzo</PersonName>
            <PersonPosition>Advisor</PersonPosition>
          </PersonContainer>
          <PersonContainer
            onClick={() =>
              openModal({
                name: "Mark Rolston",
                position: "Advisor",
                img: "../images/pictures/bike-1.png",
                introduction: "Founder and Chief Creative of argodesign",
                biography:
                  "Chances are good that at least one piece of technology in your life has a piece of Mark Rolston thinking behind it. Former Chief Creative Officer of frogdesign, and a renowned designer for over 30 years, Mark was one of the earliest design pioneers in software, helping forge the disciplines around user interface design and mobile platforms. During 20 years at frogdesign, he founded the firm’s software design business, transformed it as Global Chief Creative Officer, and in 2014 founded argodesign, where he continues to define new paradigms including AI interfaces, mixed reality, and interactive light. He has worked with the world’s leading companies– Disney, Magic Leap, Dreamworks, Salesforce, GE, Microsoft, and AT&T.",
              })
            }
          >
            <StaticImage
              src="../images/people/mark.png"
              alt="Mark Rolston"
              quality={100}
              height={84}
              width={84}
            />{" "}
            <PersonName>Mark Rolston</PersonName>
            <PersonPosition>Advisor</PersonPosition>
          </PersonContainer>
          <PersonContainer
            onClick={() =>
              openModal({
                name: "Ben Lamm",
                position: "Advisor",
                img: "../images/pictures/bike-1.png",
                introduction: "Tech CEO / Entrepreneur / Investor",
                biography:
                  "Ben Lamm is a serial technology entrepreneur that builds intelligent and transformative businesses. He is currently the CEO and founder of Hypergiant. Lamm was the CEO and founder of Conversable, the leading conversational intelligence platform that helps brands reach their customers through automated experiences on all major messaging platforms. Conversable was acquired by LivePerson in 2018. Lamm was also the founder and CEO of Chaotic Moon, a global creative technology powerhouse acquired by Accenture. During his time at Chaotic Moon and as a Managing Director at Accenture, Lamm spearheaded the creation of some of the Fortune 500’s most groundbreaking digital products and experiences in the emerging tech world of IoT, VR, Connected Car, Mobile, Tablet, and Wearables.",
              })
            }
          >
            <StaticImage
              src="../images/people/ben.png"
              alt="Ben Lamm"
              quality={100}
              height={84}
              width={84}
            />{" "}
            <PersonName>Ben Lamm</PersonName>
            <PersonPosition>Advisor</PersonPosition>
          </PersonContainer>
        </AboutPeopleGrid>
      </Row>
      <Row style={{ backgroundColor: "#f6f6f6", paddingBottom: 0 }}>
        <Headline2>Expert Advisors</Headline2>
        <Divider />
        <AboutPeopleGrid>
          <PersonContainer
            onClick={() =>
              openModal({
                name: "Kasia Chmielinski",
                position: "Data Advisor",
                img: "../images/pictures/bike-1.png",
                introduction: "Co-Founder, Data Nutrition Project",
                biography:
                  "Kasia Chmielinski is the Co-Founder and Lead of The Data Nutrition Project, an initiative that builds dataset quality standards and tools to mitigate bias in artificial intelligence, and a technologist in healthcare analytics at McKinsey & Company. They are also an Affiliate at The Berkman Klein Center at Harvard University and a Digital Lab Fellow at Consumer Reports. Previously, Kasia worked at The U.S. Digital Service (Executive Office of the President) and Scratch, a project of the MIT Media Lab. They received their bachelor's degree in physics from Harvard University.",
              })
            }
          >
            <StaticImage
              src="../images/people/kasia.png"
              alt="Kasia Chmielinski"
              quality={100}
              height={84}
              width={84}
            />{" "}
            <PersonName>Kasia Chmielinski</PersonName>
            <PersonPosition>Data Advisor</PersonPosition>
          </PersonContainer>
          <PersonContainer
            onClick={() =>
              openModal({
                name: "Tim Vincent",
                position: "Technical Advisor",
                img: "../images/pictures/bike-1.png",
                introduction: "IBM Fellow, VP and CTO IBM Analytic Group",
                biography:
                  "Tim Vincent is an IBM Fellow and Vice President with over 35 years of experience in the  data space. He became a Fellow in 2009 and has served roles ranging from CTO for  Information Management, CTO for the Data and Analytics group, as well as P&L  responsibility for AI software offerings in Cognitive Systems. In his roles as CTO for the Information Management division and then CTO for the  Analytics group in IBM, he was responsible for driving the technical strategy for both  areas. During this time Tim spent time globally working with clients across industries  helping them with their data strategy and architecture. Tim was one of the original team that built the DB2 business on the Unix, Linux and  Windows platform and was the Chief architect of that product from 2002 through 2010. During his time in Cognitive Systems he owned the responsibility for building the AI  software business on that platform in conjunction with the accelerated compute (GPU)  differentiation of Power. In that role Tim had ownership of both Offering Management  and development organizations and was responsible for the definition, delivery, and  GTM for these offerings.",
              })
            }
          >
            <StaticImage
              src="../images/people/tim.png"
              alt="Tim Vincent"
              quality={100}
              height={84}
              width={84}
            />{" "}
            <PersonName>Tim Vincent</PersonName>
            <PersonPosition>Technical Advisor</PersonPosition>
          </PersonContainer>
          <PersonContainer
            onClick={() =>
              openModal({
                name: "Julia Stoyanovich",
                position: "Technical Advisor",
                img: "../images/pictures/bike-1.png",
                introduction:
                  "Director at the Center for Responsible AI at NYU ",
                biography:
                  "Julia Stoyanovich is an Assistant Professor in the Department of Computer Science and Engineering at the Tandon School of Engineering, and the Center for Data Science.  She is a recipient of an NSF CAREER award and of an NSF/CRA CI Fellowship.  Julia's research focuses on responsible data management and analysis practices: on operationalizing fairness, diversity, transparency, and data protection in all stages of the data  acquisition and processing lifecycle. She established the Data, Responsibly consortium, and serves on the New York City Automated Decision Systems Task Force (by appointment by Mayor de Blasio).  In addition to data ethics, Julia works on management and analysis of preference data, and on querying large evolving graphs.  She holds M.S. and Ph.D. degrees in Computer Science from Columbia University, and a B.S. in Computer Science and in Mathematics and Statistics from the University of Massachusetts at Amherst",
              })
            }
          >
            <StaticImage
              src="../images/people/julia.png"
              alt="Julia Stoyanovich"
              quality={100}
              height={84}
              width={84}
            />{" "}
            <PersonName>Julia Stoyanovich</PersonName>
            <PersonPosition>Technical Advisor</PersonPosition>
          </PersonContainer>
        </AboutPeopleGrid>
      </Row>
      <Row style={{ backgroundColor: "#f6f6f6" }}>
        <Headline2>Leadership</Headline2>
        <Divider />
        <AboutPeopleGrid>
          <PersonContainer
            onClick={() =>
              openModal({
                name: "Ashley Casovan",
                position: "Advisor",
                img: "../images/pictures/bike-1.png",
                introduction:
                  "Chair, Responsible AI Certification Working Group, World Economic Forum",
                biography:
                  "Ashley is an engaged and innovative leader who has always had a deep interest in advancing the public good. Recently leaving her long-standing career in the public service where she was last Director of Data and Digital for the Government of Canada, she has now taken on the role of Executive Director of Responsible AI Institute, a non-profit dedicated to creating practical tools to ensure the responsible use of AI. Throughout her career she has worked at the intersection of innovative technology and data, and its impact on providing better information and services. As a recognized leader in the social tech community she has developed a strong reputation for developing workable governance for data, artificial intelligence, and open source tools. Her work and ability to bring experts together to solve important challenges has led to meaningful change in government and beyond. Her work helps to inform government, industry, and academic research.",
              })
            }
          >
            <StaticImage
              src="../images/people/ashley.png"
              alt="Ashley Casovan"
              quality={100}
              height={84}
              width={84}
            />{" "}
            <PersonName>Ashley Casovan</PersonName>
            <PersonPosition>Executive Director</PersonPosition>
          </PersonContainer>
          <PersonContainer
            onClick={() =>
              openModal({
                name: "Phil Dawson",
                position: "Senior Policy Counsel",
                img: "../images/pictures/bike-1.png",
                introduction:
                  "2020-2021 Technology and Human Rights Fellow, Harvard Kennedy School Carr Center for Human Rights Policy",
                biography:
                  "Philip Dawson is a lawyer and public policy expert specializing in the governance of digital technologies and artificial intelligence. After beginning his career in legal practice, Phil held senior policy roles at a United Nations specialized agency, in government and at a global AI software company.  Phil is a 2020-2021 Technology and Human Rights Fellow at the Harvard Kennedy School Carr Center for Human Rights Policy, a member of the UN Global Pulse Expert Group on the Governance of Data and AI, and Co-Chair of the Data Governance Standardization Collaborative, an initiative launched by the Canadian government. He has been an active participant in national and international policy and standard-making activities related to the governance of data and AI, including within the United Nations, the OECD and the World Economic Forum. Phil holds a B.A. and a joint B.C.L./LL.B. from McGill University, as well as an M.Sc. from the London School of Economics. He is the founder of a public policy firm that focuses on digital technologies and artificial intelligence.",
              })
            }
          >
            <StaticImage
              src="../images/people/phil.png"
              alt="Phil Dawson"
              quality={100}
              height={84}
              width={84}
            />{" "}
            <PersonName>Phil Dawson</PersonName>
            <PersonPosition>Senior Policy Counsel</PersonPosition>
          </PersonContainer>
          <PersonContainer
            onClick={() =>
              openModal({
                name: "Kara Scully",
                position: "Communications and Engagement Manager",
                img: "../images/pictures/bike-1.png",
                introduction: "Marketing and Comms Extraordinaire",
                biography:
                  "Kara Scully is an accomplished marketing, public relations, and communications expert. She worked in CPG and product PR, social media, and marketing communications for the first five years of her career, and has since focused on marketing and communications for nonprofits and startups. Under her guidance, an array of name-brand CPG products in the food, health, and lifestyle space have substantially increased their reach to new customers and markets. Kara brings a fresh approach to complex messages by her use of great visuals, succinct messaging, and a consistent theme. Kara holds a BA degree in Public Relations from the University of Southern California, Annenberg School for Communication and Journalism.",
              })
            }
          >
            <StaticImage
              src="../images/people/kara.png"
              alt="Kara Scully"
              quality={100}
              height={84}
              width={84}
            />{" "}
            <PersonName>Kara Scully</PersonName>
            <PersonPosition>
              Communications and Engagement Manager
            </PersonPosition>
          </PersonContainer>
          <PersonContainer>
            <StaticImage
              src="../images/people/female.png"
              alt="Engineer"
              quality={100}
              height={84}
              width={84}
            />{" "}
            <PersonName>Hiring Soon</PersonName>
            <PersonPosition>Lead Developer</PersonPosition>
          </PersonContainer>
          <PersonContainer>
            <StaticImage
              src="../images/people/male.png"
              alt="Data Scientist"
              quality={100}
              height={84}
              width={84}
            />{" "}
            <PersonName>Hiring Soon</PersonName>
            <PersonPosition>Lead Data Scientist</PersonPosition>
          </PersonContainer>
          <PersonContainer>
            <StaticImage src="" />
            <PersonName>Interested in joining RAI?</PersonName>
            <PersonPosition>
              <a
                href="mailto:admin@responsible.ai"
                style={{ textDecoration: "none", color: "black" }}
              >
                Inquire here.
              </a>
            </PersonPosition>
          </PersonContainer>
        </AboutPeopleGrid>
        <BiographyModal
          isOpen={modalOpen}
          onRequestClose={() => modalHandler(false)}
          handler={modalHandler}
          person={modalPerson}
        ></BiographyModal>
      </Row>
      <Row>
        <MembersHeader>
          <MembersHeadline>Members</MembersHeadline>
        </MembersHeader>
        <Divider />
        <br />
        <Headline4>Global Corporations</Headline4>
        <Grid style={{ marginTop: "0" }}>
          <GridRow auto first>
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
                src="../images/partner-logos/amex.png"
                alt="American Express"
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
            <GridContainer>
              <StaticImage
                src="../images/testimonials/hsbc.png"
                alt="HSBC"
                quality={100}
                placeholder="blurred"
              />
            </GridContainer>
          </GridRow>
        </Grid>
        <br />
        <Headline4>Tech &amp; Service Providers</Headline4>
        <Grid style={{ marginTop: "0" }}>
          <GridRow auto first>
            <GridContainer>
              <StaticImage
                src="../images/testimonials/ibm.png"
                alt="IBM"
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
                src="../images/partner-logos/pwc.png"
                alt="PWC"
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
                src="../images/members-logos/altaml.png"
                alt="AltaML"
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
        </Grid>
        <br />
        <Headline4>Government &amp; NGOs</Headline4>
        <Grid style={{ marginTop: "0" }}>
          <GridRow auto first>
            <GridContainer>
              <StaticImage
                src="../images/testimonials/wef.png"
                alt="WEF"
                quality={100}
                placeholder="blurred"
              />
            </GridContainer>
            <GridContainer>
              <StaticImage
                src="../images/testimonials/ieee.png"
                alt="IEEE"
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
                src="../images/partner-logos/saxena-foundatoin.png"
                alt="Saxena Foundation"
                quality={100}
                placeholder="blurred"
              />
            </GridContainer>
          </GridRow>
        </Grid>
        <br />
        <Headline4>Universities &amp; Academia</Headline4>
        <Grid style={{ marginTop: "0" }}>
          <GridRow auto first>
            <GridContainer>
              <StaticImage
                src="../images/partner-logos/ut-austin.png"
                alt="UT"
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
                src="../images/partner-logos/toronto.png"
                alt="Toronto"
                quality={100}
                placeholder="blurred"
              />
            </GridContainer>
            <GridContainer>
              <StaticImage
                src="../images/partner-logos/alberta.png"
                alt="Alberta"
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
                src="../images/partner-logos/mila.png"
                alt="Mila"
                quality={100}
                placeholder="blurred"
              />
            </GridContainer>
            <GridContainer>
              <StaticImage
                src="../images/partner-logos/rai.png"
                alt="R/AI"
                quality={100}
                placeholder="blurred"
              />
            </GridContainer>
          </GridRow>
        </Grid>
      </Row>
      <Row style={{ backgroundColor: "#f6f6f6" }}>
        <FellowshipDescription>
          <Headline4>
            Responsible AI Fellowship Program invites multidisciplinary teams of
            students and professionals to tackle real-world challenges.
          </Headline4>
          <MediumBody>
            This program will support multidisciplinary teams of students and
            professionals selected from various universities and businesses to
            work on real-world responsible AI challenges and opportunities.
            Projects are sourced from RAI Members and external clients who play
            an important role in structuring project deliverables. Fellows work
            with domain experts in AI, data science, human-centric design, law,
            and regulatory policy. Fellows receive training in research skills
            and data collection, analysis, and presentation to deliver a work
            product that meets client needs.
            <br />
            <br />
            <StyledLink text="Get Started" link="/fellowship" />
          </MediumBody>
        </FellowshipDescription>
      </Row>
      <GetInvolved />
      <Row gray>
        <TitleLink>
          <Headline2>News</Headline2>
          <StyledLink text="More News" link="/news" />
        </TitleLink>
        <News />
      </Row>
    </Layout>
  );
}

export default About;
