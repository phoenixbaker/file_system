import { FilesType } from "hooks/useFiles/types";

export type UserType = {
  _id?: string;
  email?: string;
  name?: string;
  dir?: Array<FilesType> | Array<string>;
};
