import { ROUTES } from "@constants";
import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { Options, PageNotFound } from "../components";
import { MeetupsRoutes } from "../routes";

export const Profile: React.FC = () => {
  const { push } = useHistory();
  const onSelectOption = (route: string) => {
    push(`/${ROUTES.PROFILE}/${route}`);
  };
  return (
    <Switch>
      <Route
        exact
        path={`/${ROUTES.PROFILE}`}
        component={() => <Options onSelect={onSelectOption} />}
      />
      <MeetupsRoutes baseUrl={`/${ROUTES.PROFILE}`} />
      <Route component={PageNotFound} />
    </Switch>
  );
};
