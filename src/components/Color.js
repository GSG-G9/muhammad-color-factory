import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Color.css';

export default class Color extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { colorname, value } = this.props;
    const bg = {
      backgroundColor: value
    }
    return (
      <>
        <div className="Color" style={bg}>
          <Link to={`/colors/${value.slice(1)}`} colorname={colorname}><h2>{colorname}</h2></Link>
          <p>{value}</p>
        </div>
      </>
    );
  }
}
