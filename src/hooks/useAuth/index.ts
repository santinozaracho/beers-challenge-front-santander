import { ERROR_MESSAGES, ROUTES, USER_TYPES } from "@constants";
import { notification } from "antd";
import { useHistory, useLocation } from "react-router";
import { useUserContext } from "@stores";

const onError = () => {
  notification.error({
    message: "Usuario no registrado",
    description: ERROR_MESSAGES.GENERIC_ERROR,
  });
};

const useAuth = () => {
  const { pathname } = useLocation();
  const { push } = useHistory();
  const { user } = useUserContext();

  const onReAuth = () => {
    onError();
    push("/");
  };

  if (!user) onReAuth();

  if (pathname.includes(ROUTES.DASHBOARD) && user !== USER_TYPES.ADMIN)
    onReAuth();

  if (pathname.includes(ROUTES.PROFILE) && user !== USER_TYPES.USER) onReAuth();

  return;
};

export { useAuth };
