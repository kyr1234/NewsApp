import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, desc, imgurl, url } = this.props;

    return (
      <div className="NewsItem">
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            alt="Images"
            src={
              imgurl
                ? "https://static9.depositphotos.com/1011646/1236/i/600/depositphotos_12369509-stock-photo-breaking-news-screen.jpg"
                : imgurl
            }
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{desc}...</p>
            <a href={url} className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
