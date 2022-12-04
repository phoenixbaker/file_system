import { FilesType, PathType } from "hooks/useFiles/types";
import apiClient from "lib/client";

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

const createDir = async (
  dir_id: string,
  name: string
): Promise<FilesType | void> => {
  let { data } = await apiClient.post<FilesType>(endpoint + "/dir", {
    dir_id,
    name,
  });
  if (!data) return;
  return data;
};

export { createDocument, createDir };
