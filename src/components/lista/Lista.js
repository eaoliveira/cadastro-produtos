import React, { useState, useCallback } from "react";
import { Container } from "../../styles.js";
import "./lista.css";
import { Link } from "react-router-dom";

export default function Listagem() {
  const list = JSON.parse(localStorage.getItem("produtos"));

  return (
    <Container>
      <div className="productList">
        {list &&
          list.map((produto) => (
            <div
              key={produto.SKU}
              className="product"
              style={{ backgroundImage: "url(" + produto.img + ")" }}
            >
              <div className="botao-editar">Editar</div>
              <div>
                <div className="productName">R$ {produto.price}</div>

                <div className="productName"> {produto.nameProduct}</div>
                <div className="productSKU">SKU: {produto.SKU}</div>
              </div>
              <Link to={"/detalhes/" + produto.SKU}>
                <div title="Visualizar Detalhes" className="detalhes">
                  +
                </div>
              </Link>
            </div>
          ))}
      </div>
    </Container>
  );
}
