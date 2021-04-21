import styled from "styled-components";

export const FullWidthContainer = styled.div`
    position: relative;
    margin-left: ${props => `-${props.theme.pageMargin}`};
    margin-right: ${props => `-${props.theme.pageMargin}`};
    background-color: ${props => props.color || props.theme.color.mediumLight};
`