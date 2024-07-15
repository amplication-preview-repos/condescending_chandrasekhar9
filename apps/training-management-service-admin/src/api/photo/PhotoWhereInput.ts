import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PhotoWhereInput = {
  id?: StringFilter;
  url?: StringNullableFilter;
  description?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
