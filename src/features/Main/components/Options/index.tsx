import { ROUTES } from "@constants";
import { Card, Row } from "antd";
import Meta from "antd/lib/card/Meta";
import React from "react";
import styled from "styled-components";

interface Props {
  onSelect: (route: string) => void;
}
const StyledRow = styled(Row)`
  height: 50%;
`;

export const Options: React.FC<Props> = ({ onSelect }) => (
  <StyledRow justify="center" align="middle">
    <Card hoverable onClick={() => onSelect(ROUTES.MEETUPS)}>
      <Meta title="Encuentros" />
    </Card>
  </StyledRow>
);
