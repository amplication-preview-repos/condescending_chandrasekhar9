import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FileWhereInput = {
  id?: StringFilter;
  filename?: StringNullableFilter;
  fileType?: "Option1";
  user?: UserWhereUniqueInput;
};
