import React from "react";
import styled, {css} from "styled-components";
import { Row } from "./Blocks";
import { Headline2, Headline5 } from "./Text";
import { StyledLink } from "./StyledLink";

const carbon = "#2f2d34";
const gray = "#797b80";

const NewsRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
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

function News({title}) {
  return (
    <Row gray>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          marginBottom: "40px",
        }}
      >
        <Headline2>{title}</Headline2>
        <StyledLink text="More News" link="/"/>
      </div>
      <NewsRow>
        <NewsItem top>
          <a href="/news" style={{ textDecoration: "none", color: carbon }}>
            <Headline5>
              2020 AI Global Awards Recognize Standout Global Leaders in
              Responsible and Ethical AI
            </Headline5>
          </a>
          <Caption>MAR 31</Caption>
        </NewsItem>
        <NewsItem top>
          <a href="/news" style={{ textDecoration: "none", color: carbon }}>
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
          <a href="/news" style={{ textDecoration: "none", color: carbon }}>
            <Headline5>
              2020 AI Global Awards Recognize Standout Global Leaders in
              Responsible and Ethical AI
            </Headline5>
          </a>
          <Caption>MAR 31</Caption>
        </NewsItem>
        <NewsItem>
          <a href="/news" style={{ textDecoration: "none", color: carbon }}>
            <Headline5>
              2020 AI Global Awards Recognize Standout Global Leaders in
              Responsible and Ethical AI
            </Headline5>
          </a>
          <Caption>MAR 31</Caption>
        </NewsItem>
      </NewsRow>
    </Row>
  );
}

export default News;
