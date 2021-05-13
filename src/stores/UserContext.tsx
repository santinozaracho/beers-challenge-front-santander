import React, {
  createContext,
  ReactElement,
  useContext,
  useState,
} from "react";

/**
 * @description User Context is responsible for Inject the User Query as provider for use as a Hook in all App Context.
 * @return {provider}
 */

interface UserCtx {
  user: string | null;
  changeUser: (user: string) => void;
}

export const UserContext = createContext<UserCtx>({
  user: null,
  changeUser: () => {},
});

UserContext.displayName = "UserContext";

export const UserProvider: React.FC<ReactElement> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);

  const changeUser = (user: string) => setUser(user);

  return (
    <UserContext.Provider
      value={{
        user,
        changeUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
