import React, { Component } from "react";
// import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import ListColors from "./ListColors";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <ListColors />
      </div>
    );
  }
}
