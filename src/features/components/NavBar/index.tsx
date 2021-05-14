import React from "react";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";

import { StyledButton, StyledCol, RowContainer, StyledRow } from "./components";
import { LogoSantander } from "@images";
import { useTranslation } from "react-i18next";
import { useUserContext } from "@stores";
import Avatar from "antd/lib/avatar/avatar";
import Text from "antd/lib/typography/Text";

const NavBar: React.FC = () => {
  const { user } = useUserContext();
  const { t } = useTranslation();
  return (
    <RowContainer>
      <StyledRow justify="space-between" align="middle">
        <Col xs={9} sm={12} md={4}>
          <img alt="logo" src={LogoSantander} />
        </Col>
        <StyledCol xs={9} sm={12} md={20}>
          {!user && (
            <Link to="/registrarse">
              <StyledButton type="primary">{t("common.signup")}</StyledButton>
            </Link>
          )}
          {user && (
            <Link to="/dashboard">
              <Row align="middle">
                <Avatar
                  style={{ backgroundColor: "red", verticalAlign: "middle" }}
                  gap={1}
                >
                  {user[0]}
                </Avatar>
                <Text type="secondary" strong>
                  Bienvenido!, {user}
                </Text>
              </Row>
            </Link>
          )}
        </StyledCol>
      </StyledRow>
    </RowContainer>
  );
};

export { NavBar };
