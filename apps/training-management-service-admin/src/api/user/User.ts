import { JsonValue } from "type-fest";
import { File } from "../file/File";
import { Photo } from "../photo/Photo";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  files?: Array<File>;
  photos?: Array<Photo>;
};
