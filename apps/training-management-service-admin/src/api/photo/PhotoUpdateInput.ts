import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PhotoUpdateInput = {
  url?: string | null;
  description?: string | null;
  user?: UserWhereUniqueInput | null;
};
