import classes from "./MainNavigation.module.css";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Button,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";
import JuroBanner from "../JuroBanner";
function MainNavigation(props) {
  return (
    <Navbar className={classes.nav} expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <Link href="/">
            <div className={classes.header}><a href="/">Juro Instruments</a></div>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }}>
            <Nav.Link>
              <Link href="/">
                <div className={classes.content}>Home</div>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link href="/about">
                <div className={classes.content}>About</div>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link href="/service">
                <div className={classes.content}>Service</div>
              </Link>
            </Nav.Link>
          </Nav>
          {/* <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            /> */}
          <Nav>
          </Nav>
          {props.account&&<Button variant="warning" className={classes.navButton} onClick={props.logout}>Change Account</Button>}
          {!props.account&&<Button variant="warning"  className={classes.navButton} onClick={props.login}>Connect</Button>}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavigation;
