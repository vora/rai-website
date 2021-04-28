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
import News from "../../components/News";
import StyledLink from "../../components/StyledLink";
import { StaticImage } from "gatsby-plugin-image";

function Page() {
  return (
    <Layout title="A consensus is emerging">
      <Row>
        <Headline1>
          A consensus is emerging: AI regulation must be a global effort that’s
          values-driven, risk-based, and evidence-informed
        </Headline1>
        <br />
        <Divider />
        <ShareContainer>
          <UpperCaption style={{ marginRight: "20px" }}>
            NOVEMBER 23, 2020
          </UpperCaption>
          <div className="s9-widget-wrapper"></div>
        </ShareContainer>
        <div style={{ width: "100%", textAlign: "center", margin: "60px 0px" }}>
          <StaticImage
            src="../../images/pictures/article/justice.png"
            alt="News"
            placeholder="tracedSVG"
          />
        </div>
        <MediumBody>
          <strong>Toronto, Ontario</strong>: Many authorities from regional to
          international have created (or are creating) or adapting AI
          strategies, actions plans, policies, and governance frameworks. Some
          have even started to regulate specific AI technologies. For example,
          <BlankLink
            bold
            href="https://www.bbc.com/news/technology-48276660"
            target="_blank"
            rel="nopenner noreferrer"
          >
            San Francisco has banned facial recognition technologies
          </BlankLink>{" "}
          (and{" "}
          <BlankLink
            bold
            href="https://www.cnet.com/news/portland-passes-the-toughest-ban-on-facial-recognition-in-the-us/"
            target="_blank"
            rel="nopenner noreferrer"
          >
            similarly Portland, Oregon
          </BlankLink>
          ), and{" "}
          <BlankLink
            bold
            href="https://www.ilga.gov/legislation/ilcs/ilcs3.asp?ActID=4015&ChapterID=68"
            target="_blank"
            rel="nopenner noreferrer"
          >
            Illinois has enacted the AI Video Interview Act
          </BlankLink>
          . Still, AI regulation is a highly fragmented area overall. Is there
          hope for a harmonized, global framework, and how likely is that to be
          created? Especially given the results of the{" "}
          <BlankLink
            bold
            href="https://www.moralmachine.net/"
            target="_blank"
            rel="nopenner noreferrer"
          >
            Moral Machine
          </BlankLink>{" "}
          experiment and{" "}
          <BlankLink
            bold
            href="https://www.technologyreview.com/2018/10/24/139313/a-global-ethics-study-aims-to-help-ai-solve-the-self-driving-trolley-problem/"
            target="_blank"
            rel="nopenner noreferrer"
          >
            cross-cultural ethical variations
          </BlankLink>{" "}
          it highlighted.
        </MediumBody>
        <MediumBody>
          For these reasons, I was very grateful last week for the opportunity
          to attend the{" "}
          <BlankLink
            bold
            href="https://www.europarl.europa.eu/stoa/en/events/details/the-athens-roundtable-on-artificial-inte/20201029WKS03042"
            target="_blank"
            rel="nopenner noreferrer"
          >
            Athens Roundtable on Artificial Intelligence and the Rule of Law
          </BlankLink>
          . This was an international event in its second year, which brought
          together stakeholders from government, industry, academia,
          non-profits, civil society, and standards bodies to focus on a
          specific topic: AI ethics, governance and regulation. This event is
          bound by the{" "}
          <BlankLink
            bold
            href="https://en.wikipedia.org/wiki/Chatham_House_Rule#:~:text=Since%2520its%2520most%2520recent%2520refinement,other%2520participant%252C%2520may%2520be%2520revealed."
            target="_blank"
            rel="nopenner noreferrer"
          >
            Chatham House Rule
          </BlankLink>{" "}
          that forbids revealing participants’ identity or affiliation. So below
          is a summary of the major themes and discussion points without the
          usual attribution.
        </MediumBody>
        <br />
        <MediumBody>
          <strong>AI regulation must be agile</strong>
          <br />
          Event participants generally agreed that we must act promptly to
          regulate AI and Machine Learning (ML). While the technology has shown
          tremendous potential, biased applications are already harming
          individuals, disrupting democratic processes, damaging public trust,
          and endangering basic human rights. “AI should be a force for good for
          all and not just a source of profit for a few”, said one Roundtable
          presenter. And so regulators must move quickly.
        </MediumBody>
        <MediumBody>
          Regulators must also be nimble and dynamic, since AI is a fast-moving
          target. And they will need to word any legal instruments in
          technology-neutral terms, so that these instruments can be applied to
          new algorithms, techniques, application areas and use cases. Any
          regulation put in place now must be future proof: it will need to work
          today and in the years to come.
        </MediumBody>{" "}
        <br />
        <MediumBody>
          <strong>AI regulation is a global effort built on trust</strong>
          <br />
          The effort to create a regulatory framework for AI must be global,
          said several panelists. The goal is to harmonize legal instruments and
          standards across regional and national boundaries. This observation is
          supported by a poll conducted during the Roundtable: 74% of the
          attendees agreed that harmonization of AI regulation is “very
          important”. (Another 24% said it is “somewhat important”, and only 1%
          said it is “a bad idea”.)
        </MediumBody>
        <MediumBody>
          Moreover, AI regulation mush be built on an ecosystem of trust,
          because without trust we will not be able to realize the benefits. As
          with any previous, new technology, trust is fundamental for wide
          adoption. Also for extracting maximum value.
        </MediumBody>{" "}
        <br />
        <MediumBody>
          <strong>(Smart) regulation is good for business</strong>
          <br />
          Regulation, when executed well, has business benefits also: it creates
          certainty and establishes a level playing field, promoting
          competition. Regulation also helps to inform internal policy which
          drives governance and accountability.
        </MediumBody>
        <MediumBody>
          Regulation typically comes in several forms, from “harder” legal
          mechanisms to “softer” tools: principles, frameworks, codes of
          practice, standards, etc. Regulation can also take the shape of
          co-regulation and self-regulation. All of this could – and should --
          be leveraged for AI (including existing laws), agreed the roundtable
          participants.
        </MediumBody>
        <MediumBody>
          In fact, several countries have already adopted a light-touch approach
          to AI regulation -- aiming to provide guidance and create the right
          mindset in business, rather than to outright ban technologies. Among
          the Roundtable participants, 88% agreed that a combination of
          regulations and soft law/standards is the best way forward. (Only 2%
          of the respondents were completely opposed to regulation.)
        </MediumBody>{" "}
        <br />
        <MediumBody>
          <strong>AI regulation should be risk-based…</strong>
          <br />
          Moreover, not all areas of AI need to be regulated equally (some
          perhaps not at all) as they are unlikely to generate any harm (music
          recommendation was one such example). To determine appropriate
          regulation levels and methods, we’ll need to develop a taxonomy of
          risks, as well as a matrix of AI use cases, risks, and harms
          (considering severity). A “one size fits all” approach rarely works
          well in real life, and regulation is no exception.
        </MediumBody>
        <MediumBody>
          If regulation is based on risk, a common risk categorization framework
          must be developed also. In addition to informing regulation, such a
          framework will help to guide governance inside organizations
          developing or using AI technologies.
        </MediumBody>{" "}
        <br />
        <MediumBody>
          <strong>… And values-driven</strong>
          <br />
          Naturally, any AI regulation and governance must be two things:
          grounded in shared principles and values; and a product of a
          collaborative, consensus-building process, including stakeholders from
          industry, interest groups and civil society. Otherwise, practices that
          crystallize may not be optimal, noted one panelist. Moreover, the
          panelist continued, “you can’t make it work if you do not agree on the
          values. And only after the values can you start working on
          operationalizing governance”. Still, a global framework should
          potentially allow for variation to account for national norms,
          suggested another panelist.
        </MediumBody>{" "}
        <br />
        <MediumBody>
          <strong>“You can’t change what you cannot measure”</strong>
          <br />
          Another important dimension of AI regulation is the need to be
          evidence-based. “What is the real-world expertise that is needed to
          operate AI?”, asked one panelist. Society asks that professionals take
          exams and get licensed in order to operate complex technology –
          airplane pilots is an often-mentioned example. Society also asks
          professionals to demonstrate that they meet the defined standards for
          their occupations (education, law, medicine, etc.). AI is no
          different. Any AI operator will need to be certified and their
          compliance measured. As an aside, this requirement should also extend
          to the general public and casual AI users: just as we demand that
          adults attend a driving school and pass an exam before they may
          legally drive a car on public roads.
        </MediumBody>
        <MediumBody>
          For any regulatory framework to succeed, it will need to be
          theoretically sound and also practical; it will need to be tied to
          standards and certifications. This is the frontier for AI regulation.
          Many authorities have already defined ethical AI principles and/or
          frameworks. While there is shared commonality among them, most are
          still aspirational, said a panelist. These frameworks will need to be
          converted into clear guidance, standards, and other tools, and they
          will need to be testable.
        </MediumBody>
        <br />
        <MediumBody>
          <strong>Standard vocabulary and dimensions of trust </strong>
          <br />
          This is not a trivial task. How should we quantify trust and measure
          trustworthiness? (Besides the obvious that trust is something that you
          either have or you don’t.) Hence the need to agree on what constitutes
          trustworthiness (and its opposite, risk) – and we’ll need to do it for
          each AI building block, said the above panelist.
        </MediumBody>
        <MediumBody>
          We’ll also need to build a unified vocabulary around risk and trust,
          which is currently lacking. Only then can we start developing
          standards, performance benchmarks, and tools to measure conformance
          and compliance, the panelist continued.
        </MediumBody>
        <MediumBody>
          Of course, to support measurement across a global constituency, we’ll
          need to invest in common data standards and interoperability in data,
          systems, and legal regimes.
        </MediumBody>
        <br />
        <MediumBody>
          <strong>
            Transparency and culture are fundamental components of AI governance
            and regulation
          </strong>
          <br />
          Additional discussion topics included transparency, which is a
          fundamental way of building trust. This approach includes
          documentation -- about all about decisions made in the application
          development life cycle. A good way to start today is by leveraging
          relevant frameworks:
          <ul>
            <li>
              <BlankLink
                bold
                href="https://arxiv.org/abs/1808.07261"
                target="_blank"
                rel="nopenner noreferrer"
              >
                FactSheets: Increasing Trust in AI Services through Supplier's
                Declarations of Conformity
              </BlankLink>
              , if you are vendor of AI technology
            </li>
            <li>
              <BlankLink
                bold
                href="https://arxiv.org/abs/1803.09010"
                target="_blank"
                rel="nopenner noreferrer"
              >
                Datasheets for Datasets
              </BlankLink>{" "}
              and{" "}
              <BlankLink
                bold
                href="https://arxiv.org/abs/1810.03993"
                target="_blank"
                rel="nopenner noreferrer"
              >
                Model Cards for Model Reporting
              </BlankLink>{" "}
              (or similar frameworks) if you are developing models internally
            </li>
          </ul>
        </MediumBody>
        <MediumBody>
          Governance is largely about culture, said a government representative.
          The person continued: we see that AI governance has been successful in
          countries with a strong social contract and trust in the government,
          where populations are willing to make trade-offs if AI is being used
          for reasonable purposes. Therefore it will be important to build that
          trust, not least through education.
        </MediumBody>
        <br />
        <MediumBody>
          <strong>
            Is global harmonized AI governance and regulation a unicorn?
          </strong>
          <br />
          So how likely are we to see a harmonized regulatory framework for AI?
          In the end, Roundtable attendees thought it rather unlikely:
          <ul>
            <li>
              Only a quarter (25%) of the attendees agreed with the 90%
              likelihood that we’ll see a globally legally binding treaty in the
              coming decade
            </li>
            <li>44% said that it’s a50% likelihood</li>
            <li>18% estimated the odds at 10%</li>
            <li>13% simply said “no way!”</li>
          </ul>
        </MediumBody>
        <MediumBody>
          Personally, I’m in the 90% group. I agree with the panelist who said:
          “This (AI) is bigger than any nation, so yes we need to find/create
          that unicorn” (aka a unified AI governance/regulatory framework). If
          we can agree on many things around COVID-19, perhaps we can agree on
          AI governance as well, starting with developing international
          standards and mutual recognition systems and schemes. One such
          initiative is by AI Global [now RAI], a non-profit, which has created
          a Responsible AI Design Assistant and a Responsible AI Check.
        </MediumBody>
        <MediumBody>
          Another encouraging development is from an international organization
          headquartered in Europe, whose mandate is to uphold human rights,
          democracy, and the rule of law. The organization is working on a
          binding treaty on AI. They have a history of rapidly achieving
          consensus among members (on other kinds of treaty) -- in the wake of a
          recent tragedy, they reportedly needed only seven weeks. They are
          looking to start negotiating on AI in January 2021.{" "}
        </MediumBody>
        <MediumBody>
          In the end, I hope that cooperation, compassion and the desire to do
          the right thing will win out. We can all benefit from AI: the Athens
          Roundtable on Artificial Intelligence and the Rule of Law, and the
          dialogue and collaboration it has created are encouraging steps in
          that direction.
        </MediumBody>
        <br />
        <Divider />
        <br />
        <MediumBody>
          <BlankLink
            bold
            href="https://www.europarl.europa.eu/stoa/en/events/details/the-athens-roundtable-on-artificial-inte/20201029WKS03042"
            target="_blank"
            rel="nopenner noreferrer"
          >
            About the Athens Roundtable
          </BlankLink>
          <br />
          “Co-founded in 2019 by IEEE SA, The Future Society, and ELONtech, the
          Roundtable is held under the patronage of H.E. the President of the
          Hellenic Republic Ms Katerina Sakellaropoulou. Its mission is to
          advance the global dialogue on policy, practice, international
          cooperation, capacity-building and evidence-based instruments for the
          trustworthy adoption of AI in government, industry and society, under
          the prism of legal systems, the practice of law and regulatory
          compliance”.
        </MediumBody>
        <br />
        <UpperCaption>By Natalia Modjeska</UpperCaption>
        <MediumBody>
          Natalia Modjeska is a Research Director at Info-Tech Research Group
          where she advises clients on how to deploy AI/ML ethically and
          responsibly.
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
