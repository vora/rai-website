import styled from "styled-components";

/* Font colors*/
const carbon = "#2f2d34";
const blanco = "#ffffff";
const gravy = "#797b80";

/* HEADLINES */
export const Headline1 = styled.h1`
  font-family: Libre Caslon Text;
  font-style: normal;
  font-weight: bold;
  font-size: 60px;
  line-height: 76px;
  letter-spacing: -0.03em;
  margin: 0px 0px 20px 0px;
  color: ${(props) => (props.dark ? blanco : carbon)};

  @media screen and (max-width: 600px) {
    font-size: 40px;
    line-height: 48px;
    letter-spacing: -0.02em;
  }
`;
export const Headline2 = styled.h1`
  font-family: Libre Caslon Text;
  font-style: normal;
  font-weight: bold;
  font-size: 44px;
  line-height: 60px;
  letter-spacing: -0.03em;
  margin: 0px 0px 20px 0px;
  color: ${(props) => (props.dark ? blanco : carbon)};

  @media screen and (max-width: 600px) {
    font-size: 32px;
    line-height: 42px;
    letter-spacing: -0.02em;
  }
`;
export const Headline3 = styled.h1`
  font-family: Libre Caslon Text;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: -0.02em;
  margin: 0px 0px 20px 0px;
  color: ${(props) => (props.dark ? blanco : carbon)};

  @media screen and (max-width: 600px) {
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.02em;
  }
`;
export const Headline4 = styled.h1`
  font-family: Libre Caslon Text;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 42px;
  letter-spacing: -0.02em;
  margin: 0px 0px 20px 0px;
  color: ${(props) => (props.dark ? blanco : carbon)};
`;
export const Headline5 = styled.h1`
  font-family: Libre Caslon Text;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.02em;
  margin: 0px 0px 20px 0px;
  color: ${(props) => (props.dark ? blanco : carbon)};
`;

/* BODY FONTS */
export const LargeBody = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 32px;
  margin: 0px 0px 12px 0px;
  color: ${(props) => (props.dark ? blanco : carbon)};
  border-left: ${(props) => (props.bordered ? "3px solid " + carbon : "none")};
  padding-left: ${(props) => (props.bordered ? "20px" : "0")};
`;
export const MediumBody = styled.p`
  font-style: normal;
  font-weight: ${(props) => (props.bold ? "bold" : "300")};
  font-size: 18px;
  line-height: 28px;
  color: ${(props) => (props.dark ? blanco : carbon)};
  border-left: ${(props) => (props.bordered ? "3px solid " + carbon : "none")};
  padding-left: ${(props) => (props.bordered ? "20px" : "0")};
  margin: ${(props) =>
    props.bordered ? "0px 0px 20px 0px" : "0px 0px 12px 0px"};

  @media screen and (max-width: 600px) {
    font-size: 16px;
    line-height: 24px;
  }
`;
export const SmallBody = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  margin: 0px 0px 12px 0px;
  color: ${(props) => (props.dark ? blanco : carbon)};

  @media screen and (max-width: 600px) {
    font-size: 12px;
    line-height: 20px;
  }
`;

/* EXTRAS */
export const Heading1 = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 44px;
  margin: 0px 0px 20px 0px;
  color: ${(props) => (props.dark ? blanco : carbon)};
`;
export const Heading2 = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  margin: 0px 0px 20px 0px;
  color: ${(props) => (props.dark ? blanco : carbon)};
`;
export const Heading3 = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  margin: 0px 0px 20px 0px;
  color: ${(props) => (props.dark ? blanco : carbon)};

  @media screen and (max-width: 600px) {
    font-size: 18px;
    line-height: 24px;
  }
`;
export const Caption = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  margin: 0px 0px 12px 0px;
  color: ${(props) => (props.dark ? blanco : carbon)};
`;
export const UpperCaption = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 1.5px;
  margin: 0px 0px 12px 0px;
  color: ${gravy};
`;
export const BlankLink = styled.a`
  text-decoration: none;
  color: ${carbon};
`