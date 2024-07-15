import { User } from "../user/User";

export type Photo = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  url: string | null;
  description: string | null;
  user?: User | null;
};
