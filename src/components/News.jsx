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
          <a href="/page" style={{ textDecoration: "none", color: carbon }}>
            <Headline5>
              2020 AI Global Awards Recognize Standout Global Leaders in
              Responsible and Ethical AI
            </Headline5>
          </a>
          <Caption>MAR 31</Caption>
        </NewsItem>
        <NewsItem top>
          <a href="/page" style={{ textDecoration: "none", color: carbon }}>
            <Headline5>
              2020 AI Global Awards Recognize Standout Global Leaders in
              Responsible and Ethical AI
            </Headline5>
          </a>
          <Caption>MAR 31</Caption>
        </NewsItem>
      </NewsRow>
      <NewsRow>
        <NewsItem>
          <a href="/page" style={{ textDecoration: "none", color: carbon }}>
            <Headline5>
              2020 AI Global Awards Recognize Standout Global Leaders in
              Responsible and Ethical AI
            </Headline5>
          </a>
          <Caption>MAR 31</Caption>
        </NewsItem>
        <NewsItem>
          <a href="/page" style={{ textDecoration: "none", color: carbon }}>
            <Headline5>
              2020 AI Global Awards Recognize Standout Global Leaders in
              Responsible and Ethical AI
            </Headline5>
          </a>
          <Caption>MAR 31</Caption>
        </NewsItem>
      </NewsRow>
    </>
  );
}

export default News;
