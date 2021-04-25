import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";

// Import images
import hamburger from "../images/icons/hamburger.png";
import close from "../images/icons/exit.png";
import logo from "../images/rai-icons/rai-logo-text.png";

const Container = styled.div`
  margin: 0;
  padding: 40px 100px 40px 100px;
  z-index: 10;

  @media screen and (max-width: 585px) {
    padding: 35px 35px 45px 35px;
  }
`;

const NavContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1030px) {
    .logo {
      width: 215.11px;
      height: 49px;
    }
  }
`;

const Navigation = styled.div`
  display: flex;
  min-width: 50%;
  justify-content: space-between;

  @media screen and (max-width: 1290px) {
    min-width: 65%;
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const Option = styled.div`
  padding: 15px 0px 15px 0px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;

  &:hover div {
    display: block;
  }

  ${(props) =>
    props.animate &&
    css`
      &:hover div:nth-of-type(1) {
        width: 100%;
      }
    `}
`;

const Dropdown = styled.div`
  display: none;
  position: absolute;
  background-color: #ffffff;
  min-width: 140px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 100;
  margin-top: 40px;
  text-align: start;

  a {
    font-weight: normal;
    color: black;
    padding: 5px 16px;
    text-decoration: none;
    display: block;
    font-size: 12px;
  }

  a:hover {
    background-color: #f6f6f6;
  }
`;

const Link = styled.a`
  font-style: normal;
  text-decoration: none;
  font-weight: ${(props) => (props.highlight ? "bold" : "normal")};
  font-size: ${(props) => (props.small ? "14px" : "16px")};
  line-height: ${(props) => (props.small ? "18px" : "28px")};
  color: #2f2d34;
  margin-bottom: ${(props) => (props.small ? "10px" : "5px")};
`;

const Line = styled.div`
  width: 0px;
  height: 2px;
  background-color: #2f2d34;
  transition: 0.3s;
`;

const CollapseContainer = styled.div`
  display: none;

  @media screen and (max-width: 1000px) {
    display: block;
    min-height: 20px;
  }
`;

const SlideAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(15px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
`;

const Menu = styled.div`
  max-width: 100vw;
  padding: 50px 100px 100px 100px;
  top: 0;
  bottom: 0;
  height: 500vh;
  left: 0;
  right: 0;
  background-color: #f6f6f6;
  position: absolute;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${SlideAnimation} ease 0.3s;

  @media screen and (min-width: 1000px) {
    display: none;
  }

  @media screen and (max-width: 585px) {
    padding: 50px 35px 105.4px 35px;
  }
`;

const Break = styled.div`
  width: 80%;
  margin: 10px 0px 10px 0px;
  min-height: 2px;
  border-bottom: 2px solid #797b80;
`;

function Collapse() {
  const [show, setShow] = useState(false);
  return (
    <>
      <CollapseContainer>
        {!show && (
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setShow(true);
            }}
          >
            <img src={hamburger} alt="hamburger" />
          </a>
        )}
      </CollapseContainer>
      {show && (
        <Menu>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setShow(false);
            }}
            style={{ alignSelf: "flex-end", marginBottom: "20px" }}
          >
            <img src={close} alt="close" />
          </a>
          <Link href="/certification" highlight>
            RAI Certification
          </Link>
          <Break />
          <Link href="/tools" highlight>
            Programs and Tools
          </Link>
          <Break />
          <Link href="/news" highlight>
            News
          </Link>
          <Link href="/blog" small>
            Blog
          </Link>
          <Link href="/calendar" small>
            Events Calendar
          </Link>
          <Break />
          <Link href="/about" highlight>
            About RAI
          </Link>
          <Break />
          <Link href="/membership" highlight>
            Become a Member
          </Link>
        </Menu>
      )}
    </>
  );
}

function Navbar() {
  return (
    <Container>
      <NavContainer>
        <a href="/">
          <img src={logo} alt="rai-logo" className="logo" />
        </a>
        <Navigation>
          <Option animate>
            <Link href="/certification">RAI Certification</Link>
            <Line />
          </Option>
          <Option animate>
            <Link href="/tools">Programs and Tools</Link>
            <Line />
          </Option>
          <Option animate>
            <Link href="/news">News</Link>
            <Line />
            <Dropdown>
              <a href="/blog">Blog</a>
              <a href="/calendar">Events Calendar</a>
            </Dropdown>
          </Option>
          <Option animate>
            <Link href="/about">About RAI</Link>
            <Line />
          </Option>
          <Option>
            <Link href="/membership" highlight>
              Become a Member
            </Link>
          </Option>
        </Navigation>
        <Collapse />
      </NavContainer>
    </Container>
  );
}

export default Navbar;
