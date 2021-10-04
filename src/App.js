import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <h1>HELLO EVERYONE</h1>
        <News />
      </div>
    );
  }
}
