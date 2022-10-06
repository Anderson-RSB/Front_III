import React, { useState, useContext, useEffect } from "react";

import Garrafa from "../assets/Vinho_Tinto/calitera.png";
import ButtonAdd from "../components/ButtonAdd";
import { ProductContext } from "../context/ProductContext";
import { Button, Card, CardGroup, Container } from "react-bootstrap";
import { Trash } from "phosphor-react";

function ShoppingCart() {
  const { cart, setCart } = useContext(ProductContext);

  const [selectProduct, setSelectProdutc] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("Products") != null) {
      setCart(JSON.parse(localStorage.getItem("Products")));
      setSelectProdutc(cart);
    }
  }, []);

  console.log(cart);

  // const itens = cart.map((products) => (products.map((products))))

  // console.log(itens);

  // useEffect(()=>{

  //     setCart(JSON.parse(localStorage.getItem("Products")))
  // })

  // setCart(... {id:3, title: 'Sangue de boi'});
  // const [setWines] = useContext(ProductProvider);
  // setWine(... {id:3, title:"Galioto"});

  function removeNoLocal(id) {
    const carrinho = JSON.parse(localStorage.getItem("Products"));

    const listaAtualizada = carrinho.map((produto) =>
      produto.filter((wine) => wine.id != id)
    );
    console.log(listaAtualizada, id);

    localStorage.setItem("Products", JSON.stringify(listaAtualizada));

    window.location.reload();
  }

  return (
    <>
      <section>
        <Container
          fluid
          className="shoppingCart_container"
          style={{ marginTop: "20vh", width: "100vw", height: "80vh" }}
        >
          <h1 className="shoppingCart_title text-light">Meu carrinho:</h1>

          <CardGroup className="bg-dark d-flex flex-column">
            {cart.map((products) =>
              products.map((wine) => (
                <Card className="bg-dark">
                  <Card.Body>
                    <Card.Img
                      variant="right"
                      src={wine.image}
                      alt=""
                      style={{ width: "10vw", height: "20vh" }}
                    />
                    <Card.Title className="harmonyCard_text">
                      {wine.title}
                    </Card.Title>
                    <Card.Text className="topWine_text">
                      {wine.description}
                    </Card.Text>
                    <Card.Text className="topWine_text">
                      {wine.price}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Button
                      type="submit"
                      variant="outline-danger"
                      className="btn-danger text-light active"
                      aria-pressed="true"
                      onClick={() => removeNoLocal(wine.id)}
                    >
                      <Trash size={32} />
                    </Button>
                  </Card.Footer>
                </Card>
              ))
            )}
          </CardGroup>

          <Button
            className="bg-danger text-light"
            variant="outline-danger"
            onClick={() => {
              localStorage.clear();
              window.location.reload();
            }}
          >
            <Trash size={32} />
            LIMPAR CARRINHO
          </Button>

          {/* <div className="shoppingCart__Card">
            <h1>Compras</h1>
            <div className="purchaseSummary">
              <div className="itemPurchase">
                {" "}
                <img src={Garrafa} alt="" />{" "}
              </div>
              <div className="purchaseOptions">
                <h2>Calitera</h2>
                <ButtonAdd />
              </div>
            </div>
            <Button
              className="bg-danger text-light"
              variant="outline-danger"
              onClick={() => {
                localStorage.clear();
                window.location.reload();
              }}
            >
              LIMPAR TUDO
            </Button>
            <ul className="bg-dark" style={{ width: "100vw", height: "30vh" }}>
              {cart.map((products) =>
                products.map((wine) => (
                  <li className="text-light">
                    {wine.description}
                    <button onClick={() => removeNoLocal(wine.id)}>
                      Remove
                    </button>
                  </li>
                ))
              )}
            </ul>
          </div> */}
        </Container>
      </section>
    </>
  );
}

export default ShoppingCart;