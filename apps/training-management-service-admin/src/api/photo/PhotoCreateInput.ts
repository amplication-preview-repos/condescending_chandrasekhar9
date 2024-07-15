import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PhotoCreateInput = {
  url?: string | null;
  description?: string | null;
  user?: UserWhereUniqueInput | null;
};
