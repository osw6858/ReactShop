import { useParams } from "react-router-dom";

function PorductComponent() {
  const { id } = useParams();
  //console.log(params);
  return <h1>상품상세 페이지 {id} 상품</h1>;
}

export default PorductComponent;
