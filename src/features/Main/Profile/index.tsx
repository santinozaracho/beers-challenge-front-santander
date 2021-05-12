import React from "react";
import { Switch, Route } from "react-router-dom";
import { MyMeetups } from "./MyMeetups";

export const Profile: React.FC = () => {
  return (
    <Switch>
      <Route
        path="/myMeetups"
        exact
        component={MyMeetups}
      />
      <Route component={() => <h1>404 no encontrado</h1>} />
    </Switch>
  );
};
