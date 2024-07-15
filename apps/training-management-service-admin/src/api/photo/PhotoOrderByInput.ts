import { SortOrder } from "../../util/SortOrder";

export type PhotoOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
  description?: SortOrder;
  userId?: SortOrder;
};
