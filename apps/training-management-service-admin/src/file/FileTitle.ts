import { File as TFile } from "../api/file/File";

export const FILE_TITLE_FIELD = "filename";

export const FileTitle = (record: TFile): string => {
  return record.filename?.toString() || String(record.id);
};
