import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import VitaminsPage from "./components/pages/VitaminsPage";
import MineralsPage from "./components/pages/MineralsPage";
import PlantsPage from "./components/pages/PlantsPage";
import SpecialitiesPage from "./components/pages/SpecialitiesPage";

export const VitaminsRoute = "/vitamins";
export const MineralsRoute = "/minerals/";
export const PlantsRoute = "/plants/";
export const SpecialitiesRoute = "/specialities/";

export default function Routing() {
  return (
    <Router>
      <Switch>
        <Route path={VitaminsRoute} exact component={VitaminsPage} />
        <Route path={MineralsRoute} component={MineralsPage} />
        <Route path={PlantsRoute} component={PlantsPage} />
        <Route path={SpecialitiesRoute} component={SpecialitiesPage} />
        <Redirect to={VitaminsRoute} />
      </Switch>
    </Router>
  );
}
