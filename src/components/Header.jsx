import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import colors from "styles/colors"
import dimensions from "styles/dimensions"
import Logo from "components/_ui/Logo"

const HeaderContainer = styled("div")`
  padding-top: 3.75em;
  padding-bottom: 3em;
`

const HeaderContent = styled("div")`
  display: flex;
  justify-content: space-between;
`

const HeaderLinks = styled("div")`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: 7em;
  justify-content: flex-end;
  width: 100%;
  max-width: 200px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    grid-gap: 5.5em;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    grid-gap: 2.5em;
  }

  a {
    color: currentColor;
    text-decoration: none;
    border-bottom: 3px solid transparent;
    font-weight: 600;
    font-size: 1em;
    height: 100%;
    padding-bottom: 0.75em;
    padding-top: 1.25em;
    display: block;
    position: relative;

    &:after {
      position: absolute;
      content: "";
      bottom: 0;
      width: 36px;
      height: 3px;
      background: transparent;
      bottom: -3px;
      right: 50%;
      margin: 0 -18px 0 0;
      transition: 100ms ease-in-out background;
    }

    &:hover {
      &:after {
        background: ${colors.teal500};
        transition: 100ms ease-in-out background;
      }
    }

    &.Link--is-active {
      &:after {
        background: ${colors.teal600};
        transition: 100ms ease-in-out background;
      }
    }
  }
`

const Header = () => (
  <HeaderContainer>
    <HeaderContent>
      <Logo />
      <HeaderLinks>
        <Link activeClassName="Link--is-active" to="/portfolio">
          Portfolio
        </Link>
        <Link activeClassName="Link--is-active" to="/blog">
          Blog
        </Link>
      </HeaderLinks>
    </HeaderContent>
  </HeaderContainer>
)

export default Header
