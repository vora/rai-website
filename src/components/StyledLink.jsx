/* eslint-disable import/no-default-export */
/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import arrow from "../images/icons/arrow.png";

const LinkContainer = styled.div`
  display: flex;
  margin: 10px 0px 10px 0px;
  cursor: pointer;
  max-width: 150px;
  align-items: center;

  :hover {
    opacity: 0.6;
  }
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

export default StyledLink;
