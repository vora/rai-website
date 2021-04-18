import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
const Nav = styled.div`
  margin: 5vh 9vh 40px 9vh;
  display: flex;
  justify-content: space-between;
`
export default function Navbar({ children }) {
  return (
    <Nav>
      <a href="/">
      <StaticImage src="../images/logo.png" alt="RAI logo" />
      </a>

    </Nav>
  )
}