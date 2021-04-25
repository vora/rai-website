import React from "react";
import styled from "styled-components";
import { SmallBody } from "./Text";

const carbon = "#2f2d34";

const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  top: 0;
  background-color: ${carbon};
  padding: 5px;

  @media screen and (max-width: 800px){
      display: none;
  }
`;

function Banner({ text }) {
  return (
    <BannerContainer>
      <SmallBody dark style={{ marginBottom: "0" }}>
        {text}
      </SmallBody>
    </BannerContainer>
  );
}

export default Banner;
