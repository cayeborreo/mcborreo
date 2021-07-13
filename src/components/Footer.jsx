import React from "react"
import styled from "@emotion/styled"
import colors from "styles/colors"
import Logo from "components/_ui/Logo"

const FooterContainer = styled("div")`
  font-size: 0.75em;
  color: ${colors.grey700};
  padding-top: 3.75em;
  padding-bottom: 3em;
  text-align: center;
  svg {
    max-width: 50px;
  }
`

const FooterAuthor = styled("a")`
  color: ${colors.grey700};
  text-decoration: none;

  &:hover {
    color: ${colors.teal500};
  }
`

const Footer = () => (
  <FooterContainer>
    <Logo />
    <p>
      © {new Date().getFullYear()} — Designed & developed<br />
      by <FooterAuthor href="https://marguerite.io">Marguerite Roth</FooterAuthor>{" "}
      & <FooterAuthor href="https://thepharmacist.codes">Caye Borreo</FooterAuthor>
    </p>
  </FooterContainer>
)

export default Footer
