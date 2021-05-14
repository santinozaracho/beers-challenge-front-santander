import { useAuth } from "@hooks";
import React from "react";
import { Switch, Route } from "react-router-dom";
import { PageNotFound } from "./components";
import { Dashboard } from "./Dashboard";
import { Profile } from "./Profile";

const Main: React.FC = () => {
  useAuth();
  return (
    <Switch>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/profile" component={Profile} />
      <Route component={PageNotFound} />
    </Switch>
  );
};

export { Main };
