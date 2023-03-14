import { useContext } from "react";
import { Container, Nav, Navbar, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { AuthContext } from "../../../context/auth-context";

/* import classes from "./header.module.css"; */

export const Header: React.FC = () => {
  const { currentUser, signOut } = useContext(AuthContext);

  currentUser?.getIdToken();
  return (
    <Row>
      <Navbar bg="light" variant="light">
        <Container className="justify-content-end">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/register">
                <Nav.Link>Login/Register</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/board">
                <Nav.Link>Board</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
          {currentUser && <Button onClick={() => signOut()}>LogOut</Button>}
        </Container>
      </Navbar>
    </Row>
  );
};
