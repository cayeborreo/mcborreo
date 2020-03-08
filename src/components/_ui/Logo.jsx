import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const LogoText = styled("p")`
  margin: 0;
  font-family: "Inter";
  font-weight: 900;
  font-size: 2rem;
  text-decoration: none;

  a {
    text-decoration: none;
  }
`

const Logo = () => (
  <LogoText>
    <Link to="/">
      <span style={{ color: "#F9C847" }}>&lt;</span>
      <span style={{ color: "#E0B944" }}>r</span>
      <span style={{ color: "#E2AE27" }}>ph </span>
      <span style={{ color: "#E0B944" }}>/</span>
      <span style={{ color: "#F9C847" }}>></span>
    </Link>
  </LogoText>
)

export default Logo
