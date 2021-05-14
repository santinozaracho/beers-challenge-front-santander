import React from "react";
import { Row } from "antd";

import { RowContainer } from "./components";
import Text from "antd/lib/typography/Text";

const Footer: React.FC = () => {
  return (
    <RowContainer>
      <Row justify="space-between" align="middle">
        <Text type="secondary">Github</Text>
        <Text type="secondary">Zaracho Simonetto, Carlos Santino</Text>
      </Row>
    </RowContainer>
  );
};

export { Footer };
