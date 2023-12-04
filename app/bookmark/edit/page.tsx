'use client';

import { MouseEventHandler, useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { Bookmark } from '@/components/Bookmark/Bookmarks';
import Button from '@/components/Button';
export default function Home() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [bookMark, setBookMark] = useState<Bookmark>({
    id: -1,
    title: '',
    url: '',
  });

  const saveDataBase = () => {
    //TODO: supabase 연동 하기
  };

  useEffect(() => {
    setBookMark({
      id: Number(searchParams.get('id')) ?? -1,
      title: searchParams.get('title') ?? '',
      url: searchParams.get('url') ?? '',
    });
  }, [pathname, searchParams]);

  if (bookMark && bookMark?.id && bookMark.id < 0) {
    return;
  }

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
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              console.log('save', bookMark);
            }}
          ></Button>
        </form>
      </div>
    </>
  );
}
