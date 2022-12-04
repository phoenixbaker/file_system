import {
  ReactNode,
  createContext,
  SetStateAction,
  useState,
  Dispatch,
} from "react";

import { UserType } from "../hooks/useUser/types";

type UserContextType = {
  user: UserType | null;
  setUser: Dispatch<SetStateAction<UserType | null>>;
};

type UserContextProviderProps = {
  children: ReactNode;
};

export const UserContext = createContext<UserContextType>(
  {} as UserContextType
);

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<UserType | null>(
    JSON.parse(localStorage.getItem("user")!)
  );
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
