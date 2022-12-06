import { DocumentType, FilesType } from "hooks/useFiles/types";
import { UserType } from "hooks/useUser/types";
import apiClient from "../../../lib/client";

const endpoint = "/documents";

const createDocument = async (
  id: string,
  path: string,
  user: UserType = JSON.parse(localStorage.getItem("user")!)
): Promise<DocumentType | void> => {
  if (!user) return;
  let { data } = await apiClient.post<DocumentType>(endpoint + "/new", {
    id,
    dir_id: path,
  });
  return data;
};

export { createDocument };
