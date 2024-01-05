'use client';

import Button from '@/components/Button';
import Detail from '@/components/Todo/Detail';

interface TodoItem {
  category: string;
  details: TodoDetail[];
}

export interface TodoDetail {
  name: string;
  isDone?: boolean;
  onClick?: () => void;
}

export default function Todo() {
  const todoList = [
    {
      category: '북마크',
      details: [
        {
          name: '북마크 추가할때 검증 하기',
        },
        {
          name: '썸네일 못가져올 경우 처리 추가 해주기',
        },
        {
          name: '한번씩 수정 안되는 이슈 수정',
        },
      ],
    },
    {
      category: '할일목록',
      details: [
        {
          name: '추가 삭제 기능 개발',
        },
      ],
    },
  ] satisfies TodoItem[];

  const handleAddItem = () => {
    window.location.href = '/todo/add';
  };

  const handleDeleteItem = () => {};

  return (
    <div className='w-full'>
      <ul className='list-disc'>
        {todoList.map(({ category, details }, i) => {
          return (
            <li key={i}>
              <h3 className='font-bold'>{category}</h3>

              {details.length > 0 && (
                <ul className='list-none bg-purple-300 text-blue-600 font-bold'>
                  {details.map((detail, i) => {
                    return (
                      <>
                        <Detail
                          key={i}
                          {...detail}
                          onClick={handleDeleteItem}
                        />
                      </>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
      <Button
        className='mt-3'
        padding='medium'
        size='small'
        name='추가'
        color='pink'
        fontColor='default'
        onClick={handleAddItem}
      />
    </div>
  );
}
