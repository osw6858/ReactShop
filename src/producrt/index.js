import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

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
  console.log(product);
  return <h1>상품상세 페이지 {id} 상품</h1>;
}

export default PorductComponent;
