import { BrowserRouter, Switch, Route } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Search from "./pages/Search";

import Heroes from "./store/Heroes";
import HeroTeam from "./store/HeroTeam";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Heroes>
          <HeroTeam>
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute exact path="/search" component={Search} />
          </HeroTeam>
        </Heroes>
      </Switch>
    </BrowserRouter>
  );
};
export default Router;
