import React, { useState, useContext, useEffect } from "react";
import { Container, Row, Col, Button, Card, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

import FormDelete from "../../components/Form/Delete";
import FormUpdate from "../../components/Form/Update";

// import { DeleteWine } from "../Form/Delete";

// import { ProductContext } from "../../context/ProductContext";

// const { wines } = useContext(ProductContext);

export default function ProductsAdm() {
  const [allProducts, setAllProducts] = useState([]);

  const [show, setShow] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseDelete = () => setShowDelete(false);
  const handleShowDelete = () => setShowDelete(true);

  fetch("http://52.53.193.244:8081/products").then((response) => {
    response.json().then((data) => {
      setAllProducts(data);
      console.log(allProducts);
    });
  });

  return (
    <>
      <h1>Produtos cadastrados</h1>

      <div>
        <Container
          fluid
          className="allProductsAdm d-flex justify-content-center"
          style={{ width: "100vw" }}
        >
          <Row xs={2} md={4}>
            
            {allProducts.map((products) => (
              <Col xs={6} md={3}>
                <Card
                  id="allProductsCard01"
                  border="light"
                  className="allProductsCard bg-dark text-center text-light mb-4"
                  style={{ height: "50vh", width: "45vw" }}
                >
                  {products.categories.map((category) => (
                    <Card.Header>{category.name}</Card.Header>
                  ))}
                  <Card.Img
                    variant="top"
                    src={products.image}
                    style={{ height: "10vh" }}
                  />
                  <Card.Body>
                    <Card.Title>{products.title}</Card.Title>
                    <Card.Text>
                      {products.description}
                      <br></br>
                      {products.price}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="d-flex justify-content-md-center">
                    <div className="d-flex">


                      <Button
                        variant="primary"
                        style={{ height: "5vh", width: "20vw" }}
                        onClick={handleShow}
                      >
                        Update
                      </Button>


                      <Button
                        variant="danger"
                        style={{
                          height: "5vh",
                          width: "20vw",
                          color: "#000000",
                        }}
                        // onClick={DeleteWine(products.id)}
                        onClick={handleShowDelete}
                      >
                        Delete
                      </Button>

                    </div>
                  </Card.Footer>

                  {/* <h1>{products.title}</h1>
                    <p>{products.description}</p>
                    <p>{products.price}</p>
                    <img src={products.image} alt=""/>

                  </Row> */}
                </Card>
              </Col>
            ))}

            {/* Update */}
            <Modal show={show} onHide={handleClose}>
              <Modal.Header className="bg-dark" closeButton>
                <Modal.Title className="text-light">Update</Modal.Title>
              </Modal.Header>
              <Modal.Body className="bg-dark">
                <FormUpdate />
              </Modal.Body>
            </Modal>

            {/* Delete */}
            <Modal show={showDelete} onHide={handleCloseDelete}>
              <Modal.Header className="bg-dark" closeButton>
                <Modal.Title className="text-light">Delete</Modal.Title>
              </Modal.Header>
              <Modal.Body className="bg-dark">
                <FormDelete />
              </Modal.Body>
            </Modal>
          </Row>
        </Container>
      </div>
    </>
  );
}