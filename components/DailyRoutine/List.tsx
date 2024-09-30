'use client';

import { Calendar } from '@/components/ui/calendar';
import { useEffect, useRef, useState } from 'react';
import Button from '../Button';
import { getFormmatedDate, swr_fetcher } from '@/lib/utils';
import { DailyRoutine } from './type';
import RoutineItem from './RoutineItem';
import { filter } from 'cheerio/lib/api/traversing';

interface DailyRoutineListProps {
  data: DailyRoutine[];
}

export default function DailyRoutineList({ data }: DailyRoutineListProps) {
  let [dataState, setDataState] = useState(data);
  const [date, setDate] = useState<Date | undefined>(new Date());

  const handleAddClickRoutineBtn = () => {
    window.location.href = '/dailyRoutine/add';
  };

  useEffect(() => {
    if (date) {
      setDataState(
        data.filter((item) => {
          return (
            new Date(item.startDate) <= date && new Date(item.endDate) >= date
          );
        })
      );
    }
  }, [date, data]);

  return (
    <>
      <Calendar
        mode='single'
        selected={date}
        onSelect={setDate}
        className='rounded-md border'
      />
      <RoutineItem routines={dataState} currentDate={date ?? new Date()} />
      <Button name='add' onClick={handleAddClickRoutineBtn} />
    </>
  );
}
