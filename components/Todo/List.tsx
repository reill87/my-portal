'use client';

import { TodoItem } from '@/app/todo/page';
import LinkButton from '../LinkButton';
import Detail from './Detail';
import Button from '../Button';

interface TodoListProps {
  todoList: {
    todoItems: TodoItem[];
  };
}

export default function List({ todoList }: TodoListProps) {
  const handleDeleteItem = () => {};
  const handleAddItem = () => {
    window.location.href = '/todo/add';
  };

  console.log('todoList', todoList);

  return (
    <div className='w-full'>
      <ul className='list-disc'>
        {todoList.todoItems.length > 0 &&
          todoList.todoItems.map(({ category, details }, i) => {
            return (
              <li key={i}>
                <h3 className='font-bold mb-2 mt-2'>
                  <span className='mr-3'>{category}</span>

                  <LinkButton
                    className='mt-3'
                    padding='medium'
                    size='small'
                    name='추가'
                    color='pink'
                    fontColor='default'
                    href={{
                      pathname: '/todo/add',
                      query: {
                        category,
                      },
                    }}
                  />
                </h3>

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
        name='카테고리 추가'
        color='pink'
        fontColor='default'
        onClick={handleAddItem}
      />
    </div>
  );
}
