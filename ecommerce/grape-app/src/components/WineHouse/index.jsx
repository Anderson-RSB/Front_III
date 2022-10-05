import React from "react";

import wineHouse from "../../assets/Icones/Adega_Home.png";

import { Container, Ratio } from "react-bootstrap";

function WineHouse() {
  return (
    <>
      <section>
        <Container fluid className="wineHouse">
          <Ratio aspectRatio="16x9">
            <img src={wineHouse} alt="" />
          </Ratio>
        </Container>
      </section>
    </>
  );
}

export default WineHouse;