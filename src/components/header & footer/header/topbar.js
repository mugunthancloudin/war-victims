import React from "react";
import "./menubar.css";
import { Container, Nav, Navbar, NavLink } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import brandLogo from "../../asssets/Header&Footer/logo.png";


export default function Topbar() {
  return (
    <>
      <Navbar className="navbar" sticky="top" expand="lg">
        <Container>
          <NavLink href="/">
            <div className="d-flex">
              <img src={brandLogo} width={40} className="navlogo" />
              <h4 className="ms-3 mt-3 ">Epizóntes</h4>
            </div>
          </NavLink>

          <NavbarToggle aria-controls="navbar-dark-example" />

          <NavbarCollapse
            id="navbar-dark-example"
            className="justify-content-end fw-bold menunav text-white"
          >
            <Nav>
              <NavLink href="/">
                <div className="glow-on-hover text-white mt-2">Home</div>
              </NavLink>

              <NavLink href="/about">
                <div className="glow-on-hover text-white mt-2">About Us</div>
              </NavLink>

              <NavLink href="/service">
                <div className="glow-on-hover text-white mt-2">Service</div>
              </NavLink>

              <NavLink href="/contact">
                <div className="glow-on-hover text-white mt-2">Contact US</div>
              </NavLink>

              <NavLink href="/contact">
                <button className="navButtton ms-5">Donate</button>
              </NavLink>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </>
  );
}
