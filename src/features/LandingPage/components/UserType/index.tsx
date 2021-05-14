import React from "react";
import { Col, Row } from "antd";

import { RowContainer, StyledCard, StyledUser } from "./components";
import Meta from "antd/lib/card/Meta";
import { useHistory } from "react-router";
import Title from "antd/lib/typography/Title";
import { useUserContext } from "@stores";
import { ROUTES, USER_TYPES } from "@constants";
import { useTranslation } from "react-i18next";

const users = [
  {
    type: USER_TYPES.ADMIN,
    route: `/${ROUTES.DASHBOARD}`,
  },
  {
    type: USER_TYPES.USER,
    route: `/${ROUTES.PROFILE}`,
  },
];

export const UserType: React.FC = () => {
  const { t } = useTranslation();
  const { changeUser } = useUserContext();
  const { push } = useHistory();

  const onSelectUser = (type: string) => {
    changeUser(type);
    push(`${ROUTES.AUTH}`);
  };
  return (
    <RowContainer justify="center">
      <Col>
        <Row justify="center">
          <Title level={2}>{t("common.welcome")}</Title>
        </Row>
        <Row justify="space-between">
          {users.map(({ type, route }) => (
            <StyledCard
              hoverable
              onClick={() => onSelectUser(type)}
              cover={<StyledUser color="#737373" />}
            >
              <Row justify="center">
                <Meta title={t(`users.${type}`)} />
              </Row>
            </StyledCard>
          ))}
        </Row>
      </Col>
    </RowContainer>
  );
};
