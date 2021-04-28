import React from "react";
import styled, {css} from "styled-components";
import { Headline5 } from "./Text";

const carbon = "#2f2d34";
const gray = "#797b80";

const NewsRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media screen and (max-width: 800px){
    flex-direction: column;
    justify-content: start;

    div{
      width: 100%;
    }
  }
`;

const NewsItem = styled.div`
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
`

function News() {
  return (
    <>
      <NewsRow>
        <NewsItem top>
          <a
            href="https://techcrunch.com/2021/04/22/to-ensure-inclusivity-the-biden-administration-must-double-down-on-ai-development-initiatives/?tpcc=ECTW2020"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: carbon }}
          >
            <Headline5>
              To ensure inclusivity, the Biden administration must double down
              on AI development initiatives
            </Headline5>
          </a>
          <Caption>APRIL 22, 2021</Caption>
        </NewsItem>
        <NewsItem top>
          <a
            href="https://www.nytimes.com/2021/04/16/business/artificial-intelligence-regulation.html"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: carbon }}
          >
            <Headline5>
              Europe Proposes Strict Rules for Artificial Intelligence
            </Headline5>
          </a>
          <br />
          <Caption>APRIL 21, 2021</Caption>
        </NewsItem>
      </NewsRow>
      <NewsRow>
        <NewsItem>
          <a
            href="https://www.ftc.gov/news-events/blogs/business-blog/2021/04/aiming-truth-fairness-equity-your-companys-use-ai"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: carbon }}
          >
            <Headline5>
              Aiming for truth, fairness, and equity in your company’s use of AI
            </Headline5>
          </a>
          <br />
          <Caption>APRIL 19, 2021</Caption>
        </NewsItem>
        <NewsItem>
          <a
            href="/blog/308ea1d8-a7fa-11eb"
            style={{ textDecoration: "none", color: carbon }}
          >
            <Headline5>
              What’s in a name? AI Global is now Responsible AI Institute
            </Headline5>
          </a>
          <br />
          <Caption>APRIL 28, 2021</Caption>
        </NewsItem>
      </NewsRow>
    </>
  );
}

export default News;
