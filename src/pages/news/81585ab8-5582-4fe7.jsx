import React from "react";
import Layout from "../../components/Layout";
import {
  Headline1,
  Headline2,
  MediumBody,
  UpperCaption,
  BlankLink,
} from "../../components/Text";
import { Row, Divider, TitleLink } from "../../components/Blocks";
import { ShareContainer } from "../../components/Buttons";
import QuoteBlock from "../../components/QuoteBlock";
import News from "../../components/News";
import StyledLink from "../../components/StyledLink";
import { StaticImage } from "gatsby-plugin-image";

function Page() {
  return (
    <Layout title="Example Article">
      <Row>
        <Headline1>
          Independent Certification Working Group Launched for Advancing Ethical
          and Responsible AI
        </Headline1>
        <br />
        <Divider />
        <ShareContainer>
          <UpperCaption style={{ marginRight: "20px" }}>
            MARCH 31, 2021
          </UpperCaption>
          <div className="s9-widget-wrapper"></div>
        </ShareContainer>
        <div style={{ width: "100%", textAlign: "center" }}>
          <StaticImage
            src="../../images/pictures/article/news.png"
            alt="News"
            placeholder="tracedSVG"
          />
        </div>
        <br />
        <MediumBody bold>
          The World Economic Forum, AI Global, and the Schwartz Reisman
          Institute join forces to create an independent and practical
          certification program for algorithmic decisioning systems
        </MediumBody>
        <br />
        <MediumBody>
          <strong>Austin, Texas and Toronto, Ontario (1 December 2020)</strong>{" "}
          – The World Economic Forum (WEF), AI Global, and the Schwartz Reisman
          Institute for Technology and Society (SRI) at the University of
          Toronto today announced the launch of a working group to lead the
          development of a globally recognized certification program for the
          responsible and trusted use of algorithmic decisioning and artificial
          intelligence (AI) systems.
        </MediumBody>
        <MediumBody>
          This working group will bring together a diverse community of leading
          experts across industry practitioners, policy makers, regulators,
          consumers, and academia, aimed at creating practical tools for the
          development of responsible AI systems, as well as measurable
          assessments for fairness, bias, explainability and other metrics of
          responsibly built AI systems.
        </MediumBody>
        <QuoteBlock
          quote="As AI becomes more capable and integrated into every aspect of life we are starting to see not just the promise but the harms of these technologies when left to operate without proper transparency and control."
          author="Ashley Casovan"
          title="Executive Director, RAI"
        />
        <MediumBody>
          AI is already being deployed into high-profile applications where
          trust is paramount, such as prioritizing COVID vaccine distribution,
          determining access to credit, and facial recognition in law
          enforcement. In response, experts around the world are calling for
          practical solutions to address the challenges of building and
          deploying safe, responsible, inclusive, and trusted AI systems.
        </MediumBody>
        <MediumBody>
          “The need for a measurable, independent and authoritative
          certification program working across sectors and across regions, is
          imperative,” says Gillian K. Hadfield, Director, SRI “this initiative
          aims to be the first comprehensive third-party accredited
          certification for AI systems.”
        </MediumBody>
        <MediumBody>
          With expertise in convening multi-stakeholders to solve some of the
          world’s most significant challenges, incubating this initiative with
          World Economic Forum (as part of their Shaping the Future of
          Technology Governance: Artificial Intelligence and Machine Learning
          platform) provides the opportunity to receive critical feedback from
          industry, government, civil society, and academia alike.
        </MediumBody>
        <MediumBody>
          “We are delighted to collaborate with organizations creating best
          practices in the complex field of responsible AI, and encourage the
          development of credible, independently-validated processes for
          certifying AI systems,” says Kay Firth-Butterfield, Head of AI and
          Machine Learning, World Economic Forum.
        </MediumBody>
        <div style={{ width: "100%", textAlign: "center", margin: "60px 0px" }}>
          <StaticImage
            src="../../images/pictures/article/news-2.png"
            alt="News"
            placeholder="tracedSVG"
          />
        </div>
        <MediumBody>
          <strong>Get Involved</strong>
          <br />
          WEF, AI Global and SRI will host a virtual event on Wednesday,
          December 9th from 11a.m.-12:00pm EST to kick off the initiative. As a
          multi-stakeholder initiative, join organizations such as IBM, Open AI,
          PwC, Anthem, Deliotte, Oxford Internet Institute, the University of
          Texas, University of Montreal, IEEE, and others for the initial
          meeting. Recognizing there are several efforts underway to develop
          standards and assurance mechanisms for AI systems, this initial
          meeting is a call for participation to coordinate and advance these
          efforts. The working group will continue to invite feedback as the
          certification program is developed.
        </MediumBody>
        <MediumBody>
          For additional information you can register for the event or email{" "}
          <BlankLink bold href="mailto:certification@ai-global.org">
            certification@ai-global.org
          </BlankLink>
          .
        </MediumBody>
        <br />
        <Divider />
        <br />
        <MediumBody>
          <strong>About AI Global</strong>
          <br />
          AI Global is a non-profit building tangible governance tools to
          address growing concerns about AI. Their mission is to catalyze the
          practical and responsible design, development, and use of AI. Their
          tools have been among the first to demonstrate how to turn responsible
          AI principles into action. Bringing extensive experience in
          responsible AI policy and the development of AI systems for industry,
          AI Global is uniquely positioned to partner with organizations across
          public and private sectors to guide and inform responsible AI
          governance around the world.
        </MediumBody>
        <MediumBody>
          <strong>
            About the Schwartz Reisman Institute for Technology and Society
            (SRI)
          </strong>
          <br />
          Based at the University of Toronto, SRI is a research and solutions
          hub that builds on fundamental world-class research in technology
          development, governance, and policy with actionable, human-centred
          solutions to the challenge of building safe, responsible, and
          inclusive technologies in industry, government, and civil society.
          SRI’s guiding vision is that powerful technologies should improve
          life—for everyone.
        </MediumBody>
        <MediumBody>
          <strong>About the World Economic Forum (WEF)</strong>
          <br />
          Founded in 1971, the WEF is an independent international NGO committed
          to improving the state of the world by engaging business, political,
          academic, and other leaders of society to shape global, regional, and
          industry agendas. Striving to be accountable to all parts of society,
          the WEF balances the best of many kinds of organizations, from both
          the public and private sectors, international organizations, and
          academic institutions.
        </MediumBody>
      </Row>
      <Row gray>
        <TitleLink>
          <Headline2>More News</Headline2>
          <StyledLink text="More News" link="/news" />
        </TitleLink>
        <News />
      </Row>
    </Layout>
  );
}

export default Page;
