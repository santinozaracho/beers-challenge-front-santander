import { UserOutlined } from "@ant-design/icons";
import { Card, Row } from "antd";
import styled from "styled-components";

const RowContainer = styled(Row)`
  height: 100%;
  padding: 10%;
`;

const StyledUser = styled(UserOutlined)`
  margin-top: 16px;
  font-size: 64px;
`;

const StyledCard = styled(Card)`
  width: 200px;
`;
export { RowContainer, StyledUser, StyledCard };
