import apiClient from "./client";

const endpoint = "/documents";

const createDocument = async (id) => {
  let { data } = await apiClient.post(endpoint + "/new", {
    id: id,
    email: "phoenixbvu@gmail.com",
  });
  return data;
};

const getFiles = async () => {
  let { data } = await apiClient.get(endpoint + "/get");
  return data;
};

export { createDocument, getFiles };
