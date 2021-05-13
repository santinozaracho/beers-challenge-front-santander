import React from "react";
import { Col } from "antd";
import { Link } from "react-router-dom";

import { StyledButton, StyledCol, RowContainer, StyledRow } from "./components";
import { LogoSantander } from "@images";
import { useTranslation } from "react-i18next";

const NavBar: React.FC = () => {
  const { t } = useTranslation();
  return (
    <RowContainer>
      <StyledRow justify="space-between" align="middle">
        <Col xs={9} sm={12} md={4}>
          <img alt="logo" src={LogoSantander} />
        </Col>
        <StyledCol xs={9} sm={12} md={20}>
          <Link to="/registrarse">
            <StyledButton type="primary">{t("common.signup")}</StyledButton>
          </Link>
        </StyledCol>
      </StyledRow>
    </RowContainer>
  );
};

export { NavBar };
