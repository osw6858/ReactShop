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
      .get("http://localhost:8080/products")
      .then(function (result) {
        const products = result.data.products;
        setProduts(products);
      })
      .catch(function (error) {
        console.log("에러발생  :", error);
      });
  }, []);

  return (
    <div>
      <div id="banner">
        <img src="images/banners/banner1.png" />
      </div>
      <h1>판매되는 상품들</h1>
      <div id="product-list">
        {products.map((product, index) => {
          return (
            <div className="product-card">
              <Link className="product-link" to={`/products/${product.id}`}>
                <div>
                  <img className="product-images" src={product.imageUrl} />
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
