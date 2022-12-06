import { UserType } from "./../../../hooks/useUser/types";
import apiClient from "../../../lib/client";

const endpoint = "/auth";

type logInProps = {
  email: string;
  password: string;
};

const logIn = async ({ email, password }: logInProps) => {
  let { data } = await apiClient.post<UserType>(endpoint + "/credentials", {
    email,
    password,
  });
  return data;
};

type registerProps = {
  email: string;
  password: string;
  name: string;
};

const registerUser = async ({ email, password, name }: registerProps) => {
  let { data, ok, problem } = await apiClient.post<UserType>(
    endpoint + "/register",
    {
      email,
      password,
      name,
    }
  );
  if (!ok) return console.warn(problem, data);
  return data;
};

export { logIn, registerUser };
