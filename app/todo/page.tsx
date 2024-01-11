import Button from '@/components/Button';
import LinkButton from '@/components/LinkButton';
import Detail from '@/components/Todo/Detail';
import List from '@/components/Todo/List';

export interface TodoItem {
  category: string;
  details: TodoDetail[];
}

export interface TodoDetail {
  name: string;
  isDone?: boolean;
  onClick?: () => void;
}

interface TodoListResponse {
  todoItems: TodoItem[];
}

const getTodoList = async (): Promise<TodoListResponse> => {
  console.log('getTodoList');

  const response = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + '/api/todo/getTodo',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-cache',
    }
  );

  return response.json();
};

export default async function Todo() {
  const todoList = await getTodoList();

  console.log('todoList', todoList);

  return (
    <>
      <List todoList={todoList} />
    </>
  );
}
