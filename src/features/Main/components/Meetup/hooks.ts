import { useQuery } from "react-query";
import { notification } from "antd";

import { ERROR_MESSAGES } from "@constants";
import { MeetupAPI } from "@services";

const onError = () => {
  notification.error({
    message: "Error al obtener los datos",
    description: ERROR_MESSAGES.GENERIC_ERROR,
  });
};

export const useMeetupQuery = () =>
  useQuery(false, MeetupAPI.getAll, {
    onError,
  });
