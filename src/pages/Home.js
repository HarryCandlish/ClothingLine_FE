import React, { Component } from "react";

import homeStyles from "../modules/home.module.scss";
import tomatosoup from "../images/tomatosoup.jpg";
import philosophy from "../images/philosophy.png";
import data from "../images/data.png";
import tshirt from "../images/tshirt.png";

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
        <a href="/">
          <div className={homeStyles.content}>
            <img
              alt="philosophy"
              src={philosophy}
              className={homeStyles.contentTitle}
            />
            <p className={homeStyles.paragraphContent}>
              "All is well" decerns the concept, although struggling we're able
              to hold up our head.
            </p>
          </div>
        </a>
        <a href="/">
          <div className={homeStyles.content}>
            <img alt="data" src={data} className={homeStyles.contentTitle} />
            <p className={homeStyles.paragraphContent}>
              Data demonstrates the need for action and better resources in
              tackling the ecademic.
            </p>
          </div>
        </a>
        <a href="/">
          {" "}
          <div className={homeStyles.content}>
            <img
              alt="tshirt"
              src={tshirt}
              className={homeStyles.contentTitle}
            />
            <p className={homeStyles.paragraphContent}>
              All procedings go into finacing mental health resources, and
              helping people get help.
            </p>
          </div>
        </a>
      </div>
    );
  }
}

export default Home;
