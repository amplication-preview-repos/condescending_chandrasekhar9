import { Schedule as TSchedule } from "../api/schedule/Schedule";

export const SCHEDULE_TITLE_FIELD = "title";

export const ScheduleTitle = (record: TSchedule): string => {
  return record.title?.toString() || String(record.id);
};
