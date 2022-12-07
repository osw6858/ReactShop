import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import { Space, Spin } from "antd";
import "./index.css";
import dayjs from "dayjs";
import { API_URL } from "../config/constant.js";

function PorductComponent() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(function () {
    axios
      .get(
        `
        ${API_URL}/products/${id}`
      )
      .then(function (result) {
        setProduct(result.data.product);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  /*비동기 통신으로 페이지가 렌더링이 먼저 되고 promise객체가 나중에 업데이트 되면서 렌더링되는데
    useState 초기값이 null이라 첫 렌더링시 null.상품이름 하면 오류가 나기 때문에 조건문 설정*/
  if (product === null) {
    return (
      <div id="loading">
        <Space size="middle">
          <Spin size="large" />
        </Space>
      </div>
    );
  }

  return (
    <div>
      <div id="image-box">
        <img src={`${API_URL}/${product.imageUrl}`} />
      </div>
      <div id="profile-box">
        <img src="/images/icons/avatar.png" />
        <span>{product.seller}</span>
      </div>
      <div id="content-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price}</div>
        <div id="createdAt">
          {dayjs(product.createdAt).format("YYYY년 MM월 DD일")}
        </div>
        <pre id="description">{product.description}</pre>
      </div>
    </div>
  );
}

export default PorductComponent;
