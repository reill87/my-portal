import { UUID } from "crypto";

export interface DailyRoutine {
  id: string;
  user_id: string;
  created_at: string;
  startDate: string;
  description: string;
  endDate: string;
  details: DailyRoutineDetail[];
}

export interface DailyRoutineDetail {
  id: UUID;
  created_at: string;
  routine_id: string;
  date: string;
  isCompleted: boolean;
}
