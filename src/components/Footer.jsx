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

  @media screen and (max-width: 585px) {
    padding: 32px 32px 32px 32px;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 41px;

  @media screen and (max-width: 1030px) {
    img {
      width: 215.11px;
      height: 49px;
    }
  }

  @media screen and (max-width: 585px) {
    flex-direction: column;
  }

  @media screen and (max-width: 400px) {
    img {
      margin-bottom: 20px;
      width: 100%;
      height: auto;
    }
  }
`;

const Links = styled.div`
  display: flex;
  min-width: 65%;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1190px) {
    a {
      font-size: 16px;
      line-height: 28px;
    }
  }

  @media screen and (max-width: 1150px) {
    min-width: 65%;
  }

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: flex-end;
    min-width: 40%;

    a {
      margin-bottom: 10px;
    }

    a:nth-of-type(6) {
      text-decoration: none;
      font-weight: bold;
    }

    img {
      margin-bottom: 10px;
      width: 100%;
    }
  }
`;

const Link = styled.a`
  color: #ffffff;
  text-decoration: ${(props) => (props.member ? "underline" : "none")};
  font-weight: ${(props) => (props.member ? "bold" : "normal")};
  cursor: pointer;
  margin-left: ${(props) => (props.icon ? "26px" : "0")};
  min-width: 32px;
`;

const Icons = styled.div`
  min-width: 50%;
  display: flex;
  justify-content: flex-end;
  min-height: 30px;

  @media screen and (max-width: 585px) {
    width: 100%;
    justify-content: space-between;

    a {
      margin-left: 0;
      overflow: auto;
    }
  }
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
            placeholder="blurred"
          />
        </a>
        <Links>
          <Link href="/faq">FAQ</Link>
          <Link href="/certification">RAI Certification</Link>
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
          <StaticImage
            src="../images/icons/twitter.png"
            alt="twitter"
            placeholder="blurred"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/company/responsible-ai-institute/"
          target="_blank"
          rel="noopener noreferrer"
          icon
        >
          <StaticImage
            src="../images/icons/linkedin.png"
            alt="linkedin"
            placeholder="blurred"
          />
        </Link>
        <Link
          href="https://www.facebook.com/RAI-Institute-101416012057802"
          target="_blank"
          rel="noopener noreferrer"
          icon
        >
          <StaticImage
            src="../images/icons/facebook.png"
            alt="facebook"
            placeholder="blurred"
          />
        </Link>
        <Link
          href="https://www.instagram.com/responsible.ai/"
          target="_blank"
          rel="noopener noreferrer"
          icon
        >
          <StaticImage
            src="../images/icons/instagram.png"
            alt="instagram"
            placeholder="blurred"
          />
        </Link>
      </Icons>
    </FooterContainer>
  );
}

export default Footer;
