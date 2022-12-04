import apiClient from "lib/client";

import { FilesType } from "hooks/useFiles/types";

const endpoint = "/documents";
const endpoint2 = "/upload";

const getDir = async (dir: string): Promise<FilesType | void> => {
  let { data } = await apiClient.get<FilesType>(endpoint + "/dir/" + dir);
  if (!data) return;
  return data;
};

const getPreview = async (id: string) => {
  let { data } = await apiClient.get(endpoint2 + "/files/" + id);
  return data;
};

export { getDir, getPreview };
