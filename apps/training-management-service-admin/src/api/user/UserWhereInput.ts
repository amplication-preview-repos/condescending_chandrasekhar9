import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FileListRelationFilter } from "../file/FileListRelationFilter";
import { PhotoListRelationFilter } from "../photo/PhotoListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  files?: FileListRelationFilter;
  photos?: PhotoListRelationFilter;
};
