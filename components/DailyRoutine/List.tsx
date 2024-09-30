'use client';

import { Calendar } from '@/components/ui/calendar';
import { useState } from 'react';
import Button from '../Button';
import { getFormmatedDate, swr_fetcher } from '@/lib/utils';

export default function DailyRoutineList() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const handleAddClickRoutineBtn = () => {
    window.location.href = '/dailyRoutine/add';
  };

  return (
    <>
      <Calendar
        mode='single'
        selected={date}
        onSelect={setDate}
        className='rounded-md border'
      />
      <Button name='add' onClick={handleAddClickRoutineBtn} />
    </>
  );
}
