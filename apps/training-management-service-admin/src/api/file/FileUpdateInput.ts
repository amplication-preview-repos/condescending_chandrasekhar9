import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FileUpdateInput = {
  filename?: string | null;
  fileType?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
