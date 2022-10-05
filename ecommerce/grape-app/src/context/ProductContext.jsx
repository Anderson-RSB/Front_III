import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext({});

const ProductContextProvider = ({ children }) => {

  const [harmony, setHarmonies] = useState([]);

  const [wines, setWines] = useState([]);

  const [cart, setCart] = useState([]);

  // const saveCart = (cart) => {
  //   localStorage.setItem("wines", JSON.stringify(cart));
  //   setCart(wines);
  // };

  // saveCart();

  const urlHarmonies = "http://52.53.193.244:8081/harmonies";

  useEffect(() => {
    fetch(urlHarmonies)
      .then((responseHarmonies) => responseHarmonies.json())
      .then((HarmoniesJSON) => setHarmonies(HarmoniesJSON));
  }, []);

  const urlProducts = "http://52.53.193.244:8081/products";

  useEffect(() => {
    fetch(urlProducts)
      .then((responseWines) => responseWines.json())
      .then((WinesJSON) => setWines(WinesJSON));
  }, []);

  return (
    <ProductContext.Provider
      value={{ harmony, setHarmonies, wines, setWines, cart, setCart }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;