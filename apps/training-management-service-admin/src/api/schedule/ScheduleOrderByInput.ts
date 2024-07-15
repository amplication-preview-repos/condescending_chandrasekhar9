import { SortOrder } from "../../util/SortOrder";

export type ScheduleOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  date?: SortOrder;
  title?: SortOrder;
  description?: SortOrder;
};
