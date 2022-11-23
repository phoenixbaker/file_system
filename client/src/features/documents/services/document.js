import apiClient from "../../../lib/client";

const endpoint = "/documents";

const createDocument = async (id, path) => {
  let user = localStorage.getItem("user");
  user = JSON.parse(user);
  console.log("from storage");
  console.log(user.email);
  let { data } = await apiClient.post(endpoint + "/new", {
    id,
    dir_id: path,
  });
  return data;
};

export { createDocument };
