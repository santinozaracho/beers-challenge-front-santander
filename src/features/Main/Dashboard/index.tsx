import React from "react";
import { Switch, Route } from "react-router-dom";
import { Meetups } from "../components";

export const Dashboard: React.FC = () => {
  return (
    <Switch>
      <Route path="/dashboard/meetups" exact component={Meetups} />
      <Route component={() => <h1>404 no eencontrado</h1>} />
    </Switch>
  );
};
