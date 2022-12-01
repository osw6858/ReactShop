import "./index.css";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

function MainPageComponent() {
  const [products, setProduts] = React.useState([]);

  React.useEffect(function () {
    axios
      .get("http://localhost:8080/products") //useEffect가 없으면 무한루프
      .then(function (result) {
        const products = result.data.products;
        setProduts(products); //리렌더링 되는 시점
      })
      .catch(function (error) {
        console.log("에러발생  :", error);
      });
  }, []);

  return (
    <div>
      <div id="banner">
        <img src="images/banners/banner1.png" alt="배너이미지" />
      </div>
      <h1>판매되는 상품들</h1>
      <div id="product-list">
        {products.map((product, index) => {
          return (
            <div className="product-card">
              <Link className="product-link" to={`/products/${product.id}`}>
                <div>
                  <img
                    className="product-images"
                    src={product.imageUrl}
                    alt="상품이미지"
                  />
                </div>
                <div className="product-contents">
                  <span className="porduct-name">{product.name}</span>
                  <span className="product-price">{product.price}</span>
                </div>
                <div className="product-footer">
                  <div className="product-seller">
                    <img
                      className="product-avatar"
                      src="images/icons/avatar.png"
                      alt="아바타 이미지"
                    />
                    <span>{product.seller}</span>
                  </div>
                  <div className="product-date">
                    <span>{dayjs(product.createdAt).fromNow()}</span>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MainPageComponent;
