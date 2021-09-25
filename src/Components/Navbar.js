import React, { Component } from "react";
import images from "./images.jpg";

export default class navbar extends Component {
  render() {
    return (
      <div className="navbarlist">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand " href="/">
            <img
              src={images}
              className="images"
              style={{
                height: "80px",
                marginRight: "10px",
                marginLeft: "15px",
                width: "150px"
              }}
            />
            <strong> NEWS APP </strong>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav"></div>
        </nav>
      </div>
    );
  }
}
