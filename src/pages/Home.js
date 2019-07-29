import React, { Component } from "react";

import homeStyles from "../modules/home.module.scss";
import tomatosoup from "../images/tomatosoup.jpg";

class Home extends Component {
  render() {
    return (
      <div className={homeStyles.mainContainer}>
        <img
          className={homeStyles.titleImage}
          alt="titleImage"
          src={tomatosoup}
        />
        <div className={homeStyles.overlay} />
        <div className={homeStyles.content}>
          <h2 className={homeStyles.titleContent}>ALL IS WELL</h2>
          <p className={homeStyles.paragraphContent}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className={homeStyles.content}>
          <h2 className={homeStyles.titleContent}>THE ISSUE</h2>
          <p className={homeStyles.paragraphContent}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className={homeStyles.content}>
          <h2 className={homeStyles.titleContent}>THE STORE</h2>
          <p className={homeStyles.paragraphContent}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
