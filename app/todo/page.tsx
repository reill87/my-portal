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

const getTodoList = async (): Promise<TodoItem[]> => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + '/api/todo/getTodo',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  return response.json();
};

export default async function Todo() {
  const todoItems = await getTodoList();

  console.log(todoItems);

  return (
    <>
      <List todoList={todoItems} />
    </>
  );
}
