import React from "react";
import { Switch, Route } from "react-router-dom";
import { Dashboard } from "./Dashboard";
import { Profile } from "./Profile";

const Main: React.FC = () => {
  return (
    <Switch>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/profile" component={Profile} />
      <Route component={() => <h1>404 no encontrado</h1>} />
    </Switch>
  );
};

export { Main };
