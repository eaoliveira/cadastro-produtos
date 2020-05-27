import React from "react";
import "./menu.css";
import { Container } from "../../styles.js";
import { Link } from "react-router-dom";
export default function Menu() {
  return (
    <Container className="container-menu">
      <Link className="link-menu">Cadastro</Link>
      <Link className="link-menu">Lista de Produtos</Link>
    </Container>
  );
}
