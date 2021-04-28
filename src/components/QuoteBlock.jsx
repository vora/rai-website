import React from "react";
import styled from "styled-components";
import { Headline5, MediumBody } from "./Text";

const carbon = "#2f2d34";

const QuoteContainer = styled.div`
  padding-left: 40px;
  border-left: 3px solid ${carbon};
  margin: 80px 0px;
  width: 60%;

  @media screen and (max-width: 950px){
      width: 80%;
  }
`;

function QuoteBlock({quote, title, author}) {
  return (
    <QuoteContainer>
      <Headline5>{"“" + quote + "”"}</Headline5>
      <MediumBody>
        <strong>{author}</strong>, {title}
      </MediumBody>
    </QuoteContainer>
  );
}

export default QuoteBlock;
