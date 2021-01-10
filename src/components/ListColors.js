import React, { Component } from "react";
import Color from "./Color";
import "./ListColors.css";

export default class ListColors extends Component {
  colors = [
    { id: "asd123", colorName: "red", value: "#D52222" },
    { id: "asd124", colorName: "red", value: "#55D222" },
    { id: "asd125", colorName: "red", value: "#0055d2" },
    { id: "asd126", colorName: "red", value: "#D0D052" },
    { id: "asd127", colorName: "red", value: "#a55292" },
    { id: "asd128", colorName: "red", value: "#99D222" },
    { id: "asd129", colorName: "red", value: "#0055d2" },
    { id: "asd130", colorName: "red", value: "#D00052" },
  ];
  render() {
    const colorsElm = this.colors.map((item) => (
      <Color key={item.id} colorname={item.colorName} value={item.value} />
    ));
    return <div className="Color-list">{colorsElm}</div>;
  }
}
