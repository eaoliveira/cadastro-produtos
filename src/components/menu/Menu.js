import React from "react";
import "./menu.css";
import { Container } from "../../styles.js";
import { Link } from "react-router-dom";
export default function Menu() {
  return (
    <Container className="container-menu">
      <Link className="link-menu" to="/cadastro">
        Cadastro
      </Link>
      <Link className="link-menu" to="/listagem">
        Lista de Produtos
      </Link>
    </Container>
  );
}
