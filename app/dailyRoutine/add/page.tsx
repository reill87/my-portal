'use client';

import { useEffect, useState } from 'react';
import Button from '@/components/Button';
import { usePathname, useSearchParams } from 'next/navigation';

export default function Home() {
  const searchParams = useSearchParams();

  const addNewData = async () => {
    const data = await fetch('/api/dailyRoutine/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        startDate: '',
        endDate: '',
        description: '',
      }),
    });

    if (data.status === 200) {
      location.href = '/dailyRoutine';
    }
  };

  // const [todo, setTodo] = useState<AddTodo>({
  //   name: '',
  // });

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
              StartDate
            </label>
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
