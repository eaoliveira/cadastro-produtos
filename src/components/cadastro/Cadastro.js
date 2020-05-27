import React, { useState, useCallback } from "react";
import { Container } from "../../styles.js";
import "./cadastro.css";
import imgFundo from "../../images/cadastro.jpg";

export default function Cadastro() {
  const valorInicial = {
    SKU: null,
    nameProduct: null,
    description: null,
    price: null,
    qnt: null,
    img: null,
  };
  const [product, setProduct] = useState(valorInicial);
  var listaProduto = [];

  const handleChange = useCallback(
    (e) => {
      setProduct({
        ...product,
        [e.target.name]: e.target.value,
      });
    },
    [product]
  );

  const validateDuplicate = useCallback((e) => {
    if (listaProduto.find((a) => a.SKU === product.SKU)) {
      return false;
    }

    return true;
  });

  const validateSubmit = useCallback(
    (e) => {
      if (
        product.SKU &&
        product.description &&
        product.nameProduct &&
        product.price &&
        product.img &&
        product.qnt
      ) {
        return true;
      }
      return false;
    },
    [
      product.SKU,
      product.description,
      product.img,
      product.nameProduct,
      product.price,
      product.qnt,
    ]
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (validateSubmit()) {
        if (validateDuplicate()) {
          alert("SKU Duplicado");
        }
        listaProduto.push(product);
      } else {
        alert("Algum campo está vazio");
      }
      console.log(listaProduto);
    },
    [listaProduto, product, validateDuplicate, validateSubmit]
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
          type="number"
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
