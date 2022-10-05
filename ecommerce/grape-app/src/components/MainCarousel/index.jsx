import React, { useState, useEffect } from "react";

import { Container, Row, Col, Card } from "react-bootstrap";

import Carousel from "react-bootstrap/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// function MainContent() {
//   const [wineState, setWine] = useState([]);

//   useEffect(() => {
//     fetch("http://52.53.186.98:9000/products").then((response) => {
//       response.json().then((data) => {
//         setWine(data);
//       });
//     });
//   }, []);

//   let topWine = [];

//   topWine = wineState.filter((vinho) => {
//     if (vinho.price > 60.0) {
//       return vinho;
//     }
//   });

//   return (
//     <>
//       <div
//         id="carouselExampleFade"
//         className="carousel slide carousel-fade"
//         data-bs-ride="carousel"
//       >
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <Container fluid className="carousel-inner d-flex justify-content-center">
//               <Row
//                 xs={"auto"}
//                 style={{ width: "80vw" }}
//               >
//                 <Col xs={12} xl={4}>
//                   <Card
//                     id="topWine_01"
//                     border="dark"
//                     className="carousel-item bg-dark text-light ">
//                     <Card.Img src={topWine[0]?.image} className="d-block w-100" />
//                     <Card.Body>
//                       <Card.Title>Card title</Card.Title>
//                       <Card.Text>
//                         This is a wider card with supporting text below as a
//                         natural lead-in to additional content. This content is a
//                         little bit longer.
//                       </Card.Text>
//                     </Card.Body>
//                     <Card.Footer>
//                       <small className="text-muted">
//                         Last updated 3 mins ago
//                       </small>
//                     </Card.Footer>
//                   </Card>

//                   <Card
//                     id="topWine_02"
//                     className="d-none">
//                     <Card.Img variant="top" src={topWine[1]?.image}/>
//                     <Card.Body>
//                       <Card.Title>Card title</Card.Title>
//                       <Card.Text>
//                         This is a wider card with supporting text below as a
//                         natural lead-in to additional content. This content is a
//                         little bit longer.
//                       </Card.Text>
//                     </Card.Body>
//                     <Card.Footer>
//                       <small className="text-muted">
//                         Last updated 3 mins ago
//                       </small>
//                     </Card.Footer>
//                   </Card>

//                   <Card
//                     id="topWine_03"
//                     className="d-none">
//                     <Card.Img variant="top" src={topWine[2]?.image} />
//                     <Card.Body>
//                       <Card.Title>Card title</Card.Title>
//                       <Card.Text>
//                         This is a wider card with supporting text below as a
//                         natural lead-in to additional content. This content is a
//                         little bit longer.
//                       </Card.Text>
//                     </Card.Body>
//                     <Card.Footer>
//                       <small className="text-muted">
//                         Last updated 3 mins ago
//                       </small>
//                     </Card.Footer>
//                   </Card>
//                 </Col>
//               </Row>
//             </Container>

//             {/* <img src={topWine[0]?.image} className="d-block w-100" alt="..." /> */}
//           </div>

//           <div className="carousel-item">
//             <img src={topWine[1]?.image} className="d-block w-100" alt="..." />
//           </div>

//           <div className="carousel-item">
//             <img src={topWine[2]?.image} className="d-block w-100" alt="..." />
//           </div>
//         </div>

//         <button
//           className="carousel-control-prev"
//           type="button"
//           data-bs-target="#carouselExampleFade"
//           data-bs-slide="prev"
//         >
//           <span
//             className="carousel-control-prev-icon"
//             aria-hidden="true"
//           ></span>
//           <span className="visually-hidden">Previous</span>
//         </button>
//         <button
//           className="carousel-control-next"
//           type="button"
//           data-bs-target="#carouselExampleFade"
//           data-bs-slide="next"
//         >
//           <span
//             className="carousel-control-next-icon"
//             aria-hidden="true"
//           ></span>
//           <span className="visually-hidden">Next</span>
//         </button>
//       </div>

{
  /* <Carousel classNameName="Carousel">
                <div classNameName="carousel__div">
                    <div classNameName="carousel__item"></div>
                    <div classNameName="carousel__description">
                        <h1 classNameName="carousel__title">TITULO</h1>
                        <p >Legend 1</p>
                    </div>

                </div>
                <div classNameName="carousel__div">
                    <div classNameName="carousel__item"></div>
                    <div classNameName="carousel__description">
                        <h1 classNameName="carousel__title">TITULO</h1>
                        <p>Legend 2</p>
                    </div>

                </div>
                <div classNameName="carousel__div">
                    <div classNameName="carousel__item"></div>
                    <div classNameName="carousel__description">
                        <h1 classNameName="carousel__title">TITULO</h1>
                        <p>Legend 2</p>
                    </div>
                </div>
            </Carousel> */
}
{
  /* </>
  );
} */
}

