import { TodoItem } from '@/app/todo/page';
import { getTodo } from '@/app/services/Todo';

export async function GET(request: Request) {
  const todoItems: TodoItem[] = getTodo();
  console.log('get@@@', todoItems);

  return Response.json({ todoItems });
}
