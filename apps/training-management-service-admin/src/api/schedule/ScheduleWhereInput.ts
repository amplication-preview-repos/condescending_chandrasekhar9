import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ScheduleWhereInput = {
  id?: StringFilter;
  date?: DateTimeNullableFilter;
  title?: StringNullableFilter;
  description?: StringNullableFilter;
};
