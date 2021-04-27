import styled, { css } from "styled-components";

const ghost = "#f6f6f6";
const carbon = "#2f2d34";

export const Jumbotron = styled.div`
  display: flex;
  max-width: 100%;
  align-items: center;
  padding: 120px 0px;
  margin-bottom: 20px;

  ${(props) =>
    props.gray &&
    css`
      background-color: ${ghost};
    `}

  ${(props) =>
    props.dark &&
    css`
      background-color: ${carbon};
    `}


  @media screen and (max-width: 1190px) {
    flex-direction: column;
    padding: 80px 100px;
    margin-bottom: 650px;
    ${(props) =>
      props.text &&
      css`
        margin-bottom: 100px;
        padding-bottom: 0px;
      `}

    .jumbo-text {
      order: 1 !important;
      margin-bottom: 40px;
    }
    .jumbo-image {
      align-self: center !important;
      margin-bottom: 80px;
    }

    .member-image {
      margin-left: 0 !important;
      margin-top: 20px;
    }
  }

  @media screen and (max-width: 800px) {
    margin-bottom: 400px;
    ${(props) =>
      props.text &&
      css`
        margin-bottom: 0px;
        padding-bottom: 0px;
      `}
  }

  @media screen and (max-width: 585px) {
    padding: 45px 35px;
    ${(props) =>
      props.text &&
      css`
        margin-bottom: 0;
        padding-bottom: 0px;
      `}

    .jumbo-image {
      margin-bottom: 45px;
    }
  }

  @media screen and (max-width: 475px) {
    margin-bottom: ${(props) => (props.top ? "300px" : "200px")};

    ${(props) =>
      props.text &&
      css`
        margin-bottom: 0;
        padding-bottom: 0;
      `}
  }

  @media screen and (max-width: 350px) {
    margin-bottom: ${(props) => (props.top ? "250px" : "100px")};
    ${(props) =>
      props.text &&
      css`
        margin-bottom: 0;
        padding-bottom: 0;
      `}
  }
`;

export const JumboText = styled.div`
  min-width: ${(props) => (props.small ? "30%" : "50%")};
  margin: ${(props) => (props.right ? "0px 0px 0px 50%" : "0px 0px 0px 100px")};
  z-index: 8;

  @media screen and (max-width: 1190px) {
    display: flex;
    margin: 0;
    max-width: 555px;
    flex-direction: column;
    button {
      align-self: center;
    }
  }

  @media screen and (max-width: 800px) {
    max-width: auto;
    br {
      display: none;
    }
    button {
      margin-top: 10px;
    }
  }
`;

export const JumboImage = styled.div`
  @media screen and (max-width: 1190px) {
    img {
      margin-top: ${(props) => (props.first ? "1200px" : "600px")};
      right: 0;
      width: 100vw;
      height: auto;
    }
  }

  @media screen and (max-width: 800px) {
    img {
      ${(props) =>
        props.first &&
        css`
          margin-top: 1100px;
        `}
    }
  }

  @media screen and (max-width: 600px) {
    img {
      margin-top: ${(props) => (props.first ? "700px" : "500px")};
    }
  }

  @media screen and (max-width: 400px) {
    img {
      margin-top: ${(props) => (props.first ? "750px" : "550px")};
    }
  }
  @media screen and (max-width: 385px) {
    img {
      margin-top: ${(props) => (props.first ? "800px" : "600px")};
    }
  }
  @media screen and (max-width: 350px) {
    img {
      margin-top: ${(props) => (props.first ? "950px" : "650px")};
    }
  }
  @media screen and (max-width: 280px) {
    img {
      display: none;
    }
  }
`;

export const GrayPanel = styled.div`
  padding: 50px 100px;
  background-color: ${ghost};
  display: flex;
  flex-direction: column;
  max-width: 50%;

  @media screen and (max-width: 1190px) {
    min-width: 100%;
    margin: 40px 0px;
    align-items: center;
  }

  @media screen and (max-width: 600px){
    max-width: 100%;
    padding: 35px;
  }
`;

export const Row = styled.div`
  max-width: 100%:
  display: flex;
  flex-direction: column;
  padding: 75px 100px;

  ${(props) =>
    props.gray &&
    css`
      background-color: ${ghost};
    `}
  ${(props) =>
    props.dark &&
    css`
      background-color: ${carbon};
    `}

  ${(props) =>
    props.small &&
    css`
      padding-bottom: 25px;
    `}
    @media screen and (max-width: 585px) {
      padding: 45px 35px;
    }
`;

export const Divider = styled.div`
  width: 100%;
  margin: 20px 0px;
  min-height: 2px;
  border-bottom: 2px solid ${carbon};
`;

export const Grid = styled.div`
  margin-top: 62px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: ${(props) => (props.cards ? "row" : "column")};
  justify-content: space-between;
  align-items: center;
  ${(props) =>
    props.cards &&
    css`
      width: 100%;
    `}
`;

export const GridRow = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  height: ${(props) => (props.auto ? "auto" : "150px")};
  img {
    height: auto;
  }

  @media screen and (max-width: 1000px) {
    margin-top: ${(props) => (props.first ? "0px" : "100px")};
  }

  @media screen and (max-width: 585px) {
    margin-top: 0;
  }
`;

export const GridContainer = styled.div`
  width: 25%;
  text-align: center;
  margin: 0;
  margin-top: 20px;

  @media screen and (max-width: 1000px) {
    width: 48%;
  }

  @media screen and (max-width: 585px) {
    width: 40%;
  }
`;

export const Card = styled.div`
  width: 26%;
  min-height: 500px;
  border: 1px solid ${carbon};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px;

  @media screen and (max-width: 1190px) {
    width: 100%;
    margin-top: 30px;
  }
`;

export const TitleLink = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 40px;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;
