import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar bg="dark">
          <Navbar.Brand href="#home">
            <img
              src="./Images/digimonk.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Navbar>
      </>
    );
  }
}
