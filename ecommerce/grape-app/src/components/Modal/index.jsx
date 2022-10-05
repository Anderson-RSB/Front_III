import React, { useContext, useState } from "react";

import { ProductContext } from "../../context/ProductContext";

import { Modal, Button } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
  const { harmony } = useContext(ProductContext);

  return (
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
        <Modal.Title id="contained-modal-title-vcenter">
          {/* O titulo da harmonização, irá aqui */}
          {/* Aqui eu trarei o titulo da Harmonia, vindo diretamente da requisição */}
          {harmony.map((harmony) => {
            harmony.title;
          })}
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="boxModal bg-dark bg-gradient-dark text-dark">
        {/* Dentro deste body, teremos 3 tags image, contendo os vinhos correspondentes a harmonia chamada acima */}
        {/* Aqui eu trarei os vinhos correspondentes a harmonia citada/chamada acima */}
        {harmony.map((harmony) => {
          harmony.map((products) => {
            products.image;
          });
        })}
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer className="boxModal bg-dark">
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
