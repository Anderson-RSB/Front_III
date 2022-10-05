import LogoNav from "../../assets/Icones/Logo_NavBar.png";
import LogoSide from "../../assets/Icones/Logo_SideBar.png";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

import { Link } from "react-router-dom";

import {ShoppingCartSimple} from "phosphor-react";

// import { TiShoppingCart } from "react-icons/ti";

function NavOffCanvas() {
  return (
    <>
      {["lg"].map((expand) => (
        <Navbar
          key={expand}
          bg="black"
          expand={expand}
          fixed="top"
          style={{ width: "auto" }}
        >
          <Container fluid>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              className="me-2"
              style={{ background: "white" }}
              variant="outline-disabled"
            />

            <Navbar.Brand href="#">
              <Link className="nav-link" to="/">
                <img className="logo" src={LogoNav} alt="" />
              </Link>
            </Navbar.Brand>

            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              className="nav-off"
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
              style={{ background: "black" }}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <Link className="nav-link" to="/">
                    <img className="logo" src={LogoSide} alt="" />
                  </Link>
                </Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">
                    <Link className="nav-link" to="/Vinhos">
                      Vinhos
                    </Link>
                  </Nav.Link>

                  <Nav.Link href="#action2">
                    <Link className="nav-link" to="/Melhores-avaliados">
                      Melhores Avaliados
                    </Link>
                  </Nav.Link>

                  <Nav.Link href="#action3">
                    <Link className="nav-link" to="/Harmonizacoes">
                      Harmonizações
                    </Link>
                  </Nav.Link>

                  <Nav.Link href="#action4">
                    <Link className="nav-link" to="/NossaHistoria">
                      Nossa História
                    </Link>
                  </Nav.Link>

                  <Nav.Link href="#action5">
                    <Link className="nav-link" to="/Administration">
                      Admin
                    </Link>
                  </Nav.Link>

                  <Nav.Link href="#action6">
                    <Link className="nav-link" to="/WineProduct">
                      Product
                    </Link>
                  </Nav.Link>
                </Nav>

                <Form className="d-flex block">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-3"
                    aria-label="Search"
                  />

                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>

            <Nav.Item className="shoppingCart" variant="outline-disabled">
              <Link className="nav-link" to="/Carrinho">
                {/* <TiShoppingCart /> */}
                <ShoppingCartSimple size={28} />
              </Link>
            </Nav.Item>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavOffCanvas;