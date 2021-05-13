import React from "react";
import { Route, Switch } from "react-router";
import { Meetup, Meetups, PageNotFound } from "../components";

interface Props {
  baseUrl: string;
}

export const MeetupsRoutes: React.FC<Props> = ({ baseUrl }) => {
  return (
    <Switch>
      <Route path={`${baseUrl}/meetups`} exact component={Meetups} />
      <Route path={`${baseUrl}/meetups/:id`} exact component={Meetup} />
      <Route component={PageNotFound} />
    </Switch>
  );
};
