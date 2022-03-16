import React, { Component } from "react";
import "./Sidebar.css";

class Sidebar extends Component {
  render() {
    return (
      <div class="sidebar-navigation hidde-sm hidden-xs">
        <div class="logo">
          <a href="#">Bali Travel</a>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#top">
                <span class="rect"></span>
                <span class="circle"></span>
                Home
              </a>
            </li>
            <li>
              <a href="#featured">
                <span class="rect"></span>
                <span class="circle"></span>
                Featured
              </a>
            </li>
            <li>
              <a href="#projects">
                <span class="rect"></span>
                <span class="circle"></span>
                Recent Work
              </a>
            </li>
            <li>
              <a href="#video">
                <span class="rect"></span>
                <span class="circle"></span>
                Presentation
              </a>
            </li>
            <li>
              <a href="#blog">
                <span class="rect"></span>
                <span class="circle"></span>
                Blog Entires
              </a>
            </li>
            <li>
              <a href="#contact">
                <span class="rect"></span>
                <span class="circle"></span>
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Sidebar;
