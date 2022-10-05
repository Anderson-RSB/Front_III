import React from "react";

import { Container, Row, Col, Ratio } from "react-bootstrap";

function Media() {
  return (
    <>
      <section>
        <Container fluid>
          <Row className="justify-content-md-center">
            <Col xs xl="11">
              <h1>De onde vem os Vinhos?!</h1>
              <Ratio aspectRatio="16x9">
                <iframe
                  width="auto"
                  height="auto"
                  src="https://www.youtube.com/embed/AoxoXKXBvoE"
                  title="YouTube video player"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </Ratio>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Media;