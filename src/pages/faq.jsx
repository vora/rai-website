import React, { useRef } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import {
  Headline1,
  MediumBody,
  Heading1,
  LargeBody,
  Headline2,
} from "../components/Text";
import { Row, GridRow, TitleLink } from "../components/Blocks";
import StyledLink from "../components/StyledLink";
import News from "../components/News";
import { PrimaryBtn } from "../components/Buttons";

const carbon = "#2f2d34";
const stone = "#4d5052";

const Link = styled.a`
  color: ${carbon};
  text-decoration: ${(props) => (props.highlight ? "underline" : "none")};
  width: ${(props) => (props.highlight ? "fit-content" : "30%")};

  &:hover {
    color: ${stone};
  }

  @media screen and (max-width: 700px) {
    width: ${(props) => (props.highlight ? "fit-content" : "45%")};

    p {
      font-size: 18px;
      line-height: 28px;
    }
  }
`;

function Faq() {
  const what = useRef(null);
  const how = useRef(null);
  const who = useRef(null);
  const ecosystem = useRef(null);
  const beta = useRef(null);
  const assessment = useRef(null);
  const value = useRef(null);
  const journey = useRef(null);
  const involved = useRef(null);

  return (
    <Layout title="FAQ">
      <Row>
        <Headline1>Frequently Asked Questions</Headline1>
        <MediumBody>
          Learn more about Responsible Artificial Intelligence, RAI, and how you
          can get involved.
        </MediumBody>
        <br/>
        <PrimaryBtn dark>Read our White Paper</PrimaryBtn>
      </Row>
      <Row ref={what}>
        <Heading1>What is Responsible Artificial Intelligence (RAI)?</Heading1>
        <MediumBody>
          According to our partner, World Economic Forum, Responsible Artificial
          Intelligence is the “practice of designing, building and deploying AI
          systems in a manner that empowers people and businesses, and fairly
          impacts customers and society – allowing companies to engender trust
          and scale AI with confidence.”
        </MediumBody>
        <MediumBody>
          While many organizations have worked to establish principles and
          comprehensive definitions for Responsible AI, we have decided to
          ground our efforts in accordance with OECD’s five Principles on
          Artificial Intelligence.
        </MediumBody>
        <ul>
          <li>
            AI should benefit people and the planet by driving inclusive growth,
            sustainable development and well-being.
          </li>
          <li>
            AI systems should be designed in a way that respects the rule of
            law, human rights, democratic values and diversity, and they should
            include appropriate safeguards – for example, enabling human
            intervention where necessary – to ensure a fair and just society.
          </li>
          <li>
            There should be transparency and responsible disclosure around AI
            systems to ensure that people understand AI-based outcomes and can
            challenge them.
          </li>
          <li>
            AI systems must function in a robust, secure and safe way throughout
            their life cycles and potential risks should be continually assessed
            and managed.
          </li>
          <li>
            Organisations and individuals developing, deploying or operating AI
            systems should be held accountable for their proper functioning in
            line with the above principles.
          </li>
        </ul>
        <MediumBody>
          As we look to operationalize the essence of these principles, we have
          identified the following categories: explainability and
          interpretability, bias and fairness, accountability, robustness, and
          data quality.
        </MediumBody>
      </Row>
      <Row ref={how}>
        <Heading1>
          How is Responsible AI related to Ethical AI or Trustworthy AI?
        </Heading1>
        <MediumBody>
          These terms often get used interchangeably, and in many circumstances
          people who use them are interested in the same goals and objectives.
          However, it’s important to understand these distinctions as they could
          be used to either mean different things or focus on different aspects
          of AI’s use in society.
        </MediumBody>
        <MediumBody>
          <strong>
            At RAI, we like to use the most comprehensive term, Responsible, as
            it adheres to individual and collective values inspiring responsible
            actions are taken to mitigate harm to people and the planet.
          </strong>{" "}
          Ethics are a set of values specific to an individual or group, and can
          vary and conflict. While considering one’s values is incredibly
          important, it is essential that we are targeting objectives that
          benefit people and the planet as an integrated ecosystem.
        </MediumBody>
        <MediumBody>
          While many in the community choose to use ethics as a term, we
          recognize that not everyone has the same ethics. It is not our place
          to define what is or isn’t ethical for an individual. When you are
          being responsible, it means you are recognizing that your actions
          could have an impact on others, additionally, you are taking steps to
          ensure an individuals or group’s choices, liberties, and preferences
          are not harmed.{" "}
        </MediumBody>
        <MediumBody>
          Responsible remains the most comprehensive and inclusive term ensuring
          that the system is not just safe or trusted, but that it respects and
          upholds human rights and societal values as well.{" "}
        </MediumBody>
        <MediumBody>
          Responsible AI, Ethical AI, or Trustworthy AI all relate to the
          framework and principles behind the design, development and
          implementation of AI systems in a manner that benefits individuals,
          society and businesses while reinforcing human centricity and societal
          value.
        </MediumBody>
      </Row>
      <Row ref={who}>
        <Heading1>Who is the Responsible AI Institute?</Heading1>
        <MediumBody>
          Responsible AI Institute (RAI) is a 501(c)3 non-profit organization
          committed to advancing human-centric and responsible AI.
        </MediumBody>
        <MediumBody>
          We are a community-driven organization focused on building and
          distributing tangible governance tools that accelerate the design,
          development and use of Responsible AI. Currently entering the fifth
          year of operations, we bring extensive experience in regulatory
          policies, data governance, and the development of trustworthy AI
          systems for industry and governments.
        </MediumBody>
        <MediumBody>
          RAI tools have been among the first to demonstrate how to
          operationalize OECD AI principles into action and expand opportunities
          with AI while minimizing harm in local and global communities. We are
          best known for its community-based development of Responsible AI
          Design Assistant and the Responsible AI Leadership (RAI) independent
          rating and certification system.
        </MediumBody>
      </Row>
      <Row ref={ecosystem}>
        <Heading1>
          Where does RAI sit in the ecosystem of Responsible AI?
        </Heading1>
        <MediumBody>
          RAI is not alone in its mission. We’re in the company of an vast group
          of academic institutions, research centres, civil society
          organizations, government agencies and companies that make up the
          larger ecosystem working to ensure the responsible use of AI. RAI
          often forges partnerships, advisorships, and affiliations with our
          counterparts working across sectors. These include:
        </MediumBody>
        <ul>
          <li>
            Development of a Responsible AI Certification program with the{" "}
            <Link
              href="https://srinstitute.utoronto.ca/"
              target="_blank"
              rel="noopener noreferrer"
              highlight
            >
              University of Toronto’s Schwartz Reisman Institute
            </Link>{" "}
            and{" "}
            <Link
              href="https://www.weforum.org/press/2021/01/world-economic-forum-launches-new-global-initiative-to-advance-the-promise-of-responsible-artificial-intelligence"
              target="_blank"
              rel="noopener noreferrer"
              highlight
            >
              The World Economic Forum’s Global AI Action Alliance
            </Link>
          </li>
          <li>
            Expert for{" "}
            <Link
              href="https://www.oecd.ai/"
              target="_blank"
              rel="noopener noreferrer"
              highlight
            >
              OECD ONE AI
            </Link>
            <ul>
              <li>
                A multi-stakeholder and multi-disciplinary group that builds on
                the OECD’s successful experience with the first AI Group of
                experts (AIGO), which developed a proposal that formed the basis
                for the OECD AI Principles adopted in May 2019.
              </li>
            </ul>
          </li>
          <li>
            Member of the{" "}
            <Link
              href="http://www.ic.gc.ca/eic/site/132.nsf/eng/00006.html"
              target="_blank"
              rel="noopener noreferrer"
              highlight
            >
              AI Public Awareness Working Group
            </Link>{" "}
            <ul>
              <li>
                A group looking at mechanisms to boost public awareness and
                foster trust in AI. It also aims to ground the Canadian
                discussion in a measured understanding of AI technology, its
                potential uses, and its associated risks.
              </li>
            </ul>
          </li>
          <li>
            Special Advisor to{" "}
            <Link
              href="https://www.equalai.org/"
              target="_blank"
              rel="noopener noreferrer"
              highlight
            >
              Equal AI
            </Link>
          </li>
          <li>
            Member of{" "}
            <Link
              href="https://www.iso.org/committee/6794475.html"
              target="_blank"
              rel="noopener noreferrer"
              highlight
            >
              ISO JTC1/SC42
            </Link>
          </li>
          <li>
            Steering committee member of{" "}
            <Link
              href="https://www.scc.ca/en/flagships/data-governance#:~:text=The%20Steering%20Committee%20provides%20oversight,organizations%20to%20do%20the%20work."
              target="_blank"
              rel="noopener noreferrer"
              highlight
            >
              Canada Data Governance Steering Committee
            </Link>
          </li>
          <li>
            Steering Committee member for{" "}
            <Link
              href="https://algoralab.ca/"
              target="_blank"
              rel="noopener noreferrer"
              highlight
            >
              Algora Lab
            </Link>
          </li>
          <li>
            Member of the{" "}
            <Link
              href="https://ethicsstandards.org/"
              target="_blank"
              rel="noopener noreferrer"
              highlight
            >
              Open Community for Ethics in Autonomous and Intelligent Systems
              (OCEANIS)
            </Link>
          </li>
          <li>
            Advisor to NSERC research project at University of Toronto, “CREATE
            Responsible AI”
          </li>
        </ul>
      </Row>
      <Row ref={beta}>
        <Heading1>What is RAI Certification Beta?</Heading1>
        <MediumBody>
          RAI Certification by Responsible AI Institute is the first independent
          and community developed Responsible AI rating, certification, and
          documentation system.
        </MediumBody>
        <MediumBody>
          RAI Certification is a symbol of trust that an AI system has been
          designed, built, and deployed in line with the five OECD Principles on
          Artificial Intelligence to promote use of AI that is innovative and
          trustworthy and that respects human rights and societal values. We use
          our five categories of responsible AI (explainability, fairness,
          accountability, robustness, and data quality) as parameters for the
          different credit elements within the RAI Certification rating system.
          RAI acts as a framework for decision-making for model developers,
          model risk managers, auditors, regulators and consumers in all of
          these areas, accelerating and rewarding best practices and innovation
          and recognizing exemplary responsible AI projects with different
          levels of RAI certification.
        </MediumBody>
        <MediumBody>
          You can learn more about the RAI Certification Beta{" "}
          <Link href="/certification" highlight>
            here
          </Link>
          .
        </MediumBody>
      </Row>
      <Row ref={assessment}>
        <Heading1>What is RAI Assessment?</Heading1>
        <MediumBody>
          RAI Assessment is a voluntary process by which a company evaluates
          internal controls over its data and model driven automated decisioning
          systems. Modeled after operationalizing OECD’s five AI Principles, RAI
          Assessments evaluate data, model, and use cases for AI hazard
          identification, risk evaluation, and risk control.
        </MediumBody>
      </Row>
      <Row ref={value}>
        <Heading1>What value does a RAI certification provide?</Heading1>
        <MediumBody>
          RAI Certification by Responsible AI Institute provides value to
          various members.
        </MediumBody>
        <ol>
          <li>
            <strong>For AI/ML Application Developers:</strong>
            <br />
            RAI Certification and Documentation provides your AI/ML developers,
            model risk management staff, and internal audit groups an
            independent verification system and a concise framework for
            identifying and implementing responsible and ethical AI systems
            through systematic assessment of data, model, and process quality.
          </li>
          <li>
            <strong>For Independent Software Vendors:</strong>
            <br />
            RAI accreditation of your AI/ML software products help your products
            and services get selected. Our team will provide a technical review
            of your products, facilitate a stage-by-stage credit scoring of
            data, model, and process contributions, and identify and architect
            API based integration points for direct access of RAI Application
            into your products.
          </li>
          <li>
            <strong>For Audit and Consulting Companies:</strong>
            <br />
            Securing an independent, third-party Responsible AI Leadership
            certification given by a respected responsible AI non-profit can
            help further differentiate your services and enhance your leadership
            and expertise in the Trusted AI field. In addition, by participating
            in RAI community work groups, collaborating with RAI Fellows and
            leading partners such as World Economic Forum, OECD, IEEE, ANSI,
            etc., you continue to add robustness, value and depth to your
            offerings.
          </li>
        </ol>
      </Row>
      <Row ref={journey}>
        <Heading1>How can I start the journey to a RAI Certification?</Heading1>
        <MediumBody>
          No matter where you are on your AI journey, our programs and services
          can help. We’ve laid out the journey to certification in four stages:
          Network, Educate, Assess, and Certify. Our goal is to allow members to{" "}
          <strong>network</strong> through community, <strong>educate</strong>{" "}
          themselves and other practitioners and students,{" "}
          <strong>assess</strong> their systems, and <strong>certify</strong>{" "}
          their responsible and trustworthy AI.
        </MediumBody>
        <MediumBody>
          You can see the programs and tools listed for each step of the journey{" "}
          <Link href="/tools" highlight>
            here
          </Link>
          .
        </MediumBody>
      </Row>
      <Row ref={involved}>
        <Heading1>How can I get involved?</Heading1>
        <ol>
          <li>
            <strong>Become a member</strong>
            <br />
            <MediumBody>
              We recognize there are growing concerns and a lack of trust with
              the accelerated adoption of AI in society. We are dedicated to
              promoting development of responsible and trustworthy AI systems.
              Through a diverse community of leading experts, including industry
              practitioners, policy makers, regulators, consumers, and academia,
              RAI has a unique and vital perspective on how to affect real
              change in both government and industry. RAI Members:
              <ul>
                <li>
                  Gain access to expertise, principles, and practical tools to
                  guide development of responsible AI systems.
                </li>
                <li>Inform AI regulatory conversations at a broader scale.</li>
                <li>
                  Support the leading organization developing independent and
                  authoritative AI Governance tools.
                </li>
              </ul>
              Join Visionary Private, Public, and Academic Leaders as We Promote
              Open, Ethical AI.
            </MediumBody>
          </li>
          <li>
            <strong>Join a working group</strong>
            <br />
            <MediumBody>
              Recognizing that a project of this magnitude needs to be built by
              the community for the benefit of the community, we launched the
              Certification Working Group December 2020 with WEF and SRI. The
              Certification Working Groups will be based on our areas of focus:
              Fair Lending, Fraud Detection, Automated Diagnosis and Treatment,
              Automated Hiring. To join a working group, please contact us.
            </MediumBody>
          </li>
        </ol>
      </Row>
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
export default Faq;
