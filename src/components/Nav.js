import React, { Component } from "react";

import navStyles from "../modules/nav.module.scss";

class Nav extends Component {
  render() {
    return (
      <div>
        <nav>
          <div>
            <h1 className={navStyles.title}>ALL IS WELL.</h1>
          </div>
          <ul className={navStyles.navLinks}>
            <a className={navStyles.links} href="#/store">
              <li>
                <h4>Store</h4>
              </li>
            </a>
            <a className={navStyles.links} href="#/events">
              <li>
                {" "}
                <h4>Events</h4>
              </li>
            </a>

            <a className={navStyles.links} href="#/about">
              <li>
                {" "}
                <h4>About</h4>
              </li>
            </a>
            <a className={navStyles.links} href="/">
              <li>
                {" "}
                <h4>Home</h4>
              </li>
            </a>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
