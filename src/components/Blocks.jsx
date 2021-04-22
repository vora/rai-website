import styled from "styled-components";

const ghost = "#f6f6f6";
const blanco = "#ffffff";

export const Jumbotron = styled.div`
  display: flex;
  max-width: 100%;
  align-items: center;
  padding: 120px 0px;
  background-color: ${(props) => (props.colored ? ghost : blanco)};

  @media screen and (max-width: 1190px) {
    flex-direction: column;
    margin: 0px 100px;
    padding: 80px 0px;
  }

  @media screen and (max-width: 585px) {
    margin: 0px 35px;
  }
`;

export const JumboText = styled.div`
  min-width: 50%;
  margin: ${(props) =>
    props.right ? "0px 100px 0px 0px" : "0px 0px 0px 100px"};
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
      margin-top: 500px;
      right: 0;
      width: 100vw;
      height: auto;
    }
  }

  @media screen and (max-width: 1190px) {
      img {
          margin-top: 600px;'
      }
  }

  @media screen and (max-width: 600px){
      img {
          margin-top: 400px;
      }
  }
`;
