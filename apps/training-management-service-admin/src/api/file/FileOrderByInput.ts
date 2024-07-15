import { SortOrder } from "../../util/SortOrder";

export type FileOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  filename?: SortOrder;
  fileType?: SortOrder;
  userId?: SortOrder;
};
