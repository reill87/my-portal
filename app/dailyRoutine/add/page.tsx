'use client';

import Button from '@/components/Button';
import { Calendar } from '@/components/ui/calendar';
import { usePathname, useSearchParams } from 'next/navigation';
import { ChangeEvent, useEffect, useState } from 'react';
import { DateRange } from 'react-day-picker';

export default function Home() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(),
  });
  const [description, setDescription] = useState<string>();
  const handleChangeDescription = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  const addNewData = async () => {
    const data = await fetch('/api/dailyRoutine/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        startDate: dateRange?.from,
        endDate: dateRange?.to,
        description: description,
      }),
    });

    if (data.status === 200) {
      location.href = '/dailyRoutine';
    }
  };

  return (
    <>
      <h2>Add DailyRoutine</h2>
      <div className='w-full max-w-xs'>
        <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='name'
            >
              시작일 ~ 종료일
            </label>
            <Calendar
              mode='range'
              selected={dateRange}
              onSelect={setDateRange}
              className='rounded-md border'
            />
          </div>
          <div className='mb-4'>
            <label>Description</label>
            <textarea
              value={description}
              rows={4}
              className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Write your Description here...'
              onChange={handleChangeDescription}
            ></textarea>
          </div>
          <div className='mb-4'>
            선택일 : <p>{dateRange?.from?.toLocaleDateString()}</p>{' '}
            <p>{dateRange?.to?.toLocaleDateString()}</p>
          </div>
          <Button
            name={'Save'}
            className={'mt-3'}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              addNewData();
            }}
          ></Button>
        </form>
      </div>
    </>
  );
}
