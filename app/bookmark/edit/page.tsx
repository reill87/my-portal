'use client';

import { MouseEventHandler, useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { Bookmark } from '@/components/Bookmark/Bookmarks';
import Button from '@/components/Button';

interface EditBookMark {
  id: string;
  title: string;
  url: string;
}

export default function Home() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [bookMark, setBookMark] = useState<EditBookMark>({
    id: '',
    title: '',
    url: '',
  });

  async function handleSaveBookmark(event: MouseEvent) {
    event.preventDefault();
    const data = await fetch('/api/bookmark/edit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookMark),
    });

    console.log('edit', data);

    if (data.status === 200) {
      location.href = '/bookmark';
    } else {
      alert('수정에 실패 하였습니다.');
      location.href = '/bookmark';
    }
  }

  useEffect(() => {
    if (!searchParams) {
      return;
    }

    setBookMark({
      id: searchParams.get('id') ?? '',
      title: searchParams.get('title') ?? '',
      url: searchParams.get('url') ?? '',
    });
  }, [pathname, searchParams]);

  useEffect(() => {
    console.log('bookMark', bookMark);
  }, [bookMark]);

  return (
    <>
      <h2>Edit Bookmarks</h2>
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
            onClick={handleSaveBookmark}
          ></Button>
        </form>
      </div>
    </>
  );
}
