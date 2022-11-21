import apiClient from "./client";

const endpoint = "/auth";

const logIn = async ({ email, password }) => {
  let { data } = await apiClient.post(endpoint + "/credentials", {
    email,
    password,
  });

  return data;
};

const registerUser = async ({ email, password, name }) => {
  let { data, ok, problem } = await apiClient.post(endpoint + "/register", {
    email,
    password,
    name,
  });
  if (!ok) return console.warn(problem, data);
  return data;
};

export { logIn, registerUser };
