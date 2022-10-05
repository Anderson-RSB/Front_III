// ATENÇÃO:  ESSE COMPONENTE NÃO ESTÁ SENDO UTILIZADO!!

// import React, { useState } from "react";

// import LogoSide from "../../assets/Icones/Logo_SideBar.png";

// import Nav from "react-bootstrap/Nav";
// import Button from "react-bootstrap/Button";
// import Offcanvas from "react-bootstrap/Offcanvas";

// import { Link } from "react-router-dom";

// import { GiHamburgerMenu } from "react-icons/gi";

// function OffCanvasExample({ name, ...props }) {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const toggleShow = () => setShow((s) => !s);

//   return (
//     <>
//       <Button
//         variant="{primary} {outline-disabled}"
//         onClick={toggleShow}
//         className="me-2"
//         style={{ background: "white" }}
//       >
//         <GiHamburgerMenu /> {name}
//       </Button>

//       <Offcanvas
//         show={show}
//         onHide={handleClose}
//         {...props}
//         style={{ background: "black", maxWidth: "250px" }}
//       >
//         <Offcanvas.Header closeButton>
//           <Offcanvas.Title>
//             <Link className="nav-link" to="/">
//               <img className="logo" src={LogoSide} alt="" />
//             </Link>
//           </Offcanvas.Title>
//         </Offcanvas.Header>

//         <Offcanvas.Body>
//           <Nav
//             className="mx-auto my-2 my-md-0"
//             // style={{ maxHeight: "300px" }}
//             navbarScroll
//           >
//             <Nav.Link href="#action1">
//               <Link className="nav-link" to="/Vinhos">
//                 Vinhos
//               </Link>
//             </Nav.Link>

//             <Nav.Link href="#action2">
//               <Link className="nav-link" to="/Melhores-avaliados">
//                 Melhores Avaliados
//               </Link>
//             </Nav.Link>

//             <Nav.Link href="#action3">
//               <Link className="nav-link" to="/Harmonizacoes">
//                 Harmonizações
//               </Link>
//             </Nav.Link>

//             <Nav.Link href="#action4">
//               <Link className="nav-link" to="/Nossa-historia">
//                 Nossa História
//               </Link>
//             </Nav.Link>

//             <Nav.Link href="#action5">
//               <Link className="nav-link" to="/Carrinho">
//                 Carrinho
//               </Link>
//             </Nav.Link>
//           </Nav>
//         </Offcanvas.Body>
//       </Offcanvas>
//     </>
//   );
// }

// export default OffCanvasExample;