import React from "react";
import { Card, Col, Row } from "antd";
import { UserOutlined } from "@ant-design/icons";

import { RowContainer } from "./components";
import Meta from "antd/lib/card/Meta";
import { useHistory } from "react-router";
import Title from "antd/lib/typography/Title";
import { useUserContext } from "@stores";
import { ROUTES, USER_TYPES } from "@constants";

const userTypes = [
  {
    name: "Admin",
    type: USER_TYPES.ADMIN,
    route: `/${ROUTES.DASHBOARD}`,
  },
  {
    name: "Usuario",
    type: USER_TYPES.USER,
    route: `/${ROUTES.PROFILE}`,
  },
];

export const UserType: React.FC = () => {
  const { changeUser } = useUserContext();
  const { push } = useHistory();

  const onSelectUser = (type: string, route: string) => {
    changeUser(type);
    push(route);
  };
  return (
    <RowContainer justify="center">
      <Col>
        <Row justify="center">
          <Title level={2}>Bienvenido!, como deseas ingresar?.</Title>
        </Row>
        <Row justify="space-between">
          {userTypes.map(({ name, type, route }) => (
            <Card
              hoverable
              style={{ width: 200 }}
              onClick={() => onSelectUser(type, route)}
              cover={
                <UserOutlined
                  color="#737373"
                  style={{ marginTop: "16px", fontSize: "64px" }}
                />
              }
            >
              <Row justify="center">
                <Meta title={name} />
              </Row>
            </Card>
          ))}
        </Row>
      </Col>
    </RowContainer>
  );
};
