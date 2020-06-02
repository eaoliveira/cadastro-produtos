import React, { useState, useCallback } from "react";
import { Container } from "../../styles.js";
import { Link } from "react-router-dom";

export default function Listagem() {
  const list = JSON.parse(localStorage.getItem("produtos"));

  return <Container></Container>;
}
