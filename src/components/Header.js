import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav className="Header">
          <div className="logo">
            <Link to="/colors">Color factory</Link>
          </div>
          <div className="links-container">
            <ul className="links-list">
              <li className="link-item">
                <Link to="/colors">My Collections</Link>
              </li>
              <li className="link-item">
                <Link to="/colors/new">New Color</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
