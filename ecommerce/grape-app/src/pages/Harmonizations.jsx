import React, { useContext, useState } from "react";

import { ProductContext } from "../context/ProductContext";

import { Container, Row, Col, Card, Button } from "react-bootstrap";

import MyVerticallyCenteredModal from "../components/Modal";

function Harmonizations() {
  const { harmony, setCart } = useContext(ProductContext);

  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <section id="harmonies">
        <Container fluid className="harmonies_container bg-dark">
          <h1 className="harmonies_title">Harmonizações</h1>

          <Container fluid className="harmonyCards_container bg-dark w-100">
            <Row xs={2} md={4}>
              {harmony.map((harmonies) => (
                <Col xs={6} md={4}>
                  <Button
                    type="button"
                    variant="outline-black"
                    className="btn-sm p-0"
                    onClick={() => setModalShow(true)}
                    style={{ textDecoration: "none" }}
                  >
                    <Card
                      id={`harmonyCard_${harmonies.id}`}
                      border="dark"
                      className="bg-dark text-center text-light mb-4"
                      key={harmonies.id}
                    >
                      <Card.Img variant="top" src={harmonies.image} alt="" />
                      <Card.Body>
                        <Card.Title className="harmonyCard_text">
                          {harmonies.nameplate}
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </Button>
                </Col>
              ))}
            </Row>
          </Container>
        </Container>

        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </section>
    </>
  );
}

export default Harmonizations;