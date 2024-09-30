export interface DailyRoutine {
  id: string;
  user_id: string;
  created_at: string;
  startDate: string;
  description: string;
  endDate: string;
}

export interface DailyRoutineDetail {
  id: string;
  created_at: string;
  routine_id: string;
  date: string;
  isComplete: boolean;
}
