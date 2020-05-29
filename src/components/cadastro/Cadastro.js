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

  const handleKeyUp = useCallback((e) => {
    let value;
    value = e.target.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d)(\d{2})$/, "$1,$2");
    value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");
    e.target.value = value;
  }, []);

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
    if (
      listaProduto.findIndex((a) => a.SKU === product.SKU) !== -1 &&
      listaProduto.length > 0
    ) {
      alert("SKU Duplicado");

      return true;
    }
    return false;
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
      alert("Algum campo está vazio");

      return false;
    },
    [product]
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (validateSubmit()) {
        if (validateDuplicate()) {
          return;
        }
        listaProduto.push(product);
        let produtos = [];
        if (localStorage.getItem("produtos") != undefined) {
          produtos = [...JSON.parse(localStorage.getItem("produtos")), product];
        } else {
          produtos.push(product);
        }
        localStorage.setItem("produtos", JSON.stringify(produtos));
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
          required={true}
        ></input>
        <input
          placeholder="Nome do Produto"
          className="form-item"
          name="nameProduct"
          value={product.nameProduct || ""}
          onChange={handleChange}
          required={true}
        ></input>
        <textarea
          placeholder="Descrição"
          className="form-item"
          name="description"
          value={product.description || ""}
          onChange={handleChange}
          required={true}
        ></textarea>
        <input
          placeholder="Preço de Venda"
          className="form-item"
          name="price"
          value={product.price || ""}
          onKeyUp={handleKeyUp}
          onChange={handleChange}
        ></input>
        <input
          placeholder="Quantidade"
          className="form-item"
          name="qnt"
          value={product.qnt || ""}
          type="number"
          onChange={handleChange}
          required={true}
        ></input>
        <input
          placeholder="Imagem"
          className="form-item"
          name="img"
          value={product.img || ""}
          onChange={handleChange}
          required={true}
        ></input>
        <button className="form-item">Cadastrar</button>
      </form>
    </Container>
  );
}