// export default MainContent;

function CarouselFadeExample() {
  const [wineState, setWine] = useState([]);

  useEffect(() => {
    fetch("http://54.177.105.189:8081/products", {
      method: "GET",
      headers: {
        "Accept": "*/* , application/json, text/plain",
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Origin": "* , http://127.0.0.1:9000", 
      },
    }).then((response) => {
      response.json().then((data) => {
        setWine(data);
        console.log(data);
      });
    });
  }, []);

  let topWine = [];

  topWine = wineState.filter((vinho) => {
    if (vinho.price > 90.0) {
      return vinho;
    }
  });

  return (
    <Carousel fade className="topWinesCarousel" style={{ width: "100vw" }}>
      <Carousel.Item interval={3000} className="topWinesCarousel-item">
        <Container fluid className="topWinesContainer justify-content-center w-75 h-10 g-4">
          <Row xs xl={3}>
            <Col xs xl={4} style={{ height: "10vh" }}>
              <Card
                id="topWine_01"
                border="light"
                className="bg-dark text-light h-10"
              >
                <Card.Img
                  variant="right"
                  src={topWine[0]?.image}
                  alt="First Card"
                  style={{ height: "30vh" }}
                />
                <Card.Body>
                  <Card.Title>{topWine[0]?.title} - {topWine[0]?.categories[0]?.name}</Card.Title>
                  <Card.Text>
                    {topWine[0]?.description}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-light">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </Col>

            <Col xs xl={4} style={{ height: "10vh" }}>
              <Card
                id="topWine_02"
                border="light"
                className="bg-dark text-light h-10"
              >
                <Card.Img 
                  variant="right"
                  src={topWine[1]?.image}
                  alt="Second Card"
                  style={{ height: "30vh" }}
                />
                <Card.Body>
                  <Card.Title>{topWine[1]?.title} - {topWine[1]?.categories[0]?.name}</Card.Title>
                  <Card.Text>
                    {topWine[1]?.description}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-light">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </Col>

            <Col xs xl={4} style={{ height: "10vh" }}>
              <Card
                id="topWine_03"
                border="light"
                className="bg-dark text-light h-10"
              >
                <Card.Img
                  variant="right"
                  src={topWine[2]?.image}
                  alt="Third Card"
                  style={{ height: "30vh" }}
                />
                <Card.Body>
                  <Card.Title>{topWine[2]?.title} - {topWine[2]?.categories[0]?.name}</Card.Title>
                  <Card.Text>
                    {topWine[2]?.description}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-light">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>

        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}

      </Carousel.Item>

      <Carousel.Item interval={3000} className="topWinesCarousel-item">
        <Container fluid className="topWinesContainer justify-content-center w-75 h-10 g-4" >
          <Row xs xl={3}>
            <Col xs xl={4} style={{ height: "10vh" }}>
                <Card
                  id="topWine_04"
                  border="light"
                  className="bg-dark text-light h-10"
                >
                  <Card.Img
                    variant="right"
                    src={topWine[4]?.image}
                    alt="First Card"
                    style={{ height: "30vh" }}
                  />
                  <Card.Body>
                    <Card.Title>{topWine[4]?.title} - {topWine[4]?.categories[4]?.name}</Card.Title>
                    <Card.Text>
                      {topWine[4]?.description}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-light">
                      Last updated 3 mins ago
                    </small>
                  </Card.Footer>
                </Card>
                </Col>
                <Col xs xl={4} style={{ height: "10vh" }}>
                <Card
                  id="topWine_05"
                  border="light"
                  className="bg-dark text-light h-10"
                >
                  <Card.Img
                    variant="right"
                    src={topWine[5]?.image}
                    alt="Second Card"
                    style={{ height: "30vh" }}
                  />
                  <Card.Body>
                    <Card.Title>{topWine[5]?.title} - {topWine[5]?.categories[0]?.name}</Card.Title>
                    <Card.Text>
                      {topWine[5]?.description}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-light">
                      Last updated 3 mins ago
                    </small>
                  </Card.Footer>
                </Card>
                </Col>
                <Col xs xl={4} style={{ height: "10vh" }}>
                <Card
                  id="topWine_06"
                  border="light"
                  className="bg-dark text-light h-10"
                >
                  <Card.Img
                    variant="top"
                    src={topWine[6]?.image}
                    alt="Third Card"
                    style={{ height: "30vh" }}
                  />
                  <Card.Body>
                    <Card.Title>{topWine[6]?.title} - {topWine[6]?.categories[0]?.name}</Card.Title>
                    <Card.Text>
                      {topWine[6]?.description}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-light">
                      Last updated 3 mins ago
                    </small>
                  </Card.Footer>
                </Card>
            </Col>
          </Row>
        </Container>

        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>

      {/* <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={topWine[2]?.image}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}

    </Carousel>
  );
}

export default CarouselFadeExample;