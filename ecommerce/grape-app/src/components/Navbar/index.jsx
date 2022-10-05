// ATENÇÃO:  ESSE COMPONENTE NÃO ESTÁ SENDO UTILIZADO!!

// import LogoNav from "../../assets/Icones/Logo_NavBar.png";
// import OffCanvasExample from "../OffCanvas";

// import Navbar from "react-bootstrap/Navbar";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";

// import { Link } from "react-router-dom";

// import { TiShoppingCart } from "react-icons/ti";

// function NavScroll() {
//   return (
//     <>
//       <Navbar
//         bg="black"
//         expand="sm"
//         fixed="top"
//         className="justify-content-center"
//       >
//         <Container fluid>
//           <OffCanvasExample />

//           <Navbar.Brand href="#">
//             <Link className="nav-link" to="/">
//               <img className="logo" src={LogoNav} alt="" />
//             </Link>
//           </Navbar.Brand>

//           <Button className="shoppingCart" variant="outline-disabled">
//             <Link className="nav-link" to="/Carrinho">
//               <TiShoppingCart />
//             </Link>
//           </Button>

//           <Nav
//             className="mx-auto my-2 my-sm-2 justify-content-center"
//             // style={{ maxHeight: "300px" }}
//             navbarScroll
//           >
//             <Nav.Item className="justify-content-center">
//               <h2 className="text-center mt-0 mb-3 me-3 ">Sua adega virtual</h2>
//             </Nav.Item>
//             <Form className="d-flex">
//               <Form.Control
//                 type="search"
//                 placeholder="Search"
//                 className="me-3"
//                 aria-label="Search"
//               />
//               <Button variant="outline-success">Search</Button>
//             </Form>
//           </Nav>
//         </Container>
//       </Navbar>
//     </>
//   );
// }

// export default NavScroll;