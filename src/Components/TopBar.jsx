import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import netflix from "../assets/netflix.png";

const TopBar = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" className="px-4">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={netflix} style={{ width: "90px" }} alt="Netflix Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">TV Shows</Nav.Link>
            <Nav.Link href="#">Movies</Nav.Link>
            <Nav.Link href="#">Recently Added</Nav.Link>
            <Nav.Link href="#">My List</Nav.Link>
          </Nav>
          <Nav className="mb-2 mb-lg-0">
            <Nav.Link href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
                  fill="white"
                />
              </svg>
            </Nav.Link>
            <Nav.Link href="#">KIDS</Nav.Link>
            <Nav.Link href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-bell-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901"
                  fill="white"
                />
              </svg>
            </Nav.Link>
            <NavDropdown
              align="end"
              title={
                <img
                  src="https://media.licdn.com/dms/image/D4D03AQE7LaHItv4lEA/profile-displayphoto-shrink_800_800/0/1711433459971?e=1723075200&v=beta&t=8UjxIjNg97GhiNb8oMaIixEqKQzEqfvxasPTmIOoRmw"
                  className="img-fluid"
                  style={{ width: "25px" }}
                  alt="Profile"
                />
              }
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="https://www.netflix.com/login">HomePage</NavDropdown.Item>
              <NavDropdown.Item href="./profile.html">Profile</NavDropdown.Item>
              <NavDropdown.Item href="./setting.html">Setting</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://www.netflix.com/login">Log-Out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopBar;
