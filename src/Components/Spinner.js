import React, { Component } from "react";
import spinner from "./ajax-loader.gif";

export default class NewsItem extends Component {
  render() {
    return (
      <div className="NewsItem mb-5" style={{ textAlign: "center" }}>
        <img src={spinner} alt="spinner" />
      </div>
    );
  }
}
