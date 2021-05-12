import React from "react";
import { Switch, Route } from "react-router-dom";

export const MyMeetups: React.FC = () => {
  return (
    <Switch>
      <Route
        path="/meetups"
        exact
        component={() => <h1>404 meetus encontrado</h1>}
      />
      <Route component={() => <h1>404 no encontrado</h1>} />
    </Switch>
  );
};