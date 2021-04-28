import React from "react";
import Layout from "../../components/Layout";
import {
  Headline1,
  Headline2,
  MediumBody,
  UpperCaption,
} from "../../components/Text";
import { Row, Divider, TitleLink } from "../../components/Blocks";
import { ShareContainer } from "../../components/Buttons";
import News from "../../components/News";
import StyledLink from "../../components/StyledLink";
import { StaticImage } from "gatsby-plugin-image";

function Page() {
  return (
    <Layout title="A consensus is emerging">
      <Row>
        <Headline1>
          A Snapshot from our working groups: Q&amp;A with Allison Cohen on the
          importance of Independent Review
        </Headline1>
        <br />
        <Divider />
        <ShareContainer>
          <UpperCaption style={{ marginRight: "20px" }}>
            APRIL 26, 2021
          </UpperCaption>
          <div className="s9-widget-wrapper"></div>
        </ShareContainer>
        <div style={{ width: "100%", textAlign: "center", margin: "60px 0px" }}>
          <StaticImage
            src="../../images/rai-icons/Badge.png"
            alt="News"
            placeholder="tracedSVG"
          />
        </div>
        <MediumBody>
          <strong>Montréal, Québec</strong>:
        </MediumBody>
        <br />
        <MediumBody>
          <strong>
            Q1: What do you determine is the main function of independent review
            of AI Development? Why is it important?{" "}
          </strong>
          <br />
          <br />
          <strong>Allison Cohen (AC):</strong> Independent review of AI is
          important for three reasons. First, it entails meaningful AI
          obligations. Second, it ensures those obligations are standardized
          across companies and third, it generates accountability for those
          obligations. Each of these developments are breakthroughs in the realm
          of ethical AI, which has previously been characterized by weak
          commitments, uneven applications and a lack of responsibility.
        </MediumBody>
        <br />
        <MediumBody>
          <strong>
            Q2: What is the role of community in independent review?
          </strong>
          <br />
          <br />
          <strong>(AC):</strong> In the Independent Review Guidelines, the
          community advocate plays the role of representing the needs and
          concerns of their stakeholder group to the ethical review committee.
          It’s critically important that the community advocate is meaningfully
          included in this process because, otherwise, the technology’s ethical
          implications cannot be sufficiently considered. The community advocate
          thereby plays the role of creating a more robust ethical review
          process, which may otherwise fail to account for the true ethical
          implications of the technology.
        </MediumBody>
        <MediumBody>
          When choosing a community advocate, it is important that the
          individual be a leader within their community and can sufficiently
          represent the needs and concerns of their constituents.
        </MediumBody>
        <br />
        <MediumBody>
          <strong>Q3: Who are responsible AI guidelines for?</strong>
          <br />
          <br />
          <strong>(AC):</strong> Responsible AI Guidelines are for any
          organization undergoing AI research and development, whether the
          technology is being sold directly to the consumer or being used by
          another corporate or public sector entity. Wherever the AI is being
          used, there is ample risk associated with the entire lifecycle of AI
          design and deployment. As such, all organizations developing this
          technology must ensure they conduct a responsible AI review.
        </MediumBody>
        <br />
        <MediumBody>
          <strong>
            Q4: What can AI practitioners do to ensure that they are
            facilitating independent review for their systems? What can
            regulators do?
          </strong>
          <br />
          <br />
          <strong>(AC):</strong> AI practitioners can make sure they properly
          capture their processes when developing AI technology. This notation
          will be used to support a more robust ethical AI review process.
          Furthermore, AI practitioners can promote a culture of ethical AI
          development within their organization by raising the importance of
          ethical AI development with their managers and asking for training.
        </MediumBody>
        <MediumBody>
          It is critical that regulators play an active role in ensuring ethical
          review processes are required in addition to being robust, meaningful
          and effective. Regulators are often concerned with the optics of
          regulating ethical AI given the widespread misunderstanding that
          regulation inhibits economic development. However, regulators must
          actively dispel this myth as it creates significant barriers for
          ethical AI regulation and it actively undermines the quality of the AI
          being developed.
        </MediumBody>
        <br />
        <Divider />
        <br />
        <MediumBody>
          <strong>Allison Cohen</strong> is the Applied AI Projects Lead at
          Mila- Quebec Artificial Intelligence Institute. In this role, Allison
          manages the development and deployment of socially beneficial AI
          tools. Allison is passionate about ethical AI development and has
          consulted Global Affairs Canada on ways of promoting human rights
          respecting AI internationally.
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
