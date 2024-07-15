import { User } from "../user/User";

export type File = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  filename: string | null;
  fileType?: "Option1" | null;
  user?: User | null;
};
