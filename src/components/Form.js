import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Form.css";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorName: '',
      value: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.setState({
      colorName: evt.target[0].value,
      value: evt.target[1].value
    });
    console.log(this.props)
  }

  render() {
    console.log(this.state);
    return (
      <div className="form-container">
        <h2>Add New Color</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="input-controle">
            <label htmlFor="color">Color Name: </label>
            <input id="color" type="text" name="colorName" />
          </div>
          <div className="input-controle">
            <label htmlFor="color-value">Color Value: </label>
            <input id="color-value" type="color" name="colorValue" />
          </div>
          <button>Add</button>
        </form>
      </div>
    );
  }
}

withRouter(Form);
