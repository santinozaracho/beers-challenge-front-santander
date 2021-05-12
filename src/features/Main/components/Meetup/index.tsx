import React from "react";
import { Col, Row } from "antd";

import Title from "antd/lib/typography/Title";
import { useMeetupQuery } from "./hooks";
import { useTranslation } from "react-i18next";
import { Loading, MeetupCard } from "./components";

export const Meetup: React.FC = () => {
  const { t } = useTranslation();
  const { data, isLoading } = useMeetupQuery();
  return (
    <Row justify="center">
      <Col>
        <Row justify="center">
          <Title level={2}>{t("common.meetups")}</Title>
        </Row>
        <Row gutter={16} justify="center">
          {isLoading && <Loading />}
          {data?.map((meetup) => (
            <MeetupCard {...meetup} />
          ))}
        </Row>
      </Col>
    </Row>
  );
};
