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
import QuoteBlock from "../../components/QuoteBlock";
import News from "../../components/News";
import StyledLink from "../../components/StyledLink";
import { StaticImage } from "gatsby-plugin-image";

function Page() {
  return (
    <Layout title="What's in a Name?">
      <Row>
        <Headline1>
          What’s in a name? AI Global is now Responsible AI Institute
        </Headline1>
        <br />
        <Divider />
        <ShareContainer>
          <UpperCaption style={{ marginRight: "20px" }}>
            APRIL 28, 2021
          </UpperCaption>
          <div className="s9-widget-wrapper"></div>
        </ShareContainer>
        <MediumBody bold>
          New name, new branding, newly restored conviction in our message.
          Introducing Responsible AI Institute, or RAI.
          <br />
        </MediumBody>
        <br />
        <MediumBody>
          Over the past five years, AI Global has become an independent
          nonprofit focused on building and distributing tangible governance
          tools that accelerate the design, development and use of Responsible
          AI, which will ultimately lead to the RAI Certification, the world’s
          first independent, accredited AI certification mark, now in beta mode.
          We’ve worked alongside the brilliant members of our community to
          develop our toolkit, and have grounded ourselves in the conviction
          that AI should be credible and trustworthy, safe and reliable,
          inclusive and unbiased. Above all, AI systems need to be accountable.
        </MediumBody>
        <QuoteBlock
          quote="I think we already were, without knowing it, intentionally moving towards RAI."
          author="Ashley Casovan"
          title="Executive Director, Responsible AI Institute"
        />
        <MediumBody>
          Now, RAI (pronounced ray) is taking the step to rename ourselves and
          center our mission with our name. “I think we already were, without
          knowing it, intentionally moving towards RAI, ” says Ashley Casovan,
          Executive Director, RAI. “All of our tools don the name ‘Responsible
          AI Portal’, ‘Responsible AI Design Assistant’, and now we can, as an
          organization, catch up to our products.”
        </MediumBody>
        <br />
        <MediumBody>
          <strong>Anatomy of a name.</strong>
          <br />
          We chose to highlight “Responsible AI”, and it creates a tighter
          alignment with our mission, goals and objectives to develop fair,
          balanced, and inclusive AI systems. The word “Institute” fully
          addresses the needs of all collections of members across sectors– we
          serve our community members in the public, private, nonprofit and
          academic sectors alike, and can better communicate that as an
          Institution which guides all members on their journey to responsible
          AI. Altogether, Responsible AI Institute was adopted and championed
          for the needs of the AI ecosystem.
        </MediumBody>
        <div style={{ width: "100%", textAlign: "center", margin: "60px 0px" }}>
          <StaticImage
            src="../../images/rai-icons/rai-circle.png"
            alt="News"
            placeholder="tracedSVG"
          />
        </div>
        <MediumBody>
          With a new name, comes a new look. Our refreshed logo, designed by
          fishbowl design, manifests our key value around guardrails for fair
          and unbiased AI. The obvious equals sign serves as a reminder to our
          core mission, but also doubles as a representation of the guardrails
          that we provide to practitioners to protect us from biased,
          untrustworthy systems. We look at them as a reminder to our mission,
          to advance trusted AI with the guardrails set in place by the greater
          community of leading changemakers.
        </MediumBody>
        <MediumBody>
          “The best way I can describe my commitment to responsible AI is equal
          parts hope and equal parts fear,” says Manoj Saxena, Board Chair of
          RAI. “It's not enough to invent technology, but it is, I believe, our
          duty to put guardrails around the technology so we can benefit from it
          properly. RAI is driven by the desire and the duty to help society and
          mankind harness the power of this powerful technology in a responsible
          and positive way.”
        </MediumBody>
        <MediumBody>
          We’re excited for this new chapter, and are now looking to you, our
          community, to help expand our mission.
        </MediumBody>
        <UpperCaption>By Kara Scully</UpperCaption>
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
