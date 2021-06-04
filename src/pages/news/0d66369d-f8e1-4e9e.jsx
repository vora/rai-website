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
    <Layout title="2020 AI Global Awards">
      <Row>
        <Heading as="h1">
          2020 AI Global Awards Recognize Standout Global Leaders in Responsible
          and Ethical AI
        </Heading>
        <br />
        <Divider />
        <ShareContainer>
          <UpperCaption style={{ marginRight: "20px" }}>
            DECEMBER 29, 2020
          </UpperCaption>
          <div className="s9-widget-wrapper"></div>
        </ShareContainer>
        <MediumBody bold>
          Annual awards program honors standout organizations and individuals
          promoting and applying responsible use of artificial intelligence
        </MediumBody>
        <br />
        <MediumBody>
          <strong>Austin, Texas and Toronto, Ontario</strong>: AI Global, a
          non-profit dedicated to promoting responsible and ethical adoption of
          Artificial Intelligence today announced the recipients of its 2020
          Responsible AI Awards.
        </MediumBody>
        <br />
        <MediumBody>
          The Responsible AI Awards program acknowledges global technology
          innovators, leaders and visionaries who are pioneering and adopting
          responsible and ethical application of AI that supports AI Global’s
          vision and mission. Awards were based on a variety of considerations,
          including innovation, design, and overall technological advancement
          aimed at bringing transparency, fairness and robustness to the hidden
          decision processing layers within algorithmic decisioning systems.
        </MediumBody>
        <br />
        <MediumBody>
          <strong>The 2020 Responsible AI Award winners include:</strong>
          <br />
          <br />
          <strong>Corporate Leader Award:</strong> <br />
          Anthem, Inc. for their real-life contributions towards the development
          of tangible AI Governance tools such as Responsible AI Trust Index and
          Certification Mark.
          <br />
          <br />
          <strong>Start-Up Leader Award:</strong> <br />
          AltaML for their Responsible AI Design work in financial, health, and
          social services that balanced innovation with building responsible AI
          systems.
          <br />
          <br />
          <strong>Community Leader Award:</strong> <br />
          Mark Caine at the World Economic Forum for his leadership to support
          the development of the Responsible AI Certification Working Group.
          <br />
          <br />
          <strong>Academic Leader Award:</strong> <br />
          AI4Society, at the University of Alberta for their work on the
          redevelopment of the Responsible AI Design Assistant.
          <br />
          <br />
          <strong>Youth Leader Award:</strong> <br />
          Martha Czernuszenko for her work leading the development of the “Where
          in the World is AI” map and other crucial tools for AI Global.
        </MediumBody>
        <br />
        <MediumBody>
          “We extend our congratulations to this year’s winners and thank them
          for their leadership in putting digital trust and ethics at the center
          of their approach,” said Ashley Casovan, Executive Director of AI
          Global. “2020 brought heightened awareness of the immense societal and
          business harm AI systems can pose without any oversight in place, this
          trend is only going to increase as AI becomes a more significant part
          of all of our lives.”
        </MediumBody>
        <MediumBody>
          “At AI Global, we are providing a vision, framework, and tools to help
          businesses and governments ensure that AI is applied with a human and
          ethical focus and are proud of our pioneering work on the development
          of an independent Responsible AI certification in collaboration with
          World Economic Forum and Schwartz Reisman Institute,” she added.
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
