import React from "react";

import LogoFooter from "../../assets/Icones/LogoFooter_Básico.png";

import { Container, Ratio } from "react-bootstrap";

function Footer() {
  return (
    <>
      <Container fluid className="footer">
        <Ratio aspectRatio="16x9">
          <img src={LogoFooter} alt="" />
        </Ratio>
      </Container>
    </>
  );
}

export default Footer;