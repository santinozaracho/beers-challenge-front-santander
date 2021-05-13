import React from "react";
import { ERROR_MESSAGES } from "@constants";
import { Result } from "antd";

export const PageNotFound: React.FC = () => (
  <Result status="404" title="404" subTitle={ERROR_MESSAGES.GENERIC_ERROR} />
);
