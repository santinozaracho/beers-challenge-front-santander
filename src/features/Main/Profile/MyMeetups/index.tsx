import React from "react";
import { Switch, Route } from "react-router-dom";
import { Meetups, PageNotFound } from "../../components";

export const MyMeetups: React.FC = () => {
  return (
    <Switch>
      <Route path="/meetups" exact component={Meetups} />
      <Route component={PageNotFound} />
    </Switch>
  );
};
