import React, { useState, useCallback } from "react";
import { Container } from "../../styles.js";
import "./cadastro.css";
import imgFundo from "../../images/cadastro.jpg";

export default function Cadastro() {
  const valorInicial = {
    SKU: "",
    nameProduct: "",
    description: "",
    price: "",
    qnt: "",
    img: "",
  };
  const [product, setProduct] = useState(valorInicial);

  const handleChange = useCallback(
    (e) => {
      setProduct({
        ...product,
        [e.target.name]: e.target.value,
      });
    },
    [product]
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(product);
    },
    [product]
  );

  return (
    <Container>
      <img alt="" src={imgFundo} />
      <form className="form-cadastro" onSubmit={handleSubmit}>
        <input
          placeholder="SKU"
          className="form-item"
          name="SKU"
          value={product.SKU || ""}
          onChange={handleChange}
        ></input>
        <input
          placeholder="Nome do Produto"
          className="form-item"
          name="name"
          value={product.name || ""}
          onChange={handleChange}
        ></input>
        <textarea
          placeholder="Descrição"
          className="form-item"
          name="description"
          value={product.description || ""}
          onChange={handleChange}
        ></textarea>
        <input
          placeholder="Preço de Venda"
          className="form-item"
          name="price"
          value={product.price || ""}
          onChange={handleChange}
        ></input>
        <input
          placeholder="Quantidade"
          className="form-item"
          name="qnt"
          value={product.qnt || ""}
          type="number"
          onChange={handleChange}
        ></input>
        <input
          placeholder="Imagem"
          className="form-item"
          name="img"
          value={product.img || ""}
          onChange={handleChange}
        ></input>
        <button className="form-item">Cadastrar</button>
      </form>
    </Container>
  );
}
