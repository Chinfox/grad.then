import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'

import { StyledUl, StyledLi } from '../../theme/globalStyle'

//same for Header & Footer
const NavMenu = StyledUl.extend`
  grid-area: nav;
  padding: 0;
  display: inline-grid;
  grid-template-columns: repeat(5, 1fr);
`

// different colors for links
const NavItem = StyledLi.extend`
  display: inline;
  text-transform: uppercase;
  color: ${props =>
    props['data-header']
      ? props => props.theme.primary.light
      : props => props.theme.white};
  padding: 0.5rem;
`

// different colors for hover
const NavLink = styled(Link).attrs({
  color: props =>
    props['data-header']
      ? props => props.theme.secondary.red
      : props => props.theme.secondary.green
})`
  color: inherit;
  &:visited,
  &:active {
    color: inherit;
  }
  &:hover {
    color: ${props => props.color};
    // border: 1px solid ${props => props.border};
    box-shadow: 0 0 0 1px ${props => props.border};
    transition: all 0.3s ease;
    border-radius: 10px;
    margin: -5px;
    padding: 5px;
  }
  &.activeLink {
    color: ${props => props.theme.secondary.red};
  }
`

NavLink.propTypes = {
  'data-header': PropTypes.bool.isRequired
}

const PageNav = props => (
  <NavMenu>
    <NavItem data-header={props.header}>
      <NavLink
        to="/jobs"
        data-header={props.header}
        activeClassName="activeLink"
      >
        jobs
      </NavLink>
    </NavItem>
    <NavItem data-header={props.header}>
      <NavLink
        to="/learn"
        data-header={props.header}
        activeClassName="activeLink"
      >
        learn
      </NavLink>
    </NavItem>
    <NavItem data-header={props.header}>
      <NavLink
        to="/events"
        data-header={props.header}
        activeClassName="activeLink"
      >
        events
      </NavLink>
    </NavItem>
    <NavItem data-header={props.header}>
      <NavLink
        to="/support"
        data-header={props.header}
        activeClassName="activeLink"
      >
        support
      </NavLink>
    </NavItem>
    <NavItem data-header={props.header}>
      <NavLink
        to="/stories"
        data-header={props.header}
        activeClassName="activeLink"
      >
        stories
      </NavLink>
    </NavItem>
  </NavMenu>
)

PageNav.propTypes = {
  header: PropTypes.bool.isRequired
}

export default PageNav