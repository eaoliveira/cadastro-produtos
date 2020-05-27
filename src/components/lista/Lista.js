import React, { useState, useCallback } from "react";
import { Container } from "../../styles.js";
import "./lista.css";
export default function Listagem() {
  const list = [
    {
      SKU: "123123123123",
      nameProduct: "Vestido Vermelho",
      description: "123",
      price: "20",
      qnt: "2",
      img:
        "https://t-static.dafiti.com.br/Bxc6xxJx2Xpr3QVUolJH2apBdKY=/fit-in/430x623/static.dafiti.com.br/p/racy-modas-vestido-racy-modas-midi-alcinha-dupla-vermelho-5727-8617283-1-zoom.jpg",
    },
    {
      SKU: "123",
      nameProduct: "123",
      description: "123",
      price: "20",
      qnt: "2",
      img:
        "https://t-static.dafiti.com.br/Bxc6xxJx2Xpr3QVUolJH2apBdKY=/fit-in/430x623/static.dafiti.com.br/p/racy-modas-vestido-racy-modas-midi-alcinha-dupla-vermelho-5727-8617283-1-zoom.jpg",
    },
    {
      SKU: "123",
      nameProduct: "123",
      description: "123",
      price: "20",
      qnt: "2",
      img:
        "https://t-static.dafiti.com.br/Bxc6xxJx2Xpr3QVUolJH2apBdKY=/fit-in/430x623/static.dafiti.com.br/p/racy-modas-vestido-racy-modas-midi-alcinha-dupla-vermelho-5727-8617283-1-zoom.jpg",
    },
    {
      SKU: "123",
      nameProduct: "123",
      description: "123",
      price: "20",
      qnt: "2",
      img:
        "https://t-static.dafiti.com.br/Bxc6xxJx2Xpr3QVUolJH2apBdKY=/fit-in/430x623/static.dafiti.com.br/p/racy-modas-vestido-racy-modas-midi-alcinha-dupla-vermelho-5727-8617283-1-zoom.jpg",
    },
    {
      SKU: "123",
      nameProduct: "123",
      description: "123",
      price: "20",
      qnt: "2",
      img:
        "https://t-static.dafiti.com.br/Bxc6xxJx2Xpr3QVUolJH2apBdKY=/fit-in/430x623/static.dafiti.com.br/p/racy-modas-vestido-racy-modas-midi-alcinha-dupla-vermelho-5727-8617283-1-zoom.jpg",
    },
  ];

  return (
    <Container>
      <div className="productList">
        {list.map((produto) => (
          <div
            key={produto.SKU}
            className="product"
            style={{ backgroundImage: "url(" + produto.img + ")" }}
          >
            <div className="productSKU"> {produto.SKU}</div>
            <div>
              <div className="productName"> {produto.price}</div>

              <div className="productName"> {produto.nameProduct}</div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
