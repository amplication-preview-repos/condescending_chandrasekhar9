import { InputJsonValue } from "../../types";
import { FileUpdateManyWithoutUsersInput } from "./FileUpdateManyWithoutUsersInput";
import { PhotoUpdateManyWithoutUsersInput } from "./PhotoUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  files?: FileUpdateManyWithoutUsersInput;
  photos?: PhotoUpdateManyWithoutUsersInput;
};
