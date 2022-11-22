import "./App.css";
import MainPageComponent from "./main/index.js";
import { Switch, Route } from "react-router-dom";
import UploadComponemt from "./upload";
import PorductComponent from "./producrt";

function App() {
  return (
    <div>
      <div id="header">
        <div id="head-area">
          <img src="/images/icons/logo.png" />
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
