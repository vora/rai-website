/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-restricted-syntax */
/* eslint-disable eqeqeq */
/* eslint-disable no-nested-ternary */
// a gallery view of pictures with tabs to organize pictures
// PROPS
// slot **OPTIONAL:
//      a string that determines if the tabs are rendered to the left or right
//      (left, right); default is left
// tabs **REQUIRED:
//      object of tabnames and their respective image srcs
//      the object must have the name of the tabs of the key and values be a list of the image srcs
//      example: {tab1: ["algora.png", "argo-design.png", "argo-design.png", "algora.png"], tab2: ["argo-design.png", "algora.png", "argo-design.png", "algora.png", "argo-design.png"], tab3: ["algora.png", "argo-design.png", "argo-design.png", "algora.png", "argo-design.png", "algora.png", "argo-design.png", "algora.png", "argo-design.png", "argo-design.png", "algora.png", "argo-design.png", "algora.png", "argo-design.png"]}
// default **OPTIONAL:
//      a string that determines the initial tab that is selected
//      the string must be the name of tab/key in the tabs object; default is the first tab

import React, { useState } from "react";
import styled from "styled-components";

const StyledTabbedGallery = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TabsContainer = styled.div`
  justify-content: ${(props) =>
    props.slot == "left"
      ? "flex-start"
      : props.slot == "right"
      ? "flex-end"
      : "flex-start"};
  height: min-content;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const Tab = styled.div`
  width: min-content;
  height: min-content;
  border-bottom: ${(props) => (props.selected ? `1px solid black` : "")};
  color: ${(props) =>
    props.selected ? props.theme.color.dark : props.theme.color.mediumDark};
  margin-left: ${(props) =>
    props.slot == "left" ? "0px" : props.slot == "right" ? "20px" : "0px"};
  margin-right: ${(props) =>
    props.slot == "left" ? "20px" : props.slot == "right" ? "0px" : "20px"};
  font-weight: bold;
  cursor: pointer;
  :hover {
    opacity: 0.6;
  }
`;

const Gallery = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    props.numCols ? `repeat(${props.numCols}, 1fr)` : "1fr 1fr 1fr 1fr"};
  grid-auto-rows: min-content;
  gap: 20px;
  margin-top: 40px;
`;
const ImgContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
`;

const Img = styled.img`
  flex: 1;
  width: auto;
  max-width: 100%;
  object-fit: contain;
  padding: 10px;
  box-sizing: border-box;
`;

function TabbedGallery(props) {
  const [selected, setSelected] = useState(
    props.default || Object.keys(props.tabs)[0]
  );

  function getTabs() {
    let tabsList = [];
    for (const key of Object.keys(props.tabs)) {
      tabsList = [
        ...tabsList,
        <Tab
          selected={key == selected}
          onClick={() => setSelected(key)}
          slot={props.slot}
        >
          {key}
        </Tab>,
      ];
    }
    return tabsList;
  }

  function getImages() {
    let imagesList = [];
    for (const src of props.tabs[selected]) {
      imagesList = [
        ...imagesList,
        <ImgContainer>
          <Img src={src} />
        </ImgContainer>,
      ];
    }
    return imagesList;
  }

  return (
    <StyledTabbedGallery>
      <TabsContainer slot={props.slot}>{getTabs()}</TabsContainer>
      <Gallery>{getImages()}</Gallery>
    </StyledTabbedGallery>
  );
}

// eslint-disable-next-line import/no-default-export
export default TabbedGallery;
