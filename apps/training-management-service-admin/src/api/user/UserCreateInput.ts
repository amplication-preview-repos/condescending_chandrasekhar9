import { InputJsonValue } from "../../types";
import { FileCreateNestedManyWithoutUsersInput } from "./FileCreateNestedManyWithoutUsersInput";
import { PhotoCreateNestedManyWithoutUsersInput } from "./PhotoCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  files?: FileCreateNestedManyWithoutUsersInput;
  photos?: PhotoCreateNestedManyWithoutUsersInput;
};
