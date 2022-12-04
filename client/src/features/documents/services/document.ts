import apiClient from "../../../lib/client";

const endpoint = "/documents";

const createDocument = async (id: string, path: string) => {
  let user = localStorage.getItem("user");
  if (!user) return;
  user = JSON.parse(user);
  let { data } = await apiClient.post(endpoint + "/new", {
    id,
    dir_id: path,
  });
  return data;
};

export { createDocument };
