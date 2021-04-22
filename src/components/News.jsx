import React from "react";
import styled, {css} from "styled-components";
import { Headline5 } from "./Text";
import arrow from "../images/icons/arrow.png";

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

const LinkContainer = styled.div`
  display: flex;
  margin: 10px 0px 10px 0px;
  justify-content: space-between;
  cursor: pointer;
  max-width: 150px;
  align-items: center;
`;

const CustomLink = styled.a`
  color: #2f2d34;
  font-size: 18px;
  letter-spacing: 0.01em;
  line-height: 28px;
  font-style: normal;
  font-weight: normal;
  text-decoration-line: underline;
`;

function StyledLink({ text, link }) {
  return (
    <LinkContainer>
      <CustomLink href={link}>{text}</CustomLink>
      <img src={arrow} alt="arrow" style={{ marginLeft: "5px" }} />
    </LinkContainer>
  );
}

function News() {
  return (
    <>
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
    </>
  );
}

export default News;
