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

const redirectRoutes = {
  [USER_TYPES.ADMIN]: `/${ROUTES.DASHBOARD}`,
  [USER_TYPES.USER]: `/${ROUTES.PROFILE}`,
  [USER_TYPES.VISITOR]: "/",
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

  if (pathname.includes(ROUTES.AUTH)) {
    setTimeout(() => {
      push(redirectRoutes[user ?? USER_TYPES.VISITOR]);
    }, [1000]);
  }

  if (pathname.includes(ROUTES.DASHBOARD) && user !== USER_TYPES.ADMIN)
    onReAuth();

  if (pathname.includes(ROUTES.PROFILE) && user !== USER_TYPES.USER) onReAuth();

  return;
};

export { useAuth };
