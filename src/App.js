import React, { Component } from "react";
import react1 from "./react1.png";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={react1} className="logo" alt="logo" />
          <h1 className="title"> Welcome To My First React </h1>
        </header>

        <p className="p1">hello!</p>
        <br />
        <hr />
        <p className="p2">It's me !</p>
      </div>
    );
  }
}

export default App;
