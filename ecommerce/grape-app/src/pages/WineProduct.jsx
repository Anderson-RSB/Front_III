import React, { useContext, useState, useEffect } from "react";

import { ProductContext } from "../context/ProductContext";
import { Link, useParams } from "react-router-dom";
import Garrafa from "../assets/Vinho_Tinto/vik_chile.png";
import ButtonCompra from "../components/ButtonCompra/index.jsx";

export default function WineProduct() {
  const { wines } = useContext(ProductContext);
  const { idWine } = useParams();

  console.log(wines);
  console.log(idWine);

  const selectedProduct = wines.find((product) => product.id == idWine);

//   console.log(product);

    console.log(selectedProduct);

  return (
    <>
      <div className="product_background">
        <img className="product_image" src={selectedProduct.image} alt="" />
        <h1 className="wine_product_title">{}</h1>
      </div>
      {/* informações */}
      <div className="d-flex flex-row justify-content-between align-items-center mt-5">
        <span className="categoria_Vinho">
          <p>FRANÇA</p>
        </span>
        <span className="categoria_Vinho">
          <p>VINHO TINTO</p>
        </span>
        <span className="categoria_Vinho">
          <p>Millahue,2018</p>
        </span>
      </div>
      {/* box de preço */}
      <div className="card-body w-100 bg-dark p-3 d-flex justify-content-center">
        <div className="card-align justify-content-center">
          <h5 className="card-title text-white justify-content-center">
            por: R${/* VAR PREÇO VINHO */}259,00
          </h5>
          <p className="card-text text-white">
            ou 2x de R${/* PARCELA */}128,00
          </p>
          <div className="d-flex">
            <div>
              <ButtonCompra />
            </div>
            {/* <ButtonRemove /> */}
          </div>
        </div>
      </div>
      {/* descrição */}
      <div className="d-flex flex-row justify-content-between align-items-center mt-5">
        <ul>
          <li className="categoria_Vinho">COMPOSIÇÃO UVA: Malbec</li>
          <li className="categoria_Vinho">COR: Roxo intenso</li>
          <li className="categoria_Vinho">TEOR ALCÓOLICO: 13%</li>
        </ul>
      </div>
    </>
  );
}