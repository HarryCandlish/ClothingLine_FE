import React, { Component } from "react";

import frontContentStyles from "../modules/frontcontent.module.scss";
import tomatosoup from "../images/tomatosoup.jpg";
import philosophy from "../images/philosophy.png";
import data from "../images/data.png";
import tshirt from "../images/tshirt.png";

class FrontContent extends Component {
  render() {
    return (
      <div className={frontContentStyles.mainContainer}>
        <img
          className={frontContentStyles.titleImage}
          alt="titleImage"
          src={tomatosoup}
        />
        <div className={frontContentStyles.overlay} />
        <a href="/">
          <div className={frontContentStyles.content}>
            <img
              alt="philosophy"
              src={philosophy}
              className={frontContentStyles.contentTitle}
            />
            <p className={frontContentStyles.paragraphContent}>
              "All is well" decerns the concept, although struggling we're able
              to hold up our head.
            </p>
          </div>
        </a>
        <a href="/">
          <div className={frontContentStyles.content}>
            <img
              alt="data"
              src={data}
              className={frontContentStyles.contentTitle}
            />
            <p className={frontContentStyles.paragraphContent}>
              Data demonstrates the need for action and better resources in
              tackling the ecademic.
            </p>
          </div>
        </a>
        <a href="/">
          {" "}
          <div className={frontContentStyles.content}>
            <img
              alt="tshirt"
              src={tshirt}
              className={frontContentStyles.contentTitle}
            />
            <p className={frontContentStyles.paragraphContent}>
              All procedings go into finacing mental health resources, and
              helping people get help.
            </p>
          </div>
        </a>
      </div>
    );
  }
}

export default FrontContent;
