import styled from "styled-components";

export const JumboContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin: 100px 0;

  @media screen and (max-width: 1190px) {
    flex-direction: column;

    img {
      margin-top: 500px;
      right: 0;
      width: 100vw;
      height: auto;
    }
  }

  @media screen and (max-width: 800px) {
    img {
      margin-top: 430px;
    }
  }

  @media screen and (max-width: 450px) {
    img {
      margin-top: 500px;
    }
  }

  @media screen and (max-width: 400px) {
    img {
      margin-top: 550px;
      height: 40vh;
      width: auto;
    }
  }

  @media screen and (max-width: 350px) {
    img {
      margin-top: 620px;
    }
  }
`;

export const JumboText = styled.div`
  min-width: 50%;
  max-width: 600px;
  z-index: 5;

  @media screen and (max-width: 1190px) {
    display: flex;
    flex-direction: column;

    button {
      align-self: center;
    }
  }

  @media screen and (max-width: 710px) {
    br {
      display: none;
    }
    button {
      margin-top: 10px;
    }
  }
`;
