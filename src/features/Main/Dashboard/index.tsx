import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { PageNotFound, Options } from "../components";
import { MeetupsRoutes } from "../routes";

export const Dashboard: React.FC = () => {
  const { push } = useHistory();
  const onSelectOption = (route: string) => {
    push(`/dashboard/${route}`);
  };
  return (
    <Switch>
      <Route
        exact
        path="/dashboard"
        component={() => <Options onSelect={onSelectOption} />}
      />
      <MeetupsRoutes baseUrl="/dashboard" />
      <Route component={PageNotFound} />
    </Switch>
  );
};
