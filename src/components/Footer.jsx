import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const FooterContainer = styled.div`
  background: #2f2d34;
  margin: 0;
  padding: 80px 100px 60px 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const LinksContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 41px;

  @media screen and (max-width: 1030px){
      img{
          width: 214.11px;
          height: 48px;
      }
  }
`;

const Links = styled.div`
  display: flex;
  min-width: 50%;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1150px) {
    min-width: 60%;
  }

  @media screen and (max-width: 1030px){
      a {
          font-size: 16px;
          line-height: 28px;
      }
  }

  @media screen and (max-width: 900px){
      flex-direction: column;
      align-items: flex-end;
      min-width: 40%;
  }
`;

const Link = styled.a`
  color: #ffffff;
  text-decoration: ${(props) => (props.member ? "underline" : "none")};
  cursor: pointer;
  margin-left: ${(props) => (props.icon ? "26px" : "0")}
`;

const Icons = styled.div`
  min-width: 50%;
  display: flex;
  justify-content: flex-end;
`;

function Footer() {
  return (
    <FooterContainer>
      <LinksContainer>
        <a href="/">
          <StaticImage
            src="../images/rai-icons/rai-logo-text-white.png"
            alt="rai-logo"
            width={276}
            height={63}
          />
        </a>
        <Links>
          <Link href="/rail">RAIL Certification</Link>
          <Link href="/tools">Tools</Link>
          <Link href="/news">News</Link>
          <Link href="/about">About RAI</Link>
          <Link href="/membership" member>
            Become a Member
          </Link>
        </Links>
      </LinksContainer>
      <Icons>
        <Link
          href="https://twitter.com/ResponsibleAI"
          target="_blank"
          rel="noopener noreferrer"
          icon
        >
          <StaticImage src="../images/icons/twitter.png" />
        </Link>
        <Link
          href="https://www.linkedin.com/company/ai-global?trk=public_profile_experience-item_result-card_image-click"
          target="_blank"
          rel="noopener noreferrer"
          icon
        >
          <StaticImage src="../images/icons/linkedin.png" />
        </Link>
        <Link
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          icon
        >
          <StaticImage src="../images/icons/facebook.png" />
        </Link>
        <Link
          href="https://www.instagram.com/responsibleaiglobal/"
          target="_blank"
          rel="noopener noreferrer"
          icon
        >
          <StaticImage src="../images/icons/instagram.png" />
        </Link>
      </Icons>
    </FooterContainer>
  );
}

export default Footer;
