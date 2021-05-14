import { useAuth } from "@hooks";
import { Skeleton } from "antd";
import React from "react";

export const Auth: React.FC = () => {
  useAuth();
  return <Skeleton />;
};
