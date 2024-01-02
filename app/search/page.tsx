'use client';
import { KeyboardEvent } from 'react';

export default function Home() {
  const searchGoogle = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter')
      window.open(`https://google.com/search?q=${e.currentTarget.value}`);
  };

  const searchNaver = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter')
      https: window.open(
        `https:////search.naver.com/search.naver?where=nexearch&fbm=0&ie=utf8&query=h${e.currentTarget.value}`
      );
  };

  const inputContainerClassName = 'border-spacing-2 border-2 p-3 mt-3';
  const labelClassName = 'text-sm font-bold mb-2 mr-3';

  return (
    <>
      <h2>Search</h2>
      <div className='grid-cols-2 grid gap-2'>
        <div className={inputContainerClassName}>
          <label className={`text-gray-700 ${labelClassName}`} htmlFor='google'>
            Search Google
          </label>
          <input
            id='google'
            className='text-red-300 text-center'
            type='text'
            placeholder='search google'
            onKeyDown={searchGoogle}
          />
        </div>

        <div className={`${inputContainerClassName}`}>
          <label className={`text-green-700 ${labelClassName}`} htmlFor='naver'>
            Search Naver
          </label>
          <input
            id='naver'
            className='text-green-300 text-center'
            type='text'
            placeholder='search naver'
            onKeyDown={searchNaver}
          />
        </div>
      </div>
    </>
  );
}
