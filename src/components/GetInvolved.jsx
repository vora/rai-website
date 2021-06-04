import { navigate } from "gatsby-link";
import React, { useState } from "react"
import styled from "styled-components"
import { Row } from "./Blocks";
import { PrimaryBtn } from "./Buttons"
import { Headline2, LargeBody } from "./OldText"
import StyledLink from "../components/StyledLink";


const Link = styled.a`
  color: ${props => props.theme.color.light};
  text-decoration: ${(props) => (props.highlight ? "underline" : "none")};
  width: ${(props) => (props.highlight ? "fit-content" : "30%")};

  &:hover {
    color: ${props => props.theme.color.mediumLight};
    opacity: .6;
  }

  @media screen and (max-width: 700px) {
    width: ${(props) => (props.highlight ? "fit-content" : "45%")};

    p {
      font-size: 18px;
      line-height: 28px;
    }
  }
`;

function GetInvolved(props) {

    return (
    <Row
        dark
        style={{
          margin: "120px 115px",
          textAlign: "center",
          alignItems: "center"
        }}
    >
        <Headline2 style={{ color: "white" }}>Get Involved</Headline2>
        <LargeBody
          style={{
            color: "white",
            marginBottom: "50px",
          }}
        >
            For more information, please email us at {' '}
            <Link
                href="mailto:admin@responsible.ai"
                target="_blank"
                rel="noopener noreferrer"
                highlight
            >
                admin@responsible.ai            
            </Link>,
            or {' '}
            <Link
                href="/membership"
                rel="noopener noreferrer"
                highlight
            >
                sign up
            </Link>
            {' '}to
            <br /> become a member of RAI. You can also join our mailing
            list to stay informed on the progress.
        </LargeBody>
        <PrimaryBtn onClick={() => navigate("/membership")}>
          Become a Member{" "}
        </PrimaryBtn>
    </Row>
    );
}

export default GetInvolved;
