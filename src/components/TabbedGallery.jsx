const StyledTabbedGallery = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`

const TabsContainer = styled.div`
    height: min-content;
    width: 100%;
    display: flex;
    flex-direction: row;
`

const Tab = styled.div`
  justify-self: ${props => props.slot == "right" ? "flex-start" : props.slot == "left" ? "flex-end" : "flex-start"};
  width: min-content;
  height: min-content;
  border-bottom: ${props => props.selected ? `1px solid black` : ""};
  color: ${props => props.selected ? props.theme.color.dark : props.theme.color.mediumDark};
  margin-left: 20px;
  font-weight: bold;
  cursor: pointer;
  :hover {
    opacity: .6;
  }
`

const Gallery = styled.div`
  display: grid;
  grid-template-columns: ${props => props.numCols ? `repeat(${props.numCols}, 1fr)` : "1fr 1fr 1fr 1fr"};
  grid-auto-rows: min-content;
  gap: 20px;
`
const ImgContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
`

const Img = styled.img`
  flex: 1;
  width: auto;
  max-width: 100%;
  object-fit: contain;
  padding: 10px;
  box-sizing: border-box;
`

function TabbedGallery(props) {
    return (
        <StyledTabbedGallery>
            <TabsContainer>
                {
                }
            </TabsContainer>
            <Gallery>
                {
                }
            </Gallery>
        </StyledTabbedGallery>
    );
}