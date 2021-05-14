import React from "react";
import { Col, Row, Skeleton, Statistic, Switch } from "antd";

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
import { Utils } from "@services";
import { useUserContext } from "@stores";

interface Params {
  id: string;
}

export const Meetup: React.FC = () => {
  const { user } = useUserContext();
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

    const isAdmin = user === "ADMIN";
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
                    <Countdown title={t("meetup.timeleft")} value={date} />
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
              <StyledDataCard>
                <Col>
                  <Statistic
                    title={t("meetup.guests")}
                    value={guests}
                    prefix={<UserOutlined />}
                  />
                </Col>
              </StyledDataCard>

              {Utils.isForecastAvailable(date) ? (
                <>
                  {isAdmin && (
                    <StyledDataCard>
                      <Col>
                        <Statistic
                          title={t("meetup.beers")}
                          value={packs}
                          prefix={<BoxPlotOutlined />}
                          loading={isWeatherLoading}
                        />
                        s
                      </Col>
                    </StyledDataCard>
                  )}
                  <StyledDataCard>
                    <Col>
                      <Statistic
                        title={t("meetup.temp")}
                        value={temp}
                        prefix={<UserOutlined />}
                        loading={isWeatherLoading}
                      />
                    </Col>
                  </StyledDataCard>
                </>
              ) : (
                <Text>
                  Informacion del clima y cantidad de cervezas solo 15 dias
                  antes
                </Text>
              )}
            </Row>
          </Col>
        </Row>
      </StyledCard>
    );
  }

  return <PageNotFound />;
};
