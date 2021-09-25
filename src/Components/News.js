import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
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
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });
    this.setState({ loading: false });
  }

  Nextclick = async () => {
    let url =
      "https://saurav.tech/NewsAPI/top-headlines/category/health/in.json";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, page: this.state.page + 1 });
  };

  Prevclick = async () => {
    this.state.page = this.state.page - 1;
    let url =
      "https://saurav.tech/NewsAPI/top-headlines/category/health/in.json";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, page: this.state.page - 1 });
  };

  render() {
    return (
      <div className="container my-4">
        {this.state.loading && <Spinner />}
        <h3 className="text-center mb-5">TOP HEADLINES</h3>
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4 my-3 " key={element.url}>
                  <NewsItem
                    desc={
                      element.description && element.description.slice(0, 90)
                    }
                    title={element.title.slice(0, 50)}
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
