import React from "react";
import { Heading } from "@/components/Heading";
import Layout from "../../components/Layout";
import { Headline2, MediumBody, UpperCaption } from "../../components/OldText";
import { Row, Divider, TitleLink } from "../../components/Blocks";
import { ShareContainer } from "../../components/Buttons";
import News from "../../components/News";
import StyledLink from "../../components/StyledLink";

function Page() {
  return (
    <Layout title="2020 AI Global Awards">
      <Row>
        <Heading as="h1">Introducing: Where in the World is AI? Map</Heading>
        <br />
        <Divider />
        <ShareContainer>
          <UpperCaption style={{ marginRight: "20px" }}>
            NOVEMBER 7, 2020
          </UpperCaption>
          <div className="s9-widget-wrapper" />
        </ShareContainer>
        <MediumBody bold>
          Interactive web visualization raises awareness on helpful and harmful
          applications of AI worldwide
        </MediumBody>
        <br />
        <MediumBody>
          <strong>Austin, Texas and Toronto, Ontario</strong>: <br /> <br />
          How an Algorithm Blocked Kidney Transplants to Black Patients
          <br /> The Netherlands Is Becoming a Predictive Policing Hot Spot{" "}
          <br />
          One Month, 500,000 Face Scans: How China Is Using A.I. to Profile a
          Minority
        </MediumBody>
        <MediumBody>
          As the use of AI becomes more prevalent in our society, so do these
          shocking headlines. We should not just pay attention to how AI systems
          are designed or developed when we see a breaking headline. Rather,
          Responsible AI should be our first thought when we receive data,
          define a use case, or start a sprint. After analyzing Google Trends,
          the team at AI Global identified a disparity between reporting and
          searching of AI and Responsible AI.
        </MediumBody>
        <MediumBody>
          The only peaks in searches we see on responsible and ethical AI
          correlate with major news stories such as The New York Times: “The End
          of Privacy as We Know it” on February 10, 2020. In order to develop
          and apply AI responsibly, we must learn the repercussions of poorly
          designed systems. The “Where in the World is AI?” Map” is an
          interactive web visualization tool exploring stories on AI across the
          world to identify trends and start discussions on more trustworthy and
          responsible systems. On the map, you can filter by domains from health
          services to law enforcement, set a year range, and filter by
          categorization on whether AI has been helpful or harmful.
        </MediumBody>
        <br />
        <MediumBody>
          <strong>Where AI was Harmful</strong>
          <br />
          While the map is filled with colorful dots, it’s important not to
          discount individual data points. In our dataset, there’s cases of
          injustice where 40% of A-level results were downgraded because an
          algorithm was used to assess student’s performance in England. There’s
          examples of systematic racism such as Michael Oliver who was
          wrongfully charged with larceny because of a facial recognition system
          in Michigan. There’s evidence of broken feedback loops such as Tik Tok
          creating filter bubbles based on race in China. When not designed and
          managed in a responsible way, AI systems can be biased, insecure, and
          in some cases (often inadvertently) violate human rights.
        </MediumBody>
        <br />
        <MediumBody>
          <strong>Where AI Has Helped</strong>
          <br />
          We are also hopeful about AI. We’ve seen early instances of how AI can
          augment and advance our daily lives and society. There are also
          examples where people have corrected or gotten rid of harmful AI
          systems.{" "}
          <strong>
            We’ve seen AI create art, music, and even detect asymptomatic
            COVID-19.
          </strong>
        </MediumBody>
        <br />
        <MediumBody>
          <strong>Our Process of AI Has Been Harmful/Helpful Labeling</strong>
          <br />
          We understand that many of these cases might fall into the grey area
          of helpful or harmful. Different cultural perspectives, for example,
          might label cases differently. Our map is currently used by working
          groups to discuss how these cases impact trust in responsible systems.
          Furthermore, AI Global is having internal and external discussions on
          who can decide what is helpful and harmful. We hope that these labels
          can be a starting point on conversations on responsible AI practices
          as we navigate this ecosystem. If you are interested in attending a
          working group, please DM us on Twitter.
        </MediumBody>
        <MediumBody>
          By highlighting these cases and many more, we hope to shed light on
          the ramifications of AI across domains and its very real-world
          consequences. We invite you to explore our map by clicking on a
          dot/star and learning more about each story. If you are interested in
          getting involved, please connect with us.
        </MediumBody>
        <br />
        <UpperCaption>
          By Martha Czernuszenko, Development Lead and Product Manager
        </UpperCaption>
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
