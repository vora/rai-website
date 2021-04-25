import styled, { css } from "styled-components";

const ghost = "#f6f6f6";
const blanco = "#ffffff";
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
  }

  @media screen and (max-width: 585px) {
    padding: 45px 35px;
  }
`;

export const JumboText = styled.div`
  min-width: 50%;
  margin: ${(props) => (props.right ? "0px 0px 0px 50%" : "0px 0px 0px 100px")};
  z-index: 20;

  @media screen and (max-width: 1190px) {
    display: flex;
    margin: 0;
    flex-direction: column;
    button {
      align-self: center;
    }
  }

  @media screen and (max-width: 800px) {
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

  @media screen and (max-width: 600px) {
    img {
      margin-top: 500px;
    }
  }
`;

export const GrayPanel = styled.div`
  padding: 50px 100px;
  background-color: ${ghost};
  display: flex;
  flex-direction: column;
  max-width: 50%;
`;

export const Row = styled.div`
  max-width: 100%:
  display: flex;
  flex-direction: column;
  padding: 120px 100px;

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
`;

export const Divider = styled.div`
  width: 100%;
  margin: 20px 0px;
  min-height: 2px;
  border-bottom: 2px solid ${carbon};
`;

export const Grid = styled.div`
  margin-top: 62px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const GridRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 150px;
  img {
    height: auto;
  }
`;

export const GridContainer = styled.div`
  width: 25%;
  text-align: center;
`;
