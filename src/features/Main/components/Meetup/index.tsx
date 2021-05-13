import React, { useEffect } from "react";
import { Col, Result, Row, Skeleton, Statistic, Switch } from "antd";

import Title from "antd/lib/typography/Title";
import { useMeetupQuery, useTempAndBeersQuery } from "./hooks";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
import {
  UserOutlined,
  BoxPlotOutlined,
  CarryOutOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import { StyledCard, StyledDataCard } from "./components";
import Text from "antd/lib/typography/Text";
import Countdown from "antd/lib/statistic/Countdown";
import { PageNotFound } from "../PageNotFound";

interface Params {
  id: string;
}

export const Meetup: React.FC = () => {
  const routeParams = useParams<Params>();
  console.log(Number(routeParams.id));

  const { data, isLoading } = useMeetupQuery({
    id: Number(routeParams.id),
  });
  console.log(data);

  const { temp, packs, isLoading: isWeatherLoading } = useTempAndBeersQuery({
    date: data?.date,
    guests: data?.guests,
    coords: data?.location?.coords,
  });

  const { t } = useTranslation();

  if (isLoading)
    return (
      <StyledCard>
        <Skeleton active />
      </StyledCard>
    );

  if (data) {
    const { title, guests, date, location } = data;

    return (
      <StyledCard>
        <Row justify="center">
          <Col>
            <Row justify="center">
              <Title level={2}>{title}</Title>
            </Row>
            <Row align="middle" justify="end">
              <Switch size="small" />
              <Text type="secondary">{t("meetup.enableNotifications")}</Text>
            </Row>
            <Row justify="center">
              <StyledDataCard>
                <Row gutter={32}>
                  <Col>
                    <Statistic
                      title={t("meetup.date")}
                      value={date}
                      prefix={<CarryOutOutlined />}
                    />
                    <Countdown title={t("meeetup.timeleft")} value={date} />
                  </Col>
                  <Col>
                    <Statistic
                      title={t("meetup.location")}
                      value={`${location?.address}, ${location?.city}`}
                      prefix={<EnvironmentOutlined />}
                    />
                  </Col>
                </Row>
              </StyledDataCard>
            </Row>
            <Row justify="center">
              <Col span={6}>
                <StyledDataCard>
                  <Row gutter={32} justify="center">
                    <Statistic
                      title={t("meetup.guests")}
                      value={guests}
                      prefix={<UserOutlined />}
                    />
                  </Row>
                </StyledDataCard>
              </Col>
              <Col span={18}>
                <StyledDataCard>
                  <Text>
                    Informacion del clima y cantidad de cervezas solo 15 dias
                    antes
                  </Text>
                  <Row gutter={32} justify="center">
                    <Col>
                      <Statistic
                        title={t("meetup.beers")}
                        value={packs}
                        prefix={<BoxPlotOutlined />}
                        loading={isWeatherLoading}
                      />
                    </Col>
                    <Col>
                      <Statistic
                        title={t("meetup.temp")}
                        value={temp}
                        prefix={<UserOutlined />}
                        loading={isWeatherLoading}
                      />
                    </Col>
                  </Row>
                </StyledDataCard>
              </Col>
            </Row>
          </Col>
        </Row>
      </StyledCard>
    );
  }

  return <PageNotFound />;
};
