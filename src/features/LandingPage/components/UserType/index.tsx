import React from "react";
import { Card, Col, Row } from "antd";
import { UserOutlined } from "@ant-design/icons";

import { RowContainer } from "./components";
import Meta from "antd/lib/card/Meta";
import { useHistory } from "react-router";
import Title from "antd/lib/typography/Title";
import { useUserContext } from "@stores";

const userTypes = [
  {
    name: "Admin",
    type: "ADMIN",
    route: "/dashboard/meetups",
  },
  {
    name: "Usuario",
    type: "USER",
    route: "/profile/myMeetups",
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
