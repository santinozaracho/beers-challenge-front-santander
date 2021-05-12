import React from "react";
import { Card, Row } from "antd";
import { Meetup } from "@types";
import { StyledCard, StyledCol } from "../components";
import { useHistory } from "react-router";

export const MeetupCard: React.FC<Meetup> = ({ title }) => {
  const { push } = useHistory();

  const navigateToMeetup = () => push("/");
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
