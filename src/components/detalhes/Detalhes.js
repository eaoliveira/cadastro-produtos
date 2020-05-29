import React, { useState, useCallback } from "react";
import { Container } from "../../styles.js";

import { withRouter } from "react-router-dom";

import "./detalhes.css";
import { useHistory } from "react-router-dom";

export default class Detalhes extends React.Component {
  constructor(props) {
    super(props);
    this.state = { produto: {} };
  }

  componentDidMount() {
    const list = JSON.parse(localStorage.getItem("produtos"));
    const {
      match: { params },
    } = this.props;

    if (params.id) {
      var produtoAtual = list.find((produto) => produto.SKU == params.id);
      this.setState({ produto: produtoAtual }, () =>
        console.log(this.state.produto)
      );
      console.log(this.state.produto);
    }
  }

  voltar() {
    this.props.history.push({
      pathname: "/listagem",
    });
  }
  handleChange(e) {}
  handleKeyUp(e) {}
  handleSubmit(e) {}

  render() {
    return (
      <Container>
        {this.state.produto && (
          <div className="container-detalhe">
            <div
              className="foto"
              style={{ backgroundImage: "url(" + this.state.produto.img + ")" }}
            ></div>
            <div className="detalhes-produto">
              <form className="form-cadastro" onSubmit={this.handleSubmit}>
                <input
                  placeholder="SKU"
                  className="form-item"
                  name="SKU"
                  value={this.state.produto.SKU || ""}
                  onChange={this.handleChange}
                  required={true}
                ></input>
                <input
                  placeholder="Nome do Produto"
                  className="form-item"
                  name="nameProduct"
                  value={this.state.produto.nameProduct || ""}
                  onChange={this.handleChange}
                  required={true}
                ></input>
                <textarea
                  placeholder="Descrição"
                  className="form-item"
                  name="description"
                  value={this.state.produto.description || ""}
                  onChange={this.handleChange}
                  required={true}
                ></textarea>
                <input
                  placeholder="Preço de Venda"
                  className="form-item"
                  name="price"
                  value={this.state.produto.price || ""}
                  onKeyUp={this.handleKeyUp}
                  onChange={this.handleChange}
                ></input>
                <input
                  placeholder="Quantidade"
                  className="form-item"
                  name="qnt"
                  value={this.state.produto.qnt || ""}
                  type="number"
                  onChange={this.handleChange}
                  required={true}
                ></input>
                <input
                  placeholder="Imagem"
                  className="form-item"
                  name="img"
                  value={this.state.produto.img || ""}
                  onChange={this.handleChange}
                  required={true}
                ></input>
                <div>
                  <button className="form-item" onClick={() => this.voltar()}>
                    &larr; Voltar
                  </button>
                  <button className="form-item">Ediitar</button>
                </div>
              </form>{" "}
            </div>
          </div>
        )}
      </Container>
    );
  }
}
