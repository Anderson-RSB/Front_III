import React, { useState, useEffect } from "react";

import MyVerticallyCenteredModal from "../Modal/";

import { Container, Card, Button } from "react-bootstrap";

import Slider from "react-slick";

import { Link } from "react-router-dom";

function HarmonyCarousel() {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 4000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const [allHarmony, setAllHarmonies] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  const url = "http://52.53.193.244:8081/harmonies";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setAllHarmonies(data));
  }, []);

  return (
    <>
      <section className="harmony">
        <Container fluid className="topWines_carousel w-100 p-3">
          <div className="topWines_titles d-flex justify-content-around">
            <h1 className="topWine_title">Harmonizações</h1>
          </div>

          <Container className="w-70">
            <Slider {...settings}>
              {allHarmony.map((harmony) => {
                return (
                  <Button
                    type="button"
                    variant="outline-black"
                    className="btn-sm p-0"
                    onClick={() => setModalShow(true)}
                  >
                    <Card
                      id={`topWine_${harmony.id}`}
                      border="light"
                      className="bg-dark text-light h-10 p-3 m-3"
                      key={harmony.id}
                    >
                      <Card.Img
                        variant="right"
                        src={harmony.image}
                        alt=""
                        className="topWine_img"
                        style={{ height: "30vh" }}
                      />
                      <Card.Body>
                        <Card.Title className="topWine_text">
                          {harmony.nameplate}
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </Button>
                );
              })}
            </Slider>
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

export default HarmonyCarousel;