'use client';

import { useState } from 'react';
import { Bookmark } from '@/components/Bookmark/Bookmarks';
import Button from '@/components/Button';
import { setBookmark } from '@/app/services/BookMark';
import { v4 as uuidv4 } from 'uuid';

export default function Home() {
  const addNewData = async (bookMarkData: Bookmark) => {
    const data = await fetch('/api/bookmark/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: uuidv4(),
        title: bookMarkData.title,
        url: bookMarkData.url,
      } satisfies Bookmark),
    });

    if (data.status === 200) {
      location.href = '/bookmark';
    }
  };

  const [bookMark, setBookMark] = useState<Bookmark>({
    id: '',
    title: '',
    url: '',
  });
  return (
    <>
      {/* TODO: Edit하고 공통 되는 부분 합쳐주기 */}
      <h2>Add Bookmarks</h2>
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
                setBookMark({
                  ...bookMark,
                  title: e.target.value,
                })
              }
              value={bookMark?.title}
            />
          </div>
          <div>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='url'
            >
              url
            </label>
            <input
              className='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='url'
              type='text'
              placeholder='url'
              onChange={(e) => {
                setBookMark({
                  ...bookMark,
                  url: e.target.value,
                });
              }}
              value={bookMark?.url}
            />
          </div>
          <Button
            name={'Save'}
            className={'mt-3'}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              addNewData(bookMark);
            }}
          ></Button>
        </form>
      </div>
    </>
  );
}
