export type FilesType = {
  _id?: string;
  name?: string;
  docs?: object[];
  dirs?: Array<FilesType>;
  files?: Array<PhotoType>;
};

export type PhotoType = {
  id?: string;
  length?: number;
  uploadDate?: number;
  filename?: string;
  contentType?: string;
};

export type PathType = Array<FilesType>;
