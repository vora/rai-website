import React from "react";
import Layout from "../../components/Layout";
import { Heading } from '@/components/Heading'
import {
  Headline2,
  MediumBody,
  UpperCaption,
} from "../../components/Text";
import { Row, Divider, TitleLink } from "../../components/Blocks";
import { ShareContainer } from "../../components/Buttons";
import News from "../../components/News";
import StyledLink from "../../components/StyledLink";

function Page() {
  return (
    <Layout title="Independent Review Guidelines">
      <Row>
        <Heading as="h1">Independent Review Guidelines for Responsible AI</Heading>
        <br />
        <Divider />
        <ShareContainer>
          <UpperCaption style={{ marginRight: "20px" }}>
            OCTOBER 31, 2020
          </UpperCaption>
          <div className="s9-widget-wrapper"></div>
        </ShareContainer>
        <MediumBody>
          <strong>Austin, Texas and Toronto, Ontario</strong>: As an
          organization dedicated to assisting AI developers create human rights
          respecting technology we are excited to launch our first Guideline on
          Independent Review of AI systems. We are starting here, as the call
          for review is one of the most recommended activities in any
          responsible or ethical AI framework or report as it supports a broader
          agenda of Accountability.
        </MediumBody>
        <br />
        <MediumBody>
          However, it’s one thing to talk about what the need for these types of
          processes is, but what does this actually mean in practice? In an
          effort to make it as easy as possible for practitioners to implement
          an independent review process, we have done the hard work of bringing
          together all of the research, talking to those who have started to
          integrate these processes into their business practices, and have
          established guidelines that can be adopted in any type of
          organization.
        </MediumBody>{" "}
        <br />
        <MediumBody>
          This work builds off of and supports our Responsible AI Design
          Assistant which is a self-assessment tool to help your organization
          think through all aspects of responsible AI.
        </MediumBody>{" "}
        <br />
        <MediumBody>
          One of the most important things that we have learned through this
          process is how important public consultations are, as such, we are
          going to have these guidelines open for your feedback until October
          31, 2020. During this time, we would like to know if you would like
          additional information to be included, if there are things missing or
          need clarification, or even if how we are presenting the material
          could be better. Any and all comments are welcome.
        </MediumBody>{" "}
        <br />
        <MediumBody>
          Another key operating principle for our team is to ensure that we
          aren’t re-inventing, rather building off of great work that’s already
          been done. While the increased use of AI is relatively new, the idea
          of independent review is not. Below we share how we approached the
          development of this guideline, specifically, drawing from the
          implementation of bio-ethics principles.
        </MediumBody>{" "}
        <br />
        <MediumBody>
          With the question of “how has third-party or independent review been
          implemented previously?” We established a multi-disciplinary team of
          academic researchers, engineers, business leaders, and policy makers
          to understand where independent review had been implemented
          previously, and what was the review process based on. Our research
          kept leading us towards the path of bio-ethics. Wanting to understand
          how these principles had so much influence on future academic research
          and regulations, we established the bio-ethics working group (BWG).
          The perspectives we received through our discussions and consultations
          have allowed us to develop these guidelines that we hope will help to
          mitigate unintended consequences and potential harms through good
          third-party review.
        </MediumBody>{" "}
        <br />
        <MediumBody>
          The BWG believes that the field of bioethics can serve as a useful
          precedent when developing AI’s third party ethics review boards due to
          the similarity in values and aspirations of both fields. Like
          biomedical research, AI is performing all sorts of experiments on us,
          which have been highly valued in society (monetarily and otherwise).
          As a relatively new and underregulated field, AI has been ripe with
          human rights violations without much accountability. The field of
          bioethics is rooted in the understanding that human rights should be
          centred when evaluating the ethical merit of an experiment on human
          beings, above the potential benefits of the research. As a result of
          the development of bioethical thought and subsequent regulations,
          third party review is employed to evaluate all credible scientific
          experimentation done on humans. Leveraging the learnings from the
          field bioethics, we aspired to create third party review guidelines
          for AI development that center human rights.
        </MediumBody>{" "}
        <br />
        <MediumBody>
          The BWG analyzed various third party review boards by interviewing
          academics, clinical researchers and tech industry experts to determine
          the aspects of ethical review in their respective disciplines that are
          most applicable to an AI third party review board. The BWG met weekly
          over the span of several months to facilitate an ongoing,
          collaborative consultation, with contributions welcomed from all
          members of the BWG and the larger AI Global team.
        </MediumBody>{" "}
        <br />
        <MediumBody>
          Based on our interviews, the BWG recognized that the boards’
          commitment to human rights differed from industry to industry. The BWG
          found that once human rights often sat on one side of the scale while
          financial and business interest sat on the other, tipping in favor of
          the latter in the absence of rigorous review process and regulatory
          guidelines. To ensure that those developing AI centre human rights in
          the evaluation, design and build of potential new projects, we
          recommend the following:
        </MediumBody>
        <br />
        <MediumBody>
          <strong>What AI Practitioners Can Do</strong>
          <br />
          Independent Review for Responsible AI is critical to ensure
          impartiality. Organizations can consider either:
          <ul>
            <li>
              Outsourcing to Ethics-as-a-Service committees: Strong financial
              incentives may prevent tech companies from conducting a fully
              impartial ethical review in-house. We recommend technology
              companies, at every stage of growth, consider hiring an
              independent review body to perform ethics review (when such
              becomes available), much as they hire auditors to look at their
              books. Due to growing interest within the AI ethics community in
              what has been termed “ethics-as-a-service” (EAAS), we anticipate
              that these services will soon become available to ensure
              accountability within the self-governing tech industry.
            </li>
            <li>
              “Sandboxing”, or creating a strict separation between the review
              committee and sales teams, is a promising alternative when
              outsourcing is not possible: If EAAS is out of reach for financial
              or other reasons, tech companies can consider “sandboxing”, or
              creating strict separation between internal review committees and
              the rest of the organization, to mitigate bias within the review
              as much as possible. Strategies to do this are included in the
              Independent Review Checklist for Responsible AI, which can be
              found below.{" "}
            </li>
            <li>
              <strong>
                Create independent accountability chains by forming Ethics Teams
                with a dedicated lead such as a Chief Ethics Officer
              </strong>
              : To ensure that independent review is a successful counterbalance
              to other business considerations and incentives, the
              responsibility to either procure EAAS or engage in internal review
              in a sandbox should rest with a separate accountability chain.
              Organizations can consider creating an Ethics Team that is
              responsible for ethical review of projects (in addition to other
              downstream considerations such as systems monitoring and
              regulatory compliance). This team should report to a dedicated
              lead who can help shape the strategic direction of the company.
              Such a role should be within senior leadership, preferably the
              C-Suite. For example, this can be a Chief Ethics Officer, although
              another dedicated role that collaborates with but is distinct from
              CEO and CFO would be suitable as well.
            </li>
            <li>
              <strong>
                Public consultation via Community Advocates is integral to
                revealing blind spots in ethical review
              </strong>
              : Public consultation is a key check and balance to ensure that
              technology is not simply designed by a select few and that its
              benefits are enjoyed by society as a whole. Involving Community
              Advocates in the ethical review process ensures that the
              technology does not infringe on the rights of vulnerable community
              members once the technology is released. Furthermore, co-creation
              of technology with Community Advocates can increase credibility
              for both private and public sector organizations who are concerned
              with creating public good technologies that will serve communities
              who may be distrustful of large institutions (for example, contact
              tracing apps).
            </li>
            <li>
              <strong>
                In the absence of comprehensive regulations, businesses should
                consider equally the ethical, security, reputational and
                financial risks of unintended downstream consequences
              </strong>
              : Where industry may be tempted to skirt ethical lines, it is
              important for ethical review committees to emphasize that
              unintended downstream consequences of a technology could carry
              significant ethical, security, reputational, and financial risk
              for the organization. Public concern over technology encroaching
              on human rights is a consideration that businesses must weigh when
              evaluating the ethical merit of a project.
            </li>
          </ul>
        </MediumBody>{" "}
        <br />
        <MediumBody>
          <strong>What Regulators Can Do</strong>
          <br />
          <strong>
            Comprehensive regulatory measures are critical to incentivizing the
            technology sector to center human rights in decision making
          </strong>
          : Industry self-governance has historically proven insufficient to
          ensure respect for human rights concerns. In the case of clinical
          research and drug design and development by pharmaceutical companies,
          regulations were created to ensure that research was conducted in a
          manner that respected human rights, and that the human subject is
          considered at every step of the process. Although many jurisdictions
          are currently considering regulations for the technology sector, there
          is a strong oppositional claim that regulation will stifle innovation.
          It is important for regulators to consider historical examples when
          weighing the risks inherent in the development of artificial
          intelligence and other technologies that place humans as the subject
          of experiment directly or indirectly.
        </MediumBody>
        <br />
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
