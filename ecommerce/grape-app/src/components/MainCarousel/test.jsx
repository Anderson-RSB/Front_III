import React, { useContext } from "react";

import { Container, Card, Button } from "react-bootstrap";

import Slider from "react-slick";

import { Link } from "react-router-dom";

import { ProductContext } from "../../context/ProductContext";

function TopWinesCarousel() {
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

  const { wines, setCart } = useContext(ProductContext);

  // const [topWines, setTopWines] = useState([]);

  // const url = "http://52.53.193.244:8081/products";

  // useEffect(() => {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => setTopWines(data));
  // }, []);

  return (
    <>
      <section>
        <Container fluid className="topWines_carousel w-100 p-3">
          <div className="topWines_titles d-flex justify-content-around">
            <h1 className="topWine_title">Melhores Avaliados</h1>
            <button className="bg-dark">{"Ver mais >>"}</button>
          </div>

          <Container className="w-70">
            <Slider {...settings}>
              {wines
                .filter((wines) => wines.price > 80.0)
                .map((wine) => {
                  return (
                    <Link
                      className="text"
                      to="/Wine"
                      style={{ textDecoration: "none" }}
                      >
                      <Card
                        id={`topWine_${wine.id}`}
                        border="light"
                        className="bg-dark text-light h-10 p-3 m-3"
                        key={wine.id}
                      >
                        <Card.Img
                          variant="right"
                          src={wine.image}
                          alt=""
                          className="topWine_img"
                          style={{ height: "30vh" }}
                        />
                        <Card.Body>
                          <Card.Title className="topWine_text">
                            {wine.title} - {wine.categories[0].name}
                          </Card.Title>
                          <Card.Text className="topWine_text">
                            {wine.description}
                          </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                          <Button
                            type="submit"
                            variant="outline-success"
                            className="btn-success text-light active"
                            aria-pressed="true"
                          >
                            {wine.price}
                          </Button>
                        </Card.Footer>
                      </Card>
                    </Link>
                  );
                })}
            </Slider>
          </Container>
        </Container>
      </section>
    </>
  );
}

export default TopWinesCarousel;