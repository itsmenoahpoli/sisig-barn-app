import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Hamburger from "hamburger-react";

export const DashboardNavbarNavigation = (props) => {
  const [isToggled, setIsToggled] = React.useState(false);

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        {/* <Navbar.Brand>Barangay Management System</Navbar.Brand> */}
        <Navbar.Toggle>
          <Hamburger toggled={isToggled} toggle={setIsToggled} size="24" />
        </Navbar.Toggle>

        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="#">My Account</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
