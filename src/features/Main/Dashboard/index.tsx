import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { useUserContext } from "@stores";
import { PageNotFound } from "../components";
import { MeetupsRoutes } from "../routes";

export const Dashboard: React.FC = () => {
  const { push } = useHistory();
  const { user } = useUserContext();
  if (!user || user !== "ADMIN") push("/");
  return (
    <Switch>
      <MeetupsRoutes baseUrl="/dashboard" />
      <Route component={PageNotFound} />
    </Switch>
  );
};
