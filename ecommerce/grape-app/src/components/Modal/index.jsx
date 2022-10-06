import React, { useContext, useState } from "react";

import { ProductContext } from "../../context/ProductContext";

import { Modal, Button } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
  const { harmony } = useContext(ProductContext);

  const selectedHarmony = harmony.find((harmonies) =>
    harmonies.id == props.id);
    // Criar ele como estado, para inicializar como um array vazio

  // const selectedProduct = wines.find((product) => product.id == idWine);

  const selectedProduct = selectedHarmony?.products.slice(0, 3)

  console.log(props)
  console.log(selectedHarmony);
  console.log(selectedProduct);

  //   const filteredWines = wines.filter((wines) =>
  //   wines.categories.find((categorie) => categorie.id === 1)
  //  );

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
          <Modal.Title id="contained-modal-title-vcenter">
            <h1>{selectedHarmony?.nameplate}</h1>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="boxModal bg-dark bg-gradient-dark text-light">
          <h4>Aqui teremos 3 imagens</h4>
          {selectedProduct?.map((wines) => (
            <img src={wines?.image} />
          ))}
          
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

export default MyVerticallyCenteredModal;