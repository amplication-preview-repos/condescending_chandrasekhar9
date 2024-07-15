import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FileCreateInput = {
  filename?: string | null;
  fileType?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
