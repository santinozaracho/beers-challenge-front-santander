import React from "react";
import { Card, Row } from "antd";
import { Meetup } from "@types";
import { StyledCard, StyledCol } from "../components";
import { useHistory, useLocation } from "react-router";

export const MeetupCard: React.FC<Meetup> = ({ title, id }) => {
  const { push } = useHistory();
  const { pathname } = useLocation();
  console.log(pathname);

  const navigateToMeetup = () => push(`${pathname}/${id}`);
  return (
    <StyledCol>
      <StyledCard hoverable onClick={navigateToMeetup}>
        <Row justify="center">
          <Card.Meta title={title} />
        </Row>
      </StyledCard>
    </StyledCol>
  );
};
