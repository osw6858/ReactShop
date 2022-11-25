import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./index.css";

function PorductComponent() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(function () {
    axios
      .get(
        `https://41116889-f659-46c1-963d-21713ab8da7c.mock.pstmn.io/products/${id}`
      )
      .then(function (result) {
        setProduct(result.data);
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
        <h1>상품 정보를 받아오고 있습니다...</h1>
      </div>
    );
  }

  return (
    <div>
      <div id="image-box">
        <img src={"/" + product.imageUrl} />
      </div>
      <div id="profile-box">
        <img src="/images/icons/avatar.png" />
        <span>{product.seller}</span>
      </div>
      <div id="content-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price}</div>
        <div id="createdAt">2022/11/22</div>
        <div id="description">{product.description}</div>
      </div>
    </div>
  );
}

export default PorductComponent;
