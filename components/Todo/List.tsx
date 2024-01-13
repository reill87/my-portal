'use client';

import { TodoItem } from '@/app/todo/page';
import LinkButton from '../LinkButton';
import Detail from './Detail';
import Button from '../Button';
import { useState } from 'react';
import { UUID } from 'crypto';

interface TodoListProps {
  todoList: TodoItem[];
}

export default function List({ todoList }: TodoListProps) {
  const [list, setList] = useState(todoList);

  const handleDeleteItem = async (id: number) => {
    if (confirm('Really delete ??')) {
      const data = await fetch('/api/todo/delete/detail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
        }),
      });

      if (data.status === 200) {
        alert('delete success');
        const updatedList = list.map((todo) => {
          return {
            ...todo,
            todo_detail: todo.todo_detail.filter((detail) => detail.id !== id),
          };
        });

        setList(updatedList);
      }
    }
  };
  const handleDeleteCategory = async (id: UUID) => {
    if (confirm(`Really delete ??`)) {
      const data = await fetch('/api/todo/delete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
        }),
      });

      if (data.status === 200) {
        alert('delete success');
        const updatedList = list.filter((todo) => todo.id !== id);

        setList(updatedList);
      }
    }
  };
  const handleAddItem = () => {
    window.location.href = '/todo/add';
  };

  return (
    <div className='w-full'>
      <ul className='list-disc'>
        {list.length > 0 &&
          list.map(({ name, id, todo_detail }) => {
            return (
              <li key={id}>
                <h3 className='font-bold mb-2 mt-2'>
                  <span className='mr-3'>{name}</span>

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
                        name,
                        id,
                      },
                    }}
                  />

                  <Button
                    className='mt-3 ml-3'
                    padding='medium'
                    size='small'
                    name='삭제'
                    color='pink'
                    fontColor='default'
                    onClick={() => handleDeleteCategory(id)}
                  />
                </h3>

                {todo_detail.length > 0 && (
                  <ul className='list-none bg-purple-300 text-blue-600 font-bold'>
                    {todo_detail.map((detail, i) => {
                      return (
                        <>
                          <Detail
                            key={i}
                            detail={{
                              ...detail,
                              onClick: () => handleDeleteItem(detail.id),
                            }}
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
