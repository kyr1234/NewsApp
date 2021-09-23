import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    };
  }

  async componentDidMount() {
    let url =
      "https://saurav.tech/NewsAPI/top-headlines/category/health/in.json";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });
    console.log(parsedData);
  }

  Nextclick = () => {
    console.log("HELLO");
  };

  Prevclick = () => {
    console.log("BYE");
  };

  render() {
    return (
      <div className="container my-4">
        <h3>TOP HEADLINES</h3>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4 my-3 " key={element.url}>
                <NewsItem
                  desc={
                    element.description && element.description.slice(0, 100)
                  }
                  title={element.title.slice(0, 70)}
                  imgurl={element.urlToImage}
                  url={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex  justify-content-between">
          <button
            type="button"
            className="btn btn-dark"
            disabled={this.state.page <= 1}
            onClick={this.Prevclick}
          >
            PREVIOUS &larr;
          </button>
          <button
            type="button"
            onClick={this.Nextclick}
            className="btn btn-dark"
            style={{ width: "105px" }}
          >
            NEXT &rarr;
          </button>
        </div>
      </div>
    );
  }
}
