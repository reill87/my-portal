'use client';

import { useEffect, useState } from 'react';
import Button from '@/components/Button';
import { useSearchParams } from 'next/navigation';

interface AddTodo {
  name: string;
}

export default function Home() {
  const searchParams = useSearchParams();

  const addNewData = async (todo: AddTodo) => {
    const hasCategory = searchParams?.has('name');
    const category = searchParams?.get('name');
    const id = searchParams?.get('id');

    const data = await fetch('/api/todo/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: todo.name,
        hasCategory,
        category,
        id,
      }),
    });

    if (data.status === 200) {
      location.href = '/todo';
    }
  };

  const [todo, setTodo] = useState<AddTodo>({
    name: '',
  });

  return (
    <>
      {/* TODO: Edit하고 공통 되는 부분 합쳐주기 */}
      <h2>Add Todo</h2>
      <div className='w-full max-w-xs'>
        <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='name'
            >
              Name
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='name'
              type='text'
              placeholder='Name'
              onChange={(e) =>
                setTodo({
                  ...todo,
                  name: e.target.value,
                })
              }
              value={todo?.name}
            />
          </div>
          <Button
            name={'Save'}
            className={'mt-3'}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              addNewData(todo);
            }}
          ></Button>
        </form>
      </div>
    </>
  );
}
