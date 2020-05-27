import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Cadastro from "./components/cadastro/Cadastro";
import Menu from "./components/menu/Menu";
import Listagem from "./components/lista/Lista";
// import { UserProvider } from "./components/Context/UserContext";
import "./styles.css";
ReactDOM.render(
  <Router>
    <Menu />
    <Switch>
      <Route path="/cadastro">
        <Cadastro />
      </Route>
      <Route path="/listagem">
        <Listagem />
      </Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
