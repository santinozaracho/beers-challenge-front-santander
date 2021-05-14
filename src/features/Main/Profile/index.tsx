import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { Options, PageNotFound } from "../components";
import { MeetupsRoutes } from "../routes";

export const Profile: React.FC = () => {
  const { push } = useHistory();
  const onSelectOption = (route: string) => {
    push(`/profile/${route}`);
  };
  return (
    <Switch>
      <Route
        exact
        path="/"
        component={() => <Options onSelect={onSelectOption} />}
      />
      <MeetupsRoutes baseUrl="/profile" />
      <Route component={PageNotFound} />
    </Switch>
  );
};
