import React from "react";
import styled, {css} from "styled-components";
import Layout from "../components/Layout";
import {
  Headline2,
  Headline4,
  Headline5,
} from "../components/Text";
import { Row, TitleLink } from "../components/Blocks";
import StyledLink from "../components/StyledLink";
import News from "../components/News";
import { Heading } from '@/components/Heading'

const carbon = "#2f2d34";
const gray = "#797b80";

const BoxRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: start;

    div {
      width: 100%;
    }
  }
`;

const BoxItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;
  padding: 20px 0px;
  border-bottom: 1px solid ${carbon};

  ${(props) =>
    props.top &&
    css`
      border-top: 1px solid ${carbon};
    `}
`;

const Caption = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 1.5px;
  color: ${gray};
`;

function Calendar() {
  return (
    <Layout title="Calendar">
      <Row>
        <Heading as="h1">Events Calendar</Heading>
        <br />
        <Headline4>May 2021</Headline4>
        <BoxRow>
          <BoxItem top>
            <a
              href="https://www.gartner.com/en/conferences/na/data-analytics-us/register"
              target="_blank"
              rel="noreferrer noopener"
              style={{ textDecoration: "none", color: carbon }}
            >
              <Headline5>Gartner Data &amp; Analytics Summit</Headline5>
            </a>
            <Caption>MAY 4 - 6, 2021 (ONLINE)</Caption>
          </BoxItem>
          <BoxItem top>
            <a
              href="https://aiconference.london/register/"
              target="_blank"
              rel="noreferrer noopener"
              style={{ textDecoration: "none", color: carbon }}
            >
              <Headline5>AI World Congress 2021</Headline5>
            </a>
            <Caption>MAY 13 - 14, 2021 (ONLINE, LONDON - UK)</Caption>
          </BoxItem>
        </BoxRow>
        <BoxRow>
          <BoxItem>
            <a
              href="https://www.predictiveanalyticsworld.com/machinelearningweek/registration/"
              target="_blank"
              rel="noreferrer noopener"
              style={{ textDecoration: "none", color: carbon }}
            >
              <Headline5>Machine Learning Week</Headline5>
            </a>
            <Caption>MAY 24 - 28, 2021 (ONLINE)</Caption>
          </BoxItem>
        </BoxRow>
        <br />
        <br />
        <Headline4>June 2021</Headline4>
        <BoxRow>
          <BoxItem top>
            <a
              href="https://events.argyleforum.com/datax-san-francisco/#top"
              target="_blank"
              rel="noreferrer noopener"
              style={{ textDecoration: "none", color: carbon }}
            >
              <Headline5>DATAx San Francisco</Headline5>
            </a>
            <Caption>JUNE 10, 2021 (SAN FRANCISCO - CA)</Caption>
          </BoxItem>
          <BoxItem top>
            <a
              href="https://cogx.live/cogx-2021-festival-exhibitors/"
              target="_blank"
              rel="noreferrer noopener"
              style={{ textDecoration: "none", color: carbon }}
            >
              <Headline5>CogX 2021</Headline5>
            </a>
            <Caption>JUNE 14 - 16, 2021 (LONDON - UK)</Caption>
          </BoxItem>
        </BoxRow>
        <BoxRow>
          <BoxItem>
            <a
              href="https://mlconference.ai/munich/tickets-munich/?go=ok"
              target="_blank"
              rel="noreferrer noopener"
              style={{ textDecoration: "none", color: carbon }}
            >
              <Headline5>ML Conference</Headline5>
            </a>
            <Caption>JUNE 21 - 23, 2021 (ONLINE, MUNICH - DE)</Caption>
          </BoxItem>
        </BoxRow>
        <br />
        <br />
        <Headline4>July 2021</Headline4>
        <BoxRow>
          <BoxItem top>
            <a
              href="https://www.eventbrite.com/e/venturebeat-transform-2021-tickets-132121305381?aff=website"
              target="_blank"
              rel="noreferrer noopener"
              style={{ textDecoration: "none", color: carbon }}
            >
              <Headline5>VB Transform</Headline5>
            </a>
            <Caption>JULY 12 - 16, 2021 (ONLINE)</Caption>
          </BoxItem>
          <BoxItem top>
            <a
              href="https://www.intelligentautomation.network/events-intelligentautomationbfsi/"
              target="_blank"
              rel="noreferrer noopener"
              style={{ textDecoration: "none", color: carbon }}
            >
              <Headline5>
                Intelligent Automation for Banking, Financial Services and
                Insurance Online Event
              </Headline5>
            </a>
            <Caption>JULY 14 - 15, 2021 (ONLINE)</Caption>
          </BoxItem>
        </BoxRow>
        <BoxRow>
          <BoxItem>
            <a
              href="https://www.clocate.com/conference/ai-world-conference-and-expo/77702/"
              target="_blank"
              rel="noreferrer noopener"
              style={{ textDecoration: "none", color: carbon }}
            >
              <Headline5>AI World Conference and Expo</Headline5>
            </a>
            <Caption>JULY 14, 2021 (ONLINE)</Caption>
          </BoxItem>
          <BoxItem>
            <a
              href="https://icml.cc/Sponsors/sponsorinfo"
              target="_blank"
              rel="noreferrer noopener"
              style={{ textDecoration: "none", color: carbon }}
            >
              <Headline5>
                The International Conference on Machine Learning
              </Headline5>
            </a>
            <Caption>JULY 18 - 24, 2021 (ONLINE)</Caption>
          </BoxItem>
        </BoxRow>
        <br />
        <br />
        <Headline4>August 2021</Headline4>
        <BoxRow>
          <BoxItem top>
            <a
              href="https://ai4.io/application-sponsor/"
              target="_blank"
              rel="noreferrer noopener"
              style={{ textDecoration: "none", color: carbon }}
            >
              <Headline5>Ai4</Headline5>
            </a>
            <Caption>AUGUST 17 - 19, 2021 (ONLINE)</Caption>
          </BoxItem>
        </BoxRow>
        <br />
        <br />
        <Headline4>September 2021</Headline4>
        <BoxRow>
          <BoxItem top>
            <a
              href="https://london.theaisummit.com/"
              target="_blank"
              rel="noreferrer noopener"
              style={{ textDecoration: "none", color: carbon }}
            >
              <Headline5>The AI Summit</Headline5>
            </a>
            <Caption>SEPTEMBER 22 - 23, 2021 (LONDON - UK)</Caption>
          </BoxItem>
          <BoxItem top>
            <a
              href="https://www.ai-expo.net/northamerica/"
              target="_blank"
              rel="noreferrer noopener"
              style={{ textDecoration: "none", color: carbon }}
            >
              <Headline5>AI &amp; Big Data Expo North America</Headline5>
            </a>
            <Caption>SEPTEMBER 22 - 23, 2021 (SANTA CLARA - CA)</Caption>
          </BoxItem>
        </BoxRow>
        <br />
        <br />
        <Headline4>October 2021</Headline4>
        <BoxRow>
          <BoxItem top>
            <a
              href="https://www.sibos.com/conference/register"
              target="_blank"
              rel="noreferrer noopener"
              style={{ textDecoration: "none", color: carbon }}
            >
              <Headline5>Sibos 2021</Headline5>
            </a>
            <Caption>OCTOBER 11 - 14, 2021 (SINGAPORE)</Caption>
          </BoxItem>
          <BoxItem top>
            <a
              href="https://www.thedatascienceconference.com/shop"
              target="_blank"
              rel="noreferrer noopener"
              style={{ textDecoration: "none", color: carbon }}
            >
              <Headline5>The Data Science Conference</Headline5>
            </a>
            <Caption>OCTOBER 14 - 15, 2021 (BOSTON - MA)</Caption>
          </BoxItem>
        </BoxRow>
        <br />
        <br />
        <Headline4>November 2021</Headline4>
        <BoxRow>
          <BoxItem top>
            <a
              href="https://sanfrancisco.theaisummit.com/"
              target="_blank"
              rel="noreferrer noopener"
              style={{ textDecoration: "none", color: carbon }}
            >
              <Headline5>The AI Summit</Headline5>
            </a>
            <Caption>NOVEMBER 3 - 4, 2021 (SILICON VALLEY - CA)</Caption>
          </BoxItem>
          <BoxItem top>
            <a
              href="https://odsc.com/california/"
              target="_blank"
              rel="noreferrer noopener"
              style={{ textDecoration: "none", color: carbon }}
            >
              <Headline5>Open Data Science Conference West</Headline5>
            </a>
            <Caption>NOVEMBER 15 - 18, 2021 (SAN FRANCISCO - CA)</Caption>
          </BoxItem>
        </BoxRow>
        <br />
        <br />
        <Headline4>December 2021</Headline4>
        <BoxRow>
          <BoxItem top>
            <a
              href="https://newyork.theaisummit.com/"
              target="_blank"
              rel="noreferrer noopener"
              style={{ textDecoration: "none", color: carbon }}
            >
              <Headline5>The AI Summit</Headline5>
            </a>
            <Caption>DECEMBER 8 - 9, 2021 (NEW YORK - NY)</Caption>
          </BoxItem>
        </BoxRow>
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
export default Calendar;
