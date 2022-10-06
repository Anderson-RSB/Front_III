import React, { useContext, useState } from "react";

import { ProductContext } from "../context/ProductContext";

import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";

function Harmonizations() {
  const { harmony } = useContext(ProductContext);

  const [modalShow, setModalShow] = useState(false);

  const harmonies = harmony.map((harmonies) => {return harmonies})

  console.log(harmonies);

  return (
    <>
      <section id="harmonies">
        <Container fluid className="harmonies_container bg-dark">
          <h1 className="harmonies_title">Harmonizações</h1>

          <Container fluid className="harmonyCards_container bg-dark w-100">
            <Row xs={2} md={4}>
              {harmonies.map((harmonies) => (
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

  function MyVerticallyCenteredModal(props) {
    // const products = harmony.map((harmonies) =>
    //   harmonies.products.map((wines) => {
    //     return wines;
    //   })
    // );
  
    return (
      <>
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className=""
          data-focus="true"
        >
          <Modal.Header
            id="harmonyModal-header"
            closeButton
            className="boxModal bg-dark"
          >
          {/* {
            {harmonyID == harmonies.id} => (harmonies.map((harmony) => ()))  
          } */}
            <Modal.Title id="contained-modal-title-vcenter">
              <h1>Aqui irá o nome da harmonia</h1>
            </Modal.Title>
          </Modal.Header>
  
          <Modal.Body className="boxModal bg-dark bg-gradient-dark text-light">
            <h4>Aqui teremos 3 imagens</h4>
            <img src="" />
            <img src="" />
            <img src="" />
          </Modal.Body>
          <Modal.Footer className="boxModal bg-dark">
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default Harmonizations;