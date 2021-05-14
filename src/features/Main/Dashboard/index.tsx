import { ROUTES } from "@constants";
import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { PageNotFound, Options } from "../components";
import { MeetupsRoutes } from "../routes";

export const Dashboard: React.FC = () => {
  const { push } = useHistory();
  const onSelectOption = (route: string) => {
    push(`/${ROUTES.DASHBOARD}/${route}`);
  };
  return (
    <Switch>
      <Route
        exact
        path={`/${ROUTES.DASHBOARD}`}
        component={() => <Options onSelect={onSelectOption} />}
      />
      <MeetupsRoutes baseUrl={`/${ROUTES.DASHBOARD}`} />
      <Route component={PageNotFound} />
    </Switch>
  );
};
