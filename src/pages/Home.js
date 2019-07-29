import React, { Component } from "react";

import homeStyles from "../modules/home.module.scss";
import tomatosoup from "../images/tomatosoup.jpg";

class Home extends Component {
  render() {
    return (
      <div className={homeStyles.container}>
        <img
          className={homeStyles.titleImage}
          alt="titleImage"
          src={tomatosoup}
        />
      </div>
    );
  }
}

export default Home;
