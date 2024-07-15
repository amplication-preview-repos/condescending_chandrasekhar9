import { Photo as TPhoto } from "../api/photo/Photo";

export const PHOTO_TITLE_FIELD = "url";

export const PhotoTitle = (record: TPhoto): string => {
  return record.url?.toString() || String(record.id);
};
