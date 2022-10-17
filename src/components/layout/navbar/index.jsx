import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { User, Briefcase, Feather, GitHub } from "react-feather"

import { NavbarElement, NavbarList, NavbarLogo } from "./style"

const Navbar = ({ siteTitle }) => (
  <nav>
    <div className="container">
      <NavbarElement>
        <NavbarLogo>
          <h3>
            <Link to="/">{siteTitle}</Link>
          </h3>
        </NavbarLogo>
        <div className="main-navigation">
          <NavbarList>
            <li>
              <Link to="/" className="lined-link" activeClassName="active">
                {" "}
                <User /> <span> About </span>{" "}
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                to="https://github.com/chasen-bettinger"
                className="lined-link"
                activeClassName="active"
              >
                {" "}
                <GitHub /> <span> GitHub </span>{" "}
              </Link>
            </li>
            {/* <li>
              <Link to="/works" className="lined-link" activeClassName="active">
                {" "}
                <Briefcase /> <span> Portfolio </span>{" "}
              </Link>
            </li> */}
            <li>
              <Link to="/blog" className="lined-link" activeClassName="active">
                {" "}
                <Feather /> <span> Blog </span>{" "}
              </Link>
            </li>
          </NavbarList>
        </div>
      </NavbarElement>
    </div>
  </nav>
)

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
