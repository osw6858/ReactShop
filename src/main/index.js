import "./index.css";
import axios from "axios";
import React from "react";

function MainPageComponent() {
  const [products, setProduts] = React.useState([]);

  React.useEffect(function () {
    axios
      .get(
        "https://41116889-f659-46c1-963d-21713ab8da7c.mock.pstmn.io/products"
      )
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
      <div id="header">
        <div id="head-area">
          <img src="images/icons/logo.png" />
        </div>
      </div>
      <div id="body">
        <div id="banner">
          <img src="images/banners/banner1.png" />
        </div>
        <h1>판매되는 상품들</h1>
        <div id="product-list">
          {products.map((product, index) => {
            return (
              <div className="product-card">
                <div>
                  <img className="product-images" src={product.imageUrl} />
                </div>
                <div className="product-contents">
                  <span className="porduct-name">{product.name}</span>
                  <span className="product-price">{product.price}</span>
                </div>
                <div className="product-seller">
                  <img
                    className="product-avatar"
                    src="images/icons/avatar.png"
                  />
                  <span>{product.seller}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default MainPageComponent;
