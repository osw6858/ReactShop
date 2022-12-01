import { Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "./App.css";
import MainPageComponent from "./main/index.js";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import UploadComponemt from "./upload";
import PorductComponent from "./product";
//Link 컴포넌트는 HTML5 History API를 사용하여 브라우저의 주소만 바꿀 뿐,
//페이지를 새로 불러오지는 않는다.

function App() {
  const history = useHistory();
  return (
    <div>
      <div id="header">
        <div id="head-area">
          <Link to={"/"}>
            <img src="/images/icons/logo.png" />
          </Link>
          <Button
            size="large"
            onClick={function () {
              history.push("/upload");
            }}
            icon={<UploadOutlined />}
          >
            상품업로드
          </Button>
        </div>
      </div>
      <div id="body">
        <Switch>
          <Route exact={true} path={"/"}>
            <MainPageComponent />
          </Route>
          <Route exact={true} path={"/products/:id"}>
            <PorductComponent />
          </Route>
          <Route exact={true} path={"/upload"}>
            <UploadComponemt />
          </Route>
        </Switch>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default App;
