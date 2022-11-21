import "./App.css";
import MainPageComponent from "./main/index.js";
import { Switch, Route } from "react-router-dom";
import UploadComponemt from "./upload";
import PorductComponent from "./producrt";

function App() {
  return (
    <div>
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
  );
}

export default App;
