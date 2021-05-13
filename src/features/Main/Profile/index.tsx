import React from "react";
import { Switch, Route } from "react-router-dom";
import { PageNotFound } from "../components";
import { MyMeetups } from "./MyMeetups";

export const Profile: React.FC = () => {
  return (
    <Switch>
      <Route path="/myMeetups" exact component={MyMeetups} />
      <Route component={PageNotFound} />
    </Switch>
  );
};
