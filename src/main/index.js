import "./index.css";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import { Carousel } from "antd";
import relativeTime from "dayjs/plugin/relativeTime";
import { API_URL } from "../config/constant.js";
dayjs.extend(relativeTime);

function MainPageComponent() {
  const [products, setProduts] = React.useState([]);
  const [banners, setBanners] = React.useState([]);
  React.useEffect(function () {
    axios
      //useEffect가 없으면 무한루프
      .get(`${API_URL}/products`) //${} => String 구문 안에 변수명을 사용할떄 / {} => jsx문법을 사용할떄
      .then(function (result) {
        const products = result.data.products;
        setProduts(products); //리렌더링 되는 시점
      })
      .catch(function (error) {
        console.log("에러발생  :", error);
      });

    axios
      .get(`${API_URL}/banners`)
      .then((result) => {
        const banners = result.data.banners;
        setBanners(banners);
      })
      .catch((error) => {
        console.error("에러 발생 : ", error);
      });
  }, []);

  return (
    <div>
      <Carousel autoplay autoplaySpeed={3000}>
        {banners.map((banner, index) => {
          return (
            <Link to={banner.href}>
              <div id="banner">
                <img src={`${API_URL}/${banner.imageUrl}`} />
              </div>
            </Link>
          );
        })}
      </Carousel>
      <h1 id="product-headline">판매되는 상품들</h1>
      <div id="product-list">
        {products.map((product, index) => {
          return (
            <div className="product-card">
              {
                product.soldout === 1 && (
                  <div className="product-blur" />
                ) /*DB에 저장된 soldout의 값이 1이면 블러처리  */
              }
              <Link className="product-link" to={`/products/${product.id}`}>
                <div>
                  <img
                    className="product-images"
                    src={`${API_URL}/${product.imageUrl}`}
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
