import { ChangeEvent } from 'react';
import { DailyRoutine, DailyRoutineDetail } from './type';
import { v4 } from 'uuid';
import { mutate } from 'swr';

interface ListProps {
  routines: DailyRoutine[];
  currentDate: Date;
}

type updateBody = {
  routine_id: string;
  date: Date;
  isCompleted: boolean;
  id?: string;
};

const hasDetailAtSelectedDate = (
  date: Date,
  details: DailyRoutineDetail[]
): boolean => {
  return details.some(
    (detail) =>
      new Date(detail.date).toLocaleDateString() === date.toLocaleDateString()
  );
};

const isCompletedDetailItem = (date: Date, details: DailyRoutineDetail[]) => {
  return details.find(
    (detail) =>
      new Date(detail.date).toLocaleDateString() === date.toLocaleDateString()
  )?.isCompleted;
};

const updateDetail = async (
  e: ChangeEvent<HTMLInputElement>,
  routine: DailyRoutine,
  currentDate: Date
) => {
  console.log('currentDate', currentDate);

  const isCompleted = e.target.checked;

  let id;

  if (hasDetailAtSelectedDate(currentDate, routine.details)) {
    id = routine.details.find(
      (detail) =>
        new Date(detail.date).toLocaleDateString() ===
        currentDate.toLocaleDateString()
    )?.id;
  }

  let body: updateBody = {
    routine_id: routine.id,
    date: currentDate,
    isCompleted,
  };

  if (id) {
    body.id = id;
  }

  try {
    await fetch('/api/dailyRoutine/update/detail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  } catch (e) {
    console.error(e);
  } finally {
    mutate('/api/dailyRoutine/list');
  }
};

export default function RoutineItem({ routines, currentDate }: ListProps) {
  return (
    <ul>
      {routines?.map((routine) => {
        return (
          <li key={routine.id}>
            <p>{routine.description}</p>
            <p>
              기간 : {new Date(routine.startDate).toLocaleDateString()} ~{' '}
              {new Date(routine.endDate).toLocaleDateString()}
            </p>
            <>
              <p>
                <input
                  className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                  type='checkbox'
                  checked={
                    hasDetailAtSelectedDate(currentDate, routine.details)
                      ? isCompletedDetailItem(currentDate, routine.details) ??
                        false
                      : false
                  }
                  onChange={(e) => updateDetail(e, routine, currentDate)}
                />
                오늘 수행 완료 여부
              </p>
            </>
          </li>
        );
      })}
    </ul>
  );
}
